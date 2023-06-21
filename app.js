const cargarPeliculas = () => {
    const repuesta = fetch('https://api.themoviedb.org/3/movie/11?api_key=0d9435a80057b6766ea079f2673d5514')
    
    console.log(respuesta);
}

cargarPeliculas();