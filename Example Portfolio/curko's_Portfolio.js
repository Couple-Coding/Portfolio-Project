
var typingEffect = new Typed(".multiText", {
    strings: ["Tsvetoslav Nikolov", "Web Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})

var typingEffect = new Typed(".pText", {
    strings: ["Hello! My name is Tsvetoslav Nikolov, my specialization is in a front-end web development. I am 19 years old from Vratsa and I study at Plovdiv University majoring in Informatics."],
        typeSpeed: 70,
        backSpeed: 30,
        loop: true
        
})

var typingEffect = new Typed(".fText", {
    strings: ["Find me on social networks: "],
        typeSpeed: 40,
        backSpeed: 60,
        loop: true
})

function checkform()
{
  if (document.getElementById("mail").value == "")
{
    // something is wrong
    alert('There is a problem with the first field');
    return false;
}

return true;
}

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var blur2 = document.getElementById('blur2');
    blur2.classList.toggle('active');
    var blur3 = document.getElementById('blur3');
    blur3.classList.toggle('active');
    var blur4 = document.getElementById('blur4');
    blur4.classList.toggle('active');
    var blur5 = document.getElementById('blur5');
    blur5.classList.toggle('active');
    var blur6 = document.getElementById('blur6');
    blur6.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}






