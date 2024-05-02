// новый тег <script> и его расположение
function scriptInclude() {
    const js = document.createElement("script");
    js.type = "text/javascript";
    js.src = "../script.js";
    document.body.appendChild(js);
}

// добавление модальных окон с данными из локального хранилища
document.getElementById('regButtonModal').addEventListener('click', () => {
    let modalAppSection = document.querySelector('.modalAppSection')
    let modalAppContent_article = document.querySelector('.modalAppContent')
    if (modalAppSection.style.display === "block") {
        modalAppSection.style.display = "none"
        modalAppContent_article.style.display = "none"
        document.body.style.overflow = "unset"
    } else {
        modalAppSection.style.display = "block"
        modalAppContent_article.style.display = "flex"
        document.body.style.overflow = "hidden"
    }
})
// скрытие блока
document.getElementById("selectorGroup").addEventListener("click", () => {
    if(document.getElementById("optinBase").style.display = "block") {
        document.getElementById("optinBase").style.display = "none"
    } 
})

// пустой массив для дальнейшей работы
let users = []

// запись данных из хранилища в массив
if (localStorage.getItem("users")) {users = JSON.parse(localStorage.getItem("users"))}


document.forms.regForm.submit.addEventListener("click", (event) => {
    // предотвращение стандартного действия браузера 
    event.preventDefault()
    // Получение значений из инпутов
    let login = document.forms.regForm.login
    let password = document.forms.regForm.password
    let group = document.forms.regForm.group
    let email = document.forms.regForm.email
    let numberPhone = document.forms.regForm.numberPhone
    // Создание пустых переменных
    let errText = null
    let error = null

    // Функция проверки длины и заполненности полей 
    // При несоответсвии выводит ошибку через errText
    // В ином случае error = folse  
    function err() {
        if (login.value.length === 0) {
            return errText = `Ошибка: поле "${login.placeholder}" не заполнено`
        } else if (login.value.length < 4) {
            return errText = `Ошибка: поле "${login.placeholder}" меньше 4 символов`
        } else if (password.value.length === 0) {
            return errText = `Ошибка: поле "${password.placeholder}" не заполнено`
        } else if (password.value.length < 6) {
            return errText = `Ошибка: поле "${password.placeholder}" меньше 6 символов`
        } else if (email.value.length === 0) {
            return errText = `Ошибка: поле "${email.placeholder}" не заполнено`
        } else if (email.value.length < 8) {
            return errText = `Ошибка: поле "${email.placeholder}" меньше 8 символов`
        } else if (numberPhone.value.length === 0) {
            return errText = `Ошибка: поле "${numberPhone.placeholder}" не заполнено`
        } else if (numberPhone.value.length < 10) {
            return errText = `Ошибка: поле "${numberPhone.placeholder}" меньше 10 символов`
        } else {error = false}
    }
    err()

    // Проверка длины значений всех полей(инпутов) 
    if (login.value.length < 4 || password.value.length < 6 || group.value.length < 4 || email.value.length < 8 || numberPhone.value.length < 10) {
        // вставка текста в элемент
        document.getElementById('loginErrorEmpty').textContent = errText
        if (!document.getElementById('loginErrorEmpty').hasAttribute("open")) {
            // если мало и нет атрибута опен
            return document.getElementById('loginErrorEmpty').toggleAttribute("open")
        }
    } else {
        // если подходит
        document.getElementById('loginErrorEmpty').removeAttribute("open")
    }

    // вслучае коректной работы всего выше   
    if (error === false) {
        // добавление в массив 
        users.push({
            login: login.value,
            password: password.value,
            group: group.value,
            email: email.value,
            phone: numberPhone.value
        })

        // сохранение в хранилище
        localStorage.setItem("users", JSON.stringify(users))

        // по аналогии с ошибкочной сделана удачная регистрация
        errText = "Регистрация произведена успешно"
        document.getElementById('loginErrorEmpty').style.background = "green"
        document.getElementById('loginErrorEmpty').textContent = errText
        document.getElementById('loginErrorEmpty').toggleAttribute("open")

        // поле отображения успешной регистрации закрывается через время
        setTimeout(() => {
            document.getElementById('loginErrorEmpty').removeAttribute("open"); 
            document.getElementById('loginErrorEmpty').style.background = "darkred"
        }, 2000)
    } else {
        // иная ситуация завершения кода
        return
    }
})

// вызов функции после загрузки страницы и вызывается функция 
document.addEventListener('DOMContentLoaded', () => {
    scriptInclude()
    // скрытие блока 
    document.getElementById('authForm').style.display = "none"
    // проверка элемента в хранилище
    if (JSON.parse(localStorage.getItem("auth")) === true) {
        document.getElementById('authForm').style.display = "none"
        document.getElementById('regForm').style.display = 'none'
        document.getElementById('regAccordeonH1').textContent = "Личный кабинет"
        document.getElementById('authButton').textContent = ''
    }
})

document.getElementById('authButton').addEventListener('click', (event) => {
    // отмена отправки формы
    event.preventDefault()
    // при скрытии regForm такие измения
    if (document.getElementById('regForm').style.display === 'none') {
        document.getElementById('authButton').textContent = 'Уже есть аккаунт?'
        document.getElementById('regForm').style.display = 'flex'
        document.getElementById('regAccordeonH1').textContent = "Регистрация"
        document.getElementById('authForm').style.display = "none"
    } else {
    // Иначе такие
        document.getElementById('authButton').textContent = 'Регистрация'
        document.getElementById('regForm').style.display = 'none'
        document.getElementById('regAccordeonH1').textContent = "Авторизация"
        document.getElementById('authForm').style.display = "flex"
    }
})

// 3
document.forms.authForm.submit.addEventListener('click', (event) => {
    // отмена отпраки формы
    event.preventDefault()
    // достаем значения users из локального хранилища
    let users = JSON.parse(localStorage.getItem("users"))
    // получение значений
    let loginAuth = document.forms.authForm.login
    let passwordAuth = document.forms.authForm.password
    let account = null
    // переборка значений для проверки наличия пользователя с такими данными
    users.forEach((el) => {
        if (el.login === loginAuth.value) {account = el}
    })
    // если значения логина одинаковые происходит проверка пароля 
    if (loginAuth.value === account.login && passwordAuth.value === account.password) {
        // если успешно тто вывод уведомления 
        alert('Вход выполнен успешно')
        // установка значений в хранилище
        localStorage.setItem('auth', true)
        localStorage.setItem('currentUser', JSON.stringify(account))
        // скрытие элементов
        document.getElementById('authForm').style.display = "none"
        document.getElementById('regForm').style.display = 'none'
        document.getElementById('regAccordeonH1').textContent = "Личный кабинет"
        document.getElementById('authButton').textContent = ''
    } else {
        alert('Не правильные данные')
    }
})