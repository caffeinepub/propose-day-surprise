import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function App() {
  const [showOutput, setShowOutput] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const outputRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleNoButtonHover = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current;
    const button = noButtonRef.current;
    
    const maxX = container.offsetWidth - button.offsetWidth;
    const maxY = container.offsetHeight - button.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    setNoButtonPosition({ x, y });
  };

  const handleNoButtonClick = () => {
    alert("Haha! You can't say no! Gotta be mine! 😜");
  };

  const handleYesButtonClick = () => {
    setShowOutput(true);
    setTimeout(() => {
      outputRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl">
        <h1 className="heading-text text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center px-4">
          Will you always be mine?
        </h1>

        <div 
          ref={containerRef}
          className="button-container relative w-full max-w-md h-32 mb-12 flex items-center justify-center gap-8 sm:gap-12"
        >
          <Button
            onClick={handleYesButtonClick}
            className="yes-button text-lg sm:text-xl md:text-2xl px-6 sm:px-8 py-4 sm:py-6 h-auto rounded-full font-bold shadow-yes hover:shadow-yes-hover transition-all duration-300 hover:scale-110"
          >
            Yes ❤️
          </Button>

          <Button
            ref={noButtonRef}
            onMouseEnter={handleNoButtonHover}
            onClick={handleNoButtonClick}
            className="no-button text-lg sm:text-xl md:text-2xl px-6 sm:px-8 py-4 sm:py-6 h-auto rounded-full font-bold shadow-no hover:shadow-no-hover transition-all duration-300 hover:scale-110 absolute"
            style={{
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
            }}
          >
            No, never!
          </Button>
        </div>

        {showOutput && (
          <div ref={outputRef} className="output-section w-full flex flex-col items-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="message-text text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center px-4">
              Yay! You're mine forever! 💖
            </div>
            <img
              src="/assets/generated/happy_propose_day.dim_1200x800.jpg"
              alt="Happy Propose Day"
              className="propose-image max-w-[90%] h-auto rounded-2xl sm:rounded-3xl shadow-image"
            />
          </div>
        )}
      </div>

      <footer className="w-full text-center py-6 text-sm sm:text-base footer-text">
        © 2026. Built with ❤️ using{' '}
        <a 
          href="https://caffeine.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link hover:underline font-semibold"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
