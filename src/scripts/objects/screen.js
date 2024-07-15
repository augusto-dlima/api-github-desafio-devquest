const screen = {

    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {

        this.userProfile.innerHTML = `<div class="info">
            <img src="${user.avatarUrl}" alt="foto do perfil do usuário" />

            <div class="data">

                <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>

                <div class="follow">
                <p> <i class=" icon fas fa-users"></i>  Seguidores: <strong> ${user.followers} </strong></p>
                <p> <i class="icon fas fa-users"></i>  Seguindo: <strong> ${user.following} </strong></p>
                </div>
                

            </div>
        </div>`


    if(user.repositories.length > 0){

        let repositoriesItens = ""

    user.repositories.forEach(repo => {

        repositoriesItens = repositoriesItens + `<li> <a href="${repo.html_url}" target="_blank">${repo.name} <br> 
        
        <div class="section">
        
        <div class="icon"> 🍴 ${repo.forks_count} </div>
        <div class="icon"> ⭐ ${repo.stargazers_count} </div>
        <div class="icon"> 👀 ${repo.watchers_count} </div>
        <div class="icon"> 👨‍💻 ${repo.language ?? "indefinido"} </div>
        
        
        </div>

        </a>
        
        </li>`})

        
        this.userProfile.innerHTML += `<div class="repositories section">

        <h2>Repositoriós</h2>
        <ul>${repositoriesItens}</ul>


      </div>`

    }

    if(user.events.length > 0){

        let eventsItens = ''

        user.events.forEach(event=>{

            // console.log(event)

            if(event.type === "PushEvent"){

                // console.log(event.repo.name)
                //event.playload.commit[0].message

                  eventsItens += `<li> <strong>${event.repo.name} </strong> - ${event.payload.commits[0].message}. </li>`

                // console.log(event.payload.commits[0].message)

            }else{


                eventsItens += `<li> <strong>${event.repo.name} </strong> - Sem mensagem de commit. </li>`
                // console.log(`${event.repo.name} - Sem mensagem de commit.`)

            }

        })

        this.userProfile.innerHTML += `<div class="events">
                                         <h3>Eventos</h3>

                                         <ul>${eventsItens}</ul>
        
                                      </div>`



       

    }

},

renderNotFound(){

this.userProfile.innerHTML = `<div class="not-found"> 

                               <i class=" icon fas fa-times"></i>

                               <h3>Usuário não encontrado</h3> 


                                </div>`

setTimeout(()=>{this.userProfile.innerHTML = ""},3000)

}



}

export { screen }