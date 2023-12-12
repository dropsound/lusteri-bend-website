//Footer Template call//

const footer = document.querySelector('.footer')
  fetch('../footer.html')
  .then(res => res.text())
  .then(data => {
    footer.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
  })

  //------------------//

  //-----Grid galery----- https://github.com/jestov/grid-gallery/tree/master //

  const root = document.querySelector("body, html");
const container = document.querySelector('.gg-container');
const images = document.querySelectorAll(".gg-box > img");
const l = images.length;

for(var i = 0; i < l; i++) {
  images[i].addEventListener("click", function(i) {
    var currentImg = this;
    const parentItem = currentImg.parentElement, screenItem = document.createElement('div');
    screenItem.id = "gg-screen";
    container.prepend(screenItem);
    if (parentItem.hasAttribute('data-theme')) screenItem.setAttribute("data-theme", "dark");
    var route = currentImg.src;
    root.style.overflow = 'hidden';
    screenItem.innerHTML = '<div class="gg-image"></div><div class="gg-close gg-btn">&times</div><div class="gg-next gg-btn">&rarr;</div><div class="gg-prev gg-btn">&larr;</div>';
    const first = images[0].src, last = images[l-1].src;
    const imgItem = document.querySelector(".gg-image"), prevBtn = document.querySelector(".gg-prev"), nextBtn = document.querySelector(".gg-next"), close = document.querySelector(".gg-close");
    imgItem.innerHTML = '<img src="' + route + '">';

    if (l > 1) {
      if (route == first) {
        prevBtn.hidden = true;
        var prevImg = false;
        var nextImg = currentImg.nextElementSibling;
      }
      else if (route == last) {
        nextBtn.hidden = true;
        var nextImg = false;
        var prevImg = currentImg.previousElementSibling;
      }
      else {
        var prevImg = currentImg.previousElementSibling;
        var nextImg = currentImg.nextElementSibling;
      }
    }
    else {
      prevBtn.hidden = true;
      nextBtn.hidden = true;
    }

    screenItem.addEventListener("click", function(e) {
      if (e.target == this || e.target == close) hide();
    });

    root.addEventListener("keydown", function(e) {
      if (e.keyCode == 37 || e.keyCode == 38) prev();
      if (e.keyCode == 39 || e.keyCode == 40) next();
      if (e.keyCode == 27 ) hide();
    });

    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);

    function prev() {
      prevImg = currentImg.previousElementSibling;
      imgItem.innerHTML = '<img src="' + prevImg.src + '">';
      currentImg = currentImg.previousElementSibling;
      var mainImg = document.querySelector(".gg-image > img").src;
      nextBtn.hidden = false;
      prevBtn.hidden = mainImg === first;
    };

    function next() {
      nextImg = currentImg.nextElementSibling;
      imgItem.innerHTML = '<img src="' + nextImg.src + '">';
      currentImg = currentImg.nextElementSibling;
      var mainImg = document.querySelector(".gg-image > img").src;
      prevBtn.hidden = false;
      nextBtn.hidden = mainImg === last;
    };

    function hide() {
      root.style.overflow = 'auto';
      screenItem.remove();
    };
  });
}

function gridGallery (options) {
  if (options.selector) selector = document.querySelector(options.selector);
  if (options.darkMode) selector.setAttribute("data-theme", "dark");
}

//-----------------------------------------------//

//-----Band years------//

/* var years = Array.from(Array(new Date().getFullYear() - 2008), (_, i) => (i + 2009).toString())
console.log(years)*/

const currentYear = new Date().getFullYear();
const startYear = 2009;
const numYears = currentYear - startYear;
const years = Array.from(Array(numYears), (_, i) => (startYear + i).toString());
 
const setElement = (elementId, values) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = Array.isArray(values) ? values.join(' ') : values;
  }
};
 
 
// Create and insert small element after yearTwo
const small = document.createElement('small');
document.getElementById('yearTwo').insertAdjacentElement('afterend', small);

setElement('yearOne', years[0]);
setElement('yearTwo', years[2]);
setElement('yearThree', years[8]);
setElement('yearFour', years[12]);
 
setElement('yearsOne', [years[1]]);
setElement('yearsTwo', [years[3], years[4], years[5], years[6], years[7]]);
setElement('yearsThree', [years[9], years[10], years[11]]);
setElement('yearsFour', [years[13], years[14]]);
setElement('currentYear', currentYear);


