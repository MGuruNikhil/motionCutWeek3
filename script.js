document.getElementById("navButton").addEventListener('click', function () {
    const button = document.getElementById("navButton");

    const src = button.getAttribute('src');

    if (src === "./assets/menu.png") {
        button.setAttribute("src", "./assets/cancel.png"); //changing the icon on clicking it
        const nav = document.createElement('div');
        nav.innerHTML = `<a href="">Home</a>
        <a href="">Products</a>
        <a href="">About</a>
        <a href="">Contact Us</a>`;
        nav.setAttribute('id', 'navList');
        document.body.appendChild(nav); //appending the vertical navigation list
        setTimeout(() => {
            nav.classList.add('show');
        }, 100);
    } else {
        button.setAttribute("src", "./assets/menu.png"); //changing the icon on clicking it
        const nav = document.getElementById("navList");
        nav.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(nav);
        }, 300);
    }
});