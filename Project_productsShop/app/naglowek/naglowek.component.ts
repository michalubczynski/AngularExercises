import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-naglowek',
  templateUrl: './naglowek.component.html',
  styleUrls: ['./naglowek.component.css']
})
export class NaglowekComponent {
naglowek :string = " Sklep TAIiP";
@HostListener('mouseenter')
  onMouseEnter() {
  this.naglowek= 'Sklep TAIiP :)';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.naglowek= 'Sklep TAIiP ';
  }
}


