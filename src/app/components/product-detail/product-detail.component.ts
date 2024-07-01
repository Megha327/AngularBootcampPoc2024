import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../types/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RupeePipe } from '../../rupee.pipe';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, RouterLink, UpperCasePipe, RupeePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product!: Product;
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit(){
    console.log("activated", this.activatedRoute.snapshot.params['id']);
    let productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(productId).subscribe((result) => {
      this.product = result;
    });
  }
}
