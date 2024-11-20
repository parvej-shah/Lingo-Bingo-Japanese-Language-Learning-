import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import pronounceWord from "../utils/speak";
const LessonPage = () => {
  const { lesson_no } = useParams();
  const [selectedWord, setSelectedWord] = useState(null);
  const data = useLoaderData();
  const [filteredVocabularies,setFilteredVocabularies] = useState([]);
  useEffect(()=>{
    const Vocabularies = data.filter(
        (vocab) => vocab.lesson_no === parseInt(lesson_no)
      );
      setFilteredVocabularies(Vocabularies);
  },[])
  const handleWordClick = (vocab)=>{
      setSelectedWord(vocab);
      pronounceWord(vocab.word);
  }
  const difficultyColors = {
    easy: "bg-green text-white",
    medium: "bg-orange text-white",
    difficult: "bg-red text-white",
  };

  return (
    <div className="min-h-screen bg-neutral-gray p-6">
      <h1
        className="text-4xl md:text-5xl font-bold text-center text-strong-blue mb-10"
      >
        Lesson {lesson_no}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xl">
        {filteredVocabularies.map((vocab) => (
          <div
            key={vocab.id}
            className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
              difficultyColors[vocab.difficulty]
            }`}
            onClick={() => handleWordClick(vocab)}
            
          >
            <h2 className="text-2xl font-semibold">{vocab.word} <span className="italic">({vocab.pronunciation})</span></h2>
            <p className="mt-2">{vocab.meaning} <span className="text-sm mt-2">({vocab.part_of_speech})</span></p>
          </div>
        ))}
      </div>

      {selectedWord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-xl">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
            <button
              onClick={() => setSelectedWord(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-black text-lg font-bold"
            >
            <FaTimes size={28}/>
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedWord.word}</h2>
            <p>
              <strong>Meaning:</strong> {selectedWord.meaning}
            </p>
            <p>
              <strong>When to say:</strong> {selectedWord.when_to_say}
            </p>
            <p>
              <strong>Example:</strong> {selectedWord.example}
            </p>
          </div>
        </div>
      )}
      <div className="mt-10 text-center">
        <Link
          to={"/start-learning"}
          className="px-6 py-3 bg-strong-blue text-white font-bold rounded-lg shadow-lg hover:bg-sky-blue transition-all duration-300 transform hover:scale-105"
          
        >
          Back to Lessons
        </Link>
      </div>
    </div>
  );
};

export default LessonPage;
