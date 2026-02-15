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




// MODAL WORK 
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







