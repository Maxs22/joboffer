export default async function getData (endpoint, onErrorDo, token) {
    
    let data = undefined;

    const tokenToUse = token ? token : '';
    
    data = await fetch (process.env.REACT_APP_API_BASE_URL +endpoint, {
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ' Bearer ' + tokenToUse
        }
    })
    .catch(function(){
        onErrorDo();
        return data;
    });

    return data;
}
