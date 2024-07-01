import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() search = new EventEmitter<string>();
  text='auto fill';

  onSearchHandler(){
    console.log("search called", this.text);
    this.search.emit(this.text);
  }

}