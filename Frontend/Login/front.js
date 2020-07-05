var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      $( this ).find("img").attr("src", "down.png");
    } else {
      content.style.display = "block";
      $( this).find("img").attr("src", "up.png");
    }
  });
}