import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../services/actors.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  constructor(public actorsService: ActorsService) {}

  ngOnInit() {}

  confirm(evt, actor) {
    const confirmed = window.confirm('Voulez vous supprimer ce favori ?');
    if (confirmed) {
      this.actorsService.toggleFavorite(evt, actor);
    }
  }
}
