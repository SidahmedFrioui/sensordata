import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class SensorDataGateway {
  @WebSocketServer()
  server: Server;

  emitNewData() {
    this.server.emit('newData', 'New data');
  }
}
