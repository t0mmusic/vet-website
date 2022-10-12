
function openForm() {
    closeSignUp();
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function signUp() {
    closeForm();
    document.getElementById("signupForm").style.display = "block";
}

function closeSignUp() {
    document.getElementById("signupForm").style.display = "none";
}

// const popup = document.getElementById('formPopup');

// function showPopup() {
//     popup.classList.add('open');
// }

// function hidePopup() {
//     closeSignUp();
//     closeForm();
// }
