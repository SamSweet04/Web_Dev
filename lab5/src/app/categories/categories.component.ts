import { Component } from '@angular/core';
import { Category } from '../categories';
import { categories } from '../categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = categories
}
