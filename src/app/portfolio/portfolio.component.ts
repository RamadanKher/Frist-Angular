import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
imgs:any[]=[
  "../../assets/imges/cabin.png",
  "../../assets/imges/cake.png",
  "../../assets/imges/circus.png",
  "../../assets/imges/game.png",
  "../../assets/imges/safe.png",
  "../../assets/imges/submarine.png",


]

  constructor() {
   }

  ngOnInit(): void {
  }

} 

