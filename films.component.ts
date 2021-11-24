import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent implements OnInit {
  films: Film[]; 
  constructor(private filmService: FilmService) {
    this.films = filmService.listeFilms();
  }

  ngOnInit(): void {
  }
  supprimerFilm(p: Film)
  {
  //console.log(p);
  let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.filmService.supprimerFilm(p);

  }
}
