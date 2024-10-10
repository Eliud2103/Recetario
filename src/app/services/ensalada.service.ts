import { Injectable } from '@angular/core';
import { postre } from '../app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EnsaladaService {
  ensalada: postre[]=[
    {
      id: 1,
      type: 'ensalada',
  
  nombre: 'Ensalada-Quinoa Mediterranea',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXdarHTaQouzzd3IveO4rOlMLetUeJRZaDg&s',
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
      type: 'ensalada',
  
  nombre: 'Ensalada-Uva tropical',
  img: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/dc12c749b9c4192864c070b1a8638cdd.jpg?itok=Y8TrNhL1',
  ingredientes: ['2 tazas de uvas (puedes usar rojas, verdes o una mezcla), cortadas por la mitad',
'1 taza de piña fresca, cortada en cubos (puede ser enlatada, pero escúrrela bien)',
'1 taza de mango, cortado en cubos',
'1/2 taza de nueces o almendras picadas (opcional)',
'1/4 de taza de coco rallado (opcional)',
'1/2 taza de yogurt natural o de vainilla',
'1-2 cucharadas de miel o jarabe de agave (ajusta al gusto)',
'Jugo de 1 limón (opcional)',
'Hojas de menta fresca para decorar (opcional)'],
  preparacion:['1.- Preparar la fruta:',
'2.- Lava bien las uvas y córtalas por la mitad. Pela y corta la piña y el mango en cubos.',
'3.- Mezclar la ensalada:',
'4.- En un tazón grande, combina las uvas, la piña, el mango, las nueces o almendras (si las usas) y el coco rallado (si lo deseas).',
'5.- Preparar el aderezo:',
'6.- En un tazón pequeño, mezcla el yogurt con la miel o jarabe de agave. Si deseas, agrega el jugo de limón para darle un toque de acidez.',
'7.- Combinar:',
'7.- Vierte el aderezo de yogurt sobre la mezcla de frutas y revuelve suavemente para cubrir toda la fruta sin romperla.',
'8.- Servir:',
'9.- Sirve la ensalada de uva tropical inmediatamente o refrigérala durante unos 30 minutos para que esté más fresca. Decora con hojas de menta antes de servir, si lo deseas.']
    },
    {
      id: 3,
      type: 'ensalada',
  nombre: 'Ensalada-pollo con cacahuates',
  
  img: 'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/4c208130fd2eb732e5b67f5020167229.jpg',
  ingredientes: ['1.- 2 pechugas de pollo cocidas y desmenuzadas',
' 4 tazas de lechuga mixta (puedes usar espinacas, lechuga romana o la que prefieras)',
' 1 zanahoria, rallada',
' 1/2 pepino, cortado en rodajas',
' 1 pimiento rojo, cortado en tiras',
' 1/4 de cebolla morada, en rodajas finas',
' 1/2 taza de cacahuates tostados (sin sal)',
' 1/4 de taza de cilantro fresco, picado (opcional)'],
  preparacion:['Cocinar el pollo:',

'Si no tienes pollo cocido, cocina las pechugas en agua hirviendo durante 15-20 minutos hasta que estén completamente cocidas. Déjalas enfriar y desmenúzalas.',
'Preparar la ensalada:',

'En un tazón grande, combina la lechuga, la zanahoria, el pepino, el pimiento rojo, la cebolla morada y el pollo desmenuzado.',
'Preparar el aderezo:',

'En un tazón pequeño, mezcla la mantequilla de cacahuate, la salsa de soya, la miel, el vinagre de arroz y el aceite de sésamo. Agrega agua poco a poco hasta alcanzar la consistencia deseada (debe ser lo suficientemente líquida para verter sobre la ensalada).',
'Combinar:',

'Vierte el aderezo sobre la ensalada y mezcla bien para que todos los ingredientes estén cubiertos.',
'Servir:',

'Sirve la ensalada en platos individuales y espolvorea los cacahuates tostados y el cilantro picado por encima.']
    },
    {
      id: 4,
      type: 'ensalada',
  
  nombre: 'Ensalada-quesos-finas-hierbas',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo61fWAo92zD5rrxNMiLUVF2_0Rgc9BXSjCw&s',
  ingredientes: ['200 g de queso de cabra o queso feta',
'4 tazas de mezcla de lechugas (puedes usar lechuga romana, espinacas, rúcula, etc.)',
'1/2 taza de nueces o almendras, ligeramente tostadas',
'1/2 taza de tomates cherry, cortados por la mitad',
'1/4 de taza de cebolla morada, finamente rebanada',
'2 cucharadas de hierbas frescas finas (como perejil, albahaca, cebollín, orégano o estragón)',
'1 cucharada de vinagre balsámico',
'3 cucharadas de aceite de oliva extra virgen',
'Jugo de medio limón',
'Sal y pimienta al gusto'],
  preparacion: ['1.- Preparar las hierbas y el queso:',

'2.- Desmenuza el queso de cabra o feta en trozos pequeños.',
'3.- Pica finamente las hierbas frescas que vayas a usar.',
'4.- Mezclar la ensalada:',

'5.- En un tazón grande, combina la mezcla de lechugas, los tomates cherry, la cebolla morada y las nueces o almendras tostadas.',
'6.- Preparar el aderezo:',

'7.- En un tazón pequeño, mezcla el vinagre balsámico, el aceite de oliva, el jugo de limón, las hierbas finas, sal y pimienta al gusto. Remueve bien hasta que esté todo integrado.',
'Combinar:',

'8.- Vierte el aderezo sobre la ensalada y mezcla suavemente para que todos los ingredientes estén bien cubiertos.',
'9.- Agregar el queso:',

'10.- Añade el queso desmenuzado por encima justo antes de servir, para que conserve su forma y textura.',
'11.- Servir:',

'12.- Sirve inmediatamente y disfruta de esta fresca y aromática ensalada.',
'13.- Esta ensalada de queso con hierbas finas es ideal como acompañamiento o como']
    },
    {
      id:5,
      type: 'ensalada',
  
  nombre: 'Ensalada César',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeb2cq180koc9VO-u54Q8lqWX9OEFN3BVYMw&s',
  ingredientes: ['1 lechuga romana grande, cortada en trozos',
'1/2 taza de queso parmesano rallado o en láminas finas',
'1 taza de crutones (puedes usar comprados o hacerlos en casa)',
'Pechuga de pollo a la parrilla (opcional, si deseas agregar proteína)'],
  preparacion: ['1.- Preparar el aderezo:',

'2.- En un tazón pequeño, mezcla la mayonesa, el ajo picado, la mostaza de Dijon, el jugo de limón, la salsa Worcestershire, los filetes de anchoa (si los usas) y el queso parmesano rallado.',
'3.- Remueve bien los ingredientes hasta que estén completamente integrados.',
'4.- Mientras mezclas, añade el aceite de oliva poco a poco hasta que el aderezo tenga una consistencia suave. Ajusta la sal y la pimienta al gusto.',
'5.- Preparar la ensalada:',

'6.- Lava y seca la lechuga romana, córtala en trozos medianos y colócala en un tazón grande.',
'7.- Añade los crutones y el queso parmesano en láminas o rallado.',
'8.- Agregar el aderezo:',

'9.- Vierte el aderezo César sobre la lechuga y mezcla suavemente para que todas las hojas queden bien cubiertas.',
'10.- Agregar proteína (opcional):',

'11.- Si deseas hacerla más completa, añade pechuga de pollo a la parrilla cortada en tiras encima de la ensalada.',
'12.- Servir:',

'13.- Sirve la ensalada inmediatamente y disfruta de esta clásica y deliciosa receta.']
    },
  
  ]
  getposts(){
    return this.ensalada;
     
  }
  getPostById(id:number){
    const ID =Number(id)
  return this.ensalada.find(pos => pos.id === ID);
  }
  constructor() { }
}
