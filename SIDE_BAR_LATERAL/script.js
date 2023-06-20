
const icones = document.querySelectorAll('.iten-lista');

function selecaoitem(){
    icones.forEach((iten) => 
      iten.classList.remove('ativo')
    )
    this.classList.add('ativo');
}

icones.forEach((iten) => 
   iten.addEventListener('click', selecaoitem)
)

const btmexpandir = document.querySelector('#btn-expd');
const menu = document.querySelector('.menulateral');

btmexpandir.addEventListener('click', ()=>{
    menu.classList.toggle('expandir');
});
