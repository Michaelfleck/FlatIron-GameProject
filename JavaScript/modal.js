function showModal() {
    document.querySelectorAll("*")
        .forEach((e) => e.style.backgroundImage = "url(\"https://cultofthepartyparrot.com/parrots/hd/congaparrot.gif\")");
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    showParrot = document.getElementsByClassName("modal-content");
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
