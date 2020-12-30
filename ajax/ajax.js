/*
    AJAX significa "Asynchronous JavaScript and XML". Embora o nome inclua XML, JSON é mais frequentemente usado devido
    para sua formatação mais simples e menor redundância. AJAX permite que o usuário se comunique com recursos externos
    sem recarregar a página da web.
*/

const requestData = {
    method: 'getUsers'
};

const userPromise = fetch('/api', {
    method: 'POST',
    body: JSON.stringify(requestData)
}).then(response => {
    if(!response.ok) { throw new Error("Got non-2XX response from API server.") }

    return response.json();
}).then(data => {
    return data.users;
})

userPromise.then(users => {
    console.log("Known users: ", users);
}, error => {
 console.error("Failed to fetch users due to error: ", error);
});



/*
    Adicionar um pré-carregador AJAX
    Esta é uma maneira de mostrar um pré-carregador GIF enquanto uma chamada AJAX está em execução. Precisamos preparar nosso adicionar e remover
    funções do pré-carregador:
*/

function addPreLoader() {
    if(!document.querySelector('#preloader')) {
        let preloaderHTML = '<img id="preloader" src="https://goo.gl/cNhyvX" />';
        document.querySelector('body').innerHTML += preloaderHTML;
    }
}

function removePreLoader() {
    let preloader = document.querySelector('#preloader');

    preloader ? preloader.remove() : 0;
}

let request = new XMLHttpRequest();
let state =  request.readyState == 4 && request.status == 200;

state ? removePreLoader() : addPreLoader()

xmlhttp.open('GET', your_file.php, true);
xmlhttp.send();



/*
    Exibindo as principais questões de JavaScript do
    mês da API Stack Overflow
    Podemos fazer uma solicitação AJAX à API do Stack Exchange para recuperar uma lista das principais questões de JavaScript para o
    mês e apresente-os como uma lista de links. Se a solicitação falhar ou retornar um erro de API, nosso erro de promessa
    manipulação exibe o erro em vez disso.
*/

const url = 'https://api.stackexchange.com//2.2/questions?site=stackoverflow' +
            '&tagged=javascript&sort=month&filter=unsafe&key=gik4BOCMC7J9doavgYteRw((';

fetch(url).then(response => response.json()).then(data => {
    if(data.error_message) {
        throw new Error(data.error_message);
    }

    const list = document.createElement('ol');
    document.body.appendChild(list);

    for(const {title, link} of data.items) {
        const entry = document.createElement('li');
        const hyperlink = document.createElement('a');

        entry.appendChild(hyperlink);
        list.appendChild(entry);

        hyperlink.textContent = title;
        hyperlink.href = link;
    }
}).then(null, error => {
    const message = document.createElement('pre');
    document.body.appendChild(message);
    message.style.color = 'red';

    message.textContent = String(error);
})
