import { Component, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageSearchService } from '../image-search/image-search.service';
import { ImageService } from '../image-search/image.service';
import { UserFormValidationService } from './user-form-validation.service';

@Component({
  selector: 'app-user-post-form',
  templateUrl: './user-post-form.component.html',
  styleUrls: ['./user-post-form.component.css']
})
export class UserPostFormComponent {
  public visible = false;
  images: Array<string> = [];
  userForm: FormGroup;
  selectedImage:string;

  constructor(private formBuilder: FormBuilder, private imageService: ImageService, private _imageSearchService: ImageSearchService) {
    this.userForm = this.formBuilder.group({
      'category':['',[Validators.required, UserFormValidationService.categoryValidator]],
      'name': ['', [Validators.required]],
      'review': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
      'rate':[0 ,[Validators.required, UserFormValidationService.rateValidator]],
      'imageUrl':['',[Validators.required, UserFormValidationService.imageValidator]]
    });
  }
  
  public show(): void {
    if(this.visible == false) {
       this.visible = true;
    } else {
      this.visible = false;
    }
  }
  
  onchange(imageFlag) {
    if(imageFlag == false) {
      this.images.push(this.userForm.value.imageUrl);
      this.visible = false;
      console.log("image Array:"+this.images);
    }
  }

  submit() {
    console.log(this.userForm.value);
  }

  consoleText(object) {
  }

}
