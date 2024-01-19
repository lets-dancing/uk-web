import React, { useEffect, useState} from "react";
import { dataNews } from "../../news/dataNews";
import ReactSimplyCarousel from 'react-simply-carousel';
import "./mainNews.css"

function MainNews() {
  const [news] = useState(dataNews);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex(prevIndex => 
        prevIndex === news.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [news.length]);

    return (
      <div className="newsWrap">
          <div className="newsHeader">
            <h1>новости</h1>
          </div>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          containerProps={{
            style: {
              width: "100%",
              justifyContent: "space-between",
              userSelect: "none"
            }
          }}
          itemsToShow={1}
          itemsToScroll={1}
          
          forwardBtnProps={{
            children: ">",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center"
            }
          }}
          backwardBtnProps={{
            children: "<",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center"
            }
          }}
          dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                marginTop: 10,
                marginLeft: 10,
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0
              }
            },
            activeItemBtnProps: {
              style: {
                marginTop: 10,
                marginLeft: 10,
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                background: "rgb(251, 81, 0)"
              }
            }
          }}
          
          speed={400}
          centerMode
        >
          {news.map(news => (
          <div key={news.id} className="news-item">
            <div className="news-item-wrap">
              <img src={news.photo} alt={news.title} />
            </div>
            <div className="news-text-field">
            <div className="news-title">
              <p>{news.title}</p>
            </div>
              <span>Дата публикации: {news.date}</span>
            </div>
          </div>
          
        ))}
        </ReactSimplyCarousel>
      </div>
    );
  }

export default MainNews;