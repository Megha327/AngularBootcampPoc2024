import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../types/product';
import { RupeePipe } from '../../rupee.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, UpperCasePipe, RupeePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() viewProduct = new EventEmitter<number>();

  viewHandler ( ){
    console.log("view clicked");
    this.viewProduct.emit(this.product.id)
  }
}
