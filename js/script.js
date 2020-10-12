const xhr = new XMLHttpRequest()
const url = 'https://jsonplaceholder.typicode.com/users'

xhr.open('GET', url)
xhr.send()
xhr.onload = function () {
   
    if (xhr.status == 200) {
        let obj = JSON.parse(this.responseText)
        Myfunction(obj)
    }
}
function Myfunction(object){
    for(i=0;i<object.length;i++){
        console.log(object[i]);
    }
}