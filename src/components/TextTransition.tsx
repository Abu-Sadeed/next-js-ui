"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type TextTransitionProps = {
    children: React.ReactNode[];
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
    interval?: number;
};

const TextTransition: React.FC<TextTransitionProps> = ({
    children,
    direction = "up",
    duration = 1,
    interval = 3000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const startTransition = () => {
        setCurrentIndex((prev) => (prev + 1) % children.length);
    };

    useEffect(() => {
        const intervalId = setInterval(startTransition, interval);
        return () => clearInterval(intervalId);
    }, [interval, children.length]);

    const variants = {
        initial: (direction: string) => {
            switch (direction) {
                case "up":
                    return { y: 50, opacity: 0 };
                case "down":
                    return { y: -50, opacity: 0 };
                case "left":
                    return { x: 50, opacity: 0 };
                case "right":
                    return { x: -50, opacity: 0 };
                default:
                    return { y: 50, opacity: 0 };
            }
        },
        animate: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration,
                ease: "easeInOut"
            }
        },
        exit: (direction: string) => {
            switch (direction) {
                case "up":
                    return { y: -50, opacity: 0 };
                case "down":
                    return { y: 50, opacity: 0 };
                case "left":
                    return { x: -50, opacity: 0 };
                case "right":
                    return { x: 50, opacity: 0 };
                default:
                    return { y: -50, opacity: 0 };
            }
        }
    };

    return (
        <div className="relative flex size-full items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={direction}
                    className="absolute"
                >
                    {children[currentIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default TextTransition;
