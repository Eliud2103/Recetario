import { Injectable } from '@angular/core';
import { postre } from '../app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postresito: postre[]=[
    {
      id: 1,
      type: 'postre',

  nombre: 'Tiramisú',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCN4Jinrddvh1TCkhmPBmi6CWy4kg804mX6Q&s',
  ingredientes: ['1.- 250 g de queso mascarpone',
    '2.- 3 huevos',
    '3.- 100 g de azúcar',
    '4.- 200 ml de café',
    '5.- 200 g de bizcochos de soletilla',
    '6.- Cacao en polvo para espolvorear'],
  preparacion:['1.- Separa las yemas de las claras. Bate las yemas con el azúcar hasta que la mezcla blanquee.',
    '2.- Añade el queso mascarpone y mezcla bien.',
    '3.- Bate las claras a punto de nieve e incorpóralas a la mezcla de mascarpone suavemente.',
    '4.- Empapa los bizcochos en café frío y colócalos en la base de un molde.',
    '5.- Cubre con una capa de la mezcla de mascarpone. Repite hasta acabar con una capa de crema.',
    '6.- Refrigera durante 4 horas y espolvorea cacao en polvo antes de servir.']
    },

    {
      id: 2,
      type: 'postre',

  nombre: 'Flan de Caramelo',
  img: 'https://i2.wp.com/recetasparapostres.com/wp-content/uploads/2014/03/Flan-con-caramelo.jpg?fit=700%2C380',
  ingredientes: ['1.- 1 litro de leche',
    '2.- 6 huevos',
    '3.- 150 g de azúcar',
    '4.- 1 cucharadita de vainilla',
    '5.- Caramelo líquido'],
preparacion:['1.- Precalienta el horno a 180°C. En un molde, añade caramelo líquido y extiéndelo por el fondo.',
  '2.- Bate los huevos con el azúcar y la vainilla.',
  '3.- Calienta la leche sin que hierva y añádela lentamente a la mezcla de huevos, batiendo constantemente.',
  '4.- Vierte la mezcla en el molde caramelizado.',
  '5.- Coloca el molde en una bandeja con agua (baño María) y hornea durante 45-60 minutos.',
  '6.- Deja enfriar y refrigera antes de desmoldar.']
    },
    {
      id: 3,
      type: 'postre',

  nombre: ' Churros',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIYFV7JBo74sIzmu84TdMKmeYvrUhqEKqhA&s',
  ingredientes: ['1.- 250 ml de agua',
    '2.- 150 g de harina',
    '3.- 1 cucharada de azúcar',
    '4.- 1 pizca de sal',
    '5.- Aceite para freír',
    '6.- Azúcar para espolvorear'],
preparacion:['1.- En una olla, calienta el agua con una pizca de sal y azúcar.',
  '2.- Cuando hierva, añade la harina de golpe y mezcla rápidamente hasta formar una masa homogénea.',
  '3.- Deja enfriar un poco y coloca la masa en una manga pastelera con boquilla de estrella.',
  '4.- Calienta aceite en una sartén y fríe los churros hasta que estén dorados.',
  '5.- Escúrrelos en papel absorbente y espolvorea con azúcar.']
    },
    {
      id: 4,
      type: 'postre',

  nombre: 'Cheesecake',
  img: 'https://www.splenda.com/wp-content/uploads/2020/05/american-classic-cheesecake-scaled.jpg',
  ingredientes: ['1.- 200 g de galletas María',
    '2.- 100 g de mantequilla',
    '3.- 400 g de queso crema',
    '4.- 200 g de nata líquida',
    '5.- 100 g de azúcar',
    '6.- 3 huevos',
    '7.- Mermelada de frutos rojos para decorar'],
preparacion: ['1.- Tritura las galletas y mézclalas con la mantequilla derretida. Presiona la mezcla en la base de un molde.',
  '2.- Bate el queso crema con el azúcar. Añade los huevos uno a uno, mezclando bien.',
  '3.- Añade la nata y mezcla.',
  '4.- Vierte la mezcla sobre la base de galleta y hornea a 180°C durante 45 minutos.',
  '5.- Deja enfriar y cubre con mermelada de frutos rojos antes de servir.']
    },
    {
      id:5,
      type: 'postre',

  nombre: 'Brownie',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVOpCkWQ9YYaZYzm7PoU5z060FbPhBzdxDQ&s',
  ingredientes: ['1.- 200 g de chocolate negro',
    '2.- 150 g de mantequilla',
    '3.- 200 g de azúcar',
    '4.- 100 g de harina',
    '5.- 4 huevos',
    '5.- 100 g de nueces (opcional)'],
preparacion: ['1.- Precalienta el horno a 180°C.',
  '2.- Derrite el chocolate con la mantequilla al baño María o en microondas.',
  '3.- En un bol, bate los huevos con el azúcar hasta que estén esponjosos.',
  '4.- Añade la mezcla de chocolate derretido y mezcla bien.',
  '5.- Incorpora la harina tamizada y las nueces (si las usas).',
  '6.- Vierte la masa en un molde y hornea durante 20-25 minutos.']
    },
    {
      id:6,
      type: 'postre',
  nombre: ' Arroz con Leche',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoKNvy9QvNwcgLDMIjE-xS-Csk8wh6Z7MSg&s',
  ingredientes: ['1.- 1 litro de leche',
    '100 g de arroz',
    '100 g de azúcar',
    '1 rama de canela',
    'Cáscara de limón',
    'Canela en polvo para decorar'],
preparacion:['1.- Enjuaga el arroz bajo agua fría hasta que el agua salga clara.',
    '2.- En una cacerola, hierve una rama de canela y la cáscara de limón en 1 litro de leche.',
    '3.- Añade el arroz y cocina a fuego lento, removiendo ocasionalmente, hasta que el arroz esté suave (aproximadamente 20-25 minutos).',
    '4.- Agrega el azúcar y mezcla bien. Cocina por 5 minutos más.',
    '5.- Retira del fuego y deja enfriar un poco antes de servir.',
    '6.- Sirve en platos o tazones y espolvorea canela en polvo por encima antes de disfrutar.']
    },
  ];
  getposts(){
    return this.postresito;
     
  }
  getPostById(id:number){
    const ID =Number(id)
  return this.postresito.find(pos => pos.id === ID);
  }
  constructor() { }
}
