// Ini Javascript

function replaceName() {
    let name = prompt("What's your name?", "");
    document.getElementById("name").innerHTML = name
}

document.getElementById('tombol')
tombol.addEventListener("click", function () {
    replaceName()
})

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const birthDate = document.getElementById('birthDate').value;
    const sexuality = document.querySelector('input[name="sexuality"]:checked').value;
    const message = document.getElementById('message').value;

    document.getElementById('outputnamalengkap').textContent = name;
    document.getElementById('outputnamapanggilan').textContent = name;
    document.getElementById('outputBirthDate').textContent = birthDate;
    document.getElementById('outputSexuality').textContent = sexual;
    document.getElementById('outputMessage').textContent = message;

    const currentTime = new Date().toString();
    document.getElementById('currentTime').textContent = `Current time: ${currentTime}`;

    document.getElementById('outputSection').hidden = false;
});