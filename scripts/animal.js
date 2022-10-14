profPic = localStorage.getItem("profilePic");
chooseAnimal(profPic);

function chooseAnimal(input) {
    animalImg = document.getElementById('profileImage');
    formButton = document.getElementById('dogLvrsOnly');
    console.log("Value of input: " + input);
    if (input == "null")
    {
        document.getElementById('firstVisit').style.display = "flex";
        return ;
    }
    document.getElementById('firstVisit').style.display = "none";
    console.log(document.getElementById('firstVisit').style.display);
    if (!animalImg)
    {
        console.log("animalImg: " + animalImg);
        return ;
    }
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
    console.log("image = " + animalImg.src);
    localStorage.setItem("profilePic", input);
}