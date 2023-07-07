import React, { useState } from 'react';
import './MoreButton.css'

function MoreButton({ text, maxLength }) {
    const [showFullText, setShowFullText] = useState(false);

    function toggleShowFullText() {
        setShowFullText(!showFullText);
    }

    return (
        <div>
            {showFullText ? (
                <span>{text}</span>
            ) : (
                <span>{text.slice(0, maxLength)}...</span>
            )}
            <button onClick={toggleShowFullText}>
                {showFullText ? 'Less' : 'More'}
            </button>
        </div>
    );
}

export default MoreButton;
