import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

@Component({
  selector: 'app-user-post-category',
  templateUrl: './user-post-category.component.html',
  styleUrls: ['./user-post-category.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserPostCategoryComponent),
      multi: true
    }
  ]
})
export class UserPostCategoryComponent implements OnInit{

  public items: Array<string> = ['Movie','Song','Article','Music','Tv Season','General','Game','Book','Fitness','Place'];

  public selectedValue: any = {};
  // public selectedValue:string="";
  private _disabledV: string = '0';
  private disabled: boolean = false;

  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(selectedValue: string) {
    this._disabledV = selectedValue;
    this.disabled = this._disabledV === '1';
  }

  public selected(selectedValue: any): void {
    this.onChangeCallback(this.selectedValue.text);
    // console.log('Selected value is: ', selectedValue.text);
  }

  public removed(selectedValue: any): void {
    // console.log('Removed value is: ', selectedValue);
  }

  public typed(selectedValue: any): void {
    // console.log('New search input: ', selectedValue);
  }

  public refreshValue(selectedValue: any): void {
    this.selectedValue = selectedValue;
  }

  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
    return this.selectedValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.selectedValue) {
       this.selectedValue = v;
        this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.selectedValue) {
       this.selectedValue = value;
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
  
  ngOnInit() {
  }
}
