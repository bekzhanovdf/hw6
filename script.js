function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    let valid = true;

    if (name.value.trim() === "") {
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (!email.value.includes('@') || !email.value.includes('.')) {
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (password.value.length < 8) {
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (valid) {
        alert('Форма успешно отправлена!');
    }
}
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Введите оба числа';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Деление на ноль';
            break;
    }

    resultElement.textContent = `Результат: ${result}`;
}




function showImage(img) {
    const lightbox = document.getElementById('lightbox');
    const largeImage = document.getElementById('largeImage');
    largeImage.src = img.src;  // Устанавливаем URL изображения
    lightbox.style.display = 'flex';  // Показываем лайтбокс
}

function hideImage() {
    document.getElementById('lightbox').style.display = 'none';  // Скрываем лайтбокс
}
