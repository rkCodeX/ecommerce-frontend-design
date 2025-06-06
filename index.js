// display image details
document.getElementById("mainSection").addEventListener("click", (event) => {
  const anchor = event.target.closest("a");
  if (anchor && anchor.hasAttribute("src") && anchor.href.includes("productDetails.html")) {
    const imgSrc = anchor.getAttribute("src");
    localStorage.setItem("img", JSON.stringify(imgSrc));
  }
});

// Cache nav and showNav button elements outside to avoid repeated calls
const nav = document.getElementById("nav");
const showNavBtn = document.getElementById("showNav");

// Handler to hide nav when clicking outside of nav or showNavBtn
function outsideClickListener(event) {
  if (!nav.contains(event.target) && event.target !== showNavBtn) {
    nav.style.display = "none";
    document.removeEventListener("click", outsideClickListener);
  }
}

showNavBtn.addEventListener("click", () => {
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "block"; // Show the nav
    setTimeout(() => {
      document.addEventListener("click", outsideClickListener);
    }, 0);
  } else {
    nav.style.display = "none"; // Hide the nav
    document.removeEventListener("click", outsideClickListener);
  }
});

