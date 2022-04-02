import "../stylesheets/styles.css";
import "../stylesheets/button.css";

import React, { useEffect, useRef } from "react";
import BaseImage from "../components/BaseImage";
import { prePathUrl } from "../components/CommonFunctions";
import { Switch } from "../components/CommonFunctions";
import LetterA from "./ExplainScenes/LetterA"
import LetterB from "./ExplainScenes/LetterB"

const ScaleScene = ({ nextFunc, _baseGeo, currentLetterNum, audioList, _geo }, ref) => {
    const parentObject = useRef()

    const letterRefList = Array.from({ length: 2 }, ref => useRef())


    React.useImperativeHandle(ref, () => ({
        playGame: () => {
            letterRefList[currentLetterNum].current.playGame()
        },
    }))

    useEffect(() => {

        return () => {
        }

    }, [])


    const switchList = [
        <LetterA key={0} audioList={audioList} ref={letterRefList[0]} nextFunc={nextFunc} _geo={_geo} _baseGeo={_baseGeo} value={0} />,
        <LetterB key={1} audioList={audioList} ref={letterRefList[1]} nextFunc={nextFunc} _geo={_geo} _baseGeo={_baseGeo} value={1} />,

    ]

    return (
        <div
            className="aniObject"
            ref={parentObject}
        >
            <Switch test={currentLetterNum}>
                {
                    switchList.map(list => list)
                }
            </Switch>
        </div>
    );
}


export default React.forwardRef(ScaleScene)