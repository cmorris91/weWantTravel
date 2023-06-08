var inputEl = document.querySelector(".form-control");
var buttonEl = document.querySelector(".btn");
var lat;
var lng;


buttonEl.addEventListener("click", function(e) {
    e.preventDefault();
    var value = inputEl.value;
    localStorage.setItem("searchValue", value);
    getHotels(value);
    // console.log(value);
    window.location.href = "result.html" 
})



// api key for national park service:jYdOdqzkRhiMMlcFogbKAbOgJL8Kp3dh8r7OOneR 



// api key for open weather map:2ac1259b720a1255fc6e48f2d466be01