import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html'
})
export class AddFilmComponent implements OnInit {
  newFilm = new Film();
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }
  addFilm(){
    //console.log(this.newFilm);
    this.filmService.ajouterFilm(this.newFilm);
    }
    
}
