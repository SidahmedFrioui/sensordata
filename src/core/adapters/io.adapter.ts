import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';

export class CustomIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    // CORS configuration for the socket.io server
    const corsOptions: Partial<ServerOptions> = {
      cors: {
        origin: 'https://ecoguard-8eb48.web.app', // Adjust this to match your Angular app's URL
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true,
      },
    };

    // Create the server with the combined options
    return super.createIOServer(port, { ...options, ...corsOptions });
  }
}
