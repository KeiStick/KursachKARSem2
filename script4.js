document.addEventListener("DOMContentLoaded", function() {
    let currentImageIndex = 0;
    const images = ["../Новая папка/img/карточка2-1.webp", "../Новая папка/img/карточка2-2.webp", "../Новая папка/img/карточка2-3.webp", "../Новая папка/img/карточка2-4.webp", "../Новая папка/img/карточка2-5.webp"];
  
    function changeImage(direction) {
      if (direction === 'left') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      } else {
        currentImageIndex = (currentImageIndex + 1) % images.length;
      }
      document.querySelector('.custom-product-image').src = images[currentImageIndex];
    }
  
    document.getElementById("showMenuBtn").addEventListener("click", function() {
      var menu = document.getElementById("menu");
      var overlay = document.getElementById("overlay");
  
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        overlay.style.display = "block";
      } else {
        menu.style.display = "none";
        overlay.style.display = "none";
      }
    });
  
    document.getElementById("openMenuBtn").addEventListener("click", function() {
      var popupMenu = document.getElementById("popupMenu");
  
      if (popupMenu.style.display === "none" || popupMenu.style.display === "") {
        popupMenu.style.display = "block";
      } else {
        popupMenu.style.display = "none";
      }
    });
  
    document.getElementById("cashCheckbox").addEventListener("change", function() {
      var cardNumberInput = document.getElementById("cardNumber");
      if (this.checked) {
        cardNumberInput.disabled = true;
        cardNumberInput.value = ""; // Очистим поле, если оно было заполнено
      } else {
        cardNumberInput.disabled = false;
      }
    });
  });
  