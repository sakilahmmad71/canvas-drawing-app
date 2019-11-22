let i, n;

const colors = ['black', 'green', 'white', 'orange', 'yellow', 'cyan', 'red', 'purple', 'grey', 'pink', 'indigo', 'violet']

const swatches = document.getElementsByClassName("swatch")

const setColor = (color) => {
    context.fillStyle = color
    context.strokeStyle = color
    let active = document.getElementsByClassName("active")[0]
    if(active) {
        active.className = 'swatch'
    }
}

const setSwatch = (e) => {
    let swatch = e.target
    setColor(swatch.style.backgroundColor)
    swatch.className += ' active'
}

for(i = 0, n = colors.length; i < n; i++) {
    const swatch = document.createElement('div')
    swatch.className = 'swatch'
    swatch.style.backgroundColor = colors[i]
    swatch.addEventListener('click', setSwatch)
    document.getElementById("colors").appendChild(swatch)
}
