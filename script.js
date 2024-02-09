document.getElementById('submitButton').addEventListener('click', function() {
    var accessCode = document.getElementById('accessCode').value;
    if (validateCode(accessCode)) {
        // Redireciona primeiro para o link do Bitly
        window.location.href = 'https://bit.ly/acervoaccess';

        // Após um curto atraso, redireciona para o Telegram
        setTimeout(function() {
            window.location.href = 'https://t.me/+3rB7d9W7QyU1ZjEx';
        }, 3000); // Ajuste o tempo de atraso conforme necessário
    } else {
        alert('Código inválido. Por favor, tente novamente.');
    }
});

function validateCode(code) {
    const validCode = "T156dxM!O"; // Substitua por seu código válido
    return code === validCode;
}
