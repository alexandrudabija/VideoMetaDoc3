import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' }, // Default route to redirect to index
  { path: 'index/:myParameter', component: IndexComponent },
  { path: 'cart', component :CartComponent},
  { path: 'checkout', component :CheckoutComponent},
  { path: '**', component: IndexComponent } // Fallback route, should be at the end of the list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

