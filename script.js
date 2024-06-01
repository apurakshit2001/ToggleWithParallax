const toggle = document.getElementById("toggleCheckbox");

toggle.addEventListener("change", () => {
    let bodyP1 = document.getElementById("parallax1");
    let bodyP2 = document.getElementById("parallax2");
    let bodyP3 = document.getElementById("parallax3");
  
    if (toggle.checked) {
        bodyP1.style.backgroundImage = "url('./img/image4.webp')";
        bodyP2.style.backgroundImage = "url('./img/image5.webp')";
        bodyP3.style.backgroundImage = "url('./img/image6.jpeg')";
    } else {
        bodyP1.style.backgroundImage = "url('./img/image1.jpg')";
        bodyP2.style.backgroundImage = "url('./img/image2.jpg')";
        bodyP3.style.backgroundImage = "url('./img/image3.jpg')";
    }
});
