import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import * as distanceToNow from 'date-fns/distance_in_words_to_now';

@Component({
  selector: 'opi-timestamp',
  template: `<span>{{_timestamp}}</span>`
})
export class TimeStampComponent implements OnInit, OnDestroy {
  _timestamp: string;
  _lastUpdate: number;

  @Input()
  set lastUpdate(update) {
    const ms = update * 1000;
    this.timestamp = distanceToNow(ms);
    this._lastUpdate = ms;
  }

  set timestamp(timestamp) {
    this._timestamp = `${timestamp} ago`;
  }

  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.timestamp = distanceToNow(this._lastUpdate); // seconds -> ms
    }, 1000 * 60);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
