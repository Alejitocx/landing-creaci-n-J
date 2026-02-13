import React, { useState } from 'react';
import { generateRomanticPoem } from '../services/geminiService';
import { SparklesIcon } from '@heroicons/react/24/solid';

export const PoemGenerator: React.FC = () => {
  const [name] = useState('Juliana'); // Fixed name
  const [poem, setPoem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateRomanticPoem(name);
    setPoem(result);
    setLoading(false);
  };

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md mx-auto transform transition-all hover:scale-105 border border-pink-200">
      <h3 className="text-2xl font-bold text-rose-600 mb-4 font-handwriting text-center">
        Un Poema Solo Para Ti
      </h3>
      
      {!poem ? (
        <div className="space-y-6 text-center">
          <div className="py-4">
             <p className="text-gray-600 text-lg font-serif italic">
               He preparado unas palabras especiales para ti...
             </p>
             <p className="text-2xl text-rose-500 font-handwriting mt-2 font-bold">
               Juliana
             </p>
          </div>
          
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group uppercase tracking-wider text-sm"
          >
            {loading ? (
              <span className="animate-pulse">Escribiendo...</span>
            ) : (
              <>
                <SparklesIcon className="w-5 h-5 text-yellow-200 group-hover:spin-slow" />
                ¿Deseas conocer tu poema?
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <div className="relative">
            <div className="absolute -top-4 -left-2 text-6xl text-rose-200 font-serif opacity-50">"</div>
            <p className="text-lg text-gray-800 italic leading-relaxed text-center font-serif px-4 whitespace-pre-line">
              {poem}
            </p>
            <div className="absolute -bottom-8 -right-2 text-6xl text-rose-200 font-serif opacity-50">"</div>
          </div>
          <button 
            onClick={() => setPoem('')}
            className="text-rose-500 text-sm hover:underline w-full text-center mt-4"
          >
            ¿Leer de nuevo?
          </button>
        </div>
      )}
    </div>
  );
};