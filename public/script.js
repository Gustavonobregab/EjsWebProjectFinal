function createItems() {
  const numberOfItems = parseInt(document.getElementById('quantity').value)
  const container = document.getElementById('items-container')
  container.innerHTML = ''

  for (let i = 0; i < numberOfItems; i++) {
    const item = document.createElement('div')
    item.className = 'item'
    item.innerText = i + 1
    container.appendChild(item)
  }
}

document.getElementById('quantity').addEventListener('input', createItems)
