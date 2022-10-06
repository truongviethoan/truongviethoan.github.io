// tạo hiệu ứng collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
// đổi màu bg khi cuộn xuống
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    nav.classList.add('active_nav');
  } else {
    nav.classList.remove('active_nav');
  }
})