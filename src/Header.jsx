import React, { useState, useEffect } from 'react';
import './Header.css';

function Header({ name }) {
  const [currentCharacteristic, setCurrentCharacteristic] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [characteristics, setCharacteristics] = useState([]);

  useEffect(() => {
    async function loadCharacteristics() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/sp12102001/facts.txt/main/characteristics.txt');
        const text = await response.text();
        const characteristicArray = text.split('\n').filter(char => char.trim() !== '');
        setCharacteristics(characteristicArray);
      } catch (error) {
        console.error('Error loading characteristics:', error);
      }
    }

    loadCharacteristics();
  }, []);

  useEffect(() => {
    if (characteristics.length === 0) return;

    const handleTyping = () => {
      const current = charIndex % characteristics.length;
      const fullText = characteristics[current];

      setCurrentCharacteristic((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentCharacteristic === fullText) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && currentCharacteristic === '') {
        setIsDeleting(false);
        setCharIndex((prev) => prev + 1);
      }
      setTypingSpeed(isDeleting ? 30 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentCharacteristic, isDeleting, typingSpeed, characteristics, charIndex]);

  return (
    <header role="banner">
      <h1>{name}</h1>
      <p id="contactInfo">
        <span className="static-text">Is...</span>
        <span className="characteristic typing">{currentCharacteristic}</span>
      </p>
    </header>
  );
}

export default Header;
