var loadFile = function (event) {
  var output = document.getElementById("canvas");
  output.src = URL.createObjectURL(event.target.files[0]);
  setBackgound(
    output.src,
    canvas,
    (output.onload = function () {
      URL.revokeObjectURL(output.src);
    })
  ),
    {
      width: 500,
      height: 500,
    };
};

const setBackgound = (url, canvas) => {
  fabric.Image.fromURL(url, (img) => {
    canvas.backgroundImage = img;
    canvas.renderAll();
    canvas.width;
    canvas.height;
  });
};

const initCanvas = (id) => {
  return new fabric.Canvas(id, {
    width: 500,
    height: 500,
  });
};

const canvas = initCanvas("canvas");

canvas.on("mouse:wheel", function (opt) {
  var delta = opt.e.deltaY;
  var zoom = canvas.getZoom();
  zoom *= 0.999 ** delta;
  if (zoom > 20) zoom = 20;
  if (zoom < 0.01) zoom = 0.01;
  canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
  opt.e.preventDefault();
  opt.e.stopPropagation();
});
