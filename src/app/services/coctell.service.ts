import { Injectable } from '@angular/core';
import { postre } from '../app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoctellService {

  postresitoo: postre[]=[
    {
      id: 1,
      type: 'coctel',
      nombre: 'Margarita',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDVV8FcDQ90Ynv_6F4S00HJsLPobNtNm5Iw&s',
      ingredientes: ['1 1/2 oz de tequila', '1 oz de licor de naranja', '1/2 oz de jugo de limón', 'Sal para escarchar el vaso'],
      preparacion:[ 'Escarchar el vaso con sal, agitar los ingredientes con hielo y servir en una copa.']
    },
    {
      id: 2,
      type: 'coctel',
      nombre: 'Mojito',
      img: 'https://image.jimcdn.com/app/cms/image/transf/none/path/seeaa8d15c3e53a26/image/i91ac860050891b7f/version/1435699456/image.jpg',
      ingredientes: ['2 oz de ron blanco', 'Hojas de menta', '1/2 oz de jugo de limón', '1 cucharadita de azúcar', 'Agua con gas'],
      preparacion: ['Machacar la menta con el azúcar, agregar ron, jugo de limón, hielo y rellenar con agua con gas.']
    },
    {
      id: 3,
      type: 'coctel',
      nombre: 'Piña Colada',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_8oTyg1s9YNI7YApPb-WACqfqV5KxviJIA&s',
      ingredientes: ['2 oz de ron blanco', '3 oz de jugo de piña', '1 oz de crema de coco', 'Hielo'],
      preparacion: ['Licuar todos los ingredientes con hielo y servir en una copa con rodaja de piña.']
    },
    {
      id: 4,
      type: 'coctel',
      nombre: 'Daiquiri',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRCkaGhf_HRm7OwDFtF8UOVtzgNKZyy4S9w&s',
      ingredientes: ['2 oz de ron blanco', '1 oz de jugo de limón', '1/2 oz de jarabe de azúcar', 'Hielo'],
      preparacion: ['Mezclar todos los ingredientes en una coctelera con hielo y servir en una copa de cóctel.']
    },
    {
      id: 5,
      type: 'coctel',
      nombre: 'Negroni',
      img: 'https://i.pinimg.com/736x/c5/c9/e0/c5c9e02c7ff3724efccbcba12b558b7b.jpg',
      ingredientes: ['1 oz de gin', '1 oz de vermut rojo', '1 oz de Campari', 'Rodaja de naranja'],
      preparacion: ['Mezclar todos los ingredientes en un vaso con hielo y decorar con una rodaja de naranja.']
    },
    {
      id: 6,
      type: 'coctel',
      nombre: 'Caipirinha',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNppHXPNRb9z91ZrbYyxKvaD7OQqVR_1vOw&s',
      ingredientes: ['2 oz de cachaça', '1 lima', '2 cucharaditas de azúcar', 'Hielo picado'],
      preparacion: ['Machacar la lima con el azúcar, agregar la cachaça y el hielo picado, mezclar bien y servir.']
    }
  ]
  getposts(){
    return this.postresitoo;
     
  }
  getPostById(id:number){
    const ID =Number(id)
  return this.postresitoo.find(pos => pos.id === ID);
  }
  constructor() { }
}
