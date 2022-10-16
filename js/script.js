function calImc() {
    var altura = document.getElementById('altura');
    var peso = document.getElementById('peso');
    var imc = peso.value /(altura.value * altura.value);
    var result = document.getElementById('imc')
    var classi = document.getElementById('classificação');
    if (imc<=18.5) {
        var corAmarela = document.getElementById('magreza');
        result.innerHTML = imc.toFixed(1);
        classi.innerHTML = 'Magreza' 
        corAmarela.style.background ='yellow'
    } else if(imc <=24.9) {
        var corVerde = document.getElementById('normal');
        result.innerHTML = imc.toFixed(1);
        classi.innerHTML = 'Normal'
        corVerde.style.background ='green'
    } else if(imc >=25 && imc<=29.9){
        var corLaranja = document.getElementById('sobrepeso');
        result.innerHTML = imc.toFixed(1);
        classi.innerHTML = 'Sobrepeso'
        corLaranja.style.background ='orange'
    } else if(imc >= 30 && imc <=39.9){
        var corVermelho = document.getElementById('obesidade');
        result.innerHTML = imc.toFixed(1);
        classi.innerHTML = 'Obesidade'
        corVermelho.style.background ='red'
    } else{
        var corVinho = document.getElementById('obesidade-grave');
        result.innerHTML = imc.toFixed(1);
        classi.innerHTML = 'Obesidade grave'
        corVinho.style.background ='#6d251f'
    }
    
}