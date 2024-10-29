// join-lobby.service.ts

import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JoinlobbyService {
  private socket: Socket;

  constructor() {
    // Connect to the Socket.io server
    this.socket = io('http://139.91.80.157:3000', {
      transports: ['websocket'],
    });

    // Example: Handle 'message' event
    this.socket.on('message', (data: string) => {
      console.log('Message from server:', data);
    });
  }

  // Listen for 'message' events from the server
  getMessage(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('message', (data: string) => {
        observer.next(data);
      });
    });
  }

  // Send a message to the server
  sendMessage(message: string): void {
    this.socket.emit('message', message);
  }

  // Disconnect from the server when the service is destroyed
  ngOnDestroy(): void {
    this.socket.disconnect();
  }
}
