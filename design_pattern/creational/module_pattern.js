/*
    // Módulo e padrões de módulo reveladores //

    ** Module Pattern **
    
    O padrão do módulo é um padrão de design criativo e estrutural que fornece uma maneira de encapsular
    membros enquanto produz uma API pública. Isso é conseguido através da criação de um IIFE que nos permite definir variáveis
    disponível apenas em seu escopo (por meio de encerramento) ao retornar um objeto que contém a API pública.
    
    Isso nos dá uma solução limpa para ocultar a lógica principal e apenas expor uma interface que desejamos para outras partes de nosso
    aplicativo a ser usado.

*/

var Module = (function(/* passar dados de inicialização se necessário */) {
    // Os dados privados são armazenados dentro do clusure
    var privateData = 1;

    // Como a função é invocada imediatamente,
    // o valor de retorno se torna a API pública
    var api = {
        getPrivateData: function() {
            return privateData;
        },

        getDoublePrivateData: function() {
            return api.getPrivateData() * 2;
        }
    };

    return api;
})(/* passar dados de inicialização se necessário */);



/*
    ** Revealing Module Pattern (Padrão de Módulo Revelador) **

    O padrão Revealing Module é uma variante do padrão Module. As principais diferenças são que todos os membros (privados
    e público) são definidos dentro do encerramento, o valor de retorno é um objeto literal que não contém definições de função,
    e todas as referências aos dados do membro são feitas por meio de referências diretas, e não por meio do objeto retornado
*/
var Module = (function(/*  passar dados de inicialização se necessário */) {
    // Os dados privados são armazenados como antes
    var privateData = 1;

    // Todas as funções devem ser declaradas fora do objeto retornado
    var getPrivateData = function() {
        return privateData;
    };

    var getDoublePrivateData = function() {
        // Consulte diretamente os membros incluídos, em vez de por meio do objeto retornado
        return getPrivateData() * 2;
    };

    // Retorna um object literal sem definição de função
    return {
        getPrivateData: getPrivateData,
        getDoublePrivateData: getDoublePrivateData
    };
})(/*  passar dados de inicialização se necessário */);


/*
    Revelando o padrão de protótipo

    Esta variação do padrão revelador é usada para separar o construtor dos métodos. Este padrão nos permite
    use a linguagem javascript como uma linguagem orientada a objetos:
*/

// Configuração de namespace
var NavigationNs = NavigationNs || {};
// Isso é usado como um construtor de classe
NavigationNs.active = function(current, length) {
    this.current = current;
    this.length = length;
}

// O protótipo é usado para separar a construção e os métodos
NavigationNs.active.prototype = function() {
    // É um exemplo de método público porque é revelado na instrução de retorno
    var setCurrent = function() {
        // Aqui as variáveis current e length são usadas como propriedades de classe privada
        for (var i = 0; i < this.length; i++) {
            $(this.current).addClass('active');
        }
    }

    return { setCurrent: setCurrent };
}();

// Exemplo de construtor sem parâmetros
NavigationNs.pagination = function() {}
NavigationNs.pagination.prototype = function() {
    // É um exemplo de um método privado porque não é revelado na instrução de retorno
    var reload = function(data) {
        // faça alguma coisa
    },
    // É o único método público, porque é a única função referenciada na instrução de retorno
    getPage = function(link) {
        var a = $(link);
        var options = {url: a.attr('href'), type: 'get'}

        $.ajax(options).done(function(data) {
           // depois que a chamada ajax é feita, ele chama o método privado
            reload(data);
        });
        return false;
    }
    return {getPage : getPage}
}();

// Este código acima deve estar em um arquivo separado .js para ser referenciado em qualquer página que for necessária. Ele pode ser usado assim:
var menuActive = new NavigationNs.active('ul.sidebar-menu li', 5);
menuActive.setCurrent();