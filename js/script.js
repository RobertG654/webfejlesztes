document.getElementById("start").addEventListener("click", inditas);
function inditas() {
    const kontinensekNav = document.querySelector("nav");
    const h3 = document.querySelector(".leiras");
    const kartyak = document.querySelectorAll("nav ul li");

    if (kontinensekNav) {
        kontinensekNav.scrollIntoView({ behavior: "smooth" });
    }

    if (h3) {
        h3.style.transition = "opacity 1s ease";
        h3.style.opacity = "0"; 
        setTimeout(() => {
            h3.style.opacity = "1";
        }, 200);
    }

    kartyak.forEach((kartya, index) => {
        kartya.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        kartya.style.transform = "translateY(40px)";
        setTimeout(() => {
            kartya.style.transform = "translateY(0)";
        }, index * 300);
    });
}


