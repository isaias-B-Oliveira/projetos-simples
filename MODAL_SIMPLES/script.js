
const BTM = document.querySelector('.button-abri');
const Modal = document.querySelector('dialog');
const BTMfechar = document.querySelector('.button-fechar');

function Abrir() {
    BTM.addEventListener('click', () => {
        Modal.showModal();
    });
};

Abrir();

function Fechar() {
    BTMfechar.addEventListener('click', () => {
        Modal.close();
    });
};

Fechar();

