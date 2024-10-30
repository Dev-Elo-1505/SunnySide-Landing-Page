// when mobile menu is clicked the menu shows when clicked again the menu goes so basically toggling

const menu = document.getElementById("menu")
const mobileMenu = document.getElementById("mobile-menu")

mobileMenu.style.display = "none"

menu.addEventListener('click', function(){
    if(mobileMenu.style.display === "none") {
        mobileMenu.style.display = "block"
    } else {
         mobileMenu.style.display = "none"
    }
})