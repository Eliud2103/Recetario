import { Component, inject } from '@angular/core';
import { postre } from '../../app.interfaces';
import { DesayunoService } from '../../services/desayuno.service';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-desayuno',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './desayuno.component.html',
  styleUrl: './desayuno.component.css'
})
export class DesayunoComponent {
  private postresito=inject(DesayunoService)

  postreDesayuno: postre[]=[]

  constructor(){
    console.log('constructor');
    this.postreDesayuno= this.postresito.getposts();
    console.log(this.postreDesayuno);
    
  }

}
