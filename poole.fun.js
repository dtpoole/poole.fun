function x () {
  const q = document.getElementById('q')
  const z = q.innerHTML
  let text = z
  for (let i = 1; i <= 300; i++) {
    text += ' ' + ((i % 3 === 0) ? '<b>' + z + '</b>' : z)
  }
  q.innerHTML = text
}

x()
