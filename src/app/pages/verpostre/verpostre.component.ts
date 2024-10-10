import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CardComponent } from "../../components/card/card.component";
import { postre } from '../../app.interfaces';
import { compileNgModule } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verpostre',
  standalone: true,
  imports: [CardComponent, CommonModule, RouterLink],
  templateUrl: './verpostre.component.html',
  styleUrl: './verpostre.component.css'
})
export class VerpostreComponent {
  postss: postre[]=[]
  postree: any={}
  post: any;
postresito: any;
private _activeRoute=inject(ActivatedRoute)
private posts = inject(PostService)

constructor(){
  this._activeRoute.params.subscribe(param=>{
    console.log(param);
   this.postree= this.posts.getPostById(param['postreId'])
   console.log(this.postree);
   
  })
}
}
