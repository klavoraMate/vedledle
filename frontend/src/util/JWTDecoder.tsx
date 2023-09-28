import jwt_decode from 'jwt-decode'

export const getEmail = (): String | null => {
    try {
        const token = localStorage.getItem('jwt');
        return token ? (jwt_decode(token) as { email: string }).email: null;
    } catch (error) {
        return null;
    }
}
export const getName = (): String | null => {
    try {
        const token = localStorage.getItem('jwt');
        return token ? (jwt_decode(token) as { username: string }).username: null;
    } catch (error) {
        return null;
    }
}
export const getRole = (): String | null => {
    try {
        const token = localStorage.getItem('jwt');
        return token ? (jwt_decode(token) as { role: string }).role : null;
    } catch (error) {
        return null;
    }

}

export const getJWT = (): String | null => {
    try {
        return localStorage.getItem('jwt');
    } catch (error) {
        return null;
    }

}
