const url = 'http://localhost:5000/list'

export function ALL_GET(){
    /* 
    const response = await fetch(url)
    const json = await response.json()
    return json */

    return {
        url: url,
        options: {
            method: 'GET'
        }
    }
}