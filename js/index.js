let list = document.getElementsByTagName("li")
let page = document.getElementsByClassName("page")
let inputTasck = document.getElementById("taskinput")
let listfav = document.getElementsByTagName("input")
let addTask = document.getElementById("addTask")
let religious = document.getElementById("religiousinner")
let work = document.getElementById("workinner")
let educational = document.getElementById("educationalinner")
let Personal = document.getElementById("Personalinner")
let closepopup = document.getElementById("closepopup")
let opinepopup = document.getElementById("opinepopup")
let opinepopupsticky = document.getElementById("opinepopupsticky")
let closepopsticky = document.getElementById("closepopsticky")
let opineAddSticky = document.getElementById("opineAddSticky")
let addsticky = document.getElementById("addsticky")
let floatingTextarea2 = document.getElementById("floatingTextarea2")
let heading = document.getElementById("heading")
let exampleColorInput = document.getElementById("exampleColorInput")
let loopsticky = document.getElementById("loopsticky")
let changecolor = document.getElementById("changecolor")
// --------------
let religiousNum = document.getElementById("religious-num")
let workNum = document.getElementById("work-num")
let educationalNum = document.getElementById("educational-num")
let PersonalNum = document.getElementById("Personal-num")
let tex = ""
let objectarray;
if (localStorage.getItem("addtasck") == null) {
    objectarray = []
} else {
    objectarray = JSON.parse(localStorage.getItem("addtasck"))

    showData()
}
showData()

// Change newspapers
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", (e) => {
        for (let y = 0; y < list.length; y++) {
            list[y].classList.remove("active")
            page[y].classList.add("d-none")
        }
        list[i].classList.add("active")
        page[i].classList.remove("d-none")
    })
}
// crad system
addTask.addEventListener("click", () => {
    for (let i = 0; i < listfav.length; i++) {
        if (listfav[i].checked) {
            tex = listfav[i].value
        }

    }
    if (inputTasck.value.length > 3 && tex.length > 0) {
        objectarray.push({ taskname: inputTasck.value, typeTasck: tex })
        showData()
        deletevalue()
        opinepopup.classList.remove("d-none")
        inputTasck.classList.remove("is-invalid")
        inputTasck.classList.add("is-valid")
        localStorage.setItem("addtasck", JSON.stringify(objectarray))
    } else {
        inputTasck.classList.add("is-invalid")
        inputTasck.classList.remove("is-valid")
    }
})
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

// ---------------------------------------------------------
function showData() {
    let table_religious = ""
    let work_table = ""
    let educational_table = ""
    let Personal_table = ""
    for (let i = 0; i < objectarray.length; i++) {
        if (objectarray[i].typeTasck == "religious") {
            table_religious += `
        <div class="col-7 bg-info p-3 rounded-3 text-white d-flex justify-content-between align-items-center mb-3">
            <p class="m-0"> <span> ${objectarray[i].taskname}</span></p>
            <button onclick="btnDelete(${i})" class="btn btn-danger"><svg class="svg-inline--fa fa-delete-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="delete-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg><!-- <i class="fa-solid fa-delete-left"></i> Font Awesome fontawesome.com --></button>
        </div>
        `
        }
        if (objectarray[i].typeTasck == "work") {
            work_table += `
        <div class="col-7 bg-info p-3 rounded-3 text-white d-flex justify-content-between align-items-center mb-3">
            <p class="m-0"> <span> ${objectarray[i].taskname}</span></p>
            <button  onclick="btnDelete(${i})" class="btn btn-danger"><svg class="svg-inline--fa fa-delete-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="delete-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg><!-- <i class="fa-solid fa-delete-left"></i> Font Awesome fontawesome.com --></button>
        </div>
        `
        }
        if (objectarray[i].typeTasck == "educational") {
            educational_table += `
        <div class="col-7 bg-info p-3 rounded-3 text-white d-flex justify-content-between align-items-center mb-3">
            <p class="m-0"> <span> ${objectarray[i].taskname}</span></p>
            <button onclick="btnDelete(${i})" class="btn btn-danger"><svg class="svg-inline--fa fa-delete-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="delete-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg><!-- <i class="fa-solid fa-delete-left"></i> Font Awesome fontawesome.com --></button>
        </div>
        `
        }
        if (objectarray[i].typeTasck == "Personal") {
            Personal_table = `
        <div class="col-7 bg-info p-3 rounded-3 text-white d-flex justify-content-between align-items-center mb-3">
            <p class="m-0"> <span> ${objectarray[i].taskname}</span></p>
            <button onclick="btnDelete(${i})" class="btn btn-danger"><svg class="svg-inline--fa fa-delete-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="delete-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg><!-- <i class="fa-solid fa-delete-left"></i> Font Awesome fontawesome.com --></button>
        </div>
        `
        }
    }


    religious.innerHTML = table_religious
    work.innerHTML = work_table
    educational.innerHTML = educational_table
    Personal.innerHTML += Personal_table
    religiousNum.innerHTML = religious.children.length
    workNum.innerHTML = work.children.length
    educationalNum.innerHTML = educational.children.length
    PersonalNum.innerHTML = Personal.children.length



}
// delete value 
function deletevalue() {
    inputTasck.value = ""

    for (let i = 0; i < listfav.length; i++) {
        if (listfav[i].checked) {
            listfav[i].checked = false
        }
    }
}
// close popuo add to do 
closepopup.addEventListener("click", closepop)

function closepop() {
    opinepopup.classList.add("d-none")
}

// close add sticky
closepopsticky.addEventListener("click", closepopstickyadd)

function closepopstickyadd() {
    opinepopupsticky.classList.add("d-none")
}

opineAddSticky.addEventListener("click", () => {
    opinepopupsticky.classList.remove("d-none")
})

// part of sticky note mamory
let arrayStiky = []
addsticky.addEventListener("click", () => {
    arrayStiky.push({
        hading: heading.value,
        subjects: floatingTextarea2.value,
        colorbg: exampleColorInput.value
    })
    loppstIck()
});
// delete task
function btnDelete(e) {
    objectarray.splice(e, 1)
    showData()
    localStorage.setItem("addtasck", JSON.stringify(objectarray))
}

function loppstIck() {
    let table = ""
    for (let i = 0; i < arrayStiky.length; i++) {
        table += `<div style="background-color:${arrayStiky[i].colorbg} ;"  class="card-sticky add-st col-lg-3 col-md-4">
            <h2> ${arrayStiky[i].hading} </h2>
            <p class="breackline">${arrayStiky[i].subjects}</p>
        </div>`
    }

    loopsticky.innerHTML = table
    removeValue()
}
exampleColorInput.addEventListener("input", () => {
    changecolor.style.backgroundColor = exampleColorInput.value
})

function removeValue() {
    heading.value = ""
    floatingTextarea2.value = ""
}

// quotes
let qoute_author = [{
    qoute: "Be yourself; everyone else is already taken",
    author: "Oscar Wilde"
},

{
    qoute: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
},
{
    qoute: "So many books, so little time",
    author: "Frank Zappa"
},
{
    qoute: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
},
{
    qoute: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
    author: "Bernard M. Baruch"
},
{
    qoute: "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
    author: "Dr. Seuss"
},
{
    qoute: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
},
{
    qoute: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
},
{
    qoute: "Dont walk in front of me… I may not followDont walk behind me… I may not lead Walk beside me… just be my friend",
    author: "Albert Camus"
},
{
    qoute: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard"
},
{
    qoute: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde"
},

]
let title_quote = document.getElementById('title-quote')
let author_quote = document.getElementById("author-quote")
let swapQoute = document.getElementById("swapQoute")
let content = -1
swapQoute.addEventListener("click", () => {
    let randomNumber;

    do {
        randomNumber = Math.trunc(Math.random() * qoute_author.length)
    } while (randomNumber == content);
    content = randomNumber

    title_quote.innerHTML = qoute_author[randomNumber].qoute
    author_quote.innerHTML = qoute_author[randomNumber].author

})