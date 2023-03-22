function rgbToHex(r, g, b) {
  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomSaturatedColor() {
  let rgb = [getRandomInt(255), getRandomInt(255), getRandomInt(255)];

  var max = 0;
  var min = 0;

  if (rgb[0] > rgb[1]) {
    max = rgb[0] > rgb[2] ? 0 : 2;
    min = rgb[1] < rgb[2] ? 1 : 2;
  } else {
    max = rgb[1] > rgb[2] ? 1 : 2;
    var notmax = 1 + (max % 2);
    min = rgb[0] < rgb[notmax] ? 0 : notmax;
  }
  rgb[max] = 255;
  rgb[min] = 0;

  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}
