import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leader:Leader;
  leaders:Leader[];

  constructor(private leaderService:LeaderService, private location: Location, private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.leaderService.getLeaders().then(leaders => this.leaders = leaders);
  }

  goBack(): void{
    //Va a la dirección anterior en el que estabamos
    this.location.back();
  }
}
