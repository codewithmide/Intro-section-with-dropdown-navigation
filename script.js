const feature = document.querySelector('.feature');
const company = document.querySelector('.company');
const featureDropdown = document.querySelector('.feature-dropdown');
const companyDropdown = document.querySelector('.company-dropdown');
const openArrow = document.querySelector('.open');
const closeArrow = document.querySelector('.close');

feature.addEventListener("click", () => {
    featureDropdown.classList.remove('hidden');
})

company.addEventListener("click", () => {
    companyDropdown.classList.remove('hidden');
})
