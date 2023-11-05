async function pickNewColor() {
  let result = null;
  try {
    const ed = new EyeDropper();
    result = await ed.open();
  } catch (e) {
    // Silently fail, the user has canceled the pick.
    document.body.innerHTML = e;
    return;
  }

  if (result) {
    const color = result.sRGBHex;
    addColor(color);
  }
}

function addColor(color) {
  console.log("Retrieved color: ", color);
  const colorText = document.getElementById('colorText');
  const colorSwatch = document.getElementById('colorSwatch')
  var lower = document.getElementById('lower')
  lower.style.display="block";
  colorText.textContent = color;
  colorSwatch.style.backgroundColor = color;
  unCopyColor();
}

function copyColor() {
  var text = document.getElementById('colorText');
  console.log("Copied color: ", text);
  navigator.clipboard.writeText(text.innerHTML);

  var copyButton = document.getElementById('copy-button');
  copyButton.innerHTML = "Copied!";
}

function unCopyColor() {
  var copyButton = document.getElementById('copy-button');
  copyButton.innerHTML = "Copy to Clipboard";
}

var el = document.getElementById('start-button');
  if (el) {
    el.addEventListener('click', pickNewColor);
  }

var copy = document.getElementById('copy-button');
if (copy) {
  copy.addEventListener('click', copyColor);
}
