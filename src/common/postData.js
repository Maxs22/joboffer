export default async function postData (endpoint, body, onErrorDo, token) {
    
    let data = undefined;

    const tokenToUse = token ? token : '';
    
    data = await fetch (process.env.REACT_APP_API_BASE_URL +endpoint, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ' Bearer ' + tokenToUse
        },
        body:body
    })
    .catch(function(){
        onErrorDo();
        return data;
    });

    return data;
}