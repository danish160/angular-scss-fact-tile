import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FactTileComponent } from './fact-tile/fact-tile.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FactTileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
