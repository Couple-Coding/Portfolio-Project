var typingEffect = new Typed(".multiText", {
    strings: ["Mila Yonkova", "Web Developer", "QA"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})




var typingEffect = new Typed(".pText", {
    strings: ["Hello! My name is Mila Yonkova and I am a front-end web developer and QA. I am 18 years old from Apriltsi and I study at National Vocational High School for Computer Technologies and Systems - Pravets with a specialization in System Programmer"],
    typeSpeed: 50,
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


        var menuList = document.getElementById("menuList");
        menuList.style.maxHeight = "0px";
        function togglemenu(){
            if(menuList.style.maxHeight == "0px"){
                menuList.style.maxHeight = "130px";
            }else{
                menuList.style.maxHeight = "0px";
            }

        }

