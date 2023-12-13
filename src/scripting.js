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


  const currentYear = new Date().getFullYear();
  const startYear = 2009;
  const numYears = currentYear + 1 - startYear;
  const years = Array.from(Array(numYears), (_, i) => (startYear + i).toString());

  let futureYearsCount = 1; // Set this to the number of future years you want to add

  // Check if futureYearsCount is not null and a valid number
  if (futureYearsCount !== null && !isNaN(futureYearsCount) && futureYearsCount > 0) {
    const futureYears = Array.from(Array(futureYearsCount), (_, i) => (currentYear + i + 1).toString());
    years.push(...futureYears);
  }

 const yearHeader = document.getElementById('yearHeader');

 function updateYears() {
   
  let indicesToSelect = [0, 2, 8, 12]; // elements to extract from 'years' array
  let indicesOne = [3, 4, 5, 6, 7];
  let indicesTwo = [9, 10, 11];
  let indicesThree = [13, 14]; // add this code if you want next year to be displayed - 'years.length - 1'
  
  let breakPointYears = indicesToSelect.map(index => years[index]);
  let otherYearsOne = indicesOne.map(index => years[index]);
  let otherYearsTwo = indicesTwo.map(index => years[index]);
  let otherYearsThree = indicesThree.map(index => years[index]);
  
  // Add new years if needed (if it's a new year)
  if (!years.includes(currentYear.toString())) {
    years.push(currentYear.toString());
    indicesThree.push(years - 1); // Add the new index to indicesThree
  }

  // Clear previous content in yearHeader
  yearHeader.innerHTML = '';

  // Add an empty td at the beginning
  let emptyTd = document.createElement('td');
  yearHeader.appendChild(emptyTd);

  breakPointYears.forEach(function(year, index) {
    let mainSections = document.createElement('td');
    let mainParagraph = document.createElement('p');
    mainParagraph.textContent = year;
    mainParagraph.id = year;
    mainSections.appendChild(mainParagraph);

    if (index === 0) {
      const smallElement = document.createElement('small');
      smallElement.textContent = years[1];
      smallElement.id = years[1];
      mainSections.appendChild(smallElement);
    }

    if (index === 1) {
      otherYearsOne.forEach(function(year) {
        const smallYearsOne = document.createElement('small');
        smallYearsOne.textContent = year;
        smallYearsOne.id = year;
        mainSections.appendChild(smallYearsOne);
      });
    }

    if (index === 2) {
      otherYearsTwo.forEach(function(year) {
        const smallYearsTwo = document.createElement('small');
        smallYearsTwo.textContent = year;
        smallYearsTwo.id = year;
        mainSections.appendChild(smallYearsTwo);
      });
    }

    if (index === 3) {
      otherYearsThree.forEach(function(year) {
        const smallYearsThree = document.createElement('small');
        smallYearsThree.textContent = year;
        smallYearsThree.id = year;
        mainSections.appendChild(smallYearsThree);
      });
    }

    yearHeader.appendChild(mainSections);
  });
}

