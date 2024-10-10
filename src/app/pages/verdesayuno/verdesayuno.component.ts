import { Component, inject } from '@angular/core';
import { DesayunoService } from '../../services/desayuno.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verdesayuno',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './verdesayuno.component.html',
  styleUrl: './verdesayuno.component.css'
})
export class VerdesayunoComponent {
  desayuno: any={}
  private _activeRoute=inject(ActivatedRoute)
    private _posts = inject(DesayunoService);
    constructor(){
    this._activeRoute.params.subscribe(param=>{
      console.log(param);
     this.desayuno= this._posts.getPostById(param['desayunoId'])
     console.log(this.desayuno);
     
    })
  }
}
