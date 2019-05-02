import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  favorites = [];
  selectedActor = {};

  constructor() {}

  toggleFavorite(evt, item) {
    evt.preventDefault();
    evt.stopPropagation();
    const index = this.favorites.findIndex(favori => favori.id === item.id);
    if (index === -1) {
      this.favorites.push(item);
    } else {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(id) {
    return this.favorites.find(favori => favori.id === id);
  }
}
