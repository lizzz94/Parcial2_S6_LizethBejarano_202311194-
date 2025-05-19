import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AirlineModule } from './airline/airline.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AirlineModule
  ],
  providers: [ 
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


