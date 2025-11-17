function my_Dictionary() {
    var movie = {
        Title:"The Avengers",
        Genre:"Action",
        Director:"Joss whedon",
        Rating:"PG-13",

    };
    delete movie.Genre; // this remove the genre KVP from Dictionary before it displayed
    document.getElementById("Dictionary").innerHTML = movie.Genre;

}