document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('bookingForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    let errors = [];
    const name = form.elements['patientName'].value.trim();
    const email = form.elements['email'].value.trim();
    const phone = form.elements['phone'].value.trim();
    const service = form.elements['service'].value;
    const date = form.elements['date'].value;
    const time = form.elements['time'].value;
    if(name.length < 2) errors.push('Please enter a valid name.');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRe.test(email)) errors.push('Please enter a valid email address.');
    const phoneRe = /^\+?[0-9\s\-]{7,15}$/;
    if(!phoneRe.test(phone)) errors.push('Please enter a valid phone number.');
    if(service === '') errors.push('Please select a service.');
    if(date === '') errors.push('Please select a preferred date.');
    if(time === '') errors.push('Please select a preferred time.');
    const errsEl = document.getElementById('formErrors');
    if(errors.length>0){
      e.preventDefault();
      errsEl.innerHTML = '<strong>Please fix the following:</strong><ul><li>'+errors.join('</li><li>')+'</li></ul>';
      errsEl.style.display = 'block';
      errsEl.scrollIntoView({behavior:'smooth'});
    } else {
      e.preventDefault();
      alert('Booking submitted — for assignment demo we capture data locally. You would now send this to the server.');
      form.reset();
    }
  });
});