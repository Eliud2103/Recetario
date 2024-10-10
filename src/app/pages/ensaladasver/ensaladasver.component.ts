import { Component, inject } from '@angular/core';
import { EnsaladaService } from '../../services/ensalada.service';
import { postre } from '../../app.interfaces';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ensaladasver',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ensaladasver.component.html',
  styleUrl: './ensaladasver.component.css'
})
export class EnsaladasverComponent {
  ensalada: any={}
  private _activeRoute=inject(ActivatedRoute)
    private _posts = inject(EnsaladaService);
    constructor(){
    this._activeRoute.params.subscribe(param=>{
      console.log(param);
     this.ensalada= this._posts.getPostById(param['ensaladaId'])
     console.log(this.ensalada);
     
    })
  }
}
