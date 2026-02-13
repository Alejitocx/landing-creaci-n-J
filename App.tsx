import React from 'react';
import { Scene3D } from './components/Scene3D';
import { Proposal } from './components/Proposal';
import { PoemGenerator } from './components/PoemGenerator';
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid';

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <section className={`min-h-screen w-full flex flex-col items-center justify-center p-6 relative z-10 ${className}`}>
    {children}
  </section>
);

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden text-gray-800 selection:bg-rose-200">
      <Scene3D />
      
      {/* Intro Section - Added gradient background to highlight */}
      <Section className="bg-gradient-to-b from-rose-100/80 via-white/60 to-transparent backdrop-blur-sm">
        <div className="text-center animate-fade-in-up">
          <HeartIcon className="w-16 h-16 text-rose-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600 font-handwriting mb-4 drop-shadow-sm">
            Hola Juliana
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-serif italic leading-relaxed">
            No sé cómo se dio lo nuestro, fue tan espontáneo que parece que la vida nos tenía preparado esa sorpresa. Gracias por dejarme entrar en tu vida y poder ganarme un pedacito de tu corazón, voy a estar eternamente agradecido contigo princesa.
          </p>
          <div className="mt-12 animate-bounce text-rose-400">
            Desliza hacia abajo ↓
          </div>
        </div>
      </Section>

      {/* Love Note Section */}
      <Section className="bg-white/30 backdrop-blur-[2px]">
        <div className="max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-700 font-handwriting">
            Por qué significas el mundo para mí
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/70 p-6 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300">
              <span className="text-4xl mb-2 block">✨</span>
              <h3 className="text-xl font-bold text-rose-600 mb-2">Tu Sonrisa</h3>
              <p className="text-gray-600">Ilumina mis días más oscuros y hace que todo sea mejor al instante.</p>
            </div>
            <div className="bg-white/70 p-6 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 delay-100">
              <span className="text-4xl mb-2 block">💝</span>
              <h3 className="text-xl font-bold text-rose-600 mb-2">Tu Bondad</h3>
              <p className="text-gray-600">La forma en que te preocupas por los demás me inspira a ser mejor persona cada día.</p>
            </div>
            <div className="bg-white/70 p-6 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 delay-200">
              <span className="text-4xl mb-2 block">🧠</span>
              <h3 className="text-xl font-bold text-rose-600 mb-2">Tu Mente</h3>
              <p className="text-gray-600">Podría hablar contigo durante horas y nunca aburrirme. Me fascinas.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mis Promesas Section */}
      <Section>
        <div className="max-w-4xl mx-auto w-full">
           <h2 className="text-4xl md:text-5xl font-bold text-rose-700 font-handwriting text-center mb-12">
            Mis Promesas Para Ti
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-6 bg-white/60 p-6 rounded-2xl shadow-sm hover:bg-white/80 transition-colors">
              <div className="bg-rose-100 p-4 rounded-full text-rose-500">
                <StarIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 font-serif">Amarte sin condiciones</h3>
                <p className="text-gray-600">Prometo elegirte cada día, en los momentos buenos y en los difíciles.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 bg-white/60 p-6 rounded-2xl shadow-sm hover:bg-white/80 transition-colors ml-0 md:ml-12">
              <div className="bg-rose-100 p-4 rounded-full text-rose-500">
                <HeartIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 font-serif">Hacerte reír siempre</h3>
                <p className="text-gray-600">Prometo intentar sacarte una sonrisa incluso cuando el mundo parezca gris.</p>
              </div>
            </div>

            <div className="flex items-center gap-6 bg-white/60 p-6 rounded-2xl shadow-sm hover:bg-white/80 transition-colors ml-0 md:ml-24">
              <div className="bg-rose-100 p-4 rounded-full text-rose-500">
                <SparklesIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 font-serif">Construir un futuro juntos</h3>
                <p className="text-gray-600">Prometo trabajar en nuestros sueños y apoyarte en todas tus metas.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* AI Poem Generator Section */}
      <Section className="bg-white/30 backdrop-blur-[2px]">
        <PoemGenerator />
      </Section>

      {/* New Romantic Section: Solo Imagina (Updated) */}
      <Section className="bg-gradient-to-b from-transparent to-white/20">
        <div className="max-w-4xl mx-auto w-full px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-700 font-handwriting text-center mb-16">
            Solo Imagina...
          </h2>
          
          <div className="flex justify-center">
             <div className="bg-white/60 p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border border-rose-100 max-w-3xl w-full text-center transform hover:scale-105 duration-500">
                <div className="mb-6 inline-block p-4 bg-rose-100 rounded-full">
                  <span className="text-4xl">🌱</span>
                </div>
                <h3 className="text-3xl font-bold text-rose-600 mb-6 font-serif">Creciendo Juntos</h3>
                <p className="text-gray-700 italic text-xl leading-relaxed">
                  "Apoyándonos en cada paso, celebrando cada logro y aprendiendo de cada desafío. Ser tu equipo, tu compañero, tu todo."
                </p>
             </div>
          </div>
        </div>
      </Section>

      {/* Proposal Section */}
      <Section className="pb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-rose-800 text-center mb-10 max-w-4xl px-4 font-serif uppercase tracking-widest leading-relaxed">
          Y con todo esto que te he dicho quisiera conocer lo siguiente...
        </h2>
        <Proposal />
      </Section>

      <footer className="fixed bottom-2 w-full text-center text-rose-400 text-sm font-serif opacity-60 z-10 pointer-events-none">
        Hecho con ❤️ para Juliana
      </footer>
    </div>
  );
};

// Helper icon
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM9 15a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 019 15z" clipRule="evenodd" />
  </svg>
);

export default App;