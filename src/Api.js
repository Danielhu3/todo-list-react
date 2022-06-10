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

export function ITEM_PUT(body, id){
    return {
        url: `${url}/${id}`,
        options:{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}

export function DONE_PUT(body, id){
    return {
        url: `${url}/${id}`,
        options:{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}


export function ITEM_DELETE(id){
    return {
        url: `${url}/${id}`,
        options:{
            method: 'DELETE',        
        }
    }
}




