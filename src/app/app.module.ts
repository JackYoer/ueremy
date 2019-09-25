import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserComponent } from './browser/browser.component';
import { EditorComponent } from './editor/editor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MapComponent } from './map/map.component';
import { MapService } from './map/map.service';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    LeafletModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [ AppComponent, BrowserComponent, EditorComponent, PageNotFoundComponent, WelcomePageComponent, MapComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MapService]
})
export class AppModule { }
