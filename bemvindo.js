const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const alert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);
}

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    let conc = formGroupExampleInput.value
    alert(''.concat('Seja bem-vindo', ', ', conc));
  })
}




//const a = document.getElementById('formGroupExampleInput').value;
//const b = document.getElementById('liveAlertBtn').value;
//liveAlertBtn.addEventListener('click', (event) =>{
  //let con = formGroupExampleInput.value
  //alert('Seja bem-vindo' + con)
//})



