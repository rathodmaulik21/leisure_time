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
  public images: Array<Images> = [];
  constructor(private imageService: ImageService, private _imageSearchService: ImageSearchService) {
    this._imageSearchService.getImages().subscribe(
      (images) => {
        this.imageService.setImages(images);
        this.images = imageService.getAllImages();
      }
    );
  }
  getSearchedImages() {
    return this.images;
  }
  ngOnInit() {
    let imageDemo: Array<Images> = this.getSearchedImages();
    console.log("images:" + imageDemo);
  }
}
