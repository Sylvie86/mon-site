window.addEventListener('DOMContentLoaded', function () {

    //récupère le message
    let message = document.getElementById('message');

    //on récupère l'envoi du button add
    let btnAdd = document.getElementById('add');

    //On récupère le contenu liste 
    let liste = document.getElementById('liste');

    btnAdd.addEventListener('click', function (e) {
        e.preventDefault();
        addTask();
    })


    function addTask() {

        //LI
        // crée un nouvel élément li
        var newLi = document.createElement("li");

        // et lui donne du contenu
        var newContent = document.createTextNode(message.value);

        // ajoute le nœud texte au nouveau li créé
        newLi.appendChild(newContent);

        // relie les Ul aux li 
        liste.appendChild(newLi);

         //pour donner une class
         newLi.classList.add("listeLi");


        //BUTTON DONE 
        //créer un nouvel élément button
        var newDone = document.createElement("button");
        newDone.innerHTML = "Done";
        newLi.appendChild(newDone);

        newDone.classList.add("boutonDone", "mlButton");


        //BUTTON DELL
        var newDone = document.createElement("button");
        newDone.innerHTML = "Dell";
        //pour lier au parent
        newLi.appendChild(newDone);

        //pour donner une class
        newDone.classList.add("boutonDell", "mlButton");

        //afficher/ cacher le button Done
        buttonDone.addEventListener("click", () => {
            if (getComputedStyle(boutonDone).display != "none") {
                boutonDone.style.display = "none";
            } else {
                boutonDone.style.display = "block";
            }
        })

    }

})