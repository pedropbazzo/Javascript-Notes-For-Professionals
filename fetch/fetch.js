/*
    ** Fetch **

    Opções Detalhes

    > method O método HTTP a ser usado para a solicitação. ex: GET , POST , PUT , DELETE , HEAD. O padrão é GET .
    > headers  Um objeto Headers contendo cabeçalhos HTTP adicionais para incluir na solicitação.
    > body  A carga útil da solicitação pode ser uma string ou um objeto FormData . Padrões para indefinido
    > cache O modo de cache. padrão , recarregar , sem - cache
    > referrer  O referenciador da solicitação.
    > mode cors , há - cors , mesmo - de origem . O padrão é no - cors .
    > credentials omit, same-origin, include.  O padrão é omit.
    > redirect follow, error, manual. Padrões a follow.
    > integrity  Metadados de integridade associados. O padrão é uma string vazia.

*/

/*
    Obtendo dados JSON
*/
    
// Obter alguns dados de stackoverflow
fetch("https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow")
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

// Definir cabeçalhos de solicitação
fetch('/example.json', {
    headers: new Headers({
        'Accept': 'text/plain',
        'X-Your-Custom-Header': 'example value'
    })
});


// POST Data

//Posting form data
fetch(`/example/submit`, {
 method: 'POST',
 body: new FormData(document.getElementById('example-form'))
});

//Posting JSON data
fetch(`/example/submit.json`, {
    method: 'POST',
    body: JSON.stringify({
        email: document.getElementById('example-email').value,
        comment: document.getElementById('example-comment').value
    })
});

/*
    Enviar cookies

    A função fetch não envia cookies por padrão. Existem duas maneiras possíveis de enviar cookies:
*/

//Envie cookies apenas se o URL estiver na mesma origem do script de chamada.
fetch('/login', {
    credentials: 'same-origin'
})

//Sempre envie cookies, mesmo para chamadas de origem cruzada.
fetch('https://otherdomain.com/login', {
    credentials: 'include'
})


/*
    GlobalFetch

    o A interface GlobalFetch expõe afunção fetch , que pode ser usada para solicitar recursos.

    O valor resolvido é um Objeto de resposta . Este objeto contém o corpo da resposta, bem como seu status e
    cabeçalhos.

*/
fetch('/path/to/resource.json')
    .then(response => {
        if (!response.ok()) {
            throw new Error("Request failed!");
        }

        return response.json();
    })
    .then(json => {
        console.log(json);
    });


   