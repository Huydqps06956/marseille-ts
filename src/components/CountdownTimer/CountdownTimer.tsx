import React, { useState, useEffect, type ReactElement } from 'react';

interface CountdownTimerProps {
    targetDate: string;
}

interface TimeLeft {
    Days?: number;
    Hours?: number;
    Mins?: number;
    Secs?: number;
    [key: string]: number | undefined;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    function calculateTimeLeft(): TimeLeft {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Mins: Math.floor((difference / 1000 / 60) % 60),
                Secs: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [targetDate, timeLeft]); // Added dependencies

    const formatNumber = (number: number): string => {
        return String(number).padStart(2, '0');
    };

    const timerComponents: ReactElement[] = [];

    Object.keys(timeLeft).forEach(interval => {
        if (timeLeft[interval] !== undefined) {
            timerComponents.push(
                <span
                    key={interval}
                    className="bg-white p-2 text-lg rounded-sm  inline-flex justify-between items-center gap-2"
                >
                    {formatNumber(timeLeft[interval] as number)}
                    <span className="text-lg text-secondary">{interval}</span>
                </span>
            );
        }
    });

    return <div className="flex gap-4 mt-28">{timerComponents}</div>;
};

export default CountdownTimer;
