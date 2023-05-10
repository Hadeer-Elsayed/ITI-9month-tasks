async function getData(url) {
    try {
        const response = await fetch(url);
        let data = await response.json();
        if(!response.ok) 
            throw new Error(`${data.message}, ${response.status}`);
        console.log(data);
        return data;   
    }
    catch(error) {
        throw error.message;
    }
}

let result = getData("https://jsonplaceholder.typicode.com/users");
console.log(result);