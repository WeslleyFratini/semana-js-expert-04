import { constants } from "../../_shared/constants.js";
import RoomSocketBuilder from './util/roomSocket'

const socket = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room,
});

const socket = SocketBuilder
  .setOnUserConnected((user) = console.log("user connected!", user))
  .setOnUserDisconnected((user) = console.log("user disconnected!", user))
  .setOnUserUpdated((room) => console.log('room list!', room))
  .build()

const room = {
  id: '0001',
  topic: "Js expert"
};

const user = {
  img: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png",
  username: "Weslley Fratini" + Date.now(),
};

socket.emit(constants.events.JOIN_ROOM, { user, room });
