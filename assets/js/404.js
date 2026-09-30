function createGlitter() {

    const glitter = document.createElement("span");

    const colors = [
        "#d4af37", // gold
        "#9b7fc7", // purple
        "#e7a6c7"  // pink
    ];

    const symbols = ["✦", "✧", "⋆"];

    glitter.classList.add("falling-glitter");

    glitter.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    glitter.style.color =
        colors[Math.floor(Math.random() * colors.length)];

    glitter.style.left =
        Math.random() * 100 + "vw";

    glitter.style.fontSize =
        (8 + Math.random() * 12) + "px";

    const duration = 5 + Math.random() * 4;

    glitter.style.animationDuration =
        duration + "s";

    document.body.appendChild(glitter);

    setTimeout(() => {
        glitter.remove();
    }, duration * 1000);
}

setInterval(createGlitter, 220);