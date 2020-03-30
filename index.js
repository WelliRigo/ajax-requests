let name = document.querySelector("#name");
let job = document.querySelector("#job");
let form = document.querySelector("#form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let dados = {
        name: name.value,
        job: job.value
    }

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados)
    })
    .then(function(response){
        //converte o response para json
        return response.json();
    })
    .then(function(response){
        alert("Cadastrado com sucesso!");
    })
});