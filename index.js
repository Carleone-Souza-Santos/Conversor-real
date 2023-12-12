const Select_CofreMoeda_one = document.querySelector(".Opcao_Moeda_one");/*pegando o select*/
function changecontrol_one() {


    const imgMoed = document.querySelector('.current-img_one')/*troca de img*/
    const NomeMoed = document.querySelector('#EstadoNameMoeda');/*troca o texto*/

    // seleciona a imagen e o nome de cada elemento
    if (Select_CofreMoeda_one.value == 'brasil') {
        imgMoed.src = "img/brasil.png";
        NomeMoed.innerHTML = "Brasil"
    }
    if (Select_CofreMoeda_one.value == 'euro') {
        imgMoed.src = "img/Euro.png";
        NomeMoed.innerHTML = "Euro"
    
    }
    if (Select_CofreMoeda_one.value == 'libra') {
        imgMoed.src = "img/Libra.png";
        NomeMoed.innerHTML = "Libra"
    }
    if (Select_CofreMoeda_one.value == 'bitcoin') {
        imgMoed.src = "img/bitcoin.png";
        NomeMoed.innerHTML = "Bitcoin"
    }
} 
Select_CofreMoeda_one.addEventListener('change', changecontrol_one)

// proxim select
const CofreMoeda = document.querySelector(".Option_Moeda_thu");/*pegando o select2*/

function changecontrol_thu() {
    const imgMoeda = document.querySelector('.current-img_thu')/*troca de img*/
    const NomeMoeda = document.querySelector('#EstadoNameMoedaConvertida');/*troca o texto*/

    // seleciona a imagen e o nome de cada elemento

    if (CofreMoeda.value == 'euro') {
        imgMoeda.src = "img/Euro.png";
        NomeMoeda.innerHTML = "Euro"
    }
    if (CofreMoeda.value == 'dolar') {
        imgMoeda.src = "img/USA.png";
        NomeMoeda.innerHTML = "Dólar"
    }
    if (CofreMoeda.value == 'libra') {
        imgMoeda.src = "img/Libra.png";
        NomeMoeda.innerHTML = "Libra"
    }
    if (CofreMoeda.value == 'bitcoin') {
        imgMoeda.src = "img/bitcoin.png";
        NomeMoeda.innerHTML = "Bitcoin"
    }
}
CofreMoeda.addEventListener('change', changecontrol_thu)


/*simula o valor das moedas*/
  

function converterVal() {
   
    const SaidaValor_Usuario = document.querySelector(".input-currency").value;/*recolhendo o valor digitado pelo usuario */
    const SaidaVConvertid = document.getElementById("SaidValorConvert");/*saída do valor convertido*/
    const SaidValorReal = document.getElementById("SaidValor");/*saída do valor digitado*/
    
    document.getElementById('apagar').value=''; // Limpa o campo....
     
    
    // funcao criada p o primeiro select adicionando o simbolo da moeda no input acima
    changecontrol_one();  

    if (Select_CofreMoeda_one.value == 'brasil') {
        SaidValorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(SaidaValor_Usuario)
    }
    if (Select_CofreMoeda_one.value == 'euro') {
      SaidValorReal.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(SaidaValor_Usuario)
    }
    if (Select_CofreMoeda_one.value == 'libra') {
        SaidValorReal.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(SaidaValor_Usuario)
    }
    if (Select_CofreMoeda_one.value == 'bitcoin') {
        SaidValorReal.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(SaidaValor_Usuario)
    }


// saida ja convertida no simbolo da moeda sendo aplicado o resultado valor_brasil / dolar
    if (CofreMoeda.value =="dolar" && Select_CofreMoeda_one.value=="brasil") {
        let ToDaydolar = 4.93;

        /*formatando saída moeda US*/
        SaidaVConvertid.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(SaidaValor_Usuario / ToDaydolar)

    }
// saida ja convertida no simbolo da moeda sendo aplicado o resultado valor_brasil / Euro
    if (CofreMoeda.value == "euro" && Select_CofreMoeda_one.value=="brasil") {
        let ToDayEuro = 5.31;
        
        /*formatando saída moeda Euro*/
        SaidaVConvertid.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(SaidaValor_Usuario / ToDayEuro)

    }
// saida ja convertida no simbolo da moeda sendo aplicado o resultado valor_brasil * Libra
    if (CofreMoeda.value == "libra" && Select_CofreMoeda_one.value=="brasil") {
       let ToDaylibra = 0.16;
       
        /*formatando saída moeda libra*/
        SaidaVConvertid.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(SaidaValor_Usuario * ToDaylibra)

    }
 // saida ja convertida no simbolo da moeda sendo aplicado o resultado valor_brasil / Bitcoin
    if (CofreMoeda.value == "bitcoin" && Select_CofreMoeda_one.value=="brasil") {
        let ToDayBitcoin = 0.0000049;
       
        // formato saida moeda bitcoin
        SaidaVConvertid.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(SaidaValor_Usuario * ToDayBitcoin)
    }

// conversão Euro


// saida ja convertida no simbolo da moeda sendo aplicado o resultado valor_Euro * dolar

if (Select_CofreMoeda_one.value == "euro" && CofreMoeda.value == "dolar") {
    let ToDayEurov = 1.08;

    /*formatando saída moeda US*/
    SaidaVConvertid.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(SaidaValor_Usuario * ToDayEurov)

}

if (Select_CofreMoeda_one.value == "euro" && CofreMoeda.value == "libra") {
    let ToDayLibrab = 0.86;

    /*formatando saída moeda US*/
    SaidaVConvertid.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(SaidaValor_Usuario * ToDayLibrab)

}

if (Select_CofreMoeda_one.value == "euro" && CofreMoeda.value == "bitcoin") {
    let ToDayBitcon =0.000026;

    /*formatando saída moeda US*/
    SaidaVConvertid.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(SaidaValor_Usuario *  ToDayBitcon)

}
//   fim do euro--------------------------------------------------------------------------

// saida ja convertida no simbolo da moeda sendo aplicado o resultado Libra * dolar
if (Select_CofreMoeda_one.value == "libra" && CofreMoeda.value == "dolar") {
    let ToDaydolarl = 1.25668;

    /*formatando saída moeda US*/
    SaidaVConvertid.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(SaidaValor_Usuario * ToDaydolarl)

}
if (Select_CofreMoeda_one.value == "libra" && CofreMoeda.value == "euro") {
    let ToDayBitcon =1.16;

    /*formatando saída moeda US*/
    SaidaVConvertid.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(SaidaValor_Usuario *  ToDayBitcon)

}
if (Select_CofreMoeda_one.value == "libra" && CofreMoeda.value == "bitcoin") {
    let ToDayBitcons =0.00003050;

    /*formatando saída moeda US*/
    SaidaVConvertid.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(SaidaValor_Usuario *  ToDayBitcons)

}
//   fim da moeda libra

// saida ja convertida no simbolo da moeda sendo aplicado o resultado bitcoin * dolar

if (Select_CofreMoeda_one.value == "bitcoin" && CofreMoeda.value == "dolar") {
    let ToDaydolarb = 41149.00;

    /*formatando saída moeda US*/
    SaidaVConvertid.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(SaidaValor_Usuario * ToDaydolarb)

}
if (Select_CofreMoeda_one.value == "bitcoin" && CofreMoeda.value == "euro") {
    let ToDayBitconb =38085.76;

    /*formatando saída moeda US*/
    SaidaVConvertid.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(SaidaValor_Usuario *  ToDayBitconb)

}
if (Select_CofreMoeda_one.value == "bitcoin" && CofreMoeda.value == "libra") {
    let ToDayBitconsb =32717.22;

    /*formatando saída moeda US*/
    SaidaVConvertid.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(SaidaValor_Usuario *  ToDayBitconsb)

}
// fim 

















// fim

// validaçao - Imped a conversao da mesma moeda.


    if(Select_CofreMoeda_one.value === CofreMoeda.value ){
      SaidValorReal.innerHTML="Duplicidade!" 
      SaidaVConvertid.innerHTML="Valores Iguais."; 
    }
    if(Select_CofreMoeda_one.value != CofreMoeda.value ){
       alert('diferente')
      }
    // fim d validaçaõ 
}









