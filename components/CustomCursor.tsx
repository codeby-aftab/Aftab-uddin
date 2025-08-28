import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const cursorTextX = useMotionValue(-100);
    const cursorTextY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    const cursorTextXSpring = useSpring(cursorTextX, springConfig);
    const cursorTextYSpring = useSpring(cursorTextY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 4);
            cursorY.set(e.clientY - 4);
            cursorTextX.set(e.clientX - 16);
            cursorTextY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            if (e.target instanceof Element && e.target.closest('[data-cursor-hover], [data-cursor-text]')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            if (e.target instanceof Element && e.target.closest('[data-cursor-hover], [data-cursor-text]')) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [cursorX, cursorY, cursorTextX, cursorTextY]);

    const variants = {
        default: {
            scale: 1,
            backgroundColor: "rgba(31, 41, 55, 1)", // gray-800
            borderColor: "rgba(31, 41, 55, 0.4)",
        },
        hover: {
            scale: 2.5,
            backgroundColor: "rgba(31, 41, 55, 0.2)",
            borderColor: "rgba(31, 41, 55, 0.0)",
        },
        text: {
            scale: 3,
            backgroundColor: "rgba(31, 41, 55, 0.2)",
            borderColor: "rgba(31, 41, 55, 0.0)",
        },
    };

    return (
        <div className="hidden md:block">
            <motion.div
                className="fixed w-8 h-8 border-2 rounded-full pointer-events-none z-[9999]"
                style={{
                    x: cursorTextXSpring,
                    y: cursorTextYSpring,
                }}
                variants={variants}
                animate={isHovering ? "hover" : "default"}
            />
            <motion.div
                className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                variants={variants}
                animate={isHovering ? "hover" : "default"}
            />
        </div>
    );
};