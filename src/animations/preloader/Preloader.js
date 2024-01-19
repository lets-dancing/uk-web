import anime from 'animejs/lib/anime.es';
import "./preloader.css"
import { useEffect } from 'react';


const AnimPreloaderAjax = () => {
    useEffect(() => {
        document.querySelector('.preloader-ajax').style.visibility = 'hidden';
        const timer = setTimeout(() => {
            document.querySelector('.preloader-ajax').style.visibility = 'visible';
        }, 4000);
        return () => {
            clearTimeout(timer);
        }
    }, [])
        const tl = anime.timeline({
            begin() {
                document.querySelector('.preloader-ajax').style.visibility = 'visible';
                document.querySelector('.preloader-ajax__logo').style.opacity = '1';
            },
            complete() {
                document.querySelector('.preloader-ajax').style.display = 'none';
            }
        });
        tl
            .add({
                targets: '.preloader-ajax__line1',
                easing: 'cubicBezier(.8,.13,.49,.93)',
                duration: 250,
                fill: '#F14B1C',
            })
            .add({
                targets: '.preloader-ajax__line2',
                easing: 'cubicBezier(.8,.13,.49,.93)',
                duration: 250,
                fill: '#F14B1C',
            })
            .add({
                targets: '.preloader-ajax__line3',
                easing: 'cubicBezier(.8,.13,.49,.93)',
                duration: 250,
                fill: '#F14B1C',
            })
            .add({
                targets: '.preloader-ajax__line4',
                easing: 'cubicBezier(.8,.13,.49,.93)',
                duration: 250,
                fill: '#F14B1C',
            })
            // .add({
            //     targets: '.preloader-ajax__logo',
            //     easing: 'cubicBezier(0.7,0,0.3,1)',
            //     duration: 500,
            //     opacity: 0,
            //     translateY: [0, '-100%'],
            // })
            // .add({
            //     targets: '.preloader-ajax__main',
            //     easing: 'cubicBezier(0.7,0,0.3,1)',
            //     duration: 1000,
            //     translateY: [0, '-100%'],
            // }, '-=600')
    return (
        <div className="preloader-ajax">
        <div className="preloader-ajax__main">
            <div className="preloader-ajax__logo">
                <svg width="107" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="preloader-ajax__line4" d="M90.6 39.43c-9.83 3.4-17.6 12.78-19.43 24.5-.07.4.25.76.66.76h7.87c2.7 0 5.05-1.83 5.7-4.45l5.2-20.8v-.01Z"/>
                    <path className="preloader-ajax__line3" d="M41.94 63.76c-.18.44.15.93.62.93h16.3c.47 0 .9-.32 1.04-.78 4.12-13.8 14.68-24.87 30.86-28.16.5-.1.88-.46 1-.94l.92-3.7c-20.77 1-41.48 11.27-50.73 32.65Z"/>
                    <path className="preloader-ajax__line2" d="m13.7 49.1-2.58 10.36a4.22 4.22 0 0 0 4.1 5.23h12.25c.56 0 1.06-.32 1.3-.82 10.35-21.1 31.74-35 63.9-36.47a1.28 1.28 0 0 0 1.2-.97l.85-3.46c-34.12.36-59.33 8.55-79.56 23.87a4.06 4.06 0 0 0-1.47 2.26Z"/>
                    <path className="preloader-ajax__line1" d="m95.9 18.2.81-3.2H27.38a6.61 6.61 0 0 0-6.43 5.02L18 31.93c-.2.83.62 1.51 1.4 1.17C40 24.04 66.3 19.28 94.64 19.17c.6 0 1.1-.4 1.25-.97Z"/>
                </svg>
                <div className="preloader-ajax__loading">
                    Загрузка...
                </div>
            </div>
        </div>
        </div>
    )
};

export default AnimPreloaderAjax;