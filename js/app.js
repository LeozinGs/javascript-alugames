let jogosAlugados = 1;

function alterarStatus(id) {

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {

        if (confirm('Você deseja devolver o jogo?') == true) {

            botao.innerHTML = 'Alugar';
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');

            console.log('Você devolveu o jogo!');
            jogosAlugados --;
            console.log(`Jogos alugados: ${jogosAlugados}`);

        } else {

            botao.innerHTML = 'Devolver';
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');

            console.log('Você não devolveu o jogo!');

        }

    } else {

        botao.innerHTML = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');

        jogosAlugados ++;
        console.log(`Jogos alugados: ${jogosAlugados}`);

    }


}

