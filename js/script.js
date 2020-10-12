const xhr = new XMLHttpRequest()
const url = 'https://jsonplaceholder.typicode.com/users'

function User(){
    xhr.open('GET', url)
xhr.send()
xhr.onload = function () {
   
    if (xhr.status == 200) {
        let obj = JSON.parse(this.responseText)
        Myfunction(obj)
    }
}
}
User()
function Myfunction(obj){
    for(i=0;i<obj.length;i++){
        console.log(obj[i]);
    }
    
    const CardTite = document.querySelector('.card-title')
    CardTite.innerHTML = obj[1].name
    const CardSubtitle = document.querySelector('.card-subtitle')
    
    CardSubtitle.innerHTML = obj[2].username
}