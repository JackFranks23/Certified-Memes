// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }
  
    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        nameOutput.innerText = eventData.target.value;
    });
  
    document.getElementById('donor').addEventListener('change', function (eventData) {
        let donorOutput = document.getElementById('donorOutput');
        donorOutput.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        let info = document.getElementById('info');
        info.innerText = eventData.target.value;
        changeCert(eventData.target.value);
    });
  
    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);
  
        //update certificate information when form is submitted:
        let nameOutput = document.getElementById('nameOutput');
        let info = document.getElementById('info');
        let donorOutput = document.getElementById('donorOutput');
        nameOutput.innerText = formData.name;
        info.innerText = formData.type;
        donorOutput.innerText = formData.donor;
  
      });

      let theDate = new Date().toLocaleDateString('en-us', {day:"2-digit", month:"2-digit",year:"2-digit"})
      let today = document.getElementById('today');
      today.innerText = theDate
    // Log readiness to console
    console.log("Ready");
  
    // let info = document.getElementById('info');
    // info.classList.add('test');
    
    
    
    // certificate.classList.add('number1');
    
    function changeCert(value){
        let certificate = document.getElementById('certificate');
        certificate.classList = ""; // clear classes on each function call
        switch(value){
            case 'A':
                certificate.classList.add('A');
            break;
            case 'B':
                certificate.classList.add('B');
            break;
            case 'Mid':
                certificate.classList.add('Mid');
            break;
        }
    }
  });
  
  /* Additional things to be aware of */
  
  
  
  
  
  
  function processForm(form){
  
  }