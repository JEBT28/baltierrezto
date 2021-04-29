window.addEventListener("load", () => {
    if (document.readyState === "complete") {
      if (window.matchMedia) {
        console.log(
          window.matchMedia("(prefers-color-scheme: dark)").matches
        );
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.querySelector("html").classList.add("dark");
        }
      }
    }

    document
    .getElementById("switchTheme")
    .addEventListener("click", function () {
      let htmlClasses = document.querySelector("html").classList;
      if (htmlClasses.contains("dark")) {
        htmlClasses.remove("dark");
        localStorage.theme = "light";
      } else {
        htmlClasses.add("dark");
        localStorage.theme = "dark";
      }
    });

    cargarProyectos();
  });

 


  const cargarProyectos = async () => {

    let proyectos = document.getElementById("Proyectos-contenido");

    proyectos.removeChild(document.getElementById("Loading"));

    const repos = await fetch("https://api.github.com/users/jebt28/repos").then(res => res.json()).catch(() => []);

    console.log(repos);
    console.log(repos.length);
    if (repos.length !== 0) {
      repos.map(async (repo) => {
        const respLenguajes = await fetch(repo.languages_url);

        const lenguajesJSON = await respLenguajes.json();
        console.log(Object.keys(lenguajesJSON));

        const lenguajes = Object.keys(lenguajesJSON);

        proyectos.innerHTML = proyectos.innerHTML + `<div class="group hover:bg-blue-500 w-full md:w-2/6 lg:w-2/6 xl:w-1/4 dark:bg-gray-800 lg:mr-16 grid grid-rows-5 space-y-2 h-60 mx-2 p-4 rounded-lg shadow-lg bg-white">`
          + `<h3 class="font-semibold flex items-center row-span-1 group-hover:text-white">${repo.name}</h3>`
          + `<p class="row-span-2 group-hover:text-white overflow-hidden" alt="${repo.description}">${repo.description}</p>`
          + `<h4 class="row-span-1 font-mono text-gray-600 dark:text-blue-200 group-hover:text-blue-200">${lenguajes}</h4>`
          + `<a class=" row-span-1 px-2 flex justify-center py-1 h-auto items-center group-hover:text-blue-500 visited:bg-purple-500  group-hover:bg-white float-right bg-blue-600 rounded-lg hover:bg-blue-800 text-white" href="${repo.html_url}"><svg version="1.1" id="Capa_1" class="w-4 h-4 mr-2 group-hover:text-gray-500 text-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
  <path fill="currentcolor" d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
  	c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
  	c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
  	c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368c-56.832-6.496-116.608-28.544-116.608-127.008
  	c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68c0,0,21.504-6.912,70.4,26.336
  	c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672c48.864-33.248,70.336-26.336,70.336-26.336
  	c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992c0,98.72-59.84,120.448-116.864,126.816
  	c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496c0,6.88,4.608,14.88,17.6,12.352
  	C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"/>
 
  </svg> Ir a github</a>`
          + `</div>`;
      });
    }
    else {
      proyectos.innerHTML = proyectos.innerHTML + `<div class="w-full md:w-1/2 h-auto p-4 text-gray-500 flex flex-col dark:bg-gray-800 dark:text-blue-300 justify-center items-center bg-white rounded-lg shadow-lg">   <svg class="h-24 w-24 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg><h3 class="text-center font-semibold text-xl ">Ops! Ocurrio un problema al cargar los proyectos</h3></div>`;
    }
  }