import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavBarComponent,],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {
  photoArray: string[] = [
    "assets/gallery/IMG_6660.jpg", 
    "assets/gallery/unnamed-1.jpg", 
    "assets/gallery/unnamed-2.jpg",
    "assets/gallery/unnamed-3.jpg"
  ];

  currentSrc: string = this.photoArray[0];
  currentIndex: number = 0;

  constructor() {
    this.fadeInImage(); // Immediately fade in the first image
    this.startSlideshow();
  }

  startSlideshow() {
    setInterval(() => {
      this.fadeOutImage(() => {
        this.currentIndex = (this.currentIndex + 1) % this.photoArray.length;
        this.currentSrc = this.photoArray[this.currentIndex];
        this.fadeInImage();
      });
    }, 5000); // 5000 milliseconds = 5 seconds
  }

  fadeOutImage(callback: () => void) {
    const imgElement = document.querySelector('.fade');
    if (imgElement) {
      imgElement.classList.remove('fade-in');
      imgElement.classList.add('fade-out');
      setTimeout(callback, 1000); // Match the duration of the fade-out transition
    }
  }

  fadeInImage() {
    const imgElement = document.querySelector('.fade');
    if (imgElement) {
      imgElement.classList.remove('fade-out');
      imgElement.classList.add('fade-in');
    }
  }
}


