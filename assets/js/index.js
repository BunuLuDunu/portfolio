// Récupération des projets
const response = await fetch('data/projects.json');
const projects = await response.json();


// Récupération de l'élément du DOM qui accueillera les projets
const list = document.querySelector(".projects-cards");

// Fonction pour créer la liste des projets
function createList(projects) {
    list.innerHTML = "";
    projects.forEach(createProject)
};

createList(projects);

// Fonction pour créer un projet
function createProject(project) {
    // Création de l'élément de liste pour chaque projet
    const listItem = document.createElement("li");
    listItem.setAttribute("id", project.id);

    list.appendChild(listItem);
    
    // Création de la div container 
    const listContainer = document.createElement("div");
    listContainer.classList.add("project");

    listItem.appendChild(listContainer);

    // Ajout de l'image du projet
    const projectImage = document.createElement("img");
    projectImage.setAttribute("alt", project.alt);
    projectImage.setAttribute("loading", "lazy");
    projectImage.src = project.src;

    listContainer.appendChild(projectImage);

    // Création de la div info
    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info");

    listContainer.appendChild(projectInfo);
    
    // Ajout du titre du projet
    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("project-title");
    projectTitle.innerText = project.title;

    projectInfo.appendChild(projectTitle);
    
    // Ajout de la description du projet
    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.innerText = project.description;
    
    projectInfo.appendChild(projectDescription);
    
    // Création de la liste des tags de technologies utilisées durant le projet
    const tagList = document.createElement("ul");
    tagList.classList.add("project-tags");
    project.tags.forEach((tag) => {
        const tagListItem = document.createElement("li");
        tagListItem.innerText = tag;
        tagListItem.classList.add("project-tag");

        tagList.appendChild(tagListItem);
    })

    projectInfo.appendChild(tagList);

    // Création d'un container pour les liens
    const projectLinks = document.createElement("div")
    projectLinks.classList.add("project-links");

    projectInfo.appendChild(projectLinks);

    // Création du lien menant vers le repository GitHub de chaque projet
    const projectGitHub = document.createElement("a");
    projectGitHub.setAttribute("href", project.github);
    projectGitHub.setAttribute("target", "blank");
    projectGitHub.classList.add("project-link");

    const projectGitHubIcon = document.createElement("i");
    projectGitHubIcon.classList.add("fa-brands", "fa-github");

    const projectGitHubLabel = document.createTextNode('Repo Github');

    projectGitHub.appendChild(projectGitHubIcon);
    projectGitHub.appendChild(projectGitHubLabel);

    projectLinks.appendChild(projectGitHub);

    // Création du lien menant au site déployé s'il existe
    if (project.live) {
        const projectLink = document.createElement("a");
        projectLink.setAttribute("href", project.live);
        projectLink.setAttribute("target", "blank");
        projectLink.classList.add("project-link");

        const projectLinkIcon = document.createElement("i");
        projectLinkIcon.classList.add("fa", "fa-link");

        const projectLinkLabel = document.createTextNode("Lien vers le site");

        projectLink.appendChild(projectLinkIcon);
        projectLink.appendChild(projectLinkLabel);
        
        projectLinks.appendChild(projectLink);
    };
}