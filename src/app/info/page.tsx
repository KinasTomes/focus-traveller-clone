'use client';

import { PageLayout } from '@/components/layout/page-layout';
import { motion } from 'framer-motion';

const INFO_CONTENT = "Trong bối cảnh y học hiện đại phát triển mạnh mẽ, kỹ thuật hỗ trợ sinh sản, đặc biệt là thụ tinh trong ống nghiệm (IVF), đã và đang làm thay đổi cách nhìn truyền thống về quan hệ huyết thống và gia đình. Điều này đặt ra những thách thức không nhỏ cho pháp luật dân sự, đặc biệt là trong việc xác lập quyền thừa kế của những cá nhân được sinh ra từ phương pháp này. Pháp luật Việt Nam đã ghi nhận và bảo vệ quyền lợi của những cá nhân này, trong đó có quyền thừa kế. Tuy nhiên, để đảm bảo công bằng và đầy đủ hơn, cần tiếp tục hoàn thiện các quy định pháp luật, đặc biệt trong việc xác định cha, mẹ hợp pháp và thời điểm phát sinh quyền thừa kế. Mỗi người dân cần hiểu đúng để bảo vệ quyền lợi của mình và người thân trong những tình huống mới của cuộc sống hiện đại.";

export default function InfoPage() {
  return (
    <PageLayout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background image with blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/test.jpg')",
            filter: "blur(50%)",
            opacity: 0.5
          }}
        />
        
        <div className="container-flex py-12 relative z-10 max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 space-y-6"
          >
            <h1 className="text-3xl font-bold text-[#5f635e] text-center mb-8">
              Kết luận
            </h1>
            <div className="text-lg text-[#5f635e] space-y-4">
              <p className="text-justify whitespace-pre-line">{INFO_CONTENT}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
} 