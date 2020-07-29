
function generateQRCode() {
  let data = document.getElementById("getqr").value;
  eel.generate_qr(data) (setImage)
}

function setImage(base64) {  
  document.getElementById('qr').src = base64;
}