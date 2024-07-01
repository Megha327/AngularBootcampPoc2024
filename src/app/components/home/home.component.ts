import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../types/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: Product[] = [];

  filteredProducts: Product[] = [];

  productServices = inject(ProductService);

  router = inject(Router);


  ngOnInit(){
    // this.products = this.productServices.products;
    this.productServices.getProducts().subscribe((result: any) => {
      console.log("result", result);
      this.products = result;

      this.filteredProducts = this.products;
    });
  }

  onViewProduct(id: number) {
    console.log("onViewProduct", id);
    this.router.navigateByUrl("/product/"+id)
  }

  onSearchCall(event: string){
    console.log("search event value in parent", event);
    if(event){
      this.filteredProducts = this.products.filter((ele: any) => ele.name.toLowerCase().includes(event.toLowerCase()));
    }else{
      this.filteredProducts = this.products;
    }
  }
}
