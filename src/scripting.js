  const gigs = document.querySelector('.gigs')
  fetch('../gigsBase.html')
  .then(res => res.text())
  .then(gigsData => {
    gigs.innerHTML = gigsData
  })

  const footer = document.querySelector('.footer')
  fetch('../footer.html')
  .then(res => res.text())
  .then(data => {
    footer.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
  })