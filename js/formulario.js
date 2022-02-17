const formulario = document.querySelector("#myForm");
const inputNombre = document.querySelector("#inputNombre");
const inputApellidos = document.querySelector("#inputApellidos");
const inputEmail = document.querySelector("#inputEmail");
const textAreaMensaje = document.querySelector("#textAreaMensaje");
const checkBoxTerminos = document.querySelector("#checkBoxTerminos");
const botonEnviar = document.querySelector("#botonEnviar");
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');


inputNombre.addEventListener('blur',() => {comprobarNombre()});
inputApellidos.addEventListener('blur',() => {comprobarApellidos()});
inputEmail.addEventListener('blur', () =>{comprobarInputEmail()});
textAreaMensaje.addEventListener('blur',() =>{comprobarMensaje()});


function comprobarNombre(){
    let regex = new RegExp(/\d/);
    if(inputNombre.value.length === 0){
        inputNombre.setAttribute("class","form-control is-invalid");
        setTimeout(() => {
            inputNombre.setAttribute("class","form-control");
        }, 3000);
    }else if(regex.test(inputNombre.value)){
        inputNombre.setAttribute("class","form-control is-invalid");
        setTimeout(() => {
            inputNombre.setAttribute("class","form-control");
        }, 3000);
    }else {
        inputNombre.setAttribute("class","form-control is-valid");
        nombreCorrecto = true;
    }
}

function comprobarApellidos(){
    let regex = new RegExp(/\d/);
    if(inputApellidos.value.length === 0){
        inputApellidos.setAttribute("class","form-control is-invalid");
        setTimeout(() => {
            inputApellidos.setAttribute("class","form-control");
        }, 3000);
    }else if(regex.test(inputApellidos.value)){
        inputApellidos.setAttribute("class","form-control is-invalid");
        setTimeout(() => {
            inputApellidos.setAttribute("class","form-control");
        }, 3000);
    }else {
        inputApellidos.setAttribute("class","form-control is-valid");
        apellidosCorrecto = true;
    }
}

function comprobarInputEmail(){
    let regex = new RegExp(/.+["@"].+[/\./]/);
    if(inputEmail.value.length === 0){
        inputEmail.setAttribute("class","form-control is-invalid");
        setTimeout(() => {
            inputEmail.setAttribute("class","form-control");
        }, 3000);
    }else if(!regex.test(inputEmail.value)){
        inputEmail.setAttribute("class","form-control is-invalid");
        setTimeout(() => {
            inputEmail.setAttribute("class","form-control");
        }, 3000);
    }else{
        inputEmail.setAttribute("class","form-control is-valid");
        emailCorrecto = true;
    }
}

function comprobarMensaje(){
    let mensaje = textAreaMensaje.value.split(' ').join('');
    if(textAreaMensaje.value.length === 0){
        textAreaMensaje.setAttribute("class","form-control is-invalid");
        setTimeout(() => {
            textAreaMensaje.setAttribute("class","form-control");
        }, 3000);
    }else if(mensaje.length < 5){
        textAreaMensaje.setAttribute("class","form-control is-invalid");
        setTimeout(() => {
            textAreaMensaje.setAttribute("class","form-control");
        }, 3000);
    }else{
        textAreaMensaje.setAttribute("class","form-control is-valid");
        mensajeCorrecto = true;
    }
}


function comprobarCheckBoxTerminos(){
    if(!checkBoxTerminos.checked){
        checkBoxTerminos.setAttribute("class","form-check-input is-invalid");
        setTimeout(() => {
            checkBoxTerminos.setAttribute("class","form-check-input");
        }, 2000);
    }else{
        checkBoxTerminos.setAttribute("class","form-check-input is-valid");
        checkboxMarcado = true;
    }
}


function generarSpinner(){
    let span = document.createElement("SPAN");
    span.setAttribute("class","spinner-grow spinner-grow-sm");
    span.setAttribute("role","status");
    span.setAttribute("aria-hidden","true");
    return span;
}


function mostrarAlerta(message, type) {
  let wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="mt-3 alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  alertPlaceholder.appendChild(wrapper);
}

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    comprobarNombre();
    comprobarApellidos();
    comprobarInputEmail();
    comprobarMensaje();
    comprobarCheckBoxTerminos();

   if(inputNombre.className === "form-control is-valid" && inputApellidos.className === "form-control is-valid" && inputEmail.className === "form-control is-valid" && textAreaMensaje.className === "form-control is-valid" && checkBoxTerminos.className === "form-check-input is-valid"){
    botonEnviar.setAttribute("disabled","");
    botonEnviar.setAttribute("class","btn btn-secondary")
    botonEnviar.textContent = "cargando...";
    let span = generarSpinner();
    mostrarAlerta("Formulario Procesado!","dark");
    botonEnviar.insertAdjacentElement("afterbegin",span);
    setTimeout(() => {
        formulario.submit();
    }, 5000);
   }
});