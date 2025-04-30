'use client';

import { FeatureSection } from './feature-section';
import { motion } from 'framer-motion';

export const FeaturesContainer = () => {
  return (
    <section>
      {/* First Feature: Tap and Focus */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FeatureSection
          title="Quyền làm cha mẹ là quyền tự nhiên"
          description="Trong dòng chảy lịch sử, con người ở mọi thời đại đều mang những nhu cầu cơ bản, từ sinh tồn đến phát triển, hình thành nên các quyền con người mang tính tự nhiên và khách quan. Trong số đó, quyền sinh con và được làm cha mẹ là một trong những quyền quan trọng nhất, gắn liền với giá trị nhân đạo và bản chất của đời sống xã hội."
          imageSrc="https://ext.same-assets.com/3301080306/1445771840.png"
          imageAlt="Tap and Focus Feature"
          isReversed={false}
        />
      </motion.div>

      {/* Second Feature: Focus Data */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FeatureSection
          title="Sự gia tăng của IVF và hệ lụy pháp lý"
          description="Ngày càng nhiều trường hợp sinh con nhờ kỹ thuật hỗ trợ sinh sản, do các yếu tố như sức khỏe, tuổi tác hoặc sinh học. Điều này kéo theo các vấn đề pháp lý mới, đặc biệt liên quan đến quyền thừa kế của trẻ sinh ra bằng phương pháp này."
          imageSrc="https://ext.same-assets.com/3301080306/2970540652.png"
          imageAlt="Focus Data Feature"
          isReversed={true}
        />
      </motion.div>

      {/* Third Feature: Your Traveller */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FeatureSection
          title="Yêu cầu hoàn thiện pháp luật IVF"
          description="Điều này đặt ra yêu cầu cần có những nghiên cứu toàn diện và kịp thời nhằm góp phần hoàn thiện hệ thống pháp luật về sinh con bằng kỹ thuật hỗ trợ sinh sản nói chung. Đặc biệt, việc đảm bảo quyền thừa kế cho các cá nhân sinh ra bằng phương pháp thụ tinh trong ống nghiệm (IVF) là một điểm nhấn quan trọng cần được quy định rõ ràng và cụ thể trong pháp luật hiện hành."
          imageSrc="https://ext.same-assets.com/3301080306/554104015.gif"
          imageAlt="Your Traveller Feature"
          isReversed={false}
          isAnimated={true}
        />
      </motion.div>

      {/* Fourth Feature: Achievement */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FeatureSection
          title="Bài học từ kinh nghiệm quốc tế"
          description="Nhiều quốc gia đã xây dựng khung pháp lý tiến bộ nhằm bảo vệ quyền lợi của trẻ sinh từ IVF. Những mô hình này là nguồn tham khảo giá trị cho Việt Nam trong việc hoàn thiện pháp luật lĩnh vực còn mới và nhạy cảm này."
          imageSrc="https://ext.same-assets.com/3301080306/3337973433.png"
          imageAlt="Achievement Feature"
          isReversed={true}
        />
      </motion.div>
    </section>
  );
};
