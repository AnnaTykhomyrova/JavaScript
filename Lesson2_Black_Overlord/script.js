var userName = prompt('Кто пришел?', '');

if (userName == 'Админ') {

    var password = prompt('Пароль?', '');

    if (password == 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    } else if (password == null) {
        alert('Вход отменён');
    } else {
        alert( 'Пароль неверен' );
    }

} else if (userName == null) {
    alert('Вход отменён');

} else {

    alert( 'Я Вас не знаю' );

}

