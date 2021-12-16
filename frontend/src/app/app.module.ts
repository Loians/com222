import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const appRoutes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'consulta', component: ListaComponent },
];


@NgModule({
  declarations: [AppComponent, ListaComponent, CadastroComponent],
  imports: [ RouterModule.forRoot(
    appRoutes
  ),BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
