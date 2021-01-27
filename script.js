'use strict';






const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start() {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        } 
        this.count = numberOfFilms;
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотреных фильмов ?', ''),
                b = prompt('На сколько оцените его ?', '');
            if (a != null && b != null && a.length < 50 && a.length != 0) {
                this.movies[a] = b;
                console.log(a, b);
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel() {
        if (this.count <= 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count > 10 && this.count < 30) {
            console.log('Вы классический зритель');
        } else if (this.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB() {
        if (!this.privat){
            console.log(this);
        }
    },writeYourGenres() {
        for (let i = 1; i <= 3 ; i++) {
            var genre = prompt(`Какой у вас любимый жанр под номером ${i}`, '');
        while (genre == '' || genre == null) {
            genre = prompt(`Какой у вас любимый жанр под номером ${i}`, '');
        } 
        this.genres [i - 1] = genre;
         } 

        this.genres.forEach(function(item , i, genres){
            console.log(`Любимый жанр под номером ${i+1} это ${item}`);
        });

    },toggleVisibleMyDB() {
            this.privat = !this.privat;
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();





