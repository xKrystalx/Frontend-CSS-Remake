function gallerySlideIn(){
    var galleryOverlay = event.target.parentElement.childNodes[1];
    galleryOverlay.classList.add("slide-in");
    console.log("in");
}

function gallerySlideOut(){
    var galleryOverlay = event.target.parentElement;
    galleryOverlay.classList.remove("slide-in");
    console.log(galleryOverlay);
    console.log("out");
}

function gallerySlideToggle(){
    var galleryOverlay = event.target.parentElement.childNodes[1];
    if(galleryOverlay.classList.contains("slide-in")){
        galleryOverlay.classList.remove("slide-in");
    }
    galleryOverlay.classList.add("slide-in");
}

function init(){
    // var images = document.getElementsByTagName("img");
    // for(image of images){
    //     image.addEventListener("mousedown", onImageClick, false);
    // }
}

function onImageClick(){
    console.log("xd");
    var overlay = document.getElementById("overlay-image");
    var el = document.createElement("div");
    el.classList.add("overlay-image");
    el.style.backgroundImage = "url("+ event.target.src + ")";

    var img = new Image();
    img.src = event.target.src;

    el.style.width = img.width+"px";
    el.style.height = img.height+"px";

    overlay.appendChild(el);

    overlay.style.visibility = "visible";
    overlay.style.backgroundColor = "rgba(50,50,50,0.25)";

    
}

function onOverlayClick(){
    var overlay = document.getElementById("overlay-image");
    overlay.style.backgroundColor = "rgba(50,50,50,0.0)";
    overlay.style.visibility = "hidden";
    overlay.innerHTML = "";
}

function scrollToSection(){
    console.log("xd");
    var dest = event.target.getAttribute("data-scroll-destination");
    var el = document.querySelector(dest);
    el.scrollIntoView({behavior: "smooth", block: 'start'});
}