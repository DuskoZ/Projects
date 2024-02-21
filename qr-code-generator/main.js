const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");
let preValue;

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
