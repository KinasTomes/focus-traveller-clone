'use client';

import { PageLayout } from '@/components/layout/page-layout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const CHECKPOINTS = [
  {
    id: 1,
    title: "CƠ SỞ LÝ LUẬN VỀ PHƯƠNG PHÁP HỖ TRỢ SINH SẢN (THỤ TINH ỐNG NGHIỆM IVF) VÀ QUYỀN THỪA KẾ CỦA CÁ NHÂN SINH RA TỪ PHƯƠNG PHÁP HỖ TRỢ SINH SẢN IVF",
    description: `Cơ sở lý luận về quyền thừa kế của cá nhân. Quyền thừa kế của cá nhân, theo Bộ luật Dân sự 2015, là một trong những quyền dân sự cơ bản của cả nhân do luật quy định, theo đó cả nhân được hưởng di sản thừa kế do người chết để lại theo di chúc hoặc/và theo pháp luật, mang các đặc điểm nổi bật:
  - Là quyền luật định, chỉ được ghi nhận khi có nhà nước và pháp luật, phát sinh khi người để lại di sản qua đời (Điều 613).
  - Quyền thừa kế thuộc năng lực pháp luật dân sự (Điều 17), đặc biệt bảo vệ cả thai nhi đã thành thai trước khi người để lại di sản chết (Điều 660).
  - Quyền này thể hiện tính bình đẳng, không phân biệt phương thức sinh sản (tự nhiên hay IVF), được luật hóa từ Hiến pháp đến các văn bản luật (Điều 610).
  - Quyền thừa kế là quyền tài sản gắn với nhân thân, chỉ chuyển giao theo quy định (như nhường quyền), không thể mua bán, yêu cầu xác định rõ người thừa kế theo di chúc hoặc quan hệ hôn nhân, huyết thống, nuôi dưỡng.
  - Quyền thừa kế phát sinh từ di chúc (theo ý chí người để lại) hoặc pháp luật (dựa trên quan hệ gia đình).
  - Quyền được bảo đảm thực hiện qua thủ tục phân chia di sản, cho phép thỏa thuận hoặc khởi kiện, đồng thời được bảo vệ khi bị xâm phạm.

Cơ sở lý luận về đảm bảo quyền thừa kế của cá nhân sinh ra từ phương pháp hỗ trợ sinh sản IVF
- Theo Khoản 21 Điều 3 Luật HN&GĐ 2014: sinh con bằng kỹ thuật hỗ trợ sinh sản gồm thụ tinh nhân tạo và IVF.
- Mục đích: giúp người vô sinh hoặc phụ nữ độc thân có con.
- Cơ sở pháp lý:
   + Xuất phát từ quan hệ cha mẹ con và bảo vệ quyền con người.
   + Phù hợp với sự phát triển kỹ thuật sinh sản và nhu cầu làm cha mẹ.
   + Hạn chế tranh chấp pháp lý về quan hệ cha mẹ con.
   + Nguyên tắc thực hiện IVF: nhân đạo, bí mật, tự nguyện, vô danh, đúng quy trình (Nghị định 10/2015/NĐ-CP).`,
    position: 0,
  },
  {
    id: 2,
    title: "CÁC QUAN HỆ PHÁP LUẬT DÂN SỰ TRONG THỰC HIỆN PHƯƠNG PHÁP IVF",
    description: `Quan hệ giữa người nhận (noãn/phôi/tinh trùng) và đứa trẻ
- Theo Khoản 3 Điều 93 Luật HNGĐ 2014: người hiến tặng không phát sinh quan hệ cha mẹ con với đứa trẻ sinh ra từ IVF.
- Áp dụng nguyên tắc vô danh: bảo vệ thông tin người hiến, tránh thương mại hóa, đảm bảo quyền riêng tư.
- Việt Nam cho phép phụ nữ độc thân sử dụng IVF, thể hiện tính nhân đạo và tiến bộ trong pháp luật.

Quan hệ giữa người hiến (tinh trùng/noãn/phôi) và đứa trẻ
- Về sinh học: người hiến góp phần hoặc toàn bộ vật liệu di truyền.
- Về pháp lý: người hiến không có quyền hay nghĩa vụ với đứa trẻ; đứa trẻ là con hợp pháp của người nhận.
- Theo Nghị định 10/2015/NĐ-CP: việc hiến và nhận được thực hiện theo nguyên tắc vô danh.
- Về xã hội – tình cảm:
  + Nếu ẩn danh: không có tiếp xúc, vai trò nuôi dưỡng thuộc về người nhận.
  + Nếu đứa trẻ biết nguồn gốc hoặc có cơ hội gặp người hiến: có thể phát sinh kết nối tình cảm hoặc xung đột cảm xúc.`,
    position: 25,
  },
  {
    id: 3,
    title: "PHÁP LUẬT Ở MỘT SỐ QUỐC GIA VỀ ĐẢM BẢO QUYỀN THỪA KẾ CỦA CÁ NHÂN ĐƯỢC SINH RA TỪ PHƯƠNG PHÁP HỖ TRỢ SINH SẢN",
    description: `Pháp luật ở nhiều quốc gia như Hoa Kỳ, Vương quốc Anh và Úc đã có những quy định đảm bảo quyền thừa kế cho cá nhân sinh ra bằng phương pháp IVF.
    
Hoa Kỳ:
- Các bang như California áp dụng Uniform Parentage Act
- Đảm bảo trẻ IVF thừa kế tài sản nếu cha mẹ dự định được công nhận pháp lý
- Có quy định rõ ràng về quyền thừa kế trong trường hợp sử dụng tinh trùng/noãn hiến tặng

Vương quốc Anh:
- Đạo luật Thụ tinh phôi người 2008
- Cho phép trẻ IVF thừa kế như con đẻ
- Áp dụng cả trong trường hợp sử dụng phôi sau khi cha mẹ qua đời
- Yêu cầu lệnh tòa án trong một số trường hợp đặc biệt

Úc:
- Yêu cầu lệnh chuyển giao quyền làm cha mẹ trong trường hợp mang thai hộ
- Đảm bảo quyền thừa kế cho trẻ sinh ra từ IVF
- Có quy định về quyền truy cập thông tin về người hiến tặng`,
    position: 50,
  },
  {
    id: 4,
    title: "THỰC TRẠNG VÀ BẢO ĐẢM QUYỀN THỪA KẾ CỦA CÁ NHÂN SINH RA BẰNG KỸ THUẬT IVF",
    description: `Thực trạng việc sinh con bằng kỹ thuật hỗ trợ sinh sản IVF
- IVF ngày càng phổ biến tại Việt Nam, giúp nhiều cặp vợ chồng hiếm muộn có con.
- Từ năm 1998 đến nay, có khoảng 147.000 trẻ được sinh ra nhờ IVF.
- Hiện có 54 cơ sở y tế đủ điều kiện thực hiện IVF; mỗi năm có hơn 30.000 ca chuyển phôi, sinh ra hơn 10.000 trẻ (chiếm khoảng 1% trẻ sinh ra hằng năm).
- Tại Hà Nội và TP. HCM, tỷ lệ trẻ sinh từ IVF cao hơn, khoảng 3%/năm.

Đánh giá quy định pháp luật về bảo đảm quyền thừa kế của cá nhân sinh ra từ IVF
- Bất cập về thời gian xác lập quan hệ cha mẹ con (Điều 88 Luật HNGĐ): IVF có thể kéo dài, vượt quá mốc 300 ngày kể từ khi cha mất hoặc ly hôn, gây tranh cãi về tính hợp pháp của quan hệ con cái.
- Phụ nữ độc thân sinh con bằng IVF: trẻ không có quan hệ pháp lý với người hiến tinh trùng, mất quyền thừa kế từ cha sinh học.
- Sai sót kỹ thuật (nhầm tinh trùng/phôi): pháp luật chưa có quy định xử lý cụ thể.
- Mang thai hộ trái phép hoặc ly hôn: con sinh ra có nguy cơ không được công nhận về mặt pháp lý, ảnh hưởng đến quyền thừa kế.
- Mâu thuẫn giữa Luật HNGĐ và Bộ luật Dân sự về quyền thừa kế của trẻ sinh sau khi cha qua đời, đặc biệt vượt mốc 300 ngày.
- Pháp luật chưa làm rõ khái niệm "con ruột", "con đẻ", gây tranh cãi về quyền thừa kế của trẻ sinh từ IVF.

Một vụ việc điển hình chứng minh tính bất cập của các quy định pháp luật hiện nay về xác định quan hệ cha mẹ - con và quyền thừa kế của cá nhân sinh ra bằng kỹ thuật hỗ trợ sinh sản IVF như sau. Ngày 09/12/2013, lần đầu tại Việt Nam, hai bé sinh đôi chào đời nhờ phương pháp thụ tinh trong ống nghiệm sử dụng tinh trùng của người cha đã qua đời ba năm trước. Mẹ là chị Kim Dung, 33 tuổi, ở Hoàng Mai, Hà Nội. Chồng chị mất do tai nạn giao thông khi con gái đầu mới 6 tháng tuổi. Sáu giờ sau khi anh mất, các bác sĩ đã lấy và bảo quản tinh trùng. Năm 2013, sau khi mãn tang, chị Dung quyết định thực hiện thụ tinh. Câu chuyện gây xúc động mạnh trong xã hội, thể hiện tình yêu và khát khao có con với người chồng đã khuất. Tuy nhiên, việc khai sinh cho hai bé gặp vướng mắc pháp lý vì cha đã mất. Ngày 03/01/2014, Cục Hộ tịch, quốc tịch, chứng thực - Bộ Tư pháp ban hành Công văn số 35/HTQTCT-HT, hướng dẫn phường Hoàng Liệt, quận Hoàng Mai vận dụng quy định pháp luật để ghi tên cả cha và mẹ cho hai bé trong giấy khai sinh.

Quyền riêng tư và bảo mật dữ liệu y tế trong kỹ thuật hỗ trợ sinh sản (IVF) là vấn đề pháp lý quan trọng cần được bảo vệ.
	•	Quyền riêng tư, bảo mật dữ liệu y tế trong IVF cần được pháp luật bảo vệ.
	•	Thông tin cá nhân, hồ sơ bệnh án chỉ được tiết lộ khi có sự đồng ý hoặc theo yêu cầu cơ quan có thẩm quyền.
	•	Một số cơ sở y tế vẫn lỏng lẻo trong bảo mật, tiềm ẩn nguy cơ rò rỉ thông tin.
	•	Cần hoàn thiện pháp luật, quy trình bảo mật và nâng cao ý thức của nhân viên y tế.`,
    position: 75,
  },
  {
    id: 5,
    title: "GIẢI PHÁP HOÀN THIỆN PHÁP LUẬT VỀ NGƯỜI THỪA KẾ SINH RA TỪ KỸ THUẬT IVF",
    description: `Để bảo đảm quyền thừa kế cho cá nhân sinh ra từ kỹ thuật hỗ trợ sinh sản IVF, cần thực hiện một số giải pháp pháp lý sau:

Sửa đổi, bổ sung pháp luật hiện hành:
- Sửa đổi BLDS 2015 (Điều 609) và Luật HNGĐ 2014 (Điều 88) để xác định rõ địa vị pháp lý của trẻ sinh từ IVF.
- Khẳng định trẻ sinh ra từ IVF có đầy đủ quyền thừa kế như con đẻ hợp pháp của vợ chồng vô sinh hoặc phụ nữ độc thân.
- Loại trừ quyền thừa kế của người hiến giao tử nhằm ngăn ngừa tranh chấp pháp lý.

Ban hành hướng dẫn pháp lý cụ thể:
- Làm rõ cách xác lập quan hệ cha mẹ con trong các tình huống đặc biệt như người cha mất trước khi thực hiện IVF hoặc phụ nữ độc thân sinh con từ tinh trùng hiến.

Tăng cường giám sát tại cơ sở y tế:
- Áp dụng công nghệ sinh trắc học (vân tay, mống mắt) và mã định danh công dân để kiểm soát thông tin cha mẹ, tránh nhầm lẫn hoặc gian lận.

Bổ sung chế tài nghiêm khắc:
- Xử phạt nghiêm các hành vi như mua bán phôi, tinh trùng, noãn, nhằm bảo vệ quyền lợi trẻ em và tính nhân đạo của IVF.`,
    position: 100,
  },
];

export default function TravelPage() {
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  const [showDialog, setShowDialog] = useState(true);

  const handleNext = () => {
    if (currentCheckpoint < CHECKPOINTS.length - 1) {
      setShowDialog(false);
      setTimeout(() => {
        setCurrentCheckpoint(prev => prev + 1);
        setShowDialog(true);
      }, 500);
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-[#faf3eb] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/travel-bg.svg')] bg-cover opacity-20" />
        
        <div className="container-flex py-12 relative z-10 max-w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
            {/* Left side - Content */}
            <div className="space-y-8">
              <h1 className="handwritten text-5xl font-bold text-[#5f635e]">Hành Trình Tìm Hiểu</h1>
              
              {/* Dialog box */}
              {showDialog && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2
                  }}
                  className="bg-white p-6 rounded-lg shadow-lg max-h-[500px] overflow-y-auto w-full"
                >
                  <motion.h3 
                    className="text-xl font-semibold mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.4
                    }}
                  >
                    {CHECKPOINTS[currentCheckpoint].title}
                  </motion.h3>
                  <motion.div 
                    className="text-[#5f635e] whitespace-pre-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.8,
                      delay: 0.6
                    }}
                  >
                    {CHECKPOINTS[currentCheckpoint].description}
                  </motion.div>
                </motion.div>
              )}

              {/* Go button */}
              {currentCheckpoint === CHECKPOINTS.length - 1 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.8
                  }}
                >
                  <Link
                    href="/questions"
                    className="inline-block px-6 py-3 bg-[#b49656] text-white rounded-full hover:bg-[#866a43] transition-colors"
                  >
                    Kết Thúc Hành Trình! Làm bài Test.
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.8
                  }}
                >
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-[#b49656] text-white rounded-full hover:bg-[#866a43] transition-colors"
                  >
                    Tiếp Tục
                  </button>
                </motion.div>
              )}
            </div>

            {/* Right side - Journey path */}
            <div className="relative h-[600px]">
              {/* Path line */}
              <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-[#b49656] rounded-full" />
              
              {/* Checkpoints */}
              {CHECKPOINTS.map((checkpoint, index) => (
                <div
                  key={checkpoint.id}
                  className="absolute right-1/2 transform translate-x-1/2"
                  style={{ top: `${checkpoint.position}%` }}
                >
                  <div className="w-6 h-6 rounded-full bg-white border-4 border-[#b49656] relative" />
                </div>
              ))}

              {/* Character */}
              <motion.div
                initial={{ top: "0%" }}
                animate={{ top: `${CHECKPOINTS[currentCheckpoint].position}%` }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 1
                }}
                className="absolute right-1/2 transform translate-x-1/2 -translate-y-1/2"
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-[#5f635e] flex items-center justify-center"
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.2
                  }}
                >
                  <span className="text-white text-xl">👤</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 