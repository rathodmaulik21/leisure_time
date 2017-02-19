import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from './image-search.service';
import { Images } from './images';
import { Observable } from 'rxjs/Rx';
import { ImageService } from './image.service'

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
  public images: Array<any> = [];
  constructor(private imageService: ImageService, private _imageSearchService: ImageSearchService) {
    this._imageSearchService.getImages("india").subscribe(
      (images) => {
        this.imageService.setImages(images);debugger;
        this.images = imageService.getAllImages();
      }
    );
  }
  getSearchedImages() {
    return this.images;
  }
  ngOnInit() {
    let imageDemo: Array<any> = this.getSearchedImages();
    console.log("images:" + this.images);
  }
}
