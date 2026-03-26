const reviews = [
  {
    text: "Deri dokusu fotoğraftan bile kaliteli görünüyordu; ürün gelince beklentimin üstüne çıktı. Hafif, şık ve günlük kullanımda çok konforlu.",
    author: "Zeliha Karakoca"
  },
  {
    text: "Night Out serisinden aldığım çanta, hem gece kombinlerinde hem özel davetlerde harika duruyor. Dikiş kalitesi gerçekten premium.",
    author: "Filiz Değirmenci"
  },
  {
    text: "Paketleme, malzeme kalitesi ve müşteri iletişimi çok özenliydi. Uzun süredir aradığım zamansız modeli sonunda buldum.",
    author: "Selin Acar"
  },
  {
    text: "Everyday modeli iş günlerinde kurtarıcım oldu. İç hacmi ideal ve taşıması çok rahat. Minimal ama güçlü bir duruşu var.",
    author: "Nazlı Ertem"
  },
  {
    text: "Festival koleksiyonundan aldığım çanta her yere eşlik ediyor. Renkler canlı, deri kokusu harika ve dikişler kusursuz.",
    author: "Ayşe Demirtaş"
  }
];

let currentReview = 0;

const reviewText = document.querySelector("#reviewText");
const reviewAuthor = document.querySelector("#reviewAuthor");
const prevBtn = document.querySelector("#prevReview");
const nextBtn = document.querySelector("#nextReview");
const dotsContainer = document.querySelector("#sliderDots");

function buildDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = "";
  reviews.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot" + (i === currentReview ? " active" : "");
    dot.setAttribute("aria-label", `Yorum ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  if (!dotsContainer) return;
  const dots = dotsContainer.querySelectorAll(".slider-dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentReview);
  });
}

function renderReview(index) {
  if (!reviewText || !reviewAuthor) return;
  reviewText.textContent = "\u201C" + reviews[index].text + "\u201D";
  reviewAuthor.textContent = "\u2014 " + reviews[index].author;
  updateDots();
}

function goTo(index) {
  currentReview = index;
  renderReview(currentReview);
}

function stepReview(delta) {
  currentReview = (currentReview + delta + reviews.length) % reviews.length;
  renderReview(currentReview);
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => stepReview(-1));
  nextBtn.addEventListener("click", () => stepReview(1));
}

buildDots();
renderReview(currentReview);
