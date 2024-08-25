export async function logJSONData() {
    // const response = await fetch("https://api.thecatapi.com/v1/images/search"); 
    const response = await fetch("https://api.thecatapi.com/v1/breeds"); 
 
     const jsonData = await response.json();
    //console.log(jsonData);
    return jsonData;
}

export async function logJSONDataGallary(n) {
    console.log(`fsfsfsfsfsff ${n}`);
    // const response = await fetch("https://api.thecatapi.com/v1/images/search"); 
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${n}`,{

        method: 'GET',

        headers : {
        'x-api-key' : 'live_jZ1q3dhDbJzKvqNzrd2K8XKkJjSCFNSSrsuJbJDvQAiEBSyRfKJLrouUJdYqonpF'}
    }); 
 
     const jsonData = await response.json();
    //console.log(jsonData);
    return jsonData;
}