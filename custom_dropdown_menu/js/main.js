const dropdownBx = document.querySelector('.dropdown-bx');
const option = document.querySelector('.option');
dropdownBx.onclick = function () {
    this.classList.toggle('active');
    option.classList.toggle('active')
}