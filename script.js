function checkForm() {
    const pnr = document.getElementById("pnr").value.trim();
    const captcha = document.getElementById("captcha").value.trim();
  
    if (pnr === "GN8721" && captcha === "9") {
      document.getElementById("result").innerHTML = `
        <h3>BOARDING PASS</h3>
        <p>Name: Ülfet Yaylacı</p>
        <p>Flight: TK1974</p>
        <p>From: Ankara Esenboğa Airport</p>
        <p>To: 34.712312663057396, 32.488674181150074</p>
        <p>Date: 2025-05-31</p>
        <p>Time: 01:30</p>
        <p>Seat: 18A</p>
        <p>Gate: B7</p>
        <p>Boarding Time: 01.00</p>
      `;
    } else {
      alert("Hatalı PNR veya CAPTCHA.");
    }
  
    return false; // Sayfa yenilenmesin
  }