const liEl = document.querySelector('li')
const ulEl = document.querySelector('ul')
function generateEmail() {
    for (let i = 0; i < 10; i++) {
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")

            .then(response => response.json())
            .then(email => {
                const li = document.createElement('li');
                li.innerText = email.response
                console.log(email);
                ulEl.appendChild(li)

            })
            .catch(error => {
                console.error(error);
            })
    }
}

generateEmail()

console.log()