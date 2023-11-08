

  function readGigs(file) { 
    var rawFile = new XMLHttpRequest(); 
    rawFile.open("GET", file, false); 
    rawFile.onreadystatechange = function () { 
      if (rawFile.readyState === 4) { 
        if (rawFile.status === 200 || rawFile.status == 0) { 
          var allText = rawFile.responseText; 
          document.getElementById("gigs").innerHTML = allText; 
        } 
      } 
    } 
    rawFile.send(null); 
  } 
  readGigs("../gigsBase.html");

  const footer = document.querySelector('.footer')
  fetch('../footer.html')
  .then(res => res.text())
  .then(data => {
    footer.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
  })