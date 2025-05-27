//Hjælp af chatgpt til at tilpasse kode.

document.addEventListener("DOMContentLoaded", function () {
    // === DOM Elementer ===
    let scrollBtn = document.getElementById("scrollUpBtn");

    if (!scrollBtn) {
        console.error("Fejl: Scroll-knap ikke fundet!");
        return;
    }

    // === Funktion: Scroll til top ===
    function scrollToTopSmoothly() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // === Funktion: Vis eller skjul scroll-knap afhængigt af scroll-position ===
    function toggleScrollButtonVisibility() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    }

    // === Funktion: Log Array-indhold ===
    function logArrayItems(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`Array indeks ${i}: ${arr[i]}`);
        }
    }

    // === Events ===
    window.addEventListener("scroll", toggleScrollButtonVisibility);

    scrollBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Eksempel på event-parameter
        scrollToTopSmoothly();
    });

    // === jQuery version af click event ===
    $(document).ready(function () {
        $("#scrollUpBtn").on("click", function (event) {
            event.preventDefault(); // Igen: brug af event-parameter
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    });

    // === Arrays og objekter ===
    let testArray = ["scroll", "top", "button"];
    let testObject = {
        element: scrollBtn,
        position: window.scrollY
    };

    console.log("Array indhold:", testArray);
    console.log("Objekt data:", testObject);

    logArrayItems(testArray);

    // === Kontrolstruktur og scope-eksempel ===
    if (typeof scrollBtn === "object") {
        let status = "scrollBtn er et DOM-element.";
        console.log(status);
    } else {
        let status = "Fejl: scrollBtn er ikke et DOM-element.";
        console.error(status);
    }
});
