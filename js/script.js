// Ini Javascript

function replaceName() {
    let name = prompt("What's your name?", "");
    document.getElementById("name").innerHTML = name
}

document.getElementById('tombol')
tombol.addEventListener("click", function () {
    replaceName()
})

document.getElementById("messageMeForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    let fullname = document.getElementById('fullname').value;
    let nickname = document.getElementById('nickname').value;
    let email = document.getElementById('email').value;
    let whatsapp = document.getElementById('whatsapp').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let birthdate = document.getElementById('birthdate').value;

    // Tampilkan data di console atau lakukan proses lain sesuai kebutuhan
    console.log(`Nama Lengkap: ${fullname}`);
    console.log(`Nama Panggilan: ${nickname}`);
    console.log(`Email: ${email}`);
    console.log(`Nomor WhatsApp: ${whatsapp}`);
    console.log(`Jenis Kelamin: ${gender}`);
    console.log(`Tanggal Lahir: ${birthdate}`);
    console.log(`Pesan: ${messageMeForm}`);

    alert('Form berhasil dikirim!'); // Notifikasi setelah pengiriman
});

 // Display the submitted data
    let output = document.getElementById("result").innerHTML = `
        <h3>Data yang Dikirimkan</h3>
        <p><strong>Nama Lengkap:</strong> ${fullname}</p>
        <p><strong>Nama Panggilan:</strong> ${nickname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nomor WhatsApp</strong> ${whatsapp}</p>
        <p><strong>Jenis Kelamin:</strong> ${male} or ${female}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Pesan:</strong> ${messageMeForm}</p>
    `;
