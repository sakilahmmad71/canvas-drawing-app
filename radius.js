let setRadius = (newRadius) => {
    if(newRadius < minRad) {
        newRadius = minRad
    } else if(newRadius > maxRad) {
        newRadius = maxRad
    }
    radius = newRadius
   context.lineWidth = radius * 2
   redVal.innerHTML = radius
}


let minRad = 0.5, maxRad = 100, defaultRad = 20
const redVal = document.getElementById('radval')
const decRad = document.getElementById('decrad')
const incRad = document.getElementById('incrad')

decRad.addEventListener('click', () => {
    setRadius(radius - 5)
})

incRad.addEventListener('click', () => {
    setRadius(radius + 5)
})