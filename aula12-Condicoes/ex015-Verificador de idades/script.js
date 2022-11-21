    function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert (`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <16) {
                //criança
                img.setAttribute('src', 'infantilM.jpg')
                }else if (idade < 30){
                    //jovem
                    img.setAttribute('src', 'jovemM.jpg')
                } else if (idade < 60){
                    //adulto
                    img.setAttribute('src', 'adultoM.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', 'melhoridadeM.jpg')
                }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <16) {
                img.setAttribute('src', 'infantilF.jpg')
                }else if (idade < 30){
                    img.setAttribute('src', 'jovemF.jpg')
                } else if (idade < 60){
                    img.setAttribute('src', 'adultoF.jpg')
                } else {
                    img.setAttribute('src', 'melhoridadeF.jpg') 
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
    }