import { Injectable } from '@angular/core';
import { Images } from './images'
@Injectable()
export class ImageService {
  private images: Array<Images> = [];
  constructor() { }
  setImages(images: any) {
    console.log("inside set image service: "+images);
    this.images.push(images);
  }
  getAllImages() {
    console.log("inside get image service: "+this.images);
    return this.images;
  }
}