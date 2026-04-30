const url = localStorage.getItem("lectureLink");

let pdfDoc = null;
let pageNum = 1;
let scale = 1.5;
let canvas = document.getElementById("pdf-canvas");
let ctx = canvas.getContext("2d");

function renderPage(num) {
  pdfDoc.getPage(num).then(function (page) {
    const viewport = page.getViewport({ scale });

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };

    page.render(renderContext);

    document.getElementById("page-num").textContent = num;
  });
}

pdfjsLib.getDocument(url).promise.then(function (pdf) {
  pdfDoc = pdf;

  document.getElementById("page-count").textContent = pdf.numPages;

  renderPage(pageNum);
});

function nextPage() {
  if (pageNum >= pdfDoc.numPages) return;
  pageNum++;
  renderPage(pageNum);
}

function prevPage() {
  if (pageNum <= 1) return;
  pageNum--;
  renderPage(pageNum);
}

function zoomIn() {
  scale += 0.2;
  renderPage(pageNum);
}

function zoomOut() {
  if (scale <= 0.4) return;
  scale -= 0.2;
  renderPage(pageNum);
}
