import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';
import './progressBar.scss';

const ProgressBar = props => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const {
        size = 0,
        progress = 0,
        maxProgress = 0,
        strokeWidth = 0,
        circleOneStroke = 0,
        circleTwoStroke = 0,
    } = props || {};

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((maxProgress - progress) / maxProgress) * circumference;
        setOffset(progressOffset);
        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out;';
    }, [setOffset, circumference, progress, offset]);

    return (
        <>
            <svg
                className="__svg"
                width={size}
                height={size}
            >
                <circle
                    className="__svg_circle_bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <defs>
                    <linearGradient id="gradient" x1={0} y1={0} x2={0} y2={maxProgress}>
                        <stop offset={0} stopColor="#ffb5a0" />
                        <stop offset={maxProgress} stopColor={circleTwoStroke} />
                    </linearGradient>
                </defs>
                <circle
                    className="__svg_circle"
                    ref={circleRef}
                    stroke="url(#gradient)"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${center} ${center})`}
                />
                <text x={center} y={center} className="__svg_circle_text">
                            {progress}
                    </text>
                    <text className="__svg_circle_text_2" x={center} y={center + 20}>
                            Sec
                    </text>
            </svg>
        </>
    )
}

ProgressBar.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
    circleTwoStroke: PropTypes.string.isRequired
}

export default ProgressBar;