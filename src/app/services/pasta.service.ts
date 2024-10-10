import { Injectable } from '@angular/core';
import { postre } from '../app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PastaService {
  pasta: postre[]=[
    {
      id: 1,
      type: 'pasta',
  
  nombre: 'Lasaña',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHH3Gpync0MKU7Qkt0EoAdFNBQ5s84K_ADGA&s',
  ingredientes: ['Para la salsa boloñesa:',
'500 g de carne molida de res o cerdo (o mezcla de ambas)',
'1 cebolla picada',
'2 dientes de ajo picados',
'1 lata (400 g) de tomates triturados o salsa de tomate',
'1 cucharada de pasta de tomate',
'1/2 taza de vino tinto (opcional)',
'1 cucharadita de azúcar (opcional, para reducir la acidez del tomate)',
'1 cucharadita de orégano seco',
'1 cucharadita de albahaca seca',
'Sal y pimienta al gusto',
'2 cucharadas de aceite de oliva',
'Para la salsa bechamel:',
'3 cucharadas de mantequilla',
'3 cucharadas de harina de trigo',
'3 tazas de leche',
'Nuez moscada (opcional)',
'Sal y pimienta al gusto',
'Para la lasaña:',
'12 láminas de pasta para lasaña (precocida o regular, dependiendo de las instrucciones del paquete)',
'2 tazas de queso mozzarella rallado',
'1 taza de queso parmesano rallado'],
  preparacion:['Preparar la salsa boloñesa:',
'En una sartén grande, calienta el aceite de oliva y sofríe la cebolla y el ajo hasta que estén dorados.',
'Añade la carne molida y cocina hasta que se dore completamente. Agrega sal y pimienta al gusto.',
'Incorpora la pasta de tomate y remueve bien.',
'Si estás usando vino tinto, agrégalo ahora y deja que se reduzca durante unos minutos.',
'Añade los tomates triturados, el orégano, la albahaca y el azúcar. Cocina a fuego medio durante 20-30 minutos, removiendo ocasionalmente, hasta que la salsa espese.',
'2. Preparar la salsa bechamel:',
'En una cacerola a fuego medio, derrite la mantequilla.',
'Añade la harina y remueve rápidamente durante 1-2 minutos hasta que se forme una pasta (roux).',
'Gradualmente, vierte la leche mientras remueves constantemente con un batidor de mano para evitar grumos.',
'Cocina la salsa hasta que espese, unos 5-7 minutos. Añade una pizca de nuez moscada, sal y pimienta al gusto.',
'3. Montar la lasaña:',
'Precalienta el horno a 180°C (350°F).',
'En una fuente para horno, coloca una capa delgada de salsa boloñesa en el fondo.',
'Coloca una capa de láminas de lasaña sobre la salsa.',
'Añade una capa de salsa boloñesa y luego una capa de salsa bechamel.',
'Espolvorea un poco de queso mozzarella y parmesano.',
'Repite el proceso hasta que termines con una última capa de láminas de lasaña. Cubre con salsa bechamel y queso para que se dore en el horno.',
'4. Hornear:',
]
    },
  
    {
      id: 2,
      type: 'pasta',
  
  nombre: 'Fetuccine',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7V6XSWZCh7NNinU1w-4mCyMYWqA8fVNvOg&s',
  ingredientes: ['400 g de pasta fettuccine',
'2 cucharadas de mantequilla',
'2 dientes de ajo, picados',
'1 taza de crema para batir',
'1/2 taza de queso parmesano rallado',
'Sal y pimienta al gusto',
'Perejil fresco picado (opcional)'],
  preparacion:['1.- Cocinar la pasta: Cocina el fettuccine en agua con sal según las instrucciones del paquete. Escurre y reserva.',

'2.- Preparar la salsa: En una sartén grande, derrite la mantequilla y sofríe el ajo por 1-2 minutos. Añade la crema y cocina a fuego lento por 5 minutos. Agrega el queso parmesano, sal y pimienta.',

'3.- Mezclar la pasta: Añade el fettuccine a la sartén con la salsa y mezcla bien. Cocina por 2-3 minutos hasta que la pasta esté bien cubierta.',

'4.- Servir: Sirve caliente, decorado con perejil fresco si lo deseas.']
    },
    {
      id: 3,
      type: 'pasta',
  nombre: 'Raviolis',
  
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzqLu9CX8a3Iarc_Z3UYQ6O_CYuvo58lMFxw&s',
  ingredientes: ['400 g de raviolis (rellenos de queso o carne)',
'2 cucharadas de mantequilla',
'1 diente de ajo, picado',
'1/2 taza de crema para batir o salsa de tomate (según prefieras)',
'1/4 taza de queso parmesano rallado',
'Sal y pimienta al gusto',
'Albahaca o perejil fresco para decorar (opcional)'],
  preparacion:['Cocinar los raviolis: Cocina los raviolis en agua hirviendo con sal según las instrucciones del paquete (normalmente entre 3-5 minutos). Escúrrelos y reserva.',

'1.- Preparar la salsa: En una sartén grande, derrite la mantequilla y sofríe el ajo durante 1-2 minutos. Si usas crema, agrégala y cocina a fuego bajo por 5 minutos. Si prefieres salsa de tomate, viértela directamente y cocina por 3-4 minutos.',

'2.- Mezclar los raviolis: Añade los raviolis cocidos a la sartén con la salsa y mezcla suavemente para que se cubran bien. Cocina durante 2-3 minutos más.',

'3.- Servir: Sirve los raviolis con queso parmesano por encima y decora con albahaca o perejil fresco si lo deseas.']
    },
    {
      id: 4,
      type: 'pasta',
  
  nombre: 'Rigatoni',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUvIaWOUBxm3R3MgQ1QlLf3AF3nVtf9wQlA&s',
  ingredientes: ['400 g de rigatoni',
' 2 cucharadas de aceite de oliva',
' 1 diente de ajo, picado',
' 1 lata (400 g) de tomates triturados o salsa de tomate',
' 1/2 taza de queso parmesano rallado',
' 1/2 cucharadita de orégano seco',
' Sal y pimienta al gusto',
' Albahaca fresca para decorar (opcional)'],
  preparacion: ['1.- Cocinar el rigatoni: Cocina la pasta en agua hirviendo con sal siguiendo las instrucciones del paquete (alrededor de 10-12 minutos). Escurre y reserva.',

'2.- Preparar la salsa: En una sartén grande, calienta el aceite de oliva y sofríe el ajo por 1-2 minutos. Añade los tomates triturados y el orégano. Cocina a fuego lento durante 10 minutos. Ajusta con sal y pimienta.',

'3.- Mezclar la pasta: Agrega el rigatoni a la sartén con la salsa y mezcla bien. Cocina 2-3 minutos para que la pasta absorba el sabor.',

'4.- Servir: Sirve con queso parmesano rallado y decora con albahaca fresca.']
    },
    {
      id:5,
      type: 'pasta',
  
  nombre: 'Tortelline',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKCPhf1S-MzQCfHaKxQY3Bad-vATDw10NKA&s',
  ingredientes: ['400 g de tortellini (rellenos de queso, carne o espinaca)',
' 2 cucharadas de mantequilla',
' diente de ajo, picado',
' 1 taza de crema para batir o salsa de tomate (según prefieras)',
' 1/2 taza de queso parmesano rallado',
' Sal y pimienta al gusto',
' Albahaca fresca o perejil para decorar (opcional)'],
  preparacion: ['1.- Cocinar los tortellini: Cocina los tortellini en agua hirviendo con sal según las instrucciones del paquete (normalmente 3-5 minutos). Escurre y reserva.',

'2.- Preparar la salsa: Derrite la mantequilla en una sartén grande. Sofríe el ajo durante 1-2 minutos. Si usas crema, agrégala y cocina a fuego lento por 5 minutos. Si prefieres salsa de tomate, viértela directamente y cocina durante 3-4 minutos.',

'3.- Mezclar los tortellini: Añade los tortellini cocidos a la sartén y mezcla suavemente hasta que estén bien cubiertos con la salsa. Cocina por 2-3 minutos.',

'4.- Servir: Sirve caliente, espolvoreando queso parmesano por encima y decorando con albahaca o perejil fresco.']
    },
  
  ]
  getposts(){
    return this.pasta;
     
  }
  getPostById(id:number){
    const ID =Number(id)
  return this.pasta.find(pos => pos.id === ID);
  }
  constructor() { }
}
