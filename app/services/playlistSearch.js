import { MAIN_URL } from '../../config';

export const getPlaylistResult = async () => {
    try {
        const response = await fetch(`${MAIN_URL}/search?term=Michael+jackson`, {
            method: 'GET'
        })
        if (response.status === 200) {
            let result = await response.json();
            return result;
        }
        return []
    } catch (error) {
        console.log(error)
    }
}