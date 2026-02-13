import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

export const Proposal: React.FC = () => {
  const [accepted, setAccepted] = useState(false);
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);
  
  // A romantic piano track
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/10/14/audio_9939f792cb.mp3?filename=romantic-piano-124978.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }, []);

  // Messages that appear as you try to click No
  const pleadings = [
    "No",
    "¿Estás segura?",
    "¿Muy segura?",
    "¡Piénsalo bien!",
    "¡Última oportunidad!",
    "¿Seguro que no?",
    "¡Podrías arrepentirte!",
    "¡Ten corazón!",
    "¡No me hagas esto!",
    "Voy a llorar...",
    "Me estás rompiendo el corazón ;(",
  ];

  const moveButton = () => {
    if (!containerRef.current || !noBtnRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const btnRect = noBtnRef.current.getBoundingClientRect();

    // Calculate available space
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    // Random new position
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoBtnPos({ x: newX, y: newY });
    setHoverCount(prev => prev + 1);
  };

  const handleAccept = () => {
    setAccepted(true);
    
    // Play music
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed (user interaction needed likely)", e));
    }

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#db2777', '#f472b6']
    });
    
    // Continuous fireworks
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  useEffect(() => {
    // Initial center position logic handled by CSS layout
  }, []);

  if (accepted) {
    return (
      <div className="text-center animate-bounce duration-1000 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border-4 border-rose-400 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-rose-600 font-handwriting mb-4">
          ¡SIIII! ❤️
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 font-serif mb-8">
          ¡Me has hecho la persona más feliz del mundo!
        </p>
        <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
          <p className="text-sm md:text-base text-rose-800 font-serif tracking-wide uppercase font-bold">
            Comunícate con el que te envió esto para que conozcas todos los detalles de tu cita
          </p>
        </div>
        <div className="mt-8 text-6xl animate-pulse">🥰💍💑</div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-2xl h-[400px] bg-white/40 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center justify-center border border-white/50 shadow-2xl overflow-hidden"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-rose-600 text-center mb-12 font-handwriting drop-shadow-sm">
        ¿Quieres ser mi San Valentín?
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full static">
        <button
          onClick={handleAccept}
          className="z-10 bg-rose-500 hover:bg-rose-600 text-white font-bold text-xl py-4 px-12 rounded-full shadow-lg transform transition-transform hover:scale-110 active:scale-95"
        >
          SÍ ❤️
        </button>

        <button
          ref={noBtnRef}
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
          onClick={moveButton} // Fallback
          style={{
            position: hoverCount > 0 ? 'absolute' : 'relative',
            left: hoverCount > 0 ? noBtnPos.x : 'auto',
            top: hoverCount > 0 ? noBtnPos.y : 'auto',
            transition: 'all 0.2s ease-out',
          }}
          className="z-10 bg-gray-200 text-gray-500 font-bold text-lg py-4 px-8 rounded-full shadow-inner hover:bg-gray-300"
        >
          {pleadings[Math.min(hoverCount, pleadings.length - 1)]}
        </button>
      </div>
    </div>
  );
};