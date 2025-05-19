document.addEventListener("DOMContentLoaded", function () {
    // DOM Element
    let scrollBtn = document.getElementById("scrollUpBtn");


    if (!scrollBtn) {
        console.error("Fejl: Scroll-knap ikke fundet!");
        return;
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    scrollBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    $(document).ready(function () {
        $("#scrollUpBtn").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, "smooth");
        });
    });

    let testArray = ["scroll", "top", "button"];
    let testObject = { element: scrollBtn, position: window.scrollY };

    console.log("Array indhold:", testArray);
    console.log("Objekt data:", testObject);


    for (let i = 0; i < testArray.length; i++) {
        console.log(`Array indeks ${i}: ${testArray[i]}`);
    }

    if (typeof scrollBtn === "object") {
        console.log("scrollBtn er et DOM-element.");
    } else {
        console.error("Fejl: scrollBtn er ikke et DOM-element.");
    }
});