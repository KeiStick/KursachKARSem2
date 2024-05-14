function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
};

document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('openMenuBtn');
    var popupMenu = document.getElementById('popupMenu');
  
    menuButton.onclick = function(event) {
        event.preventDefault(); // Отменяем стандартное действие ссылки
  
        if (popupMenu.style.display === 'block') {
            popupMenu.style.display = 'none';
        } else {
            popupMenu.style.display = 'block';
        }
    };
  });