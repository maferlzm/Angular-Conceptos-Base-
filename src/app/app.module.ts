import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { headerComponent } from './components/header/header.component';
import { footerComponent } from './components/footer/footer.component';
import { bodyComponent} from './components/body/body.component';
import { articulosComponent} from './components/articulos/articulos.component';
import { publicidadComponent } from './components/publicidad/publicidad.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent,
    bodyComponent,
    articulosComponent,
    publicidadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
