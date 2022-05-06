
//Mobile navigation button
document.querySelector('#bars').addEventListener("click", ()=>{
    document.querySelector('.list').classList.toggle("mobile");
    document.querySelector('#bars').classList.toggle('fa-xmark');
});


//Nav links should close menu when clicked 
let navLinks = document.querySelectorAll('nav ul li');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', ()=> {
        document.querySelector('.list').classList.toggle("mobile");
    document.querySelector('#bars').classList.toggle('fa-xmark');
    })
}