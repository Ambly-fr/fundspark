'use client'
import { useState } from 'react';
import './TagsInput.css';

const TagsInput = ({ value = [], onChange }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (input && !value.includes(input)) {
        onChange([...value, input]);
        setInput('');
      }
    } else if (event.key === 'Backspace' && !input) {
      onChange(value.slice(0, value.length - 1));
    }
  };

  const handleRemove = (tagToRemove) => {
    onChange(value.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="inputContainer">
      <label className="label">Catégorie du projet</label>
      <div className="input-Default">
        {Array.isArray(value) && value.map((tag, index) => (
          <span key={index}>
            {tag}
            <button className='remove' type="button" onClick={() => handleRemove(tag)}>
              x
            </button>
          </span>
        ))}
        <input
          type="text"
          className='inputTags'
          placeholder='Ajouter une catégorie'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <span className="helper">Appuyez sur Entrée pour ajouter une catégorie</span>
    </div>
  );
};

export default TagsInput;
