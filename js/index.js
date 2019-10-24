const menuEl = document.querySelector('#drawerNav')

function closeNav() {
    menuEl.style.width = '0';
}

function openNav() {
    menuEl.style.width = '100%';
}