
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [

  {path: 'inventory', component: InventoryComponent},
  {path : 'product', component: ProductComponent},
  {path : '**', component: ProductComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    InventoryComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
