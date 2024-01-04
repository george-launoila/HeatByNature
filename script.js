


window.onload = function () {
  const btn = document.getElementById('button');
  document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
 
    btn.value = 'Sending...';
    
    const serviceID = 'default_service';
    const templateID = 'template_dl9aa2l';
    
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
      document.getElementById("form").reset();
       btn.value = 'Send Email';
       alert('Sent!');
      
     }, (err) => {
       btn.value = 'Send Email';
       alert(JSON.stringify(err));
       
     });
 });
};

