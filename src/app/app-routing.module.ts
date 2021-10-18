import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CieloComponent } from '../app/cielo/cielo.component';
import { ApiSiteComponent } from '../app/api-site/api-site.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: 'cielo', component: CieloComponent },
  { path: 'api-site', component: ApiSiteComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '', redirectTo: '/cielo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
