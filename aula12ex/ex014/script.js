function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
 
   //var hora =10

    msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = 'manha.png'
    document.body.style.background = '#f1c097'
} else if (hora >= 12 && hora <= 18){
 //Boa tarde!
img.src = 'tarde.jpg'
document.body.style.background='#d7bc94'
} else {
//Boa noite!
img.src = 'noite.jpg'
document.body.style.background = '#452c32'
}
}