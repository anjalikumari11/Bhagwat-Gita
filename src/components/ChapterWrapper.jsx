import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import DetailSummary from './detailSummary';
import ChapterDetails from './chapterDetails';
// import btnMusic from '../assets/btnMusic.mp3';

const ChapterWrapper = () => {
  const { id } = useParams();
  const chapterId = parseInt(id);
  const prevId = chapterId > 1 ? chapterId - 1 : null;

  const chapterFlipRef = useRef(null);

  useEffect(() => {
    chapterFlipRef.current?.play().catch(err => {
      console.log('Chapter flip sound blocked', err);
    });
  }, [chapterId]);

  return (
    <div className="book-wrapper">
      <audio ref={chapterFlipRef} src={"./assets/btnMusic.mp3"} />

      <div className="book open">
        <div className="leftpage">
          {prevId ? (
            <ChapterDetails id={prevId} />
          ) : (
            <div className="empty-left">
              <h3>Welcome to the Gita</h3>
              <p>Select a chapter to begin your journey.</p>
            </div>
          )}
        </div>

        <div className="rightpage">
          {chapterId < 19 ? (
            <DetailSummary id={chapterId} />
          ) : (
            <center>
              <h1>
                धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।<br />
                मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥
              </h1>
              <div className="krishna-quote">
                “You have the right to perform your actions, but you are not entitled to the fruits of your actions.”
                <br />– Lord Krishna
              </div>
            </center>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterWrapper;
