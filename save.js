const saveButton = document.getElementById('save');

const saveImage = () => {
    // let data = canvas.toDataURL()

    // const request = new XMLHttpRequest()

    // request.onreadystatechange = () => {
    //     if(request.readyState == 4 && request.status == 200) {
    //        const response =  request.responseText
    //        window.open(response, '_parent', 'location=0, menubar=0')
    //     }
    // }


    // request.open('POST', 'save.php', true)
    // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    // request.send('img=' + data)

    const win = window.open();
    win.document.write('<iframe src="' + data  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')

}

saveButton.addEventListener('click', saveImage)



// 