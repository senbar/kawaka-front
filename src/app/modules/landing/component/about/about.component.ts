import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { fadeInAnimation, fadeInAnimationFromRight } from './fade-about.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInAnimation, fadeInAnimationFromRight]
})
export class AboutComponent implements OnInit {
  inViewPort = false;

  $intersection = new IntersectionObserver(() => this.inViewPort = true);

  constructor() { }

  ngOnInit(): void {
    const targets = document.querySelectorAll(".about");
    this.$intersection.observe(targets[0]);

    let images= Array.from(document.querySelectorAll('.explanation-image')) as HTMLElement[];
    //get initial values
    this.setImagesBorderRadius(images)
    
    images.forEach(image=> image.addEventListener("mouseover", (event)=> {
      this.setBorderRadius(image,200)
    }))
    setInterval(()=>this.setImagesBorderRadius(images), 1000);
  }

  private setImagesBorderRadius(images:HTMLElement[]): void {
    images.forEach((image:HTMLElement) => {
      this.setBorderRadius(image);
    })
  }
  private setBorderRadius(image:HTMLElement, intensity=50){
    image.style.setProperty('--br-blobby', this.generateBorderRadiusValue(intensity));
    image.style.setProperty('--br-blobby-after', this.generateBorderRadiusValue(intensity));
    image.style.setProperty('--br-blobby-before', this.generateBorderRadiusValue(intensity));
  }

  private generateBorderRadiusValue(intensity:number): string {
    return `${this.getRandomValue(intensity)}% ${this.getRandomValue(intensity)}% ${this.getRandomValue(intensity)}% ${this.getRandomValue(intensity)}% /
   ${this.getRandomValue(intensity)}% ${this.getRandomValue(intensity)}% ${this.getRandomValue(intensity)}%`;
  }

  private getRandomValue(intensity:number): number {
    return Math.floor(Math.random() * intensity) + 50;
  }
}
