$(document).ready(function () {
  function sendEmail() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    window.open("mailto:gameryyan@gmail.com?subject=" + name + "&body=" + message, "_blank");
  }

  // Get the modal
  let modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  let img = document.getElementsByName("ImgModal");
  let modalImg = document.getElementById("img01");
  let captionText = document.getElementById("caption");
  $(".ImgModal").click(function () {
    console.log("img Modal Di Click");
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
});
