import { BrowserModule } from "@angular/platform-browser";
import {NgModule} from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { ProductlistComponent } from "./components/Order/productlist/productlist.component";

@NgModule({
    declarations: [
      
    ],
    imports: [
        BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
    ],
providers:[],
bootstrap:[]
})
export class AppModule {
}