import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CoctellService } from '../../services/coctell.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vercocteles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vercocteles.component.html',
  styleUrl: './vercocteles.component.css'
})
export class VercoctelesComponent {
  cocteel: any={}
private _activeRoute=inject(ActivatedRoute)
  private _posts = inject(CoctellService);
  constructor(){
  this._activeRoute.params.subscribe(param=>{
    console.log(param);
   this.cocteel= this._posts.getPostById(param['coctelId'])
   console.log(this.cocteel);
   
  })
}
}
