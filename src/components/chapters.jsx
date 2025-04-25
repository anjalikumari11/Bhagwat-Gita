import React, { useEffect, useState } from 'react';

function Chapters({ onSelectChapter }) {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'ff6ab7438amsh243b17a69b696f7p1f325ejsnffaa2958d014',
          'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setChapters(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  if (loading) return <p>Loading chapters...</p>;

  return (
    <div className='chapters'>
      <h2>📜 Chapters List</h2>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.chapter_number} onClick={() => onSelectChapter(chapter.chapter_number)}>
            <strong>Chapter {chapter.chapter_number}:</strong> {chapter.name_transliterated} ({chapter.name_meaning})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chapters;
