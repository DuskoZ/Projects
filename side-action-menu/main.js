const navigation = document.querySelector(".navigation");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
});
