import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input()
  pictureCover:string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  id:string = '0'

  constructor () { }
  ngOnInit(): void { }
}
