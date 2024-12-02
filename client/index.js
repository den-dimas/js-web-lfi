const viewPdfBtn = document.querySelector("#view-pdf-btn");

viewPdfBtn.addEventListener("click", () => {
  window.open("http://localhost:5000/journal?filename=journal1.pdf")
});