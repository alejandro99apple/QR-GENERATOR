document.getElementById('generate-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const qrCodeDiv = document.getElementById('qr-code');

    // Limpiar el contenido previo
    qrCodeDiv.innerHTML = '';

    if (textInput) {
        // Generar el código QR
        new QRCode(qrCodeDiv, {
            text: textInput,
            width: 128,
            height: 128
        });
    } else {
        alert('Por favor, introduce un texto para generar el código QR.');
    }
});