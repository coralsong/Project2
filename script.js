const filterButtons = document.querySelectorAll(".panels button, .panels img[role='button']");

function toggleFilter(control) {
    const panel = control.closest("section");
    const filterIsOn = panel.classList.toggle("filter-on");

    control.setAttribute("aria-pressed", String(filterIsOn));

    if (control.dataset.onSrc && control.dataset.offSrc) {
        control.src = filterIsOn ? control.dataset.onSrc : control.dataset.offSrc;
    }
}

filterButtons.forEach((button) => {
    if (button.tagName !== "BUTTON" && !button.hasAttribute("tabindex")) {
        button.setAttribute("tabindex", "0");
    }

    button.addEventListener("click", () => {
        toggleFilter(button);
    });

    button.addEventListener("keydown", (event) => {
        if (button.tagName === "BUTTON") {
            return;
        }

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleFilter(button);
        }
    });
});
