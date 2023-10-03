let cards = document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        let x = e.offsetX;
        let y = e.offsetY;

        let cardWidth = card.clientWidth;
        let cardHeight = card.clientHeight;

        let transX = x - cardWidth / 2;
        let transY = y - cardHeight / 2;

        card.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
        card.style.backgroundPositionX = -x / 2 + "px";
        card.style.backgroundPositionY = -y / 2 + "px";
    });

    card.addEventListener("mouseout", (e) => {
        card.style.transform = ``;
        card.style.backgroundPositionX = "";
        card.style.backgroundPositionY = "";
    });
});
