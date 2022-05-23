const url = 'http://localhost:5000/list'

export function ALL_GET(){

    return {
        url: url,
        options: {
            method: 'GET'
        }
    }
}

export function ITEM_POST(body){
    return {
        url: url,
        options:{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}