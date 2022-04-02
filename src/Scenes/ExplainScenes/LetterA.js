import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import { prePathUrl } from "../../components/CommonFunctions";
import { Player } from '@lottiefiles/react-lottie-player';

import "../../stylesheets/styles.css";
import BaseImage from '../../components/BaseImage';
import { returnVoicePath } from "../../components/CommonFunctions"

export default React.forwardRef(function LetterExplain({ nextFunc, audioList, _geo, _baseGeo }, ref) {


    const characterRef = useRef();
    const backgroundRef = useRef();
    const aniObjectRef = useRef();
    const objectRef = useRef();


    useEffect(
        () => {

            audioList.bodyAudio1.src = returnVoicePath(0, '01') //explain voice
            audioList.bodyAudio2.src = returnVoicePath(0, '02')   //clap voice    

            return () => {
            }
        }, []
    )

    React.useImperativeHandle(ref, () => ({
        playGame: () => {


            let carSpeed = 0

            backgroundRef.current.style.transition = '6s'
            backgroundRef.current.style.transform = ' translateX(-50%)'

            aniObjectRef.current.style.transition = '7s'
            aniObjectRef.current.style.transform = ' translateX(80%)'

            let interval = setInterval(() => {
                if (carSpeed < 0.7) {
                    carSpeed += 0.05
                }
                else {
                    carSpeed = 0.7
                    clearInterval(interval)
                }
                characterRef.current.setPlayerSpeed(carSpeed)
            }, 70);

            setTimeout(() => {
                objectRef.current.play();
                audioList.bodyAudio1.play();
            }, 4500);

            setTimeout(() => {
                let interval = setInterval(() => {
                    if (carSpeed > 0) {
                        carSpeed -= 0.07
                    }
                    else {
                        carSpeed = 0
                        clearInterval(interval)
                    }
                    characterRef.current.setPlayerSpeed(carSpeed)
                }, 50);


            }, 5500);

            setTimeout(() => {
                audioList.bodyAudio2.play();
                characterRef.current.stop();

                backgroundRef.current.style.transition = '3s'
                backgroundRef.current.style.transform = ' translate(-105%, -25%) scale(1.5)'

                setTimeout(() => {
                    nextFunc();
                }, 3500);
            }, 7000);

            characterRef.current.play();
        },
    }))

    const BaseDiv = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    left : 0%;
    top : 0%;
  `

    return (
        <div className="aniObject"
        >

            <div

                ref={backgroundRef}
                style={{
                    position: "fixed", width: _baseGeo.width + "px",
                    height: _baseGeo.height + "px",
                    left: _baseGeo.left + "px"
                    , bottom: _baseGeo.bottom + 'px',
                    pointerEvents: 'none'
                }}>
                <BaseImage
                    scale={1.8}
                    posInfo={{ l: -0.1, t: 0.0 }}
                    url={"SB01/SB01_BG/Elxsi_SB01_Y01_English_Trace_A_BG.svg"} />

                <BaseDiv ref={aniObjectRef}>
                    <Player
                        ref={characterRef}
                        loop
                        speed={0.0}
                        keepLastFrame={true}
                        src={prePathUrl() + 'lottieFiles/main/scale/Rooftop_L_Jeep.json'}
                        style={{
                            position: 'absolute',
                            width: '40%',
                            left: '-20%',
                            top: '34%',
                            transform: 'rotateY(180deg)',
                            pointerEvents: 'none',
                            overflow: 'visible'
                        }}
                    >
                    </Player>
                </BaseDiv>

                <Player
                    ref={objectRef}
                    keepLastFrame={true}
                    speed={0.6}
                    src={prePathUrl() + 'lottieFiles/main/scale/SB01_Character-Eye-Blink_02_ant_1.json'}
                    style={{
                        position: 'absolute',
                        width: '40%',
                        left: '100%',
                        top: '30%',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                </Player>
            </div>

        </div>
    );
})
