import { Component, OnInit, forwardRef, EventEmitter, Output } from '@angular/core';
import { ImageSearchService } from '../image-search/image-search.service';
import { ImageService } from '../image-search/image.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

@Component({
  selector: 'app-user-post-image',
  templateUrl: './user-post-image.component.html',
  styleUrls: ['./user-post-image.component.css'],
   providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserPostImageComponent),
      multi: true
    }
  ]
})
export class UserPostImageComponent implements OnInit {

  images: Array<any>;
  selectedImage:string;
  imageSelected:boolean;
  public visible = false;
  @Output()
  click: EventEmitter<boolean> = new EventEmitter<boolean>();
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
    this.imageSelected = true;
    this.selectedImage = selectedImage;
    this.onChangeCallback(this.selectedImage);
    // document.getElementById("searchImageData").className="selectedImage";
    console.log("selected Image:"+selectedImage);
  }

  public uploadImage() {
    if(this.imageSelected) {
      this.click.emit(this.visible);
    }
  }

  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
    return this.selectedImage;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.selectedImage) {
       this.selectedImage = v;
        this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.selectedImage) {
       this.selectedImage = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  
  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
