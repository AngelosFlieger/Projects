// screen-communication.service.ts

import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ScreenCommunicationService {
  private socket: any;

  constructor() {
     this.socket = io('http://139.91.80.157:3000');
  }
  
  emitEvent(eventName: string, data: any): void {
    console.log(`Emitting ${eventName} with data:`, data);
    this.socket.emit(eventName, data);
  }

  onEvent(eventName: string, callback: (data: any) => void): void {
    this.socket.on(eventName, callback);
  }
}
