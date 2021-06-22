const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const birthdateInput = document.getElementById('birthdate');
const maleInput = document.getElementById('male');
const femaleInput = document.getElementById('female');
const noneInput = document.getElementById('none');
const submitButton = document.getElementById('submit-button');

function submit(e) {
    e.preventDefault();
    if(!nameInput.value) return alert('Você deve preencher o nome')
    if(!emailInput.value) return alert('Você deve preencher o email')
    if(!passwordInput.value) return alert('Você deve preencher a senha')
    if(!birthdateInput.value) return alert('Você deve preencher a data de nascimento')
    if(!maleInput.checked && !femaleInput.checked && !noneInput.checked) return alert('Você deve preencher o gênero')
    postData();
};

submitButton.addEventListener('click', submit)

function postData(){
	var hashPassword = $.MD5(passwordInput.value);
    var gender = 
        maleInput.checked 
            ? maleInput.value 
            : femaleInput.checked
                ? femaleInput.value
                : noneInput.value

	$.ajax({ 
		type:"POST", 
		dataType:"json", 
		url:"php/postUser.php",
		data: {
            ch_name: nameInput.value, 
            ch_email: emailInput.value,
            ch_password: hashPassword,
            dt_birthdate: birthdateInput.value,
            ch_gender: gender,
        },
        success: function(data){
            if(data) window.location.href = 'authenticated.html'
            else alert('Ocorreu algum erro no seu cadastro')
        } 
	})
}