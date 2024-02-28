let texto = document.querySelector('#area_de_texto');
let config = [['a','e','i','o','u'], ['ai','enter','imes','ober','ufat']];
let novoTexto = '';

function consultar(antigo, novo) {
    //config[0] -> antigo | config[1] -> novo
    novoTexto = texto.value.replace(new RegExp(`${antigo[0]}|${antigo[1]}|${antigo[2]}|${antigo[3]}|${antigo[4]}`, 'g'), procurar => {
        switch (procurar) {
            case antigo[0]:
                return novo[0];
            case antigo[1]:
                return novo[1];
            case antigo[2]:
                return novo[2];
            case antigo[3]:
                return novo[3];
            case antigo[4]:
                return novo[4];
            default:
                break;
        }
    });
    organizarQuadro();
    exibirTextoNaTela('#quadro__texto', novoTexto);
}

function embaralhar() {
    //substituir CONFIG[0] por CONFIG[1].
    consultar(config[0], config[1]);
}

function desembaralhar() {
    //substituir CONFIG[1] por CONFIG[0].
    consultar(config[1], config[0])
}

function exibirTextoNaTela(elemento, texto) {
    let campo = document.querySelector(elemento);
    campo.innerHTML = texto;
}

function organizarQuadro() {
    let quadroTitulo = document.getElementById('quadro__titulo');
    quadroTitulo.style.display = 'none';
    let quadroTexto = document.getElementById('quadro__texto');
    quadroTexto.style.fontSize = '1.2rem';
    let botaoDeCopiar = document.getElementById('quadro__btn_copiar');
    botaoDeCopiar.style.display = 'block';
    texto.value = '';
}

function copiar() {
    navigator.clipboard.writeText(novoTexto);
}