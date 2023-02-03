import React from 'react';
import '../style/Coding.css';
import { RoundedImages } from '../utils/Images/Images';

import blender from '../material/blender.png';
import davinci from '../material/davinci.png';
import fl from "../material/fl-studio.png";
import krita from "../material/krita.svg";
import lightroom from "../material/lightroom.png";
import sonic from "../material/sonicpi.png";
import natron from "../material/natron.png";

const tools = [
    {
        id: 1,
        url: blender,
        title: "blender"
    },
    {
        id: 2,
        url: davinci,
        title: "davinci"
    },
    {
        id: 3,
        url: fl,
        title: "fl"
    },
    {
        id: 4,
        url: krita,
        title: "krita"
    },
    {
        id: 5,
        url: lightroom,
        title: "lightroom"
    },
    {
        id: 6,
        url: sonic,
        title: "Sonic"
    },
    {
        id: 7,
        url: natron,
        title: "natron"
    },

]
export default function Design() {
    return (
        <section>
            <div className='coding_title  "'>
                <h1>Design Tools</h1>
            </div>
            <div className='image-tools'>
                {tools.map(item => (
                    <li key={item.id}>
                        <RoundedImages
                            images={item.url}
                            title={item.title}
                            classname="coding" />
                    </li>
                ))}
            </div>
        </section>
    )
}
