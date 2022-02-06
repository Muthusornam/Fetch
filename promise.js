const promise1 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
        .then(data =>console.log(data));

})
const promise2 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
        .then(data =>console.log(data));

})
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch(err => console.error(err))

document.getElementById("dog").addEventListener("click", getImage)
function getImage(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            
           let img= document.getElementById("output");
           img.setAttribute("src", data.message);
             //document.getElementById("output").innerHTML=data;
             console.log(data);


            })
}
           
            
           
           
            
        
        