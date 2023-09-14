import jwt_decode from 'jwt-decode'

export const email = (): String | null => {
    try {
        const token = localStorage.getItem('token');
        const decodedJWT = jwt_decode(token);
        return decodedJWT.sub;
    } catch (error) {
        return null;
    }
}

export const role = (): String | null => {
    try {
        const token = localStorage.getItem('token');
        const decodedJWT = jwt_decode(token);
        return decodedJWT.role;
    } catch (error) {
        return null;
    }

}

export const token = (): String | null => {
    try {
        return localStorage.getItem('token');
    } catch (error) {
        return null;
    }

}
