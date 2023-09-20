"use client"
import React, { useEffect, useRef, useState } from 'react';

const Motion = (props) => {
    const elementRef = useRef(null);//DOM要素を取得
    const [isIntersecting, setIsIntersecting] = useState(false);//要素が画面に入っているかどうかを管理

    useEffect(() => {
        //インスタンスを作成、要素が画面に入った時にisIntersectingをtrueにする(→後でtrueの時に描画)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
            } else {
                setIsIntersecting(false);
            }
            });
        });

        // 要素の監視、解除の設定
        const element = elementRef.current;
            if (element) {
                observer.observe(element);
            }

            return () => {
                if (element) {
                observer.unobserve(element);
                }
            };
    }, []);

    return (
    <div>
        <div
            ref={elementRef}
        >
            {props.trigger}
        </div>
        {isIntersecting && props.child}
    </div>
    );
};

export default Motion