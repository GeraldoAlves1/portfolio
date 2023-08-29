//Código referente ao efeito de máquina de escrever no texto da página principal

function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((Letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += Letra;
        }, 75 * i);
    });
}


const titulo = document.querySelector('.digitando');
ativaLetra(titulo);



function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((Letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += Letra;
        }, 75 * i);
    });
}


const titulo2 = document.querySelector('.digitando2');
ativaLetra(titulo2);