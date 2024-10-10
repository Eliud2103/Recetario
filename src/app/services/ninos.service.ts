import { Injectable } from '@angular/core';
import { postre } from '../app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class NinosService {
  postresitoNino: postre[]=[

    {
      id: 1,
      type: 'nino',

  nombre: 'Galleta de avena',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwm6bZ67-_dVEOdThpwoWTHYCoxDs6Hxvbvw&s',
  ingredientes: ['1 taza de avena en hojuelas',
'1/2 taza de harina de trigo (puede ser integral si prefieres)',
'1/3 taza de azúcar morena',
'1/4 taza de azúcar blanca',
'1/2 cucharadita de polvo para hornear',
'1/4 cucharadita de canela en polvo (opcional)',
'1 pizca de sal',
'1/2 taza de mantequilla derretida (aproximadamente 115 g)',
'1 huevo',
'1 cucharadita de extracto de vainilla',
'1/2 taza de pasas, chispas de chocolate o nueces (opcional)',
    '6.- Cacao en polvo para espolvorear'],
  preparacion:['1.- Precalentar el horno: Precalienta tu horno a 180°C (350°F) y cubre una bandeja para hornear con papel encerado o engrasado.',
'2.- Mezclar ingredientes secos: En un tazón grande, mezcla la avena, la harina, el polvo para hornear, la canela y la sal.',
'3.- Mezclar ingredientes húmedos: En otro tazón, bate el huevo y agrega la mantequilla derretida, los azúcares y la vainilla. Mezcla bien hasta que esté todo integrado.',
'4.- Combinar: Vierte la mezcla húmeda en la mezcla de avena y harina. Remueve todo bien hasta que se forme una masa. Si deseas, añade las pasas, chispas de chocolate o nueces en este punto.',
'5.- Formar las galletas: Con la ayuda de una cuchara o tus manos, forma pequeñas bolas de masa y colócalas en la bandeja para hornear, dejando espacio entre ellas para que se expandan.',
'6.- Hornear: Hornea las galletas durante 10-12 minutos, o hasta que los bordes estén dorados. El centro puede parecer un poco suave, pero se endurecerá cuando las galletas se enfríen.',
'7.-  Enfriar: Deja enfriar las galletas en la bandeja durante unos minutos antes de transferirlas a una rejilla para que se enfríen completamente.']
    },

    {
      id: 2,
      type: 'nino',

  nombre: 'Malteada de fresa',
  img: 'https://frios.com.mx/wp-content/uploads/2023/04/MALTEADA-FRESA-BAKALAR.jpg',
  ingredientes: ['1 taza de fresas frescas o congeladas',
'2.- 1 taza de leche (puede ser entera, semidescremada, o la que prefieras)',
'3.- 2 bolas de helado de vainilla o de fresa',
'4.- 1 cucharadita de azúcar (opcional, dependiendo de cuán dulce te guste)',
'5.- Crema batida (opcional para decorar)',
'6.- Fresas adicionales para decorar (opcional)'],
preparacion:['1.- Preparar las fresas: Si usas fresas frescas, asegúrate de lavarlas y quitarles el tallo. Si son congeladas, no necesitas descongelarlas por completo.',

'2.- Licuar los ingredientes: Coloca las fresas, la leche, el helado y el azúcar en una licuadora. Licua a alta velocidad hasta obtener una mezcla suave y cremosa.',
'3.- Probar y ajustar: Prueba la malteada y ajusta el dulzor a tu gusto añadiendo más azúcar si es necesario.',
'4.- Servir: Vierte la malteada en un vaso alto. Si deseas, decora con crema batida y una fresa encima.',
'5.- Disfrutar: ¡Listo! Tu malteada de fresa está lista para disfrutar.']
    },
    {
      id: 3,
      type: 'nino',
  nombre: 'Bowl de yogurt con fruta  ',

  img: 'https://www.hola.com/horizon/landscape/79862ba7d0f2-bowl-yogur-fruta-t.jpg',
  ingredientes: ['1 taza de yogurt natural o griego (puede ser sin azúcar o endulzado)',
'1/2 taza de granola (puedes usar tu favorita)',
'1/2 taza de frutas frescas (fresas, plátano, moras, kiwi, etc.)',
'1 cucharadita de miel o jarabe de maple (opcional, para endulzar)',
'1 cucharada de semillas (chía, linaza, o cualquier otra que prefieras)',
'Nueces o almendras picadas (opcional)'],
preparacion:['1.- Preparar la base: Coloca el yogurt en un bowl, extendiéndolo de manera uniforme.',
'2.- Añadir la fruta: Coloca las frutas frescas por encima del yogurt. Puedes cortarlas en trozos pequeños o en rodajas según lo que prefieras.',
'3.- Agregar la granola: Esparce la granola por encima de las frutas y el yogurt.',
'4.- Añadir extras: Si lo deseas, puedes añadir las semillas y las nueces o almendras para darle un toque crujiente adicional.',
'5.- Endulzar (opcional): Rocía la miel o jarabe de maple si prefieres un toque más dulce.',
'6.- Disfrutar: ¡Tu bowl de yogurt está listo para disfrutar!']
    },
    {
      id: 4,
      type: 'nino',

  nombre: 'Tiras de pollo con dip honey',
  img: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/ccea52a38455ec46500838a28a2523d7.jpg?itok=f4RPuXKM',
  ingredientes: ['1.- 500 g de pechuga de pollo (cortada en tiras)',
'1 taza de harina de trigo',
'2 huevos (batidos)',
'1 taza de pan rallado o panko (para mayor crujiente)',
'1/2 cucharadita de sal',
'1/2 cucharadita de pimienta',
'1/2 cucharadita de paprika o pimentón (opcional)',
'Aceite para freír (si prefieres freír, o aceite en spray si vas a hornear)'],
preparacion: ['1.- Preparar el pollo: Corta las pechugas de pollo en tiras del tamaño que prefieras.',
'2.- Sazonar: En un plato, mezcla la harina con la sal, la pimienta y la paprika.',
'3.- Preparar el empanizado:',
'4.- Coloca la harina sazonada en un plato.',
'5.- En otro plato, bate los huevos.',
'6.- En un tercer plato, coloca el pan rallado o panko.',
'7.- Empanizar el pollo:',
'8.- Pasa cada tira de pollo primero por la harina sazonada, cubriéndola bien.',
'9.- Luego, sumérgela en el huevo batido.',
'10.- Finalmente, cúbrela con el pan rallado o panko, asegurándote de que quede bien cubierta.',
'11.- Freír u hornear:',
'12.- Freír: Calienta aceite en una sartén a fuego medio-alto. Fríe las tiras de pollo durante 3-4 minutos por cada lado, hasta que estén doradas y cocidas por dentro.',
'13.- Hornear: Precalienta el horno a 200°C (400°F). Coloca las tiras de pollo en una bandeja para hornear engrasada o con papel encerado, rocía con un poco de aceite en spray y hornea durante 15-20 minutos, dándoles la vuelta a la ']
    },
    {
      id:5,
      type: 'nino',

  nombre: 'Pai de mango y limon',
  img: 'https://cdn.colombia.com/gastronomia/2011/08/03/pie-de-mango-2838.gif',
  ingredientes: ['1.- 1 ½ tazas de galletas María trituradas',
'2.- 1/4 taza de mantequilla derretida',

'3.- 1 taza de pulpa de mango (puede ser natural o envasada)',
'4.- 1/2 taza de jugo de limón fresco',
'5.- 1 lata de leche condensada (aprox. 397 g)',
'6.- 1 lata de leche evaporada (aprox. 354 ml)',
'7.- 2 sobres de gelatina sin sabor (14 g en total)',
'8.- 1/4 taza de agua',
'9.- Rodajas de mango',
'10.- Rodajas de limón',
'11.- Hojas de menta'],
preparacion: ['1.- Precalienta el horno a 180°C.',
  '2.- Derrite el chocolate con la mantequilla al baño María o en microondas.',
  '3.- En un bol, bate los huevos con el azúcar hasta que estén esponjosos.',
  '4.- Añade la mezcla de chocolate derretido y mezcla bien.',
  '5.- Incorpora la harina tamizada y las nueces (si las usas).',
  '6.- Vierte la masa en un molde y hornea durante 20-25 minutos.']
    },
 
  ];
  getposts(){
    return this.postresitoNino;
     
  }
  getPostById(id:number){
    const ID =Number(id)
  return this.postresitoNino.find(pos => pos.id === ID);
  }
  constructor() { }
}
