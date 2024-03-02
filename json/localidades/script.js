/* document == html, estou dizendo que vou adicionar um ouvinte de evento, que, toda vem que carregar o html, ele executara esta função asincrona e sem nome (nao tem nome pois so irei utiliza-la aqui), entao, sempre que carregar a pagina html isto sera executado - o 'domcontent..' é o tipo. e a função colocada é oq sera feito apos isto ser executado - DOMContentLoaded == html, entao, sempre que executar o html, isto acontecera*/

document.addEventListener("DOMContentLoaded", async function(){
    //aqui é como se estivesse mandando a ul para dentro da const que criei para poder manipula-la aqui no js
    const listaMunicipios = document.getElementById("municipios-list");

    /* await espera algo - fetch executa uma url, aqui, uma url de api, retornando em arquivo que esta em JSON */
    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome');

    /* estou dizendo que, do estabelecimento de resposta, quero apenas o json que ela recebeu */
    const dados = await resposta.json();

    /* o ponto (.) é usado para acessar métodos ou propriedades desse objeto ou array, como o método forEach() - criando mais uma função anonima, pois so irei utilizar ak, usando como parametro, a variavel "municipio", que no caso, representa, o bloco de codigo, que possui todas as informaçoes de cada municipio (id, nome, sigla....)*/ 
    dados.forEach(function(municipio) {

        //cria um novo elemento de lista ('<li>') no documento html
        const li = document.createElement('li');

        //conteudo da li, no caso, apenas os NOMES dentro do bloco de codigo: municipios -li.textContent = municipio.nome;: Define o texto do elemento de lista (<li>) como o nome do município atual.
        li.textContent = `${municipio.nome}/${municipio.microrregiao.mesorregiao.UF.sigla}` ;

        /* adicionando as li, como filhos da ul (adicionando dentro de ul) - listaMunicipios.appendChild(li);: Adiciona o elemento de lista (<li>) como filho do elemento de lista (<ul>) com o id listaMunicipios.*/
        listaMunicipios.appendChild(li);
    });
}

)