import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake'
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [RouterLink, CardComponent, CommonModule]
})

export class ContentComponent implements OnInit {
  dados:any[] = []

  constructor () { }
  ngOnInit(): void {
    this.dados = dataFake
  }
}
