const feature = document.querySelector('.feature');
const company = document.querySelector('.company');
const featureDropdown = document.querySelector('.feature-dropdown');
const companyDropdown = document.querySelector('.company-dropdown');
const openArrow = document.querySelector('.open');
const closeArrow = document.querySelector('.close');
const companyOpenArrow = document.querySelector('.cmp-open-arrow');
const companyCloseArrow = document.querySelector('.cmp-close-arrow')

feature.addEventListener("click", () => {
    featureDropdown.classList.remove('hidden');
    openArrow.style.display = "none"
    closeArrow.style.display = "inline"
})

company.addEventListener("click", () => {
    companyDropdown.classList.remove('hidden');
    companyOpenArrow.style.display = "none"
    companyCloseArrow.style.display = "inline"
})
