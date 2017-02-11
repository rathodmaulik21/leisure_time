import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from './image-search.service';
import { Images } from './images';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css'],
  providers: [ImageSearchService]
})
export class ImageSearchComponent implements OnInit {
  public images:Array<any>;
  constructor(private _imageSearchService:ImageSearchService) { }
  getSearchedImages() {
    return this.images;
  }
  ngOnInit() {
    this.images = [];
    this._imageSearchService.getImages().subscribe(
      (images) => {
        this.images.push(images)
        console.log("images:"+this.images);
      }
    );
  }
}
