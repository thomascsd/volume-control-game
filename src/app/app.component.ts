import { Component, OnInit } from '@angular/core';
import 'snapsvg-cjs';
declare var Snap: any;
declare var mina: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pointer: any;
  ngOnInit(): void {
    const rootEle = Snap('#root');
    this.pointer = rootEle.select('#pointer');
  }

  volumeDown() {
    this.pointer.animate({ y: 270 }, 3000, mina.linear);
  }

  volumeUp() {
    this.pointer.stop();
    this.pointer.attr({
      y: '-=10'
    });
    this.volumeDown();
  }
}
