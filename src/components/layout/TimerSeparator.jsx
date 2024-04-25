'use client';

import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { useEffect } from 'react';

export const TimerSeparator = () => {
    const [mounted, setMounted] = useState(false);
    const date = new Date('2024-12-5');
    const now = Date.now();
    const renderer = ({ hours, minutes, seconds, days }) => {
        console.log("🚀 ~ renderer ~ hours, minutes, seconds, days:", hours, minutes, seconds, days)
        return (
            <span>
                {days}-{hours}:{minutes}:{seconds}
            </span>
        );
    };
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div>
            {mounted && (
                <Countdown
                    date={date}
                    renderer={renderer}
                    daysInHours
                ></Countdown>
            )}
        </div>
    );
};
