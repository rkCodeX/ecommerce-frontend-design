let dropdownBtn = document.getElementsByClassName('dropdown');
let dropdownMenu = document.getElementsByClassName('dropdown-menu');
let dropdownIcon = document.getElementsByClassName("icon");

// Dropdown menu
for(let i = 0; i < dropdownBtn.length; i++){
    dropdownBtn[i].addEventListener("click", ()=>{
        dropdownMenu[i].style.display = dropdownMenu[i].style.display == "block" ? "none" : "block";
        dropdownIcon[i].style.transform = dropdownMenu[i].style.display === "block" ? "rotate(0deg)" : "rotate(180deg)";
    });
}

//Due to dentical name description, price of all items only lis
let productsList = [
    {
        "img" : "assests/electronics-category-img4.png",
        "name" : "Canon Cmera EOS 2000, Black 10x zoom"
    },{

    }
]