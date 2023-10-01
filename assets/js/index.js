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
    // Création de la div container 
    const listContainer = document.createElement("div");
    listContainer.classList.add("project");
    // Ajout de l'image du projet
    const projectImage = document.createElement("img");
    projectImage.setAttribute("alt", project.alt);
    projectImage.setAttribute("loading", "lazy");
    projectImage.src = project.src;

    // Création de la div info
    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info");
    // Ajout du titre du projet
    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("project-title");
    projectTitle.innerText = project.title;
    // Ajout de la description du projet
    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.innerText = project.description;
    // Création de la liste des tags de technologies utilisées durant le projet
    const tagList = document.createElement("ul");
    tagList.classList.add("project-tags");
    project.tags.forEach((tag) => {
        const tagListItem = document.createElement("li");
        tagListItem.innerText = tag;
        tagListItem.classList.add("project-tag");

        tagList.appendChild(tagListItem);
    })
    // Création d'un container pour les liens
    const projectLinks = document.createElement("div")
    projectLinks.classList.add("project-links");
    // Création du lien menant vers le repository GitHub de chaque projet
    const projectGitHub = document.createElement("a");
    projectGitHub.setAttribute("href", project.github);
    projectGitHub.setAttribute("target", "blank");
    projectGitHub.classList.add("project-link");
    projectGitHub.innerText = "Repo GitHub";
    // Création du lien menant au site déployé
    const projectLink = document.createElement("a");
    projectLink.setAttribute("href", project.link);
    projectLink.setAttribute("target", "blank");
    projectLink.classList.add("project-link");
    projectLink.innerText = "Lien vers le site";

    list.appendChild(listItem);
    listItem.appendChild(listContainer);
    listContainer.appendChild(projectImage);
    listContainer.appendChild(projectInfo);
    projectInfo.appendChild(projectTitle);
    projectInfo.appendChild(projectDescription);
    projectInfo.appendChild(tagList);
    projectInfo.appendChild(projectLinks);
    projectLinks.appendChild(projectGitHub);
    projectLinks.appendChild(projectLink);
}