var popup = document.querySelector(".modal.contact-us");
var backgroundChanger = document.querySelector(".popup-main-background-changer");
var showPopupLink = document.querySelector(".button.contact-us-link");
var closeContactUs = popup.querySelector(".close-button");
var contactUsTextArea = popup.querySelector(".form-message-field");
var defaultTextareaValue = "Напишите что-нибудь...";
var contactUsInputFields = document.querySelectorAll(".contact-us-field");
var contactUsForm = popup.querySelector(".contact-us-form");
var promoSliders = document.querySelectorAll(".promos-list-item");
var promoSlidersControls = document.querySelectorAll(".promos-slider-control > li");
var body = document.querySelector("body");
var chosenColor = "";

var sliderControlsClickHandler = function(sliderControl, slides, selectedSlide, sliderControls) {
    sliderControl.addEventListener("click", function() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("hidden-slide");   
            slides[i].classList.add("hidden-slide");
        }

        for(i = 0; i < sliderControls.length; i++) {
            sliderControls[i].querySelector(".slider-button").classList.remove("selected-slide");            
        }

        body.classList.remove("green-background");
        body.classList.remove("blue-background");
        body.classList.remove("brown-background");

        selectedSlide.classList.remove("hidden-slide");
        sliderControl.querySelector(".slider-button").classList.add("selected-slide");

        if (selectedSlide.classList.contains("green-background")) {
            body.classList.add("green-background");
        }
        if (selectedSlide.classList.contains("blue-background")) {
            body.classList.add("blue-background");
        }
        if (selectedSlide.classList.contains("brown-background")) {
            body.classList.add("brown-background");
        }
    })
}

for (var i = 0; i < promoSlidersControls.length; i++) {
    sliderControlsClickHandler(promoSlidersControls[i], promoSliders, promoSliders[i], promoSlidersControls, promoSlidersControls)
}

showPopupLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("show-popup");
    backgroundChanger.classList.add("show-background");
});

popup.addEventListener("submit", function(evt) {
    for (var i = 0; i < contactUsInputFields.length; i++) {
        if (contactUsInputFields[i].value == "") {
            evt.preventDefault();
            contactUsInputFields[i].classList.add("input-error");            
        }
    }

    setTimeout(function(){
        for (var i = 0; i < contactUsInputFields.length; i++) {            
            contactUsInputFields[i].classList.remove("input-error");            
        }
    }, 1000);
});

closeContactUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("show-popup");
    backgroundChanger.classList.remove("show-background");
    contactUsTextArea.value = defaultTextareaValue;
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove("show-popup");
        backgroundChanger.classList.remove("show-background");
        contactUsTextArea.value = defaultTextareaValue;
    }
});

backgroundChanger.addEventListener("click", function(evt) {
    popup.classList.remove("show-popup");
    backgroundChanger.classList.remove("show-background");
});

contactUsTextArea.addEventListener("focus", function(evt) {    
    if(contactUsTextArea.value === defaultTextareaValue) {
        contactUsTextArea.value = "";
    };
});