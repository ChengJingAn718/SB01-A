import React, { useEffect } from 'react';
import "../stylesheets/styles.css";
import { prePathUrl } from "../components/CommonFunctions"
import BaseImage from '../components/BaseImage';
import { setRepeatAudio, startRepeatAudio, stopRepeatAudio } from "../components/CommonFunctions"
let timerList = []

export default function Scene18({ nextFunc, _geo, audioList, _baseGeo }) {

    useEffect(() => {

        // audioList.bodyAudio2.src = returnSoundPath('SB_04_Audio_21')
        setRepeatAudio(audioList.replayAudio)

        timerList[0] = setTimeout(() => {
            audioList.audioSuccess.play();
            timerList[3] = setTimeout(() => {
                // audioList.bodyAudio2.play();
                audioList.audioClap.play();
                audioList.audioYeah.play();
            }, 1000);



            timerList[1] = setTimeout(() => {
                audioList.replayAudio.play();
                startRepeatAudio();
                audioList.backAudio.volume = 0.05
                timerList[2] = setTimeout(() => {
                    audioList.backAudio.volume = .1

                }, audioList.replayAudio.duration * 1000);
            }, 6000);
        }, 1500);


        
        return () => {
            stopRepeatAudio();
            timerList.map(timer => {
                clearTimeout(timer)

                audioList.backAudio.volume = .1;
                audioList.replayAudio.pause();
                audioList.replayAudio.currentTime = 0

                audioList.audioClap.pause();
                audioList.audioClap.currentTime = 0

                audioList.audioYeah.pause();
                audioList.audioYeah.currentTime = 0
            })
        }
    }, [])


    return (
        <div className='aniObjectDelay'>
            {/* <div
                style={{
                    position: "fixed", width: _baseGeo.width + "px",
                    height: _baseGeo.height + "px"
                    , left: _baseGeo.left + "px",
                    top: _baseGeo.bottom + "px",
                }}>
                <BaseImage
                    url={"SB05_Shaabash_BG/SB_05_shaabash_02.svg"}
                />
            </div>

            <div
                className='excellentText'
                style={{
                    position: "fixed", width: _baseGeo.width + "px",
                    height: _baseGeo.height + "px"
                    , left: _baseGeo.left + "px",
                    top: _baseGeo.bottom + "px",
                }}>
                <BaseImage

                    url={"SB05_Shaabash_BG/SB_05_shaabash_03.svg"}
                />
                <BaseImage
                    scale={0.6}
                    posInfo={{ l: 0.2, t: 0.2 }}
                    url={"SB05_Shaabash_BG/SB_05_shaabash_04.svg"}
                />
                <BaseImage
                    scale={0.3}
                    posInfo={{ l: 0.35, t: 0.4 }}
                    url={"SB05_Shaabash_BG/SB_05_shaabash_05.svg"}
                />
            </div> */}

            <div className='aniObjectDelay'>
                <div className='commonButton'
                    style={{
                        position: "fixed", width: _geo.width * 0.08 + "px",
                        left: _geo.width * 0.47 + _geo.left + "px",
                        height: _geo.width * 0.1 + "px",
                        bottom: "1%",
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        setTimeout(() => {
                            nextFunc();
                        }, 200);
                    }}
                >
                    <img
                        width={"100%"}
                        draggable={false}
                        src={prePathUrl() + "images/Buttons/Replay_Blue.svg"}
                    />
                </div>
            </div>

        </div >
    );
}
