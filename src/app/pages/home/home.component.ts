import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { dataFake } from '../../data/dataFake';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, CommonModule, RouterLink]
})
export class HomeComponent implements OnInit {
  id:string = '0'
  picture:string = ''
  title:string = ''
  description:string = ''
  dados:any[] = []

  constructor () {}

  ngOnInit(): void {
    // Dados do destaque
    this.id = dataFake[0]['id']
    this.picture = dataFake[0]['pictureCover']
    this.title = dataFake[0]['title']
    this.description = dataFake[0]['description']

    // Dados dos destaques anteriores
    this.dados = dataFake

   }

}
