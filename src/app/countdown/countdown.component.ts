import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit {
  _remainingTime: number = 11;
  startTime: any;
  message='';

  constructor() {}

  ngOnInit(): void {}

  start() {
    this.startTime = setInterval(() => {
      if(this._remainingTime == 0){
        this.stop();
        this.message='HAPPY NEW YEAR 2022'
        return;
      }
      this._remainingTime--;
      // this.isCountDown;
    }, 500);
    this.message='counting down';

  }

// @Output
// finish=new EventEmitter<boolean>();

//   isCountDown(): boolean {
//     if(this._remainingTime==0){
//       this.stop();
//       this.finish.emit(true);
//     }
//   }

  reset(): void {
    clearInterval(this.startTime);
    this._remainingTime= 11;
    this.message = `Click start button to start the Countdown`;
  }

  stop(){
    clearInterval(this.startTime);
    this.message=`Holding at T-${this._remainingTime} seconds`
  }
}
