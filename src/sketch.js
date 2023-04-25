const host = "cpsc484-03.yale.internal:8888";

const UP = "UP"
const DOWN = "DOWN"
const UPPER_LEFT = "UPPER LEFT"
const LOWER_LEFT = "LOWER LEFT"
const UPPER_RIGHT = "UPPER RIGHT"
const LOWER_RIGHT = "LOWER RIGHT"
const LEFT_UP = "LEFT UP"

export const frames = {
    socket: null,
    command: null,
  
    start: function() {
      var url = "ws://" + host + "/frames";
      frames.socket = new WebSocket(url);
      return new Promise((resolve, reject) => {
        frames.socket.onmessage = function (event) {
          var command = frames.get_wrist_command(JSON.parse(event.data));
          
          if (command !== null) {
            // sendWristCommand(command);
            // console.log(command);
            frames.command = command;
            resolve(command);
          }
        };
        frames.socket.onerror = function (error) {
          reject(error);
        };
      });
    },
  
    get_wrist_command: function (frame) {
      var command = null;
      if (frame.people.length < 1) {
        return command;
      }
  
      // Normalize by subtracting the root (pelvis) joint coordinates
      var pelvis_x = frame.people[0].joints[0].position.x;
      var pelvis_y = frame.people[0].joints[0].position.y;
      var pelvis_z = frame.people[0].joints[0].position.z;
      var right_wrist_x = (frame.people[0].joints[14].position.x - pelvis_x) * -1;
      var right_wrist_y = (frame.people[0].joints[14].position.y - pelvis_y) * -1;
      var right_wrist_z = (frame.people[0].joints[14].position.z - pelvis_z) * -1;
      var left_wrist_x = (frame.people[0].joints[7].position.x - pelvis_x) * -1;
      var left_wrist_y = (frame.people[0].joints[7].position.y - pelvis_y) * -1;
      // var left_wrist_z = (frame.people[0].joints[7].position.z - pelvis_z) * -1;
  
      if (right_wrist_z < 100) {
        return command;
      }

      if ((left_wrist_x < 200 && left_wrist_x > -200)) {
        if (left_wrist_y > 400) {
          command = LEFT_UP;
        } 
      }

      // CURRENT DISPLAY LOGIC??:
      //            -200          200
      // -----------------------------------------
      // |            |            |             |
      // | upper left |            | upper right |
      // |            |            |             |
      // -----------------------------------------  500
      // |            |            |             |
      // |            |            |             |
      // |            |            |             |
      // -----------------------------------------  100
      // |            |            |             |
      // | lower left |    down    | lower right |
      // |            |            |             |
      // -----------------------------------------

      // NEED TO TEST, NUMBERS ARE NOT FINAL
      if ((right_wrist_x < 200 && right_wrist_x > -200)) {
        if (right_wrist_y > 400) {
          command = UP;
        } else if (right_wrist_y < 100) {
          command = DOWN;
        }
      } else if (right_wrist_x < -200) {
        if (right_wrist_y > 400) {
            command = UPPER_LEFT
        } else if (right_wrist_y < 300) {
            command = LOWER_LEFT
        }
      } else if (right_wrist_x > 200) {
        if (right_wrist_y > 400) {
            command = UPPER_RIGHT
        } else if (right_wrist_y < 300) {
            command = LOWER_RIGHT
        }
      }
      return command;
    }
  };

  // function sendWristCommand(command) {
  //   switch (command) {
  //     case DOWN:
  //       console.log(DOWN);
  //       break;
  //     case UPPER_LEFT:
  //       console.log(UPPER_LEFT);
  //       break;
  //     case LOWER_LEFT:
  //       console.log(LOWER_LEFT);
  //       break;
  //     case UPPER_RIGHT:
  //       console.log(UPPER_RIGHT)
  //       break;
  //     case LOWER_RIGHT:
  //       console.log(LOWER_RIGHT);
  //       break;
  //     default:
  //       break;
  //   }
  // }
