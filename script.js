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
  }
];

let currentReview = 0;

const reviewText = document.querySelector("#reviewText");
const reviewAuthor = document.querySelector("#reviewAuthor");
const prevReview = document.querySelector("#prevReview");
const nextReview = document.querySelector("#nextReview");
const reviewDots = document.querySelector("#reviewDots");

function renderReview(index) {
  if (!reviewText || !reviewAuthor) {
    return;
  }
  reviewText.textContent = `"${reviews[index].text}"`;
  reviewAuthor.textContent = `— ${reviews[index].author}`;
  if (reviewDots) {
    [...reviewDots.children].forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
    });
  }
}

function stepReview(delta) {
  currentReview = (currentReview + delta + reviews.length) % reviews.length;
  renderReview(currentReview);
}

if (prevReview && nextReview) {
  prevReview.addEventListener("click", () => stepReview(-1));
  nextReview.addEventListener("click", () => stepReview(1));
}

if (reviewDots) {
  reviews.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.setAttribute("aria-label", `${index + 1}. yorumu göster`);
    dot.addEventListener("click", () => {
      currentReview = index;
      renderReview(currentReview);
    });
    reviewDots.appendChild(dot);
  });
}

renderReview(currentReview);
