'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageLayout } from '@/components/layout/page-layout';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import Image from 'next/image';

interface Question {
  questionKey: string;
  options: string[];
  correctAnswer: string;
}

const QUESTIONS: Question[] = [
  {
    questionKey: 'question1',
    options: ['question1Option1', 'question1Option2', 'question1Option3', 'question1Option4'],
    correctAnswer: 'question1Option2'
  },
  {
    questionKey: 'question2',
    options: ['question2Option1', 'question2Option2', 'question2Option3', 'question2Option4'],
    correctAnswer: 'question2Option1'
  },
  {
    questionKey: 'question3',
    options: ['question3Option1', 'question3Option2', 'question3Option3', 'question3Option4'],
    correctAnswer: 'question3Option3'
  },
  {
    questionKey: 'question4',
    options: ['question4Option1', 'question4Option2', 'question4Option3', 'question4Option4'],
    correctAnswer: 'question4Option3'
  },
  {
    questionKey: 'question5',
    options: ['question5Option1', 'question5Option2', 'question5Option3', 'question5Option4'],
    correctAnswer: 'question5Option3'
  },
  {
    questionKey: 'question6',
    options: ['question6Option1', 'question6Option2', 'question6Option3', 'question6Option4'],
    correctAnswer: 'question6Option2'
  },
  {
    questionKey: 'question7',
    options: ['question7Option1', 'question7Option2', 'question7Option3', 'question7Option4'],
    correctAnswer: 'question7Option3'
  },
  {
    questionKey: 'question8',
    options: ['question8Option1', 'question8Option2', 'question8Option3', 'question8Option4'],
    correctAnswer: 'question8Option3'
  },
  {
    questionKey: 'question9',
    options: ['question9Option1', 'question9Option2', 'question9Option3', 'question9Option4'],
    correctAnswer: 'question9Option2'
  },
  {
    questionKey: 'question10',
    options: ['question10Option1', 'question10Option2', 'question10Option3', 'question10Option4'],
    correctAnswer: 'question10Option3'
  }
];

export default function QuestionsPage() {
  const { t } = useTranslation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/test-bg.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container-flex py-12 relative z-10 max-w-[90%] mx-auto">
          {!quizCompleted ? (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#5f635e]">
                  {t('questionCount')} {currentQuestionIndex + 1}/{QUESTIONS.length}
                </h1>
                <div className="text-xl font-semibold text-[#5f635e]">
                  {t('score')}: {score}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold mb-6 text-[#5f635e]">
                    {t(currentQuestion.questionKey)}
                  </h2>

                  <div className="space-y-4">
                    {currentQuestion.options.map((option, index) => (
                      <motion.button
                        key={index}
                        initial={false}
                        animate={{
                          backgroundColor: showResult
                            ? option === currentQuestion.correctAnswer
                              ? "rgb(34 197 94)"
                              : option === selectedAnswer
                              ? "rgb(239 68 68)"
                              : "white"
                            : "white",
                          color: showResult
                            ? option === currentQuestion.correctAnswer || option === selectedAnswer
                              ? "white"
                              : "#5f635e"
                            : "#5f635e",
                        }}
                        whileHover={!showResult ? { scale: 1.02 } : {}}
                        whileTap={!showResult ? { scale: 0.98 } : {}}
                        className={`w-full p-4 rounded-lg border-2 border-[#5f635e] text-left transition-all duration-200 ${
                          showResult ? "cursor-default" : "cursor-pointer hover:bg-[#faf3eb]"
                        }`}
                        onClick={() => handleAnswerSelect(option)}
                      >
                        {t(option)}
                      </motion.button>
                    ))}
                  </div>

                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6"
                    >
                      <button
                        onClick={handleNextQuestion}
                        className="w-full py-3 bg-[#b49656] text-white rounded-lg font-semibold hover:bg-[#866a43] transition-colors"
                      >
                        {currentQuestionIndex < QUESTIONS.length - 1 ? t('nextQuestion') : t('viewResults')}
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-center"
            >
              <h2 className="text-3xl font-bold text-[#5f635e]">
                {t('congratulations')}
              </h2>
              <div className="text-4xl font-bold text-[#5f635e]">
                {t('yourScore')}: {score}/{QUESTIONS.length}
              </div>
              <div className="text-2xl text-[#5f635e]">
                {score >= QUESTIONS.length * 0.8
                  ? t('excellent')
                  : score >= QUESTIONS.length * 0.6
                  ? t('good')
                  : t('keepLearning')}
              </div>
              <Link 
                href="/info"
                className="inline-block mt-6 px-6 py-3 bg-[#b49656] text-white rounded-lg font-semibold hover:bg-[#866a43] transition-colors"
              >
                {t('viewDetails')}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </PageLayout>
  );
} 