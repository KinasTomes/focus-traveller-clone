'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageLayout } from '@/components/layout/page-layout';
import Link from 'next/link';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const QUESTIONS: Question[] = [
  {
    question: "Theo quy định của Bộ luật Dân sự 2015, quyền thừa kế của cá nhân phát sinh khi nào?",
    options: [
      "Khi người lập di chúc nộp tại cơ quan công chứng",
      "Khi người để lại di sản chết",
      "Khi có quyết định của Tòa án",
      "Khi di sản được chia xong"
    ],
    correctAnswer: "Khi người để lại di sản chết"
  },
  {
    question: "Theo pháp luật Việt Nam, kỹ thuật hỗ trợ sinh sản, bao gồm thụ tinh trong ống nghiệm (IVF), được thực hiện dựa trên nguyên tắc nào sau đây?",
    options: [
      "Bí mật, nhân đạo, vô danh, tự nguyện, đúng quy trình",
      "Bình đẳng, công khai, bắt buộc, vô danh, có điều kiện",
      "Xã hội hóa, thương mại hóa, tự nguyện, công khai",
      "Tùy theo cơ sở y tế quy định"
    ],
    correctAnswer: "Bí mật, nhân đạo, vô danh, tự nguyện, đúng quy trình"
  },
  {
    question: "Theo Luật Hôn nhân và Gia đình 2014, người hiến tinh trùng, noãn hoặc phôi khi tham gia kỹ thuật hỗ trợ sinh sản sẽ có quan hệ pháp lý gì với đứa trẻ sinh ra từ IVF?",
    options: [
      "Là cha/mẹ hợp pháp của đứa trẻ",
      "Có quyền nhận con nếu có kết nối di truyền",
      "Không phát sinh quan hệ cha mẹ con với đứa trẻ",
      "Có nghĩa vụ cấp dưỡng cho đứa trẻ"
    ],
    correctAnswer: "Không phát sinh quan hệ cha mẹ con với đứa trẻ"
  },
  {
    question: "Nguyên tắc vô danh trong kỹ thuật hỗ trợ sinh sản tại Việt Nam nhằm mục đích gì?",
    options: [
      "Đảm bảo quyền thừa kế cho người hiến",
      "Hạn chế số lượng người sử dụng IVF",
      "Bảo vệ thông tin người hiến, ngăn chặn thương mại hóa, đảm bảo quyền riêng tư",
      "Cho phép người hiến nhận lại con sau khi sinh"
    ],
    correctAnswer: "Bảo vệ thông tin người hiến, ngăn chặn thương mại hóa, đảm bảo quyền riêng tư"
  },
  {
    question: "Tại bang California (Hoa Kỳ), điều kiện nào để một đứa trẻ sinh ra bằng phương pháp IVF được đảm bảo quyền thừa kế?",
    options: [
      "Có ADN trùng khớp với người để lại di sản",
      "Có tên trong di chúc",
      "Cha mẹ có dự định sinh con và được công nhận pháp lý theo luật",
      "Cha mẹ phải còn sống khi trẻ được sinh ra"
    ],
    correctAnswer: "Cha mẹ có dự định sinh con và được công nhận pháp lý theo luật"
  },
  {
    question: "Theo Đạo luật Thụ tinh phôi người 2008 tại Vương quốc Anh, trẻ sinh ra từ phôi được cấy sau khi cha mẹ qua đời chỉ được thừa kế nếu:",
    options: [
      "Có xác nhận từ bác sĩ điều trị",
      "Có lệnh của tòa án cho phép thừa kế",
      "Phôi được cấy trong vòng 6 tháng sau khi cha mẹ mất",
      "Người hiến phôi chấp thuận bằng văn bản"
    ],
    correctAnswer: "Có lệnh của tòa án cho phép thừa kế"
  },
  {
    question: "Một trong những bất cập pháp lý nổi bật khi xác định quyền thừa kế cho trẻ sinh từ IVF là gì?",
    options: [
      "Không có cơ sở y tế nào thực hiện IVF ở Việt Nam",
      "Pháp luật quy định IVF chỉ áp dụng cho cặp vợ chồng có giấy kết hôn",
      "Việc xác lập quan hệ cha con có thể vượt mốc 300 ngày kể từ ngày người cha mất",
      "Trẻ sinh từ IVF không được khai sinh"
    ],
    correctAnswer: "Việc xác lập quan hệ cha con có thể vượt mốc 300 ngày kể từ ngày người cha mất"
  },
  {
    question: 'Trong vụ việc chị Kim Dung sinh con bằng tinh trùng của người chồng đã mất: vấn đề pháp lý lớn nhất khi khai sinh cho hai bé là:',
    options: [
      "Không có hồ sơ y tế chứng minh IVF",
      "Không có xác nhận từ cơ sở y tế",
      "Người cha đã mất, gây vướng mắc trong việc ghi tên cha vào giấy khai sinh",
      "Chị Dung không đăng ký kết hôn trước đó"
    ],
    correctAnswer: "Người cha đã mất, gây vướng mắc trong việc ghi tên cha vào giấy khai sinh"
  },
  {
    question: "Một trong những đề xuất sửa đổi pháp luật để bảo đảm quyền thừa kế của trẻ sinh ra từ IVF là:",
    options: [
      "Cấm phụ nữ độc thân sử dụng kỹ thuật IVF",
      "Bổ sung quy định loại trừ quyền thừa kế của người hiến giao tử",
      "Quy định trẻ sinh từ IVF không được thừa kế tài sản",
      "Giao quyền nuôi dưỡng trẻ IVF cho người hiến noãn"
    ],
    correctAnswer: "Bổ sung quy định loại trừ quyền thừa kế của người hiến giao tử"
  },
  {
    question: "Giải pháp nào sau đây được đề xuất để tránh nhầm lẫn danh tính trong quá trình thực hiện IVF?",
    options: [
      "Chỉ cho phép IVF tại bệnh viện công lập",
      "Yêu cầu khai báo người hiến trước tòa án",
      "Áp dụng công nghệ sinh trắc học và mã định danh công dân",
      "Cấm hoàn toàn việc hiến tinh trùng và noãn"
    ],
    correctAnswer: "Áp dụng công nghệ sinh trắc học và mã định danh công dân"
  }
];

export default function QuestionsPage() {
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
      <div className="min-h-screen bg-[#faf3eb] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/travel-bg.svg')] bg-cover opacity-20" />
        
        <div className="container-flex py-12 relative z-10 max-w-[90%] mx-auto">
          {!quizCompleted ? (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#5f635e]">
                  Câu hỏi {currentQuestionIndex + 1}/{QUESTIONS.length}
                </h1>
                <div className="text-xl font-semibold text-[#5f635e]">
                  Điểm: {score}
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
                    {currentQuestion.question}
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
                        {option}
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
                        className="w-full py-3 bg-[#5f635e] text-white rounded-lg font-semibold hover:bg-[#4a4d48] transition-colors"
                      >
                        {currentQuestionIndex < QUESTIONS.length - 1 ? "Câu hỏi tiếp theo" : "Xem kết quả"}
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
                Chúc mừng bạn đã hoàn thành!
              </h2>
              <div className="text-4xl font-bold text-[#5f635e]">
                Điểm số của bạn: {score}/{QUESTIONS.length}
              </div>
              <div className="text-2xl text-[#5f635e]">
                {score >= QUESTIONS.length * 0.8
                  ? "Xuất sắc! Bạn đã hiểu rất rõ về quyền thừa kế của trẻ sinh từ IVF."
                  : score >= QUESTIONS.length * 0.6
                  ? "Tốt! Bạn đã có kiến thức cơ bản về quyền thừa kế của trẻ sinh từ IVF."
                  : "Hãy tiếp tục tìm hiểu thêm về quyền thừa kế của trẻ sinh từ IVF nhé!"}
              </div>
              <Link 
                href="/info"
                className="inline-block mt-6 px-6 py-3 bg-[#5f635e] text-white rounded-lg font-semibold hover:bg-[#4a4d48] transition-colors"
              >
                Xem thông tin chi tiết
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </PageLayout>
  );
} 