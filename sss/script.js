const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



function ayarlaMaxHeight() {
  var accordionContent = document.querySelector('.accordion button[aria-expanded="true"] + .accordion-content');
  var textContent = accordionContent.querySelector('p'); 

  if (textContent) {
      var textHeight = textContent.offsetHeight; 
      var yeniMaxHeight = textHeight + 'px'; 

      accordionContent.style.maxHeight = yeniMaxHeight;
  }
}


window.addEventListener('load', ayarlaMaxHeight);
window.addEventListener('resize', ayarlaMaxHeight);
