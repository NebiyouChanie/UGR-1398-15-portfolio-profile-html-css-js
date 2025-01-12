const sidebar = document.getElementById("sidebar");
const openSidebar = document.querySelector('.menu-icon');
const closeSidebar = document.querySelector('.close-icon-container');


openSidebar.addEventListener('click', () => {
    sidebar.classList.add('active');  
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');  
});