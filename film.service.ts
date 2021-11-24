import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
films : Film[];
film : Film;
  constructor() {
    this.films = [
      {idFilm : 1 ,nom : "Ek villain",  genre : "romantique", dateSortie: new Date("06/27/2014")},
      {idFilm : 2 ,nom : "Student of the year", genre : "comedie romantique", dateSortie: new Date("10/19/2012")},
      {idFilm : 3 ,nom : "War", genre : "action",dateSortie: new Date("10/02/2019")},
      {idFilm : 4 ,nom : "The legend of Tarzan",  genre : "aventure",dateSortie: new Date("07/01/2016")}
    
    ];
   }

   listeFilms():Film[] {
    return this.films;
  }
  ajouterFilm( fil:Film){
    this.films.push(fil);
    }
    
    supprimerFilm( fil: Film){
      const index = this.films.indexOf(fil, 0);
      if (index > -1) {
      this.films.splice(index, 1);
      }
    }      
    consulterFilm(id:number): Film{
      this.film = this.films.find(p => p.idFilm == id);
      return this.film;
      }
      trierFilms(){
        this.films = this.films.sort((n1,n2) => {
        if (n1.idFilm > n2.idFilm) {
        return 1;
        }
        if (n1.idFilm < n2.idFilm) {
        return -1;
        }
        return 0;
        });
        }
        
      updateFilm(p:Film)
      {
      // console.log(p);
      this.supprimerFilm(p);
      this.ajouterFilm(p);
     // this.trierFilms();

      }
      
}
