const form = document.getElementById("form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm_password")
const checkbox = document.getElementById("checkbox")
const btn = document.getElementById("btn")
const error = document.getElementsByClassName("error-title")

form.addEventListener("submit", (e)=>{
    let messages = []
    e.preventDefault()

    if(username.value === "" || username.value == null){
        messages.push("Please Enter a Username")
    }
    if(username.value.length < 6){
        messages.push("Username should atleast 6 character long")
    }
    if(password.value.length <= 10 || password.value.length >= 20){
        messages.push("Please ensure your Password must contain between 10 to 20 characters")
    }
    if(password.value !== confirmPassword.value){
        messages.push("Your Password is not matching with your Confirm Password")
    }
    if(checkbox.checked == false){
        messages.push("Please Agree the Terms")
    }
    console.log(messages);
})

