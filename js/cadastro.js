const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const birthdateInput = document.getElementById('birthdate');
const maleInput = document.getElementById('male');
const femaleInput = document.getElementById('female');
const noneInput = document.getElementById('none');
const submitButton = document.getElementById('submit-button');

console.log(submitButton)

function submit(e) {
    e.preventDefault();
    if(!nameInput.value) return alert('Você deve preencher o nome')
    if(!emailInput.value) return alert('Você deve preencher o email')
    if(!passwordInput.value) return alert('Você deve preencher a senha')
    if(!birthdateInput.value) return alert('Você deve preencher a data de nascimento')
    if(!maleInput.checked && !femaleInput.checked && !noneInput.checked) return alert('Você deve preencher o gênero')
    window.location.href = 'authenticated.html'
};

submitButton.addEventListener('click', submit)
