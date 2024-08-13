//https://jsonplaceholder.typicode.com/posts



//Função que faz a requisição e carrega o contuedo da api na tela
async function readPost() {                
    let postArea = document.querySelector('#posts');
    postArea.innerHTML = 'Carregando...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    if (json.length > 0) {   
        postArea.innerHTML = ''
        for (let i in json) {
            let postHTML = document.createElement('div');

            postHTML.innerHTML = `<h2>${json[i].title}</h2>${json[i].body}<hr/>`;

            postArea.append(postHTML);
        }

    } else {
        postArea.innerHTML = 'Nenhum post para exibir';
    }
}


//função que realiza a requisição POST na api para adicionar o novo post
async function addNewPost(title, body) {
     await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                body
            })
        }
    )
    document.querySelector('#titleNewPost').value = '';
    document.querySelector('#bodyNewPost').value = '';

    readPost()
}


//evento de enviar o novo post ao clicar no botão 
document.querySelector('#buttonNewPost').addEventListener('click', () => {
    let title = document.querySelector('#titleNewPost').value;
    let body = document.querySelector('#bodyNewPost').value;

    if (body && title) {
        addNewPost(body, title);
    } else {
        alert('Preencha todos os campos');
    }
});

//executa a função da requisição dos post ao abrir a pagina 
readPost();