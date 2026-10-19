
const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("ratingText");
const resetBtn = document.getElementById("resetBtn");

let selectedRating = 0;

const ratingMessages = {
    1: "Poor 😞",
    2: "Fair 😐",
    3: "Good 🙂",
    4: "Very Good 😃",
    5: "Excellent 🤩"
};

function displayStars(rating, className) {
    stars.forEach(star => {
        const value = Number(star.dataset.value);
        star.classList.toggle(className, value <= rating);
    });
}

function clearHover() {
    stars.forEach(star => star.classList.remove("hovered"));
}

stars.forEach(star => {
    star.addEventListener("mouseenter", () => {
        clearHover();
        displayStars(Number(star.dataset.value), "hovered");
    });

    star.addEventListener("focus", () => {
        clearHover();
        displayStars(Number(star.dataset.value), "hovered");
    });

    star.addEventListener("click", () => {
        selectedRating = Number(star.dataset.value);

        clearHover();
        displayStars(selectedRating, "active");

        ratingText.textContent =
            `You rated ${selectedRating}/5 — ${ratingMessages[selectedRating]}`;
    });

    star.addEventListener("blur", clearHover);
});

document.getElementById("stars").addEventListener("mouseleave", () => {
    clearHover();
});

resetBtn.addEventListener("click", () => {
    selectedRating = 0;

    stars.forEach(star => {
        star.classList.remove("active", "hovered");
    });

    ratingText.textContent = "No rating selected yet";
});
