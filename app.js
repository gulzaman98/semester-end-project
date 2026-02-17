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
    $("#animals").click(function (e) {
        e.preventDefault();
        loadpage("animals")
    })

    $("#flower").click(function (e) {
        e.preventDefault();
        loadpage("flower")
    })
    $("#birds").click(function (e) {
        e.preventDefault();
        loadpage("birds")
    })
    $("#fish").click(function (e) {
        e.preventDefault();
        loadpage("fish")
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

    $(document).on("click", "#backanimals", function () {
        loadpage("animals");
    })
    $(document).on("click", "#backflower", function () {
        loadpage("flower");
    })

    $(document).on("click", "#backbirds", function () {
        loadpage("birds");
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

$(document).on("submit", "#contactForm", function (e) {

    e.preventDefault();

    let isValid = true;

    let uName = $("#name").val().trim();
    let uEmail = $("#email").val().trim();
    let uMsg = $("#message").val().trim();

    let uNameRE = /^[A-Za-z]{3,}$/;
    let uEmailRE = /^[a-z0-9._%+-]+@gmail\.com$/;
    let uMsgRE = /^[A-Za-z\s]{5,}$/;

    $("small").text("").hide();
    $("input, textarea").css("border", "1px solid #ccc");

    // NAME
    if (!uNameRE.test(uName)) {
        $("#name").css("border", "1px solid red")
            .next("small")
            .text("Allow only A-Z a-z and minimum 3 letters")
            .css("color", "red")
            .show();
        isValid = false;
    }

    // EMAIL
    if (!uEmailRE.test(uEmail) || uEmail.includes("..")) {
        $("#email").css("border", "1px solid red")
            .next("small")
            .text("Please enter correct Gmail")
            .css("color", "red")
            .show();
        isValid = false;
    }

    // MESSAGE
    if (!uMsgRE.test(uMsg)) {
        $("#message").css("border", "1px solid red")
            .next("small")
            .text("No special characters allowed")
            .css("color", "red")
            .show();
        isValid = false;
    }

    if (isValid) {

        //  Old data get karo (agar pehle se hai)
        let contactList = JSON.parse(localStorage.getItem("contactData")) || [];

        //  Object banao
        let contactObj = {
            name: uName,
            email: uEmail,
            message: uMsg,
            date: new Date().toLocaleString()
        };

        //  Push new data
        contactList.push(contactObj);

        //  Save back to localStorage
        localStorage.setItem("contactData", JSON.stringify(contactList));

        alert("Your message is successfully saved");

        this.reset();
    }

});




// Feed Back Page

// FEEDBACK VALIDATION (AJAX SAFE)
$(document).on("submit", "#feedbackForm", function (e) {

    e.preventDefault();

    let isValid = true;

    let name = $("#fbName").val().trim();
    let email = $("#fbEmail").val().trim();
    let subject = $("#fbSubject").val().trim();
    let message = $("#fbMessage").val().trim();

    let nameRE = /^[A-Za-z\s]{3,}$/;
    let emailRE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let subjectRE = /^[A-Za-z\s]{3,}$/;
    let messageRE = /^[A-Za-z\s]{5,}$/;

    $("#feedbackForm small").text("").hide();
    $("#feedbackForm input, #feedbackForm textarea")
        .css("border", "1px solid #ccc");

    if (!nameRE.test(name)) {
        $("#fbName").css("border", "1px solid red")
            .next("small")
            .text("Allow only A-Z a-z and minimum 3 letters")
            .css("color", "red")
            .show();
        isValid = false;
    }

    if (!emailRE.test(email) || email.includes("..")) {
        $("#fbEmail").css("border", "1px solid red")
            .next("small")
            .text("Please enter correct email")
            .css("color", "red")
            .show();
        isValid = false;
    }

    if (!subjectRE.test(subject)) {
        $("#fbSubject").css("border", "1px solid red")
            .next("small")
            .text("Special characters not allowed")
            .css("color", "red")
            .show();
        isValid = false;
    }

    if (!messageRE.test(message)) {
        $("#fbMessage").css("border", "1px solid red")
            .next("small")
            .text("Special characters not allowed")
            .css("color", "red")
            .show();
        isValid = false;
    }

    if (isValid) {

        //  Step 1: Old data get karo
        let feedbackList = JSON.parse(localStorage.getItem("feedbackData")) || [];

        //  Step 2: Object banao
        let feedbackObj = {
            name: name,
            email: email,
            subject: subject,
            message: message,
            date: new Date().toLocaleString()
        };

        // Step 3: Push new object
        feedbackList.push(feedbackObj);

        //  Step 4: Save back
        localStorage.setItem("feedbackData", JSON.stringify(feedbackList));

        alert("Your feedback is successfully saved in local storage");

        this.reset();
    }

});





// MODAL WORK (AJAX SAFE VERSION)

let origamiData = [];

fetch('data.json')
    .then(res => res.json())
    .then(data => origamiData = data);

$(document).on('click', '.origami-card', function () {

    let id = $(this).data('id');
    let item = origamiData.find(x => x.id == id);

    if (item) {
        $('#modalImage').attr('src', item.image);
        $('#modalTitle').text(item.title);
        $('#modalDesc').text(item.description);

        $('#origamiModal').fadeIn();
    }

});

$(document).on('click', '.modal-close, .modal-overlay', function () {
    $('#origamiModal').fadeOut();
});







