const cargarPeliculas = async() => {

    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/11?api_key=0d9435a80057b6766ea079f2673d5514&language=es-AR');
    
        console.log(respuesta);

        const datos = await respuesta.json();

        console.log(datos.title);
    } catch(error) {
        console.log(error);
    }

}

cargarPeliculas();