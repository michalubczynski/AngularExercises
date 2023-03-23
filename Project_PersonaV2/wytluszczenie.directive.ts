import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appWytluszczenie]'
})
export class WytluszczenieDirective {
@HostBinding('class') klasa = 'klasaZmienialna';

@HostListener('mouseenter') onMouseEnter(){
  this.klasa = 'najechano';
}
@HostListener('mouseleave') onMouseLeave(){
  this.klasa = 'opuszczono';

}
}
