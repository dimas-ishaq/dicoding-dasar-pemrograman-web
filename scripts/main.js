// membuat menu navbar block
const hamburger = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');
const closeButton = document.querySelector('.close-button')

hamburger.addEventListener('click',  () => {
    menuItems.classList.toggle('active');
});
closeButton.addEventListener('click',  () => {
    menuItems.classList.remove('active');
});

function modalImg(clicked_id) {
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(`${clicked_id}`);
    var modalImg = document.getElementById("img-content");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}
