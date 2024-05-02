let arr = new Array();
arr = [
    one = {
        title: 'Звуковые пластинки',
        paragraph: 'Опция даанной покупки временно преостановленна'
    },
    two = {
        title: 'VHC-Кассеты',
        paragraph: 'Опция даанной покупки временно преостановленна'
    },
    three = {
        title: 'Все биты',
        paragraph: 'Биты разных жанров можно приобрести у пяти наших производителей',
        spanOne: 'NO Beats',
        linkOne: 'https://vk.com/no_beatz',
        spanTwo: 'KANJO',
        linkTwo: 'https://vk.com/kanjoprod',
        spanThree: 'Je Sai',
        linkThree: 'https://vk.com/jesaibeat',
        spanFour: 'SYFER',
        linkFour: 'https://vk.com/syferprod',
        spanFive: 'kenezis',
        linkFive: 'https://vk.com/kenezis27'
    },
    four = {
        title: 'Сведение или Мастеринг',
        paragraph: 'Сведение или Мастеринг можно заказать у одного из трех наших специалистов',
        spanOne: 'Юра Фауст',
        linkOne: 'https://vk.com/yurafaustgroup',
        spanTwo: 'UnknMusic', 
        linkTwo: 'https://vk.com/unknmusiclabel',
        spanThree: 'PRINZ CORD',
        linkThree: 'https://vk.com/prinzcord'
    },
    five = {
        title: 'Дистрибуция трека',
        paragraph: 'За дистрибуцией трека вы можете обратиться к лейблу',
        spanOne: 'FUJIPROD',
        linkOne: 'https://vk.com/fujiprod'
    },
    six = {
        title: 'Дистрибуция альбома',
        paragraph: 'За дистрибуцией альбома вы можете обратиться к данному лейблу',
        spanOne: 'DistrCompFl',
        linkOne: 'https://vk.com/distributiontracks'
    },
    seven = {
        title: 'Студия звукозаписи в',
        paragraph: 'Данный вид товара рекламирует чужие студии звукозаписи в разных городах, наша платформа не поддерживает покупку данного товара',
        paragraphTwo:  'находится по адресу',
    },
    eight = {
        nameOne: 'SoundRise Records',
        cityOne: 'Москва',
        addressOne: 'малый кисельный переулок 7/10',
        nameOne: '88 Records',
        cityTwo: 'Санкт-Петербург',
        addressTwo: 'кадетская линия 5 корп 2д 88',
        nameOne: 'Город. А',
        cityThree: 'Сочи',
        addressThree: 'донская улица 3',
        nameOne: 'Showtime Records',
        cityFour: 'Уфа',
        addressFour: 'улица юрия гагарина 41/2'
    }
];

// Переменнные для нахождения
let dialog = document.getElementById("dialog");
let h = document.getElementById("h");
let pOne = document.getElementById("pOne");
let pTwo = document.getElementById("pTwo");
let aOne = document.getElementById("aOne");
let aTwo = document.getElementById("aTwo");
let aThree = document.getElementById("aThree");
let aFour = document.getElementById("aFour");
let aFive = document.getElementById("aFive");

// Открытие модальных окон
let btnOne = document.getElementById("btnOne").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${one.title}`;
    pOne.innerText = `${one.paragraph}`;
});

let btnTwo = document.getElementById("btnTwo").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${two.title}`;
    pOne.innerText = `${two.paragraph}`;
});

let btnThree = document.getElementById("btnThree").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${three.title}`;
    pOne.innerText = `${three.paragraph}`;
    aOne.setAttribute('href', '`${three.linkOne}`');
    aOne.innerText = `${three.spanOne}`;
    aTwo.setAttribute('href', '`${three.linkTwo}`');
    aTwo.innerText = `${three.spanTwo}`;
    aThree.setAttribute('href', '`${three.linkThree}`');
    aThree.innerText = `${three.spanThree}`;
    aFour.setAttribute('href', '`${three.linkFour}`');
    aFour.innerText = `${three.spanFour}`;
    aFive.setAttribute('href', '`${three.linkFive}`');
    aFive.innerText = `${three.spanFive}`;
});

let btnFour = document.getElementById("btnFour").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${three.title}`;
    pOne.innerText = `${three.paragraph}`;
    aOne.setAttribute('href', '`${three.linkOne}`');
    aOne.innerText = `${three.spanOne}`;
    aTwo.setAttribute('href', '`${three.linkTwo}`');
    aTwo.innerText = `${three.spanTwo}`;
    aThree.setAttribute('href', '`${three.linkThree}`');
    aThree.innerText = `${three.spanThree}`;
    aFour.setAttribute('href', '`${three.linkFour}`');
    aFour.innerText = `${three.spanFour}`;
    aFive.setAttribute('href', '`${three.linkFive}`');
    aFive.innerText = `${three.spanFive}`;
});

let btnFive = document.getElementById("btnFive").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${three.title}`;
    pOne.innerText = `${three.paragraph}`;
    aOne.setAttribute('href', '`${three.linkOne}`');
    aOne.innerText = `${three.spanOne}`;
    aTwo.setAttribute('href', '`${three.linkTwo}`');
    aTwo.innerText = `${three.spanTwo}`;
    aThree.setAttribute('href', '`${three.linkThree}`');
    aThree.innerText = `${three.spanThree}`;
    aFour.setAttribute('href', '`${three.linkFour}`');
    aFour.innerText = `${three.spanFour}`;
    aFive.setAttribute('href', '`${three.linkFive}`');
    aFive.innerText = `${three.spanFive}`;
});

let btnSix = document.getElementById("btnSix").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${three.title}`;
    pOne.innerText = `${three.paragraph}`;
    aOne.setAttribute('href', '`${three.linkOne}`');
    aOne.innerText = `${three.spanOne}`;
    aTwo.setAttribute('href', '`${three.linkTwo}`');
    aTwo.innerText = `${three.spanTwo}`;
    aThree.setAttribute('href', '`${three.linkThree}`');
    aThree.innerText = `${three.spanThree}`;
    aFour.setAttribute('href', '`${three.linkFour}`');
    aFour.innerText = `${three.spanFour}`;
    aFive.setAttribute('href', '`${three.linkFive}`');
    aFive.innerText = `${three.spanFive}`;
});

let btnSeven = document.getElementById("btnSeven").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${three.title}`;
    pOne.innerText = `${three.paragraph}`;
    aOne.setAttribute('href', '`${three.linkOne}`');
    aOne.innerText = `${three.spanOne}`;
    aTwo.setAttribute('href', '`${three.linkTwo}`');
    aTwo.innerText = `${three.spanTwo}`;
    aThree.setAttribute('href', '`${three.linkThree}`');
    aThree.innerText = `${three.spanThree}`;
    aFour.setAttribute('href', '`${three.linkFour}`');
    aFour.innerText = `${three.spanFour}`;
    aFive.setAttribute('href', '`${three.linkFive}`');
    aFive.innerText = `${three.spanFive}`;
});

let btnEight = document.getElementById("btnEight").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${three.title}`;
    pOne.innerText = `${three.paragraph}`;
    aOne.setAttribute('href', '`${three.linkOne}`');
    aOne.innerText = `${three.spanOne}`;
    aTwo.setAttribute('href', '`${three.linkTwo}`');
    aTwo.innerText = `${three.spanTwo}`;
    aThree.setAttribute('href', '`${three.linkThree}`');
    aThree.innerText = `${three.spanThree}`;
    aFour.setAttribute('href', '`${three.linkFour}`');
    aFour.innerText = `${three.spanFour}`;
    aFive.setAttribute('href', '`${three.linkFive}`');
    aFive.innerText = `${three.spanFive}`;
});

let btnNine = document.getElementById("btnNine").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${three.title}`;
    pOne.innerText = `${three.paragraph}`;
    aOne.setAttribute('href', '`${three.linkOne}`');
    aOne.innerText = `${three.spanOne}`;
    aTwo.setAttribute('href', '`${three.linkTwo}`');
    aTwo.innerText = `${three.spanTwo}`;
    aThree.setAttribute('href', '`${three.linkThree}`');
    aThree.innerText = `${three.spanThree}`;
    aFour.setAttribute('href', '`${three.linkFour}`');
    aFour.innerText = `${three.spanFour}`;
    aFive.setAttribute('href', '`${three.linkFive}`');
    aFive.innerText = `${three.spanFive}`;
});

let btnTen = document.getElementById("btnTen").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${three.title}`;
    pOne.innerText = `${three.paragraph}`;
    aOne.setAttribute('href', '`${three.linkOne}`');
    aOne.innerText = `${three.spanOne}`;
    aTwo.setAttribute('href', '`${three.linkTwo}`');
    aTwo.innerText = `${three.spanTwo}`;
    aThree.setAttribute('href', '`${three.linkThree}`');
    aThree.innerText = `${three.spanThree}`;
    aFour.setAttribute('href', '`${three.linkFour}`');
    aFour.innerText = `${three.spanFour}`;
    aFive.setAttribute('href', '`${three.linkFive}`');
    aFive.innerText = `${three.spanFive}`;
});

let btnEleven = document.getElementById("btnEleven").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${four.title}`;
    pOne.innerText = `${four.paragraph}`;
    aOne.setAttribute('href', '`${four.linkOne}`');
    aOne.innerText = `${four.spanOne}`;
    aTwo.setAttribute('href', '`${four.linkTwo}`');
    aTwo.innerText = `${four.spanTwo}`;
    aThree.setAttribute('href', '`${four.linkThree}`');
    aThree.innerText = `${four.spanThree}`;
});

let btnTwelve = document.getElementById("btnTwelve").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${four.title}`;
    pOne.innerText = `${four.paragraph}`;
    aOne.setAttribute('href', '`${four.linkOne}`');
    aOne.innerText = `${four.spanOne}`;
    aTwo.setAttribute('href', '`${four.linkTwo}`');
    aTwo.innerText = `${four.spanTwo}`;
    aThree.setAttribute('href', '`${four.linkThree}`');
    aThree.innerText = `${four.spanThree}`;
});

let btnTbtnThirteenwo = document.getElementById("btnThirteen").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${four.title}`;
    pOne.innerText = `${four.paragraph}`;
    aOne.setAttribute('href', '`${four.linkOne}`');
    aOne.innerText = `${four.spanOne}`;
    aTwo.setAttribute('href', '`${four.linkTwo}`');
    aTwo.innerText = `${four.spanTwo}`;
    aThree.setAttribute('href', '`${four.linkThree}`');
    aThree.innerText = `${four.spanThree}`;
});

let btnFourteen = document.getElementById("btnFourteen").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${four.title}`;
    pOne.innerText = `${four.paragraph}`;
    aOne.setAttribute('href', '`${four.linkOne}`');
    aOne.innerText = `${four.spanOne}`;
    aTwo.setAttribute('href', '`${four.linkTwo}`');
    aTwo.innerText = `${four.spanTwo}`;
    aThree.setAttribute('href', '`${four.linkThree}`');
    aThree.innerText = `${four.spanThree}`;
});

let btnFifteen = document.getElementById("btnFifteen").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${four.title}`;
    pOne.innerText = `${four.paragraph}`;
    aOne.setAttribute('href', '`${four.linkOne}`');
    aOne.innerText = `${four.spanOne}`;
    aTwo.setAttribute('href', '`${four.linkTwo}`');
    aTwo.innerText = `${four.spanTwo}`;
    aThree.setAttribute('href', '`${four.linkThree}`');
    aThree.innerText = `${four.spanThree}`;
});

let btnSixteen = document.getElementById("btnSixteen").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${four.title}`;
    pOne.innerText = `${four.paragraph}`;
    aOne.setAttribute('href', '`${four.linkOne}`');
    aOne.innerText = `${four.spanOne}`;
    aTwo.setAttribute('href', '`${four.linkTwo}`');
    aTwo.innerText = `${four.spanTwo}`;
    aThree.setAttribute('href', '`${four.linkThree}`');
    aThree.innerText = `${four.spanThree}`;
});

let btnSeventeen = document.getElementById("btnSeventeen").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${five.title}`;
    pOne.innerText = `${five.paragraph}`;
    aOne.setAttribute('href', '`${five.linkOne}`');
    aOne.innerText = `${five.spanOne}`;
});

let btnEighteen = document.getElementById("btnEighteen").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${six.title}`;
    pOne.innerText = `${six.paragraph}`;
    aOne.setAttribute('href', '`${six.linkOne}`');
    aOne.innerText = `${six.spanOne}`;
});

let btnNineteen = document.getElementById("btnNineteen").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${seven.title}` + ' ' + `${eight.cityOne}`;
    pOne.innerText = `${seven.paragraph}`;
    pTwo.innerText = 'Студия ' + `${eight.nameOne}` + `${seven.paragraphTwo}` + ' - ' + `${eight.addressOne}`;
});

let btnTwenty = document.getElementById("btnTwenty").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${seven.title}` + ' ' + `${eight.cityTwo}`;
    pOne.innerText = `${seven.paragraph}`;
    pTwo.innerText = 'Студия ' + `${eight.nameTwo}` + `${seven.paragraphTwo}` + ' - ' + `${eight.addressTwo}`;
});

let btnTwentyOne = document.getElementById("btnTwentyOne").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${seven.title}` + ' ' + `${eight.cityThree}`;
    pOne.innerText = `${seven.paragraph}`;
    pTwo.innerText = 'Студия ' + `${eight.nameThree}` + `${seven.paragraphTwo}` + ' - ' + `${eight.addressThree}`;
});

let btnTwentyTwo = document.getElementById("btnTwentyTwo").addEventListener("click", () => {
    dialog.showModal();
    dialog.classList.add("dialog");
    h.innerText = `${seven.title}` + ' ' + `${eight.cityFour}`;
    pOne.innerText = `${seven.paragraph}`;
    pTwo.innerText = 'Студия ' + `${eight.nameFour}` + `${seven.paragraphTwo}` + ' - ' + `${eight.addressFour}`;
});

let close = document.getElementById("close").addEventListener("click", () => {
    dialog.classList.remove("dialog");
    dialog.close();
    h.innerText = '';
    pOne.innerText = '';
    pTwo.innerText = '';
    aOne.innerText = '';
    aTwo.innerText = '';
    aThree.innerText = '';
    aFour.innerText = '';
    aFive.innerText = '';
});