import { Injectable } from '@angular/core';
import { Images } from './images'
@Injectable()
export class ImageService {
  private images: Array<any> = [];
  constructor() { }
  setImages(images: any) {
    this.images.push(images.value);
  }
  getAllImages() {
    return this.images;
  }
}
