import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PhotoCarouselComponent } from '../photo-carousel/photo-carousel.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavBarComponent, PhotoCarouselComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
