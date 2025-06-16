function generateEmail() {
    for (let i = 0; i < 10; i++) {
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")

            .then(response => response.json())
            .then(email => {
                console.log(email);
            })
            .catch(error => {
                console.error(error);
            })
    }
}

generateEmail()