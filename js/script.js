const xhr = new XMLHttpRequest()
const url = 'https://jsonplaceholder.typicode.com/users'

function User() {
    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function () {

        if (xhr.status == 200) {
            let response = JSON.parse(xhr.response)
            Myfunction(response)
        }
    }
}
User()
function Myfunction(response) {
    
    const CardTitle = document.querySelectorAll('.card-title')
    const CardSubtitle = document.querySelectorAll('.card-subtitle') 
    const CardBox = document.querySelectorAll('.card-text')
    
    for (i = 0; i < response.length; i++) {
        console.log(response[i]);
        let card = response[i]
        CardTitle[i].innerHTML = card.name
        CardSubtitle[i].innerHTML = card.username
        CardBox[i].innerHTML = card.email

    }
}