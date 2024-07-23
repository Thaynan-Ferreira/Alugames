function alterarStatus(ref) {
    let referencial = document.querySelector(`#game-${ref}`);
    let imagem = referencial.querySelector('.dashboard__item__img');
    let btn = referencial.querySelector('.dashboard__item__button');

    if (btn.textContent == 'Alugar'){
        imagem.classList.add('dashboard__item__img--rented');
        btn.classList.add('dashboard__item__button--return');
        btn.textContent = 'Devolver';
    }

}