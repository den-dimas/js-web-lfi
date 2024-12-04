const viewPdfBtn = document.querySelector("#view-pdf-btn");

viewPdfBtn.addEventListener("click", () => {
  window.open("http://10.10.10.155:5000/journal?filename=journal1.pdf")
});
