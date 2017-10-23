import { AuthService } from './services/auth.service';
import { CollectionModule } from './modules/collection/collection.module';
import { UtilModule } from './modules/util/util.module';
import { AuthGuard } from './services/auth-guard.service';
import { MenuModule } from './modules/menu/menu.module';
import { StoreModule, combineReducers } from '@ngrx/store';

// clarity module
import { ClarityModule } from 'clarity-angular';
// rxjs Store module
import { authReducer } from './reducers/auth';

import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { ElectronService } from './providers/electron.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollectionModule,
    ClarityModule.forRoot(),
    MenuModule,
    StoreModule.provideStore({ _auth: authReducer }),
    UtilModule,
  ],
  providers: [
    ElectronService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
