  import { Component, inject, Input } from '@angular/core';

  import { Router } from '@angular/router';
  import { postre } from '../../app.interfaces';

  @Component({
    selector: 'app-card',
    standalone: true,
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
  })
  export class CardComponent {
    @Input()post!:postre;
  private _router = inject(Router)


    goToDetail() {
      if (this.post.type === 'postre') {
        this._router.navigateByUrl('/verpostre/' + this.post.id);
      } else if (this.post.type === 'coctel') {
        this._router.navigateByUrl('/vercoctel/' + this.post.id);
      } else if (this.post.type === 'nino'){
        this._router.navigateByUrl('/vernino/' + this.post.id);
      } else if (this.post.type === 'desayuno'){
        this._router.navigateByUrl('/verdesayuno/' + this.post.id);
      } else if(this.post.type === 'ensalada'){
        this._router.navigateByUrl('/ensaladasver/' + this.post.id);
      } else if (this.post.type === 'pasta'){
        this._router.navigateByUrl('/verpasta/' + this.post.id);
      }

    }

  }
