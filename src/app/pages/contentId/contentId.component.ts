import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content-id',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contentId.component.html',
  styleUrl: './contentId.component.css'
})
export class ContentIdComponent implements OnInit {
  pictureCover:string = ''
  contentTitle:string = ''
  contentDescription:string = ''
  private id:string | null = '0'

  constructor (
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(value =>
      this.id = value['id']
    )
    this.setValuesToComponent(this.id)
   }

   setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTitle = result['title']
    this.pictureCover = result['pictureCover']
    this.contentDescription = result['description']
   }
}
