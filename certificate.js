function certificate() {
    document.getElementById("name")
}
document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    document.getElementById('name').addEventListener('change', function (eventdata) {
        let nameOutput = document.getElementById('nameOutput');
        nameOutput.innerText = formData.name;
        console.log()
    })

    document.getElementById('type').addEventListener('change', function (eventdata) {
        let nameOutput = document.getElementById('nameOutput');
        let info = document.getElementById('info');
        info.innerText = formData.type;
        console.log()
    })

    

    let nameOutput = document.getElementById('nameOutput');
    let info = document.getElementById('info');
    nameOutput.innerText = formData.name;
    info.innerText = formData.type;
    // Log readiness to console
    console.log("Ready");

    let certificate = document.getElementById(certificate);
    certificate.classlist.add.add('number1');

    changeCert(value) {
        certificate.classlist = ""; // clear classes on each function call
        switch (value) {
            case "A":
                certificate.classlist.add(A);
                break;
            case "B":
                certificate.classlist.add(B);
                break;
            case "Mid":
                certificate.classlist.add(Mid);
                break;
            case "D":
                certificate.classlist.add(number4);
                break;

        }
    }










})