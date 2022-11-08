
var valor = $("#value");
var btn_incrementa = $("#incrementar");
var btn_decrementa = $("#decrementar");
var btn_zerar = $("#zerar");

btn_incrementa.click(incrementar);

btn_decrementa.click(decrementar);

btn_zerar.click(zerar);


//incremento--------------------------------------------------------------------
function incrementar() {
    var contador = parseInt(valor.text());
    valor.text(contador + 1);
    adcClasse();
}

//decremento--------------------------------------------------------------------
function decrementar() {
    var contador = parseInt(valor.text());
    valor.text(contador - 1);
    adcClasse()
}

//zerar-------------------------------------------------------------------------
function zerar() {
    valor.text(0);
    adcClasse()
}

//trocar-cor--------------------------------------------------------------------

function adcClasse() {
    if (valor.text() > 0) {
        $("#value").attr("class", "verde");
    }
    else if (valor.text() < 0) {
        $("#value").attr("class", "vermelho");
    }
    else {
        $("#value").removeClass();
    }
}
