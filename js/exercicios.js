function verificarPalindromo() {

    let exercicio = document.getElementById('exercise-1');
    let palavra = exercicio.querySelector('.text__to__verify').value;
    let texto = exercicio.querySelector('.verify__text');
    

    if (palavra === palavra.split('').reverse().join('')) {
        texto.innerHTML = 'A palavra É um Palíndromo!';
    }else{
        texto.innerHTML = 'A palavra NÃO é um Palíndromo!';
    }

}