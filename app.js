    const canvas = document.querySelector('#draw')
    const context = canvas.getContext('2d')

    let radius = 5

    let dragging = false;

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    context.lineWidth = radius * 2

    const putPoint = (e) => {
      if (dragging) {
        context.lineTo(e.clientX, e.clientY)
        context.stroke()
        context.beginPath()
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2)
        context.fill()
        context.beginPath()
        context.moveTo(e.clientX, e.clientY)
      }
    }

    const engage = (e) => {
      dragging = true
      putPoint(e)
    }

    const disengage = () => {
      dragging = false
      context.beginPath()
    }

    canvas.addEventListener('mousedown', engage)
    canvas.addEventListener('mousemove', putPoint)
    canvas.addEventListener('mouseup', disengage)
