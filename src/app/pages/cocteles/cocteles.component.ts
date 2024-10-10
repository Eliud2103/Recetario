import { Component, inject } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { postre } from '../../app.interfaces';
import { CoctellService } from '../../services/coctell.service';



@Component({
  selector: 'app-cocteles',
  standalone: true,
  imports: [ CoctelesComponent, CardComponent],
  templateUrl: './cocteles.component.html',
  styleUrl: './cocteles.component.css'
})
export class CoctelesComponent {
  private postreeservice=inject(CoctellService)
  postre: postre[]=[]
  constructor(){
    console.log('contructor');
    this.postre= this.postreeservice.getposts();
    console.log(this.postre);
    
  }
}
