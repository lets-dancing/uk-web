import back1 from "../../media/back1.jpg";
import back2 from "../../media/back2.jpg";
import back3 from "../../media/back3.png";
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.defaults({ ease: "none" });


function MainSlider() {
  const [state, setState] = useState({ current: 0, next: 1 });
  const [userDetected, setUserDetected] = useState(false);

  const gallery = [
    {
        title: "УНИКАЛЬНОСТЬ",
        description: "Единственная на рынке инфраструктурных компаний инвестиционно-консалтинговая компания с государственным участием",
        cover: `${back1}`
    },
    {
        title: "ПОДХОД",
        description: "Полный цикл подготовки и сопровождения инвестиционных проектов",
        cover: `${back2}`
    },
    {
        title: "ОПЫТ",
        description: "Более 20 проектов в различных отраслях инфраструктуры ",
        cover: `${back3}`
    },
    {
      title: "ИНВЕСТИЦИИ",
      description: "Объем привлеченных частных инвестиций более 150 млрд рублей",
      cover: `${back2}`
    },
    {
      title: "КОМПЕТЕНЦИИ",
      description: "Крупнейшая в России команда профессионалов в сфере ГЧП",
      cover: `${back1}`
    },
    {
      title: "ИННОВАЦИИ",
      description: "Запуск первого в России Цифрового банка инфраструктурных проектов",
      cover: `${back3}`
  },
  ]
  const titleTextRef = useRef(null);

  let timer = null;
  let elems = useRef([]);
  let timeline = gsap.timeline({
    defaults: {
      duration: 1.5,
      ease: "slow"
    },
    paused: true
  });

  const activateTimer = () => {
      timer = setTimeout(() => {
        stepForward();
      }, 4000);
    };
  
    const calculateIndexs = (index) => {
      if (index === gallery.length - 1) {
        setState({ current: index, next: 0 });
      } else {
        setState({ current: index, next: index + 1 });
      }
    };
  
    const flowUp = (onComplete) => {
      timeline
        .to(elems.current[0], { y: "-100%", opacity: 0 })
        .to(
          elems.current[1],
          {
            y: "-100%",
            opacity: 1,
            scale: 1,
            onComplete
          },
          "-=1.5"
        )
        .play();
    };
  
    const fadeOut = (onComplete) => {
      timeline
        .to(elems.current[0], {
          duration: 0.5,
          opacity: 0,
          onComplete
        })
        .to(elems.current[0], { opacity: 1 })
        .play();
    };
  
    const handleChange = (index) => {
      if (index !== state.current) {
        clearTimeout(timer);
        setUserDetected(true);
        fadeOut(() => calculateIndexs(index));
      }
    };
  
    const stepForward = () => {
      setUserDetected(false);
      flowUp(() => calculateIndexs(state.next));
    };
  
    useLayoutEffect(() => {
      const image1 = !!elems.current[0] && elems.current[0];
      const image2 = !!elems.current[1] && elems.current[1];
  
      activateTimer();
  
      gsap.set(image2, { y: "0%", opacity: 0, scale: 1 });
      if (userDetected) {
        gsap.set(image1, { y: "0%", opacity: 0, scale: 1 });
      } else {
        gsap.set(image1, { y: "0%", opacity: 1, scale: 1 });
      }
  
      return () => {
        clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [state.current]);

    useEffect(() => {
      const tl = gsap.timeline();

      let glowShadow = `  1px 1px 4px rgba(255, 81, 0, .9), 
                    -1px -1px 8px rgba(255, 81, 0, 1), 
                    -1px 1px 10px rgba(255, 81, 0, 1),
                    1px -1px 10px rgba(255, 81, 0, 1)`;
      const initShadow = `  1px 1px 4px rgba(255, 81, 0, 0), 
                          -1px -1px 8px rgba(255, 81, 0, 0), 
                          -1px 1px 10px rgba(255, 81, 0, 0),
                          1px -1px 10px rgba(255, 81, 0, 0)`;
      tl.to(titleTextRef.current, { y: -15, duration: 0.5, ease: "power2.out" })
        .to(titleTextRef.current, { y: 0, duration: 0.5, ease: "power2.out" })
        .fromTo(
          titleTextRef.current,
          {
            textShadow: initShadow
          },
          {
            textShadow: glowShadow,
            stagger: {
              amount: 1,
              repeat: 1,
              yoyo: true
            }
          }
        );
      // eslint-disable-next-line
    }, [state.current]);

    return (
      <div>
        <div className="album-container">
          <h1>Что мы предлагаем?</h1>
          <div className="image">
            <img
              ref={(elem) => (elems.current[0] = elem)}
              src={gallery[state.current].cover}
              alt={gallery[state.current].title}
            />
            <p ref={titleTextRef}>{gallery[state.current].title}</p>
            <span>{gallery[state.current].description}</span>
          </div>
          <div className="image">
            <img
              ref={(elem) => (elems.current[1] = elem)}
              src={gallery[state.next].cover}
              alt={gallery[state.current].title}
            />
            <p>{gallery[state.next].title}</p>
            <span>{gallery[state.next].description}</span>
          </div>
          <div className="stripes">
            {gallery.map((_item, index) =>
              index === state.current ? (
                <span
                  key={`stripe${index}`}
                  onClick={() => handleChange(index)}
                  style={{ opacity: 1 }}
                ></span>
              ) : (
                <span
                  key={`stripe${index}`}
                  onClick={() => handleChange(index)}
                  style={{ opacity: 0.3, backgroundColor: "black" }}
                ></span>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
export default MainSlider;