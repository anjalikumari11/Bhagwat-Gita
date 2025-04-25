import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DetailSummary({ id }) {
    const [chapter, setChapter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [flip,setFlip] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        const fetchChapter = async () => {
            setLoading(true);
            setFlip(true);
            const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`;
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
                setChapter(result);
                console.log(id)
            } catch (error) {
                console.error('Error fetching chapter:', error);
            } finally {
                setLoading(false);
                setTimeout(() => setFlip(false), 800);
            }
        };

        fetchChapter();
    }, [id]);

    if (loading) return <p>Loading chapter...</p>;
    if (!chapter) return <p>No chapter found</p>;

    const moveNextPage = () => {
        const nextChapter = parseInt(id) + 1;
        navigate(`/chapter/${nextChapter}`);
    }
  
    return (
        <div className={`chapter-detail ${flip ? 'page-flip' : ''}`}>
            <h2>🕉️ अध्याय {chapter.chapter_number}: {chapter.name}</h2>
            <h4>📖 Meaning: {chapter.name_meaning}</h4>
           <p> <div>📚 <b>सारांश:</b> {chapter.chapter_summary_hindi}</div></p>
          <p>  <div>📚<b>Summary:</b>{chapter.chapter_summary} </div></p>
            <button onClick={moveNextPage}>Next page</button>

        </div>
    );
}

export default DetailSummary;
