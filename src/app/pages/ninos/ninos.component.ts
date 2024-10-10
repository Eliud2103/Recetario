import { Component, inject } from '@angular/core';
import { postre } from '../../app.interfaces';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { NinosService } from '../../services/ninos.service';

@Component({
  selector: 'app-ninos',
  standalone: true,
  imports: [CommonModule, CardComponent,NinosComponent],
  templateUrl: './ninos.component.html',
  styleUrl: './ninos.component.css'
})
export class NinosComponent {
  private postresito=inject(NinosService)

  postreNino: postre[]=[]

  constructor(){
    console.log('constructor');
    this.postreNino= this.postresito.getposts();
    console.log(this.postreNino);
    
  }

}
