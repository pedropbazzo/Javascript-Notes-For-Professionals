/*
    ** Propriedades do objeto da janela **

    O objeto Window contém as seguintes propriedades.
    Propriedade Descrição window.closed Se a janela foi fechada
    
    window.length               Número de elementos <iframe> na janela
    window.name                 Obtém ou define o nome da janela
    window.innerHeight          Altura da janela
    window.innerWidth           Largura da janela
    window.screenX              Coordenada X do ponteiro, em relação ao canto superior esquerdo da tela
    window.screenY              Coordenada Y do ponteiro, em relação ao canto superior esquerdo da tela
    window.location             URL atual do objeto da janela (ou caminho do arquivo local)
    window.history              Referência ao objeto de histórico para janela ou guia do navegador.
    tela da janela              Referência ao objeto da tela
    window.pageXOffset          Distance documento foi rolado horizontalmente
    window.pageYOffset          Distância do documento foi rolado verticalmente


*/


/*
    ** Métodos de objeto de janela **

    O objeto mais importante no modelo de objeto do navegador é o objeto janela. Ajuda no acesso às informações
    sobre o navegador e seus componentes. Para acessar esses recursos, ele possui vários métodos e propriedades.
    Método                       Descrição

    window.alert()               Cria uma caixa de diálogo com mensagem e um botão OK
    window.blur()                Remover o foco da janela
    window.close()               Fecha uma janela do navegador
    window.confirm()             Cria uma caixa de diálogo com mensagem, um botão OK e um botão Cancelar
    window.getComputedStyle()    Obtenha estilos CSS aplicados a um elemento
    window.moveTo(x, y)          Mova a borda superior e esquerda de uma janela para as coordenadas fornecidas
    window.open()                Abre uma nova janela do navegador com o URL especificado como parâmetro
    window.print()               Diz ao navegador que o usuário deseja imprimir o conteúdo da página atual
    window.prompt()              Cria uma caixa de diálogo para recuperar a entrada do usuário
    window.scrollBy()            Rola o documento pelo número especificado de pixels
    window.scrollTo()            Rola o documento para as coordenadas especificadas
    window.setInterval()         Faça algo repetidamente em intervalos especificados
    window.setTimeout()          Faça algo após um determinado período de tempo
    window.stop()                Parar de carregar a janela

*/



/*
    ** Detectando o navegador **

    Os navegadores, à medida que evoluíram, ofereceram mais recursos ao JavaScript. Mas muitas vezes esses recursos não estão disponíveis em todos
    navegadores. Às vezes, eles podem estar disponíveis em um navegador, mas ainda não foram lançados em outros navegadores. Outros tempos,
    esses recursos são implementados de forma diferente por navegadores diferentes. A detecção do navegador torna-se importante para garantir
    que o aplicativo que você desenvolve seja executado sem problemas em diferentes navegadores e dispositivos.
    
    Método de detecção de característica
    Este método procura a existência de coisas específicas do navegador. Isso seria mais difícil de falsificar, mas não é
    garantido para ser à prova de futuro.

*/


// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf('OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;



/*
    ** Detecção de agente de usuário **

    Este método obtém o agente do usuário e o analisa para localizar o navegador. O nome do navegador e a versão são extraídos
    do agente do usuário por meio de um regex. Com base nesses dois, o < nome do navegador > <versão> é retornado.
    Os quatro blocos condicionais após o código de correspondência do agente do usuário têm o objetivo de levar em conta as diferenças no usuário
    agentes de diferentes navegadores. Por exemplo, no caso da ópera,uma vez que usa o motor de renderização do Chrome, há um
    etapa adicional de ignorar essa parte.

    Observe que esse método pode ser facilmente falsificado por um usuário.

*/

navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if(/trident/i.test(M[1])){
        tem= /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }

    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();
   


/*
    ** Objeto Navigator **

    Obtenha alguns dados básicos do navegador e retorne-os como um Objeto JSON
    
    A função a seguir pode ser usada para obter algumas informações básicas sobre o navegador atual e retorná-las em JSON
    formato.
*/

function getBrowserInfo() {
    var
    json = "[{",

    /* The array containing the browser info */
    info = [
        navigator.userAgent, // Obtenha o User-agent
        navigator.cookieEnabled, // Verifica se os cookies estão habilitados no navegador
        navigator.appName, // Obter o nome do navegador
        navigator.language, // Obtenha o idioma do navegador
        navigator.appVersion, // Obtenha a versão do navegador
        navigator.platform // Obtenha a plataforma para a qual o navegador foi compilado
    ],

    /* A matriz contendo os nomes das informações do navegador */

    infoNames = [
        "userAgent",
        "cookiesEnabled",
        "browserName",
        "browserLang",
        "browserVersion",
        "browserPlatform"
    ];

    /* Criação do objeto JSON */
    for (var i = 0; i < info.length; i++) {
        if (i === info.length - 1) {
            json += '"' + infoNames[i] + '": "' + info[i] + '"';
        }
        else {
            json += '"' + infoNames[i] + '": "' + info[i] + '",';
        }
    };

    return json + "}]";
};


/*
    ** Método de biblioteca **
    
    Uma abordagem mais fácil para alguns seria usar uma biblioteca JavaScript existente. Isso ocorre porque pode ser complicado
    garanta que a detecção do navegador esteja correta, portanto, pode fazer sentido usar uma solução funcional, se houver uma disponível.
    Uma biblioteca popular de detecção de navegador é o Bowser.
*/

if (bowser.msie && bowser.version >= 6) {
    alert('IE version 6 or newer');
}
else if (bowser.firefox) {
    alert('Firefox');
}
else if (bowser.chrome) {
    alert('Chrome');
}
else if (bowser.safari) {
    alert('Safari');
}
else if (bowser.iphone || bowser.android) {
    alert('iPhone or Android');
}

