var typed = new Typed(".text",{
    strings:["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

function toggleMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.classList.toggle('active');
}

function closeMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.classList.toggle('active');
}

// send email
function sendEmail(){
    var params ={
        from_name:document.getElementById("fullName").value,
        email_id:document.getElementById("email_id").value,
        message:document.getElementById("message").value
    }    
    emailjs.send('service_ejrjh8b', 'template_cfl9efe', params).then(function(res){
        alert("Email Sent! ");
    })
}