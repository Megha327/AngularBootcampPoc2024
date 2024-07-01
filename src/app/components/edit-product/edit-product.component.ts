import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  formBuilder = inject(FormBuilder);
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  toasterService = inject(ToastrService);

  productForm:FormGroup = this.formBuilder.group({
    id:[''],
    name:['', [Validators.required, Validators.minLength(50)]],
    brand:['', [Validators.required]],
    image:[''],
    currentPrice:[''],
    standardPrice:[''],
    discount:['']
  })

  ngOnInit(){
    console.log("activated", this.activatedRoute.snapshot.params['id']);
    let productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(productId).subscribe((result) => {
     this.productForm.patchValue(result);
    });
  }

  editProduct() {
    if(this.productForm.invalid){
      this.toasterService.error("please provide valid input data");
      return;
    }
    console.log("form edited", this.productForm.value);
    this.productService.updateProduct(this.productForm.value).subscribe((result) => {
      this.toasterService.success("form updated");
      this.router.navigateByUrl('/');
    })
  }
}
