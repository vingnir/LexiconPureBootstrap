document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navigation").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navigation").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

function expand() {
  var content = document.getElementById("content");
  var heightContent = document.getElementById("content").offsetHeight;
  if (heightContent == "600") {
    content.style.height = "1000px";
  } else {
    content.style.height = "600px";
  }
}
