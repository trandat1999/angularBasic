import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstModuleModule } from "./first-module/first-module.module";
import { UserModule } from "./user/user.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTableComponent } from './my-table/my-table.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, MyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FirstModuleModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
