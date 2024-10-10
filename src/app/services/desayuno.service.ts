import { Injectable } from '@angular/core';
import { postre } from '../app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DesayunoService {
desayuno: postre[]=[
  {
    id: 1,
    type: 'desayuno',

nombre: 'Wafles de platano',
img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTnEA5Hff38dCmdgCgCugIcYZ84V4N_zuKg&s',
ingredientes: ['2 plátanos maduros',
'2 huevos',
'1 taza de harina de avena (puedes hacerla moliendo avena)',
'1/2 taza de leche (puede ser de almendra, soya o la que prefieras)',
'1 cucharadita de polvo para hornear',
'1 cucharadita de esencia de vainilla',
'1/4 cucharadita de canela (opcional)',
'Miel o jarabe de maple para servir (opcional)'],
preparacion:['1.- Preparar la mezcla:',

'2.- En un tazón grande, aplasta los plátanos con un tenedor hasta que queden en puré.',
'3.- Añade los huevos, la leche, la vainilla y mezcla bien hasta integrar.',
'4.- En otro tazón, mezcla la harina de avena, el polvo para hornear y la canela.',
'5.- Combina los ingredientes secos con los húmedos y remueve bien hasta formar una mezcla homogénea. Si la mezcla está muy espesa, puedes agregar un poco más de leche.',
'6.- Calentar la waflera:',
'7.- Precalienta la waflera y rocía con un poco de aceite en aerosol o unta ligeramente con mantequilla para evitar que se peguen los waffles.',
'8.- Cocinar los waffles:',
'8.- Vierte la mezcla en la waflera caliente y cocina según las instrucciones de tu máquina, generalmente hasta que los waffles estén dorados y crujientes.',
'10.- Servir:',
'11.- Sirve los waffles de plátano calientes con miel, jarabe de maple, frutas frescas, o incluso un poco de crema de cacahuate para un toque extra.']
  },

  {
    id: 2,
    type: 'desayuno',

nombre: 'Pan frances con tiramisu',
img: 'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/aa1b0f5a60a61678209522016e14fb93.jpg',
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
    type: 'desayuno',
nombre: 'Chilaquiles verdes',

img: 'https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg',
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
    type: 'desayuno',

nombre: 'Hot cakes de avena y manzana',
img: 'https://i.blogs.es/0cf781/hot-cakes-de-avena-manzana-canela-otono-2-/1366_2000.jpeg',
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
    type: 'desayuno',

nombre: 'Sandwich de carnes frias y queso',
img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B6CILQYV9caegX0qBV94l_Xv1Rd-PPkSog&s',
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

]
getposts(){
  return this.desayuno;
   
}
getPostById(id:number){
  const ID =Number(id)
return this.desayuno.find(pos => pos.id === ID);
}
  constructor() { }
}
