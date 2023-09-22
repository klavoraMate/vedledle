import jwt_decode from 'jwt-decode'

export const email = (): String | null => {
    try {
        const token = localStorage.getItem('token');
        return token ? (jwt_decode(token) as { sub: string }).sub : null;
    } catch (error) {
        return null;
    }
}

export const role = (): String | null => {
    try {
        const token = localStorage.getItem('token');
        return token ? (jwt_decode(token) as { role: string }).role : null;
    } catch (error) {
        return null;
    }

}

export const token = (): String | null => {
    try {
        return localStorage.getItem('jwt');
    } catch (error) {
        return null;
    }

}
