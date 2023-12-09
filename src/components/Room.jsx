import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {

              const {roomId}=useParams();

              function randomID(len) {
                            let result = '';
                            if (result) return result;
                            var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
                              maxPos = chars.length,
                              i;
                            len = len || 5;
                            for (i = 0; i < len; i++) {
                              result += chars.charAt(Math.floor(Math.random() * maxPos));
                            }
                            return result;
                          }

              let myMeeting = async (element) => {
               const appID =1543633477 ;
               const serverSecret = "3712b24f43dbd720c69419f60680438d";
               const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  randomID(5),  randomID(5));
               const zp = ZegoUIKitPrebuilt.create(kitToken);
               zp.joinRoom({
                            container: element,
                            sharedLinks: [
                              {
                                name: 'Personal link',
                                url:
                                 window.location.protocol + '//' + 
                                 window.location.host + window.location.pathname +
                                  '?roomId=' +
                                  roomId,
                              },
                            ],
                            scenario: {
                              mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
                            },
                          });
              }

  return (
    <>
        <div className="room_container">
              <div className="room_wrapper">
                            <div ref={myMeeting}></div>
              </div>
        </div>      
    </>
  )
}

export default Room
