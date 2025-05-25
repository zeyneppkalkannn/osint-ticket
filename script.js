let correctCaptcha = 0;

window.onload = function () {
  generateCaptcha();
};

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  correctCaptcha = a + b;
  document.getElementById("captcha-question").innerText = `CAPTCHA: ${a} + ${b} =`;
}

function checkForm() {
  const pnr = document.getElementById("pnr").value.trim();
  const captcha = document.getElementById("captcha").value.trim();

  if (pnr === "" || captcha === "") {
    alert("Lütfen tüm alanları doldurun.");
    return false;
  }

  if (pnr === "GN8721" && parseInt(captcha) === correctCaptcha) {
    document.getElementById("result").innerHTML = `
      <h3>BOARDING PASS</h3>
      <p><strong>Name:</strong> Ülfet Yaylacı</p>
      <p><strong>Flight:</strong> TK1974</p>
      <p><strong>From:</strong> Ankara Esenboğa Airport</p>
      <p><strong>To:</strong> 34.712312663057396, 32.488674181150074</p>
      <p><strong>Date:</strong> 2025-05-31</p>
      <p><strong>Time:</strong> 01:30</p>
      <p><strong>Seat:</strong> 18A</p>
      <p><strong>Gate:</strong> B7</p>
      <p><strong>Boarding Time:</strong> 01:00</p>
    `;
  } else {
    alert("Hatalı PNR veya CAPTCHA.");
    document.getElementById("result").innerHTML = "";
    generateCaptcha(); // Yanlış girişte yeni CAPTCHA oluştur
  }

  return false; // Sayfa yenilenmesin
}
