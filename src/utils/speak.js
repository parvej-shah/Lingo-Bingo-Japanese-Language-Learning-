function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'ja-JP'; // Japanese
    window.speechSynthesis.speak(utterance);
  }
export default pronounceWord;