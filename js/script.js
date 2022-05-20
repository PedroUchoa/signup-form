document.querySelector(".button-final").addEventListener("click", ()=>{
    let firstName = document.querySelector("#first-name").value
    let lastName = document.querySelector("#last-name").value
    let emailValue = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    if(firstName === ""){
        let paragraph = document.querySelector("#first-paragraph")
        let alert = document.querySelector("#error-first")
        paragraph.classList.remove("show")
        alert.classList.remove("show")
    }
    if(lastName === ""){
        let paragraph = document.querySelector("#last-error")
        let alert = document.querySelector("#last-paragraph")
        paragraph.classList.remove("show")
        alert.classList.remove("show")
    }
    if (emailValue == "" || emailValue.indexOf('@') == -1 || emailValue.indexOf('.') == -1) {
        let paragraph = document.querySelector("#email-error")
        let alert = document.querySelector("#email-paragraph")
        paragraph.classList.remove("show")
        alert.classList.remove("show")
    }
    if(password === ''){
        let paragraph = document.querySelector("#password-error")
        let alert = document.querySelector("#password-paragraph")
        paragraph.classList.remove("show")
        alert.classList.remove("show")
    }
})