
console.log(localStorage.getItem("createAcount"))
if (localStorage.getItem("createAcount") == null) {
    location.href = "https://jamaltareq.github.io/todolist/sign.html";
}
let signOut = document.getElementById("signOut")
signOut.addEventListener("click",()=>{
    location.replace("https://jamaltareq.github.io/todolist/sign.html")
})
