const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit', function(event) {
  
    event.preventDefault();
  
    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');
  
    if (campoNome.value.length < 3) {
      txtNome.innerHTML = 'O Nome deve ter no mínimo 3 caracteres.';
      txtNome.style.fontFamily = '"Courier New", Courier, monospace';
      txtNome.style.fontSize = '16px';
      campoNome.focus();
      return;
    }else{
      txtNome.innerHTML = '';
    }
  
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
  
    if (!campoEmail.value.match(emailRegex)) {
      txtEmail.innerHTML = 'Digite um E-mail válido.';
      txtEmail.style.fontFamily = '"Courier New", Courier, monospace';
      txtEmail.style.fontSize = '16px';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }
  
    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');
  
    if (campoSubject.value.length < 5) {
      txtSubject.innerHTML = 'O Assunto deve ter no mínimo 5 caracteres.';
      txtSubject.style.fontFamily = '"Courier New", Courier, monospace';
      txtSubject.style.fontSize = '16px';
      campoSubject.focus();
      return;
    }else{
      txtSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');
    
    window.alert("Obrigada. Formulário Enviado com Sucesso!");
    
    campoNome.value = '';
    campoEmail.value = '';
    campoSubject.value = '';
    campoMessage.value = '';
  });