import { Component, inject } from '@angular/core';
import { postre } from '../../app.interfaces';
import { EnsaladaService } from '../../services/ensalada.service';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-ensaladas',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './ensaladas.component.html',
  styleUrl: './ensaladas.component.css'
})
export class EnsaladasComponent {
  private postresito=inject(EnsaladaService)

  ensalada: postre[]=[]

  constructor(){
    console.log('constructor');
    this.ensalada= this.postresito.getposts();
    console.log(this.ensalada);
    
  }
}
