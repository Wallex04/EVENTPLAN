let menu = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}




  const registerLink = document.querySelectorAll(".registerLink");
  console.log(registerLink);
        registerLink.forEach(register=> {
            register.addEventListener("click", (event) => { 
               event.preventDefault();
                window.location = "./registration/registration.html";
            })
        });
    