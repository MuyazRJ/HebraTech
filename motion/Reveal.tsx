"use client"

import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';

interface Props {
    children: JSX.Element | string,
    delay?: number,
    duration?: number,
    styles?: string
}

const TextReveal = ({ children, delay, duration = 0.55, styles='' }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div ref={ref} animate={isInView ? "visible" : "hidden"}  className={styles}
            variants={{
                hidden: { opacity: 0, translateY: '100%'},
                visible: { opacity: 1, translateY: 0}
            }}
            transition={{ duration: duration, delay: isInView ? delay : 1, ease: [0.37, 0, 0.63, 1]}}
            initial='hidden'
        >
            {children}
        </motion.div>
    );
};

export default TextReveal;