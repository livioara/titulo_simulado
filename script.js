var titulos = document.getElementById('titulos')
var secao = document.getElementById('secao')
var nome = document.getElementById('nome')

function listarTitulos() {

 //OnLoad
    $.getJSON("./dados.json", function (data) {
        var dados = data.eleitores;
        var y = dados.length;
        titulos.innerHTML = ""
        var secao1 = document.getElementById('secao').value
        var nome1 = document.getElementById('nome').value
        console.log(secao1)
        console.log(nome1)
        console.log(y)


        for (x = 0; x < y; x++) {
            if (dados[x].nome == nome1 && dados[x].secao == secao1) {
                titulos.innerHTML += (dados[x].titulo)
            }

        }


    })

}
function listarNomes() {
    
    $.getJSON("./nomes.json", function (data) {
        var dadosnomes = ""
        dadosnomes = data.nomes;
        var y = dadosnomes.length;
        nome.innerHTML = ""
        
        

        for (x = 0; x < y; x++) {
            nome.innerHTML = nome.innerHTML +'<option value="' + dadosnomes[x]['nome'] + '">' + dadosnomes[x]['nome'] + '</option>';
            }

           

        


    })
   
      
   }
   
   function listarSecoes() {
    
    $.getJSON("./secoes.json", function (data) {
        var dadossecoes = ""
        dadossecoes = data.secoes;
        var y = dadossecoes.length;
        secao.innerHTML = ""
        

        for (x = 0; x < y; x++) {
            secao.innerHTML = secao.innerHTML +'<option value="' + dadossecoes[x]['secoes'] + '">' + dadossecoes[x]['secoes'] + '</option>';
            }

           

        


    })
   
      
   }
















