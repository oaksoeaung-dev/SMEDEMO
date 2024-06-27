let displayDetailImage = document.getElementById("display-detail-image");
let detailImages = document.querySelectorAll(".detail-image");
let selectDetailImage = null;

detailImages.forEach((image) => {
    image.addEventListener("click", () => {
        if (selectDetailImage) {
            selectDetailImage.classList.remove("shadow-lg");
            selectDetailImage.classList.remove("border-2");
        }
        displayDetailImage.src = image.src;
        selectDetailImage = image;
        selectDetailImage.classList.add("shadow-lg");
        selectDetailImage.classList.add("border-2");
    });
});

let colorImages = document.querySelectorAll(".color-image");
let selectColorImage = null;

colorImages.forEach((image) => {
    image.addEventListener("click", () => {
        if (selectColorImage) {
            selectColorImage.classList.remove("shadow-lg");
            selectColorImage.classList.remove("border-2");
        }
        selectColorImage = image;
        selectColorImage.classList.add("shadow-lg");
        selectColorImage.classList.add("border-2");
    });
});
