import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosModule } from './produtos/produtos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    ProdutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
