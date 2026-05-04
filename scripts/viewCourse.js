const url = localStorage.getItem("lectureLink");

let pdfDoc = null;
let pageNum = 1;
let zoom = 1;
let canvas = document.getElementById("pdf-canvas");
let ctx = canvas.getContext("2d");

function renderPage(num) {
  pdfDoc.getPage(num).then(function (page) {
    const container = document.getElementById("viewer-container"); // parent div
    const containerWidth = container.clientWidth;

    const viewport = page.getViewport({ scale: 1 });
    const scale = containerWidth / viewport.width;

    const scaledViewport = page.getViewport({ scale });

    const outputScale = window.devicePixelRatio || 1;

    canvas.width = scaledViewport.width * outputScale;
    canvas.height = scaledViewport.height * outputScale;

    canvas.style.width = scaledViewport.width + "px";
    canvas.style.height = scaledViewport.height + "px";

    ctx.setTransform(outputScale, 0, 0, outputScale, 0, 0);

    const renderContext = {
      canvasContext: ctx,
      viewport: scaledViewport,
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
  zoom += 0.2;
  renderPage(pageNum);
}

function zoomOut() {
  if (zoom <= 0.4) return;
  zoom -= 0.2;
  renderPage(pageNum);
}
