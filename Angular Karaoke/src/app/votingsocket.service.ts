import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root',
})
export class votingSocketService {
  constructor(private socket: Socket) { }

  sendMessage(message: number ) {
    this.socket.emit('message', message);
  }

  getMessages(): Observable<number> {
    return this.socket.fromEvent('message');
  }
}
