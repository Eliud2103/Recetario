import { Component, inject } from '@angular/core';
import { postre } from '../../app.interfaces';
import { PastaService } from '../../services/pasta.service';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-pasta',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {
  private postresito=inject(PastaService)

  pasta: postre[]=[]

  constructor(){
    console.log('constructor');
    this.pasta= this.postresito.getposts();
    console.log(this.pasta);
    
  }

}
