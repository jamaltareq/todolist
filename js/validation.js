let dtnCreate = document.getElementById("dtnCreate")
let inputPassord = document.getElementById("passwordCreate")
let emailCreate = document.getElementById("emailCreate")
let lastNameCreate = document.getElementById("lastNameCreate")
let FirstNameCreate = document.getElementById("FirstNameCreate")
let pattern = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/
let patternemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let objectCreate = [];

inputPassord?.addEventListener("change", () => {
    if (pattern.test(inputPassord.value)) {
        inputPassord.classList.add("is-valid")
        inputPassord.classList.remove("is-invalid")
    } else {
        inputPassord.classList.remove("is-valid")
        inputPassord.classList.add("is-invalid")
    }
})
emailCreate?.addEventListener("change", () => {
    if (patternemail.test(emailCreate.value)) {
        emailCreate.classList.add("is-valid")
        emailCreate.classList.remove("is-invalid")
        console.log(true)
    } else {
        emailCreate.classList.remove("is-valid")
        emailCreate.classList.add("is-invalid")
    }
});
if(dtnCreate != null){
    dtnCreate?.addEventListener("click", () => {
        if (pattern.test(inputPassord.value) && patternemail.test(emailCreate.value)) {
            objectCreate.push({
                firstNam: FirstNameCreate.value,
                lastNam: lastNameCreate.value,
                email: emailCreate.value,
                password: inputPassord.value,
            })
            console.log(objectCreate);
            localStorage.setItem("createAcount", JSON.stringify(objectCreate))
            location.href = "https://jamaltareq.github.io/todolist/sign.html";
        }
    
    })
}


// insit
let emailsign = document.getElementById("emailsign")
let passwordsign = document.getElementById("passwordsign")
let btn_sign = document.getElementById("btn_sign")
btn_sign?.addEventListener('click', () => {
    location.href= "https://jamaltareq.github.io/todolist/page.html"
})
