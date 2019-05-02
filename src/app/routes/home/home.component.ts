import { Component, OnInit } from '@angular/core';
import { actors } from 'src/app/data/actors';
import { ActorsService } from 'src/app/services/actors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  actors = actors;

  constructor(public actorsService: ActorsService, public router: Router) {}

  ngOnInit() {}

  goToFiche(actor) {
    this.actorsService.selectedActor = actor;
    this.router.navigate(['fiche']);
  }
}
