document.addEventListener('DOMContentLoaded', function() {

  fetch('footer.xml')
  .then(response => response.text())
  .then(xmlString => {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(xmlString, 'text/xml');

      // Получение данных из XML
      let about = xmlDoc.querySelector('about');
      let education = xmlDoc.querySelector('education');
      let socialIcons = xmlDoc.querySelectorAll('social-icons a');

      // Заполнение данными элементов на странице
      document.getElementById('about').innerHTML += `
          <p>${about.querySelector('name').textContent}</p>
          <p>${about.querySelector('phone').textContent}</p>
          <p>${about.querySelector('email').textContent}</p>
      `;
      document.getElementById('education').innerHTML += `
          <p>${education.querySelector('university').textContent}</p>
          <p>Группа ${education.querySelector('group').textContent}, Курс ${education.querySelector('course').textContent}</p>
      `;
      socialIcons.forEach(icon => {
          document.getElementById('social-icons').innerHTML += `
              <a href="${icon.getAttribute('href')}"><img src="${icon.querySelector('img').getAttribute('src')}" alt="${icon.querySelector('img').getAttribute('alt')}" width="30" height="30"></a>
          `;
      });
  })
  .catch(error => console.error('Ошибка загрузки XML:', error));
  
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


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".poster__container img");
  let index = 0;

  setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
  }, 10000);
});

document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector(".gallery");
  const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
  const visibleItems = 5;
  const totalItems = galleryItems.length;
  const itemWidth = 100 / visibleItems;
  let currentIndex = 0;

  for (let i = 0; i < visibleItems + 2; i++) {
    const cloneIndex = i % totalItems;
    const clone = galleryItems[cloneIndex].cloneNode(true);
    gallery.appendChild(clone);
  }

  const clonedItems = Array.from(document.querySelectorAll(".gallery-item"));

  function slideTo(index) {
    const translateX = -itemWidth * index;
    gallery.style.transform = "translateX(" + translateX + "%)";
    currentIndex = index;
  }

  function showNext() {
    if (currentIndex < totalItems + 1) {
      slideTo(currentIndex + 1);
    } else {
      slideTo(1);
    }
  }

  function showPrev() {
    if (currentIndex > 0) {
      slideTo(currentIndex - 1);
    } else {
      slideTo(totalItems);
    }
  }

  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  prevButton.addEventListener("click", showPrev);
  nextButton.addEventListener("click", showNext);
});


document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.button-a');
  const sets = document.querySelectorAll('.gallery-tri-knopki > div');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');

      sets.forEach(set => {
        if (set.classList.contains('set-' + target)) {
          set.style.display = 'flex';
        } else {
          set.style.display = 'none';
        }
      });
    });
  });
});