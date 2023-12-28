
console.log(localStorage.getItem("createAcount"))
if (localStorage.getItem("createAcount") == null) {
    location.href = "../todolist/sign.html";
}
let signOut = document.getElementById("signOut")
signOut.addEventListener("click",()=>{
    location.replace("../todolist/sign.html")
})
