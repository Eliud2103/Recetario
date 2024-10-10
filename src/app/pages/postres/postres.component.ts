import { Component, inject } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { postre } from '../../app.interfaces';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';



@Component({
  selector: 'app-postres',
  standalone: true,
  imports: [ CardComponent,PostresComponent,CommonModule],
  templateUrl: './postres.component.html',
  styleUrl: './postres.component.css'
})
export class PostresComponent {
 
  private postreeservice=inject(PostService)

  postre: postre[]=[]
  constructor(){
    console.log('constructor');
    this.postre= this.postreeservice.getposts();
    console.log(this.postre);
    
  }
}
