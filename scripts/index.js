const load = () => {
    const navbar = document.createElement('div');
    const projects = document.createElement('div');
    navbar.setAttribute('class','nav');
    projects.setAttribute('class','projects');
    const test = document.createElement('p');
    document.getElementById('root').append(navbar);
    document.getElementById('root').append(projects);
}

window.onload = () => {
    load();
}