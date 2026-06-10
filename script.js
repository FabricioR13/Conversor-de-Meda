

const convertButton     =  document.querySelector(".convert-button")
const convercaoSelect   =  document.querySelector(".convercao-select")
const convercaoDe       =  document.querySelector(".convert-de")

function convertValeu (){
    const inputDigitadoValue = document.querySelector(".input-digitado").value
    const valorAConverter = document.querySelector(".valor-a-converter")
    const valorConvertido = document.querySelector(".valor-convertido")

    const dolarToday = 5.2
    const euroToday = 6.2
    const biticoinToday = 493501.41 
    const libraToday = 7.2807


    if (convercaoSelect.value == "dolar"){  
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format (inputDigitadoValue / dolarToday)

    }

    if (convercaoSelect.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format(inputDigitadoValue / euroToday )
    }

    if (convercaoSelect.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputDigitadoValue / libraToday)
    }

    if (convercaoSelect.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "XBT"
        }).format(inputDigitadoValue / biticoinToday)
    }


    valorAConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputDigitadoValue)
    

}


    function changeconvercaoDe () {
        const nomeconvercaode = document.querySelector(".escrita-real") 
        const imgBandeira     = document.querySelector(".bandeira-brasil")

        if (convercaoDe.value == "real") {
            nomeconvercaode.innerHTML = "Real"
            imgBandeira.src = "./assets/bandeira brasil.png"
        }

        if (convercaoDe.value == "dolar" ) {
            nomeconvercaode.innerHTML = "Dólar Americano"
            imgBandeira.src = "./assets/bandeira usa.png"
        }


    }



    function changeconvercaoSelect () {
        const nomeconvercao = document.querySelector(".escrita-name")
        const imgBandeira   = document.querySelector(".bandeira-pais")

        if (convercaoSelect.value == "dolar" ) {
            nomeconvercao.innerHTML = "Dólar Americano"
            imgBandeira.src = "./assets/bandeira usa.png"
        }
        
        if (convercaoSelect.value == "euro") {
            nomeconvercao.innerHTML = "Euro"
            imgBandeira.src = "./assets/logo euro.png"
        }   

        if (convercaoSelect.value == "libra") {
            nomeconvercao.innerHTML = "Libra"
            imgBandeira.src = "./assets/logo libra.png"
        }

        if (convercaoSelect.value == "bitcoin") {
            nomeconvercao.innerHTML = "Bitcoin"
            imgBandeira.src = "./assets/logo bitcoin.png"
        }


    
        convertValeu ()

    }


convercaoSelect.addEventListener  ("change", changeconvercaoSelect )
convertButton.addEventListener    ("click", convertValeu)