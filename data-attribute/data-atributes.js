/*
    Acessando atributos de dados
    Usando a propriedade dataset
    A nova propriedade do conjunto de dados permite acesso (para leitura e gravação) a todos os dados de atributos data-* em qualquer elemento.
*/

document.querySelector('body').innerHTML = `   <p>Countries:</p>
                                                <ul>
                                                    <li id="C1" onclick="showDetails(this)" data-id="US" data-dial-code="1">USA</li>
                                                    <li id="C2" onclick="showDetails(this)" data-id="CA" data-dial-code="1">Canada</li>
                                                    <li id="C3" onclick="showDetails(this)" data-id="FF" data-dial-code="3">France</li>
                                                </ul>
                                                <button type="button" onclick="correctDetails()">Correct Country Details</button>
                                            `;

function showDetails(item) {
    var msg = item.innerHTML
    + "\r\nISO ID: " + item.dataset.id
    + "\r\nDial Code: " + item.dataset.dialCode;
    alert(msg);
}
function correctDetails(item) {
    var item = document.getEmementById("C3");
    item.dataset.id = "FR";
    item.dataset.dialCode = "33";
}

/*
    Observação: a propriedade dataset só é compatível com navegadores modernos e é um pouco mais lenta que getAttribute
    e os métodos setAttribute que são suportados por todos os navegadores.
    Usando os métodos getAttribute e setAttribute
    Se quiser oferecer suporte aos navegadores mais antigos antes do HTML5, você pode usar getAttribute e setAttribute
    métodos que são usados para acessar qualquer atributo, incluindo os atributos de dados. As duas funções no exemplo
    acima pode ser escrito desta forma:
*/

function showDetails(item) {
    var msg = item.innerHTML
    + "\r\nISO ID: " + item.getAttribute("data-id")
    + "\r\nDial Code: " + item.getAttribute("data-dial-code");
    alert(msg);
}
function correctDetails(item) {
    var item = document.getEmementById("C3");
    item.setAttribute("id", "FR");
    item.setAttribute("data-dial-code", "33");
}
   