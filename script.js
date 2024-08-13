//https://jsonplaceholder.typicode.com/posts

async function readPost() {
    let postArea = document.querySelector('#posts');
    postArea.innerHTML= 'Carregando...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    if(json.length > 0){
        postArea.innerHTML = ''
        for(let i in json){
            let postHTML = document.createElement('div');

            postHTML.innerHTML = `<h2>${json[i].title}</h2>${json[i].body}<hr/>`

            postArea.append(postHTML)
        }
        
    }else{
        postArea.innerHTML = 'Nenhum post para exibir'
    }
}

readPost();