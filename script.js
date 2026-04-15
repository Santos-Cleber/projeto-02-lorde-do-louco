const frase = document.getElementById('frase');
const texto = frase.textContent;
frase.textContent = '';
let i = 0;
function digitar() {
    if (i < texto.length) {
        frase.textContent += texto[i];
        i++;
    }
}
setInterval(digitar, 50);

const poderes = document.getElementsByClassName("poder");
for(let i = 0; i < 4; i++){
setTimeout(() => {
    poderes[i].style.visibility = "visible";
}, 500*(i+1));
};
