import { useState, useEffect } from 'react';

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button class='back-to-top-button'
      onClick={handleClick}
      style={{display: showButton ? 'block' : 'none'}}
    >
      <img src='back-to-top.png' style={{width:'50%', paddingBottom:'20%'}} alt='banana'/>
    </button>
  );
}