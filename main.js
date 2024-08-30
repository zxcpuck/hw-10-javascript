// //- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let myButton = document.getElementById('btn');
// myButton.addEventListener('click', function () {
//     let inner1 = document.getElementById('text').innerText = ' ';
// });

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let myForm = document.forms.myForm;
// let buttonSend = document.getElementById('btn')
// buttonSend.onclick = function (e){
//     e.preventDefault()
//     let userAge = myForm.age.value;
//     let obj = {userAge};
//     console.log(obj)
// }

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let current = +localStorage.getItem('number');
// current+=1
// localStorage.setItem('number',current);
// document.getElementById('number').innerText = current

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// sessionsList.push(new Date())
// localStorage.setItem('sessionsList',JSON.stringify(sessionsList))

//створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
// let joke = document.getElementById('joke');
// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];


// try1 - false
// sessionsList.push(joke.value)
// joke.onmouseout = function (e){
//     e.preventDefault()
//     localStorage.setItem('sessionsList',JSON.stringify(sessionsList))
//     console.log(sessionsList)
// }


// try2 - true
// joke.addEventListener('mouseout',function (){
//     sessionsList.push(joke.value.trim())
//     localStorage.setItem('sessionsList',JSON.stringify(sessionsList))
//     console.log(sessionsList)
//     location.reload();
// })
// let sessionsGetList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// for (const element of sessionsGetList) {
//     let htmlDivElement = document.createElement('div');
//     let numberPuk = element * 2.20462262;
//     htmlDivElement.innerText = `${numberPuk} фунтів`;
//     document.body.append(htmlDivElement);
// }

//В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
// function addToLocalStorage(key,objToAdd){
//     localStorage.getItem(key)
//     let array = JSON.parse(localStorage.getItem(key))
//     localStorage.setItem(key,JSON.stringify(array))
// }
// addToLocalStorage('myObj',{name:kokos,age:33})

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// let form = document.forms.form;
// let table = document.getElementById('table');
// form.onsubmit = function (e){
//     e.preventDefault()
//     let linesValue = +form.lines.value;
//     let cellsValue = +form.cells.value;
//     let textValue = form.text.value;
//     for (let i = 0; i < linesValue; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < cellsValue; j++) {
//             let td = document.createElement('td');
//             td.innerText = textValue;
//             tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
// }
