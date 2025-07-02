"use client";

import {useRef, useState, useEffect} from "react";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [needsPlay, setNeedsPlay] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const tryPlay = async () => {
            try {
                await audio.play();               // attempt muted-off autoplay
            } catch(error) {
                console.log("Autoplay blocked, showing fallback button:", error);
                setNeedsPlay(true);               // fallback button if blocked
            }
        };

        tryPlay();
    }, []);

    const handleManualPlay = async () => {
        const audio = audioRef.current;
        if (!audio) {
            return
        }
        await audio.play();
        setNeedsPlay(false);
    };

    return (
        <>
            {/* hidden looping track */}
            <audio
                ref={audioRef}
                src="/music/Hans_Zimmer_-_Time_from_Inception_OST_(Hydr0.org).mp3" // adjust path if needed
                preload="auto"
                loop
                hidden
            />

            {/* appears only if autoplay failed */}
            {needsPlay && (
                <button
                    onClick={handleManualPlay}
                    className="fixed bottom-4 left-4 z-50 px-4 py-2 rounded-full bg-gray-800 text-white text-sm shadow-lg animate-pulse"
                >
                    ▶ Play background music
                </button>
            )}
        </>
    );
}
