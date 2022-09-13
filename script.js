const feature = document.querySelector('.feature');
const company = document.querySelector('.company');
const featureDropdown = document.querySelector('.feature-dropdown');
const companyDropdown = document.querySelector('.company-dropdown');
const openArrow = document.querySelector('.open');
const closeArrow = document.querySelector('.close');
const companyOpenArrow = document.querySelector('.cmp-open-arrow');
const companyCloseArrow = document.querySelector('.cmp-close-arrow')

feature.addEventListener("click", () => {
    featureDropdown.classList.toggle('hidden');
    openArrow.style.display = "none"
    closeArrow.style.display = "inline"
})

company.addEventListener("click", () => {
    companyDropdown.classList.toggle('hidden');
    companyOpenArrow.style.display = "none"
    companyCloseArrow.style.display = "inline"
})

// Mobile view
const menubtn = document.querySelector(".menu");
const sidebar = document.getElementById("sidebar");

menubtn.addEventListener("click", () => {
    menubtn.style.display = "none";
    sidebar.classList.remove = "hide-sidebar";
    sidebar.style.display = "block"
})


// close sidebar mobile
const closeSidebar = document.querySelector(".mobile-close");

closeSidebar.addEventListener("click", () => {
    sidebar.style.display = "none";
    menubtn.style.display = "block";
})