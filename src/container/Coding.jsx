import React from 'react';
import '../style/Coding.css';
import { RoundedImages } from '../utils/Images/Images';

import anaconda from '../material/anaconda.png';
import android from '../material/android_studio.webp';
import vsc from "../material/vsc.png";
import codestream from "../material/codestream.png";
import docker from "../material/docker.png";
import parse from "../material/parse-hub.png";
import slack from "../material/slack.png";
import source from "../material/sourcetree.svg";
import terminal from "../material/terminal.png";

const tools = [
    {
        id: 1,
        url: anaconda,
        title: "Anaconda"
    },
    {
        id: 2,
        url: android,
        title: "Android"
    },
    {
        id: 3,
        url: codestream,
        title: "Codestream"
    },
    {
        id: 4,
        url: vsc,
        title: "VSC"
    },
    {
        id: 5,
        url: docker,
        title: "Docker"
    },
    {
        id: 6,
        url: parse,
        title: "Parse"
    },
    {
        id: 7,
        url: slack,
        title: "Slack"
    },
    {
        id: 8,
        url: source,
        title: "Source"
    },
    {
        id: 9,
        url: terminal,
        title: "Terminal"
    }
]
export default function Coding() {
    return (
        <section>
            <div className='coding_title  "'>
                <h1>Coding Tools</h1>
            </div>
            <div className='image-tools'>
                {tools.map(item => (
                    <li key={item.id}>
                        <RoundedImages images={item.url} title={item.title} />
                    </li>
                ))}

            </div>
        </section>
    )
}
