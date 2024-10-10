import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PastaService } from '../../services/pasta.service';

@Component({
  selector: 'app-verpasta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './verpasta.component.html',
  styleUrl: './verpasta.component.css'
})
export class VerpastaComponent {
  pasta: any={}
  private _activeRoute=inject(ActivatedRoute)
    private _posts = inject(PastaService);
    constructor(){
    this._activeRoute.params.subscribe(param=>{
      console.log(param);
     this.pasta= this._posts.getPostById(param['pastaId'])
     console.log(this.pasta);
     
    })
  }
  
}
