import Classroom from './0-classroom.js';

function initializeRooms() {
  return [
    new Classroom(19),
    new Classroom(20),
    new Classroom(34),
  ];
}

export default initializeRooms;