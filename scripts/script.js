profPic = localStorage.getItem("profilePic");
chooseAnimal(profPic);

function chooseAnimal(input) {
    animalImg = document.getElementById('profileImage');
    formButton = document.getElementById('dogLvrsOnly');
    if (input == "cat")
    {
        animalImg.src="imgs/cat-pic.webp";
        formButton.style.display = 'none';
        document.getElementById("popupForm").style.display = "none";
    }
    if (input == "dog")
    {
        animalImg.src="imgs/dog-pic.jpg";
        formButton.style.display = 'flex';
    }
    if (input == "both")
    {
        animalImg.src="imgs/cat-dog-pic.webp";
        formButton.style.display = 'flex';
    }
    localStorage.setItem("profilePic", input);
}

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