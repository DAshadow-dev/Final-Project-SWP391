document.addEventListener("DOMContentLoaded", function () {
    const profile = document.querySelector(".profile");
    const dropdownMenu = document.getElementById("dropdownMenu");

    profile.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show-menu");
    });

    window.addEventListener("click", function (event) {
        if (!event.target.matches(".profile") && !event.target.matches(".profile *")) {
            dropdownMenu.classList.remove("show-menu");
        }
    });
});
