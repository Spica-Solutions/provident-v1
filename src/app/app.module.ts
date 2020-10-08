import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { SpApiService } from './modules/services/sp-api.service';

import { V1Resolver } from './modules/layout/v1/resolvers/v1-main.resolver';
import { V1ListResolver } from './modules/layout/v1/resolvers/v1-list.resolver';
import { V1RecordResolver } from './modules/layout/v1/resolvers/v1-record.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
      SpApiService,

      V1Resolver,
      V1ListResolver,
      V1RecordResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
