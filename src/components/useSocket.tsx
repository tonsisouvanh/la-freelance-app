import { useState, useEffect } from "react";
import io from "socket.io-client";

interface SocketEvent {
  // Define the structure of events received from the server here
  type: string;
  data?: unknown;
}

// export const useSocket = (uri: string) => {
//   const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
//   const [events, setEvents] = useState<SocketEvent[]>([]);

//   useEffect(() => {
//     const newSocket = io(uri);

//     setSocket(newSocket);

//     // Handle incoming events from the server
//     newSocket.on("any", (event: SocketEvent) => {
//       setEvents((prevEvents) => [...prevEvents, event]);
//     });

//     // Handle cleanup on unmount
//     return () => newSocket.disconnect();
//   }, [uri]);

//   // Function to emit events to the server
//   const emitEvent = (eventName: string, data?: any) => {
//     if (socket) {
//       socket.emit(eventName, data);
//     } else {
//       console.error("Socket not connected yet!");
//     }
//   };

//   return { socket, events, emitEvent };
// };


  interface SocketEvent {
  // Define properties of SocketEvent
  // For example:
  id: number;
  message: string;
  // Add more properties as needed
}
  
  import { Socket } from "socket.io-client";

export const useSocket = (uri: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [events, setEvents] = useState<SocketEvent[]>([]);

  useEffect(() => {
    const newSocket = io(uri);

    setSocket(newSocket);

    // Handle incoming events from the server
    newSocket.on("any", (event: SocketEvent) => {
      setEvents((prevEvents) => [...prevEvents, event]);
    });

    // Handle cleanup on unmount
    return () => {
      newSocket.disconnect();
    };
  }, [uri]);

  // Function to emit events to the server
  const emitEvent = (eventName: string, data?: unknown) => {
    if (socket) {
      socket.emit(eventName, data);
    } else {
      console.error("Socket not connected yet!");
    }
  };

  return { socket, events, emitEvent };
};
  