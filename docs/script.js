function toggleMode() {
    document.body.classList.toggle('mode-berantakan');
}

document.querySelectorAll("h3").forEach((header) => {
    header.addEventListener("click", () => {
        const confirmation = confirm("Ingin menyembunyikan konten?");
        if (confirmation) {
            const content = header.nextElementSibling;
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }
    });
});
