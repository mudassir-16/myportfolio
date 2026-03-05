"use client";

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 192;

export function ScrollBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;
        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const frameNum = i.toString().padStart(3, '0');
            img.src = `/hero-sequence/ezgif-frame-${frameNum}.jpg`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    drawFrame(1, loadedImages);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const { scrollYProgress } = useScroll();

    const drawFrame = (frameIndex: number, imgs: HTMLImageElement[] = images) => {
        if (!canvasRef.current || !imgs[frameIndex - 1]) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = imgs[frameIndex - 1];
        if (!img.complete) return;

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0) return;
        const frameIndex = Math.min(
            FRAME_COUNT,
            Math.max(1, Math.floor(latest * FRAME_COUNT) + 1)
        );
        requestAnimationFrame(() => drawFrame(frameIndex));
    });

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                const currentProgress = scrollYProgress.get();
                const frameIndex = Math.min(
                    FRAME_COUNT,
                    Math.max(1, Math.floor(currentProgress * FRAME_COUNT) + 1)
                );
                drawFrame(frameIndex);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size
        return () => window.removeEventListener('resize', handleResize);
    }, [images, scrollYProgress]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full object-cover -z-50 pointer-events-none"
        />
    );
}
