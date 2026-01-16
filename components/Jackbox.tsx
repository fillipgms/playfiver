"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type ReelProps = {
    id: string;
    words: string[];
    finalWord: string;
    delay: number;
    className?: string;
};

const Reel = ({ id, words, finalWord, className }: ReelProps) => {
    return (
        <div
            className={
                "overflow-hidden h-[1.2em]" + (className ? ` ${className}` : "")
            }
        >
            <div id={id} className="flex flex-col">
                {[...words, finalWord].map((word, index) => (
                    <span key={index} className="text-background">
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Jackbox = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const runReel = (elementId: string, totalWords: number, delay: number) => {
        const el = document.getElementById(elementId);
        if (!el) return;
        const height = el.clientHeight / totalWords;

        const tl = gsap.timeline();

        tl.to(el, {
            y: -height * (totalWords - 1),
            duration: 0.5,
            ease: "none",
            repeat: -1,
            repeatDelay: 0,
        });

        gsap.delayedCall(delay, () => {
            tl.kill();
            gsap.to(el, {
                y: -height * (totalWords - 1),
                duration: 1.5,
                ease: "power4.out",
            });
        });
    };
    useEffect(() => {
        runReel("reel1", 6, 0.5);
        runReel("reel2", 5, 0.9);
        runReel("reel3", 5, 1.3);
    }, []);

    return (
        <div
            ref={containerRef}
            className="uppercase text-3xl md:text-8xl font-bold flex flex-col w-full gap-5"
        >
            <Reel
                id="reel1"
                className="reel"
                words={["Destino", "Amanhã", "Vitória", "Sucesso", "O Futuro"]}
                finalWord="O Futuro"
                delay={0}
            />

            <Reel
                id="reel2"
                className="reel self-end text-end"
                words={["do nosso", "do teu", "da sua", "do seu"]}
                finalWord="do seu"
                delay={0.5}
            />

            <Reel
                id="reel3"
                className="reel"
                words={["Projeto", "Negócio", "Jogo", "Cassino"]}
                finalWord="Cassino"
                delay={1}
            />
        </div>
    );
};

export default Jackbox;
