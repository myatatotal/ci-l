import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicosService } from './servicos.service';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { CieloComponent } from './cielo/cielo.component';
import { ApiSiteComponent } from './api-site/api-site.component';
import { ChartSiteComponent } from './chart-site/chart-site.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    CieloComponent,
    ApiSiteComponent,
    ChartSiteComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ChartsModule
  ],
  exports: [
  ],
  providers: [HttpClientModule, ServicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
