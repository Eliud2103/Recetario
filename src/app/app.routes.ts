import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostresComponent } from './pages/postres/postres.component';
import { CoctelesComponent } from './pages/cocteles/cocteles.component';
import { VerpostreComponent } from './pages/verpostre/verpostre.component';
import { VercoctelesComponent } from './pages/vercocteles/vercocteles.component';
import { NinosComponent } from './pages/ninos/ninos.component';
import { VerninosComponent } from './pages/verninos/verninos.component';
import { DesayunoComponent } from './pages/desayuno/desayuno.component';
import { VerdesayunoComponent } from './pages/verdesayuno/verdesayuno.component';
import { EnsaladasComponent } from './pages/ensaladas/ensaladas.component';
import { EnsaladasverComponent } from './pages/ensaladasver/ensaladasver.component';
import { PastaComponent } from './pages/pasta/pasta.component';
import { VerpastaComponent } from './pages/verpasta/verpasta.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
   // Redirecciona a login por defecto
   
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'postres',
        component: PostresComponent,
    },
    {
        path: 'cocteles',
        component: CoctelesComponent,
    },
  
    {
       path:'ninos',
      component: NinosComponent,
    },
    {
       path:'desayuno',
      component: DesayunoComponent,
    },
    {
       path:'pastas',
      component: PastaComponent,
    },
    {
       path:'ensaladas',
      component: EnsaladasComponent,
    },
    {
path: 'verpasta/:pastaId',
component: VerpastaComponent,
    },
    {
path: 'verdesayuno/:desayunoId',
component: VerdesayunoComponent,
    },
    {
path: 'ensaladasver/:ensaladaId',
component: EnsaladasverComponent,
    },
    {
path: 'vernino/:ninoId',
component: VerninosComponent,
    },
    {
        path: 'verpostre/:postreId',
        component: VerpostreComponent,
    
    },
    {
        path: 'vercoctel/:coctelId',
        component: VercoctelesComponent,
    
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },

];


