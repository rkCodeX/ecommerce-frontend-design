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

let displayRow = true;

//Due to identical name, description and price of all items only listing image URL
let productsList = ["assests/electronics-category-img4.png", "assests/deal-img5.png", "assests/electronics-category-img3.png", "assests/deal-img2.png", "assests/deal-img1.png", "assests/electronics-category-img1.png"]

// Create the HTML for the list based on the displayRow variable
let listItems1 = productsList.map((imgSrc) => {
    return `<div class="flex flex-row p-4 items-center justify-center bg-white rounded-md border border-gray-300 shadow gap-[1.5rem]">
       <img src=${imgSrc}/>
       <div class="flex flex-col gap-2 items-start justify-center">
         <h1>GoPro HERO6 4K Action Camera - Black</h1>
         <h1>$998.00 <span class="text-gray-400 line-through">$1128.00</span></h1>
         <span class="flex flex-row gap-2 items-center justify-start">
            <span class="flex flex-row">
            <i class="fa-solid fa-star" style="color: #ffaa00;"></i>
            <i class="fa-solid fa-star" style="color: #ffaa00;"></i>
            <i class="fa-solid fa-star" style="color: #ffaa00;"></i>
            <i class="fa-solid fa-star" style="color: #ffaa00;"></i>
            <i class="fa-solid fa-star" style="color: #cbcac8;"></i>
            <p class="text-[#ffaa00;]">7.5</p>
            </span>
            <i class="fa-solid fa-circle" style="color: #b0b7c4;"></i>
            <p class="text-gray-400">154 orders</p>
            <i class="fa-solid fa-circle" style="color: #b0b7c4;"></i>
            <p class="text-green-300">Free Shipping</p>
         <span>
         <p class="text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit </p>
         <button class="cursor-pointer text-blue-400">View details</button>
       </div>
    </div>`;
}).join(''); 

let listItems2 = productsList.map((imgSrc) => {
    return ``;
}).join(''); 

// Get the products container
let products = document.getElementById("itemsList");

// Set the innerHTML of the products container
products.innerHTML = `<div class="grid ${displayRow ? 'grid-cols-1' : 'grid-cols-4'} gap-[1rem] w-[100%] h-auto">${displayRow ? listItems1 : listItems2}</div>`;