import { ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    points: number;
  }[];
}

interface Result {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
  color: string;
}

interface InteractiveQuizProps {
  title: string;
  description?: string;
  questions: Question[];
  results: Result[];
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

export default function InteractiveQuiz({ 
  title, 
  description, 
  questions, 
  results,
  ctaButtonText = "Falar com um Especialista",
  ctaButtonLink = "/contact"
}: InteractiveQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (points: number) => {
    const newScore = score + points;
    setScore(newScore);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
  };

  const getResult = () => {
    return results.find(r => score >= r.minScore && score <= r.maxScore) || results[0];
  };

  const finalResult = getResult();
  const progress = ((currentStep) / questions.length) * 100;

  return (
    <div className="bg-dark-200 border border-gold-500/20 rounded-2xl overflow-hidden shadow-2xl max-w-2xl mx-auto my-12">
      {!showResult ? (
        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            {description && <p className="text-gray-400 text-sm">{description}</p>}
          </div>

          <div className="w-full bg-dark-300 h-2 rounded-full mb-8">
            <div 
              className="bg-gold-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="mb-8">
            <span className="text-gold-500 text-sm font-bold tracking-wider uppercase mb-2 block">
              Pergunta {currentStep + 1} de {questions.length}
            </span>
            <h4 className="text-xl font-medium text-white">
              {questions[currentStep].text}
            </h4>
          </div>

          <div className="space-y-3">
            {questions[currentStep].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.points)}
                className="w-full text-left p-4 rounded-xl bg-dark-300 hover:bg-gold-500/20 border border-white/5 hover:border-gold-500/50 transition-all duration-200 group flex items-center justify-between"
              >
                <span className="text-gray-200 group-hover:text-white transition-colors">{option.text}</span>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-gold-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-8 text-center animate-fade-in relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-2 ${finalResult.color}`}></div>
          
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-dark-300 border-2 border-gold-500/30">
            <CheckCircle2 className="w-10 h-10 text-gold-500" />
          </div>

          <h3 className="text-3xl font-bold text-white mb-2">{finalResult.title}</h3>
          
          <div className="py-6">
             <p className="text-gray-300 text-lg leading-relaxed">{finalResult.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a 
              href={ctaButtonLink}
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gold-500 text-dark-100 font-bold hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
            >
              {ctaButtonText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <button
              onClick={resetQuiz}
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <RefreshCw className="mr-2 w-4 h-4" />
              Refazer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
