import React, { useRef, useState } from 'react';
import './bookcover.css';
import Chapters from './chapters';
import ChapterDetails from './chapterDetails';
import TableOfContent from './Content';
import DetailSummary from './detailSummary';
// import BtnMusic from '../assets/btnMusic.mp3';

function BookCover() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedChapterId, setSelectedChapterId] = useState(null);

  const chapRef = useRef(null);

  const openBook = () => {
    if (!isOpen) {
      setIsOpen(true);
      setCurrentPage(1);
    }
  };

  const handleChapterSelect = (chapterId) => {
    setSelectedChapterId(chapterId);
    setCurrentPage(2);
    chapRef.current?.play().catch(err => {
      console.log('chapter sound blocked');
    });
  };

  const getnextChapterId = (chapterId) => {
    return chapterId < 17 ? chapterId + 1 : null;
  };
  const nextchapterId = selectedChapterId !== null ? getnextChapterId(selectedChapterId) : null;
  console.log(nextchapterId)


  return (
    <div className="book-wrapper">
      <audio ref={chapRef} src={"./assets/btnMusic.mp3"} />
      <div className={`book ${isOpen ? 'open' : "close"}`}>
        <div className="bookCover" onClick={openBook}>
          <img src={"./assets/chakar.png"} className="chakar" alt="Chakra" />
          <h2>श्रीमद्भगवद्गीता</h2>
          <h3>BHAGAVADGEETA</h3>
        </div>

        <div className="leftpage">
          {currentPage === 1 && <TableOfContent />}
          {currentPage === 2 && selectedChapterId && (
            <ChapterDetails id={selectedChapterId} />
          )}
        </div>
        <div className="rightpage" onClick={() => currentPage === 1 && setCurrentPage(2)}>
          {currentPage === 1 && <Chapters onSelectChapter={handleChapterSelect} />}
          {currentPage === 2 && nextchapterId && (<DetailSummary id={nextchapterId} />)}
          {currentPage === 2 && !nextchapterId && <p>No more chapters available</p>}

        </div>
      </div>
    </div>
  );
}

export default BookCover;
