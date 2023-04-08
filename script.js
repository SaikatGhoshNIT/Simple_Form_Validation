const frm = document.querySelector("#form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm_password")
const checkbox = document.getElementById("checkbox")
const btn = document.getElementById("btn")
const errors = document.querySelector(".errors")
const errorList = document.querySelector(".error-title")

frm.addEventListener("submit", e =>{
    let messages = []
    
    clearErrors()
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

    if(messages.length > 0){
        e.preventDefault() 
        showError(messages)
    }
    
    console.log(messages);
})

function clearErrors(){
    errorList.innerHTML="" //esaiest way.

    // while(errorList.children[0] != null){
    //     errorList.removeChild(errorList.children[0])
    // } -- iterative way to remove Child.
    
    //IMPORTANT : This cannot be done with forEach loop or normal loop since as you remove children it will modify the list you are looping  over which will not work.
    errors.classList.remove("show")
    
}
function showError(messages){
    //Add each error to the error-list element
    //Make sure to use an li as the element for each error
    //Also, make sure you add the show class to the errors container
    messages.forEach(msg => {
        const li = document.createElement("li")
        li.innerText = msg
        errorList.appendChild(li)
    });
    errors.classList.add("show")
}
