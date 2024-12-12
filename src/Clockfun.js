import React, { useRef, useEffect } from "react";
import './Clock.css';

export default function Clock(props) {
    const hourFrame = useRef(null);
    const minFrame = useRef(null);
    const secFrame = useRef(null);
    const amorpm = useRef(null);

    useEffect(() => {
        let t=props.timez;
        t=t.replace('/','');
        console.log(t);
        // Getting elements
        const hourEle = hourFrame.current;
        const minEle = minFrame.current;
        const secEle = secFrame.current;
        const amorpmEle = amorpm.current;

        // Getting time by time zone using Intl.DateTimeFormat and then converting string date to date object
        const options = {
            timeZone: props.timez,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const dateString = new Intl.DateTimeFormat('en-US', options).format(new Date());
        const [month, day, year, hour, minute, second] = dateString.match(/\d+/g);
        const date = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);

        const hoursec = (date.getHours() % 12) * 60 * 60;
        const minsec = date.getMinutes() * 60;
        const sec = date.getSeconds();
        const hourdeg = hoursec / 120;
        const secdeg = sec * 6;
        const mindeg = minsec / 10;
        //am or pm
        if(date.getHours()>=12)amorpmEle.innerText="PM";
        else amorpmEle.innerText="AM";
        // Setting animations
        hourEle.style.animation = `rotateframeh-${t} 43200s linear infinite`;
        minEle.style.animation = `rotateframem-${t} 3600s linear infinite`;
        secEle.style.animation = `rotateframes-${t} 60s linear infinite`;

        const keyframesh = `
        @keyframes rotateframeh-${t} {
            from { transform: rotate(${hourdeg}deg); }
            to { transform: rotate(${hourdeg + 360}deg); }
        }`;
        const keyframesm = `
        @keyframes rotateframem-${t} {
            from { transform: rotate(${mindeg}deg); }
            to { transform: rotate(${mindeg + 360}deg); }
        }`;
        const keyframess = `
        @keyframes rotateframes-${t} {
            from { transform: rotate(${secdeg}deg); }
            to { transform: rotate(${secdeg + 360}deg); }
        }`;

        const style = document.createElement('style');
        style.innerHTML = keyframesh + keyframesm + keyframess;
        document.head.appendChild(style);

        // Cleanup on unmount
        return () => {
            document.head.removeChild(style);
        };
    }, [props.timez]);

    return (
        <>
            <div className="outerframe">
                <div id="amorpm" ref={amorpm}></div>
                <div className="secframe" id="secframe" ref={secFrame}>
                    <div className="secneedle"></div>
                </div>
                <div className="minframe" id="minframe" ref={minFrame}>
                    <div className="minneedle"></div>
                </div>
                <div className="hourframe" id="hourframe" ref={hourFrame}>
                    <div className="hourneedle"></div>
                </div>
                <div className="centerdot">
                    <div></div>
                </div>
                <h3>{props.timez}</h3>
            </div>
            
        </>
    );
}
