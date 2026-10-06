async function apicall(){
    let res= await fetch('https://meowfacts.herokuapp.com/')
    let final=await res.json();
    document.getElementById('box').innerText=final.data[0];
    console.log(final.data[0]);

}