import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from '../image-search/image-search.service';
import { ImageService } from '../image-search/image.service';

@Component({
  selector: 'app-user-post-image',
  templateUrl: './user-post-image.component.html',
  styleUrls: ['./user-post-image.component.css']
})
export class UserPostImageComponent implements OnInit {

  images: Array<any>;
  imageOriginal: string;
  selectedImage:string;
  constructor(private imageService: ImageService, private _imageSearchService: ImageSearchService) { }
  ngOnInit() {
  }

  public searchByEnter(event) {
    if(event.keyCode == 13) {
      this.searchImage();
    }
  }

  public searchImage(): void {
    let searchString:string = (<HTMLInputElement>document.getElementById("searchText")).value.trim();
    if(searchString != "") {
      console.log("search string:"+'facebook');
      this._imageSearchService.getImages(searchString).subscribe(
        (images) => {
          this.imageService.setImages(images);
          this.images = this.imageService.getAllImages();
        }
      );
    }
  }

  public selectImage(selectedImage:string) {
    this.selectedImage = selectedImage;
    document.getElementById("searchImageData").className="selectedImage";
    console.log("selected Image:"+selectedImage);
  }

}
