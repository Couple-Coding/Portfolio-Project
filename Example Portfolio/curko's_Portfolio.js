
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





