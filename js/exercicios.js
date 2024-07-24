// Crie um programa que verifica se uma palavra ou frase é um palíndromo.
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

// Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.
function ordenarNumeros(a, b, c) {
    // Não sei fazer! não vou fazer com a opinião do instrutor.
}