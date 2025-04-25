import React, { useEffect, useState } from 'react';
import "./bookcover.css"
import { useNavigate } from 'react-router-dom';
function ChapterDetails({ id }) {
    const [chapter, setChapter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [flip, setFlip] = useState(false);
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
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
                setTimeout(() => setFlip(false), 800);
            }
        };

        fetchChapter();
    }, [id]);



    if (loading) return <p>Loading chapter...</p>;
    if (!chapter) return <p>No chapter found</p>;

    const movePreviousPage = () => {
        const prevChapter = parseInt(id) - 1;
        const nextChapter = parseInt(id) +1;
        {
            prevChapter >1  ?
                navigate(`/chapter/${prevChapter}`)
                : navigate(`/chapter/${nextChapter}`)
        }
    }

    return (
        <div className={`chapter-detail ${flip ? 'page-flip' : ''}`}>
            <h2>🕉️ अध्याय {chapter.chapter_number}: {chapter.name}</h2>
            <h4>📖 Meaning: {chapter.name_meaning}</h4>
            <p>📚 <b>सारांश:</b> {chapter.chapter_summary_hindi}</p>
            <p><div>📚<b>Summary:</b>{chapter.chapter_summary} </div></p>

            <button className={parseInt(id) === 1 ? 'hidden' : ''} onClick={movePreviousPage}>Previous page</button>
        </div>
    );
}

export default ChapterDetails;
