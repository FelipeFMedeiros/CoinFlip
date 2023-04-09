// Puxando elementos do .html
let Dolar = 0;
let Coroa = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let totalDolar = 0; // quantidade total de vezes que caiu Dolar
let totalCoroa = 0; // quantidade total de vezes que caiu Coroa
let dolarCount = document.querySelector("#Dolar-count");
let coroaCount = document.querySelector("#Coroa-count");
let stats = document.querySelector(".stats");

// Evento que aleatoriza se cai cara ou coroa
flipBtn.addEventListener("click", () => {
  coin.style.animation = "fix-Bug 1s";
  let i = Math.floor(Math.random() * 2);

  // Resetar animações
  //coin.style.animation = "none";
  dolarCount.style.animation = "none";
  coroaCount.style.animation = "none";

  setTimeout(function () {
    if (i) {
      coin.style.animation = "spin-Dolar 3s forwards"; // Animação que termina no dólar
      Dolar++;
      totalDolar++;
      setTimeout(function () {
        console.log(`Caiu Dolar!`);
        dolarCount.style.animation = "stats 1.5s forwards";
      }, 3200);
    } else {
      coin.style.animation = "spin-Coroa 3s forwards"; // Animação que termina na coroa
      Coroa++;
      totalCoroa++;
      setTimeout(function () {
        console.log(`Caiu Coroa!`);
        coroaCount.style.animation = "stats 1.5s forwards";
      }, 3200);
    }
  }, 800);
  setTimeout(updateStats, 4000);
  disableResetButton2();
  disableButton();
});

// Função de contagem
function updateStats() {
  stats.style.animation = "none";
  document.querySelector("#Dolar-count").textContent = `Dólar: ${Dolar}`;
  document.querySelector("#Coroa-count").textContent = `Coroa: ${Coroa}`;
  setTimeout(function () {
    //stats.style.animation = "stats 1.5s forwards";
  }, 100);
}

// Função de contagem - Para resetar
function updateStatsReset() {
  dolarCount.style.animation = "none";
  coroaCount.style.animation = "none";
  stats.style.animation = "none";
  setTimeout(function () {
  document.querySelector("#Dolar-count").textContent = `Dólar: ${Dolar}`;
  document.querySelector("#Coroa-count").textContent = `Coroa: ${Coroa}`;
}, 100);
  setTimeout(function () {
    stats.style.animation = "stats- 2.5s forwards";
  }, 100);
}

// Função disable Flip Coin Button
function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 4000);
  flipBtn.style.transform = "none";
  flipBtn.style.boxShadow = "none";
}

function disableResetButton() {
  resetBtn.disabled = true;
  setTimeout(function () {
    resetBtn.disabled = false;
  }, 2000);
  resetBtn.style.transform = "none";
  resetBtn.style.boxShadow = "none";
}
// ResetButton com mais delay
function disableResetButton2() {
  resetBtn.disabled = true;
  setTimeout(function () {
    resetBtn.disabled = false;
  }, 4000);
  resetBtn.style.transform = "none";
  resetBtn.style.boxShadow = "none";
}

// Evento de resetar a contagem
resetBtn.addEventListener("click", () => {
  resetBtn.style.transform = "none";
  Dolar = 0;
  Coroa = 0;
  setTimeout(function () {
    console.log(
      `Contagens resetadas! Foram ${totalDolar} Dolar e ${totalCoroa} Coroa.`
    );
    totalDolar = 0;
    totalCoroa = 0;
  }, 1500);
  setTimeout(updateStatsReset), 2000;
  disableResetButton();
});
