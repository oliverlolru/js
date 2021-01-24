"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотреных фильмов ?', ''),
      b = prompt('На сколько оцените его ?', ''),
      c = prompt('Один из последних просмотреных фильмов ?', ''),
      d = prompt('На сколько оцените его ?', ''),
      e = prompt('Один из последних просмотреных фильмов ?', ''),
      f = prompt('На сколько оцените его ?', ''),
      g = prompt('Один из последних просмотреных фильмов ?', ''),
      h = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
personalMovieDB.movies[e] = f;
personalMovieDB.movies[g] = h;

console.table(personalMovieDB);