import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cdr',
  templateUrl: './cdr.component.html',
  styleUrls: ['./cdr.component.css'],
})
export class CdrComponent implements OnChanges {
  @Input() title: string = '';
  @Input() count: number = 0;
  prev: any;
  curr: any;
  increment() {
    this.count++;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']) {
      this.prev = changes['count'].previousValue;
      this.curr = changes['count'].currentValue;
      console.log(this.prev);
      console.log(this.curr);
    } else {
      console.log('No change detected....');
    }
  }
}
