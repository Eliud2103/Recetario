import { Component, inject } from '@angular/core';
import { NinosService } from '../../services/ninos.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verninos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './verninos.component.html',
  styleUrl: './verninos.component.css'
})
export class VerninosComponent {
  nino: any={}
  private _activeRoute=inject(ActivatedRoute)
    private _posts = inject(NinosService);
    constructor(){
    this._activeRoute.params.subscribe(param=>{
      console.log(param);
     this.nino= this._posts.getPostById(param['ninoId'])
     console.log(this.nino);
     
    })
  }
}
