function expand() {
  var content = document.getElementById("content");
  var heightContent = document.getElementById("content").offsetHeight;
  if (heightContent == "600") {
    content.style.height = "1000px";
  } else {
    content.style.height = "600px";
  }
}
