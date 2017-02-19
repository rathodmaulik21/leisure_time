import { Component, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageSearchService } from '../image-search/image-search.service';
import { ImageService } from '../image-search/image.service';

@Component({
  selector: 'app-user-post-form',
  templateUrl: './user-post-form.component.html',
  styleUrls: ['./user-post-form.component.css']
})
export class UserPostFormComponent {
  public visible = false;
  images: Array<any>;
  imageOriginal: string;
  userForm: FormGroup;
  selectedImage:string;

  constructor(private formBuilder: FormBuilder, private imageService: ImageService, private _imageSearchService: ImageSearchService) {
    this.userForm = this.formBuilder.group({
      'category':[''],
      'name': ['Intersteller', [Validators.required]],
      'comment': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
      'rate':[0 ,[Validators.required]],
      'imageUrl':[this.selectedImage]
    });
  }
  
  public show(): void {
    if(this.visible == false) {
       this.visible = true;
       // this.searchImage();
    } else {
      this.visible = false;
    }
  }
  
  /*public searchImage(): void {
    this._imageSearchService.getImages().subscribe(
      (images) => {
        this.imageService.setImages(images);
        this.images = this.imageService.getAllImages();
      }
    );
  }

  public selectImage(selectedImage:string) {
    this.selectedImage = selectedImage;
    console.log("selected Image:"+selectedImage);
  }*/

  submit() {
    console.log(this.userForm.value);
  }

  consoleText(object) {
  }

}
