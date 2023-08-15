// Récupération des projets
const response = await fetch('data/projects.json');
const projects = await response.json();

const list = document.querySelector(".projects-cards");

function createList(projects) {
    list.innerHTML = "";
    projects.forEach(createProject)
};

createList(projects);


function createProject(project) {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", project.id);
    const listContainer = document.createElement("div");
    listContainer.classList.add("project");
    const projectImage = document.createElement("img");
    projectImage.setAttribute("alt", project.alt);
    projectImage.setAttribute("loading", "lazy");
    projectImage.src = project.src;

    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info");
    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("project-title");
    projectTitle.innerText = project.title;
    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.innerText = project.description;
    const tagList = document.createElement("ul");
    tagList.classList.add("project-tags");
    project.tags.forEach((tag) => {
        const tagListItem = document.createElement("li");
        tagListItem.innerText = tag;
        tagListItem.classList.add("project-tag");

        tagList.appendChild(tagListItem);
    })

    list.appendChild(listItem);
    listItem.appendChild(listContainer);
    listContainer.appendChild(projectImage);
    listContainer.appendChild(projectInfo);
    projectInfo.appendChild(projectTitle);
    projectInfo.appendChild(projectDescription);
    projectInfo.appendChild(tagList);
}