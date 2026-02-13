$(document).ready(function () {

    function loadpage(page) {
        $.ajax({
            url: page + ".html",
            success: function (data) {
                $("#content").html(data)
                startHeroslider();


            }
        })
    }

    $("#home").click(function (e) {
        e.preventDefault();
        loadpage("home")
    })

    $("#about").click(function (e) {
        e.preventDefault();
        loadpage("about")
    })

    $("#contact").click(function (e) {
        e.preventDefault();
        loadpage("contact")
    })

    $("#category").click(function (e) {
        e.preventDefault();
        loadpage("category")
    })
    $(document).on("click", "#exploreBtn", function () {
        loadpage("about")
    })

    $(document).on("click", "#exploreBtn1", function () {
        loadpage("kids")
    })




    $("#gallery").click(function (e) {
        e.preventDefault();
        loadpage("gallery")
    })
    $("#feedback").click(function (e) {
        e.preventDefault();
        loadpage("feedback")
    })
    $("#kids").click(function (e) {
        e.preventDefault();
        loadpage("kids")
    })
    $("#elders").click(function (e) {
        e.preventDefault();
        loadpage("elders")
    })

    // CARDS 

    $(document).on("click", ".card", function () {
        let page = $(this).data("page")
        if (page) {
            loadpage(page)
        }
    })

    // BACK BUTTON INSIDE PAGE 
    $(document).on("click", "#backkids", function () {
        loadpage("kids");
    })

    $(document).on("click", "#backelders", function () {
        loadpage("elders");
    })

    // LOAD INITIAL PAGE

    loadpage("home", false)

    // POPUP BOX

    $(document).on("click", ".join-btn", function () {
        $("#joinPopup").fadeIn()
    })

    $(document).on("click", "#closePopup, .popup-btn", function () {
        $("#joinPopup").fadeOut()
    })

})

// pop srart web

$(document).ready(function () {
    if (!sessionStorage.getItem("welcomePopupShown")) {
        setTimeout(function () {
            $("#welcomePopup").fadeIn()
        }, 600)
        sessionStorage.setItem("welcomePopupShown", "true")
    }

    $(document).on("click", "#closeWelcome,  #welcomeBtn", function () {
        $("#welcomePopup").fadeOut()
    })
})

// SLIDER CODE

function startHeroslider() {

    let slides = document.querySelectorAll(".slide")
    if (!slides.length) return;
    let index = 0

    setInterval(() => {
        slides[index].classList.remove("active")
        index = (index + 1) % slides.length
        slides[index].classList.add("active")
    }, 3000)

}


// CONTACT PAGE VALIDATION

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    // Check if there's already saved data
    if (localStorage.getItem("contactFormData")) {
        const savedData = JSON.parse(localStorage.getItem("contactFormData"));
        document.getElementById("name").value = savedData.name || "";
        document.getElementById("email").value = savedData.email || "";
        document.getElementById("message").value = savedData.message || "";
    }

    // Form submit event
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Save to localStorage
        const formData = { name, email, message };
        localStorage.setItem("contactFormData", JSON.stringify(formData));

        alert("Your message has been saved successfully!");
        contactForm.reset();
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        return re.test(String(email).toLowerCase());
    }

});

