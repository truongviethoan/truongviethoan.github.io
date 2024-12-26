'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// giới hạn số dòng ở card text
// Chọn tất cả các nút "Read More" có class "toggle"
document.querySelectorAll('.toggle').forEach(function(button) {
  button.addEventListener('click', function() {
    var content = this.previousElementSibling; // Lấy thẻ p (phần nội dung) phía trước nút
    var toggleText = this;

    // Kiểm tra xem nội dung đã mở rộng hay chưa
    if (content.classList.contains('show-more')) {
      content.classList.remove('show-more');
      toggleText.innerText = "Show More";  // Đổi lại thành "Show More"
    } else {
      content.classList.add('show-more');
      toggleText.innerText = "Collapse";  // Đổi thành "Show Less"
    }
  });
});
// kết thúc giới hạn từ ở card text