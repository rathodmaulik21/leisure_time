import { Component, OnInit, Output, EventEmitter, forwardRef, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserRatingComponent),
      multi: true
    }
  ]
})
export class UserRatingComponent implements OnInit {
  
  ngOnInit() {
  }
  // public x:number = 5;
  // public y:number = 2;
  public max:number = 10;
  @Input()
  public rate:number = 0;
  public isReadonly:boolean = false;

  public overStar:number;
  public percent:number;
  public ratingStates:any = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];

  public hoveringOver(value:number):void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  public resetStar():void {
    this.overStar = void 0;
  }

  public setRate(event):void {
    this.onChangeCallback(this.rate);
  }
  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
    return this.rate;
  };

  set value(v: any) {
    if (v !== this.rate) {
       this.rate = v;
        this.onChangeCallback(v);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any) {
    if (value !== this.rate) {
       this.rate = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
