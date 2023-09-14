import {useState, useEffect, SetStateAction} from 'react';

export default function useFetch(url: string,
                                 method:string = 'GET',
                                 headers: { [key: string]: string } = {'Content-Type':'application/json'},
                                 body: { [key: string]: string } = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {

                const options : RequestInit = {
                    method: method,
                    headers: headers,
                    body: JSON.stringify(body)
                };


                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const responseData = await response.json();
                setData(responseData);
                setLoading(false);
            } catch (err:SetStateAction<any>) {
                setError(err);
                setLoading(false);
            }
        }

        fetchData();
    }, [url, method, headers, body]);

    return {data, error, loading};
}
