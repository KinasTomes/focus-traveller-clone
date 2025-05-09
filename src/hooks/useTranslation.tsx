'use client';

import { useLanguage } from '@/contexts/LanguageContext';

// Type for translations
type Translations = {
  [key: string]: {
    vi: string;
    en: string;
  };
};

// Add translations here
const translations: Translations = {
  // Navigation
  about: {
    vi: 'Giới thiệu',
    en: 'About'
  },
  travel: {
    vi: 'Hành trình',
    en: 'Travel'
  },
  test: {
    vi: 'Kiểm tra',
    en: 'Test'
  },
  
  // Hero Section
  heroTitle: {
    vi: 'Quyền thừa kế của cá nhân sinh ra từ kĩ thuật Thụ tinh ống nghiệm IVF ở Việt Nam',
    en: 'Inheritance rights of individuals born through IVF technique in Vietnam'
  },
  heroDescription: {
    vi: 'Tại Việt Nam, pháp luật về thụ tinh trong ống nghiệm (IVF) được quy định chủ yếu trong Hiến pháp 2013, Luật Hôn nhân và Gia đình 2015, Nghị định 10/2015/NĐ-CP (sửa đổi bởi Nghị định 98/2016/NĐ-CP), cùng với các quy định về thừa kế trong Bộ luật Dân sự 2015.',
    en: 'In Vietnam, the law on in vitro fertilization (IVF) is mainly regulated in the 2013 Constitution, the 2015 Marriage and Family Law, Decree 10/2015/ND-CP (amended by Decree 98/2016/ND-CP), along with inheritance regulations in the 2015 Civil Code.'
  },
  
  // Features Container
  feature1Title: {
    vi: 'Quyền làm cha mẹ là quyền tự nhiên',
    en: 'Parenting rights are natural rights'
  },
  feature1Description: {
    vi: 'Trong dòng chảy lịch sử, con người ở mọi thời đại đều mang những nhu cầu cơ bản, từ sinh tồn đến phát triển, hình thành nên các quyền con người mang tính tự nhiên và khách quan. Trong số đó, quyền sinh con và được làm cha mẹ là một trong những quyền quan trọng nhất, gắn liền với giá trị nhân đạo và bản chất của đời sống xã hội.',
    en: 'Throughout history, people of all eras have carried basic needs, from survival to development, forming natural and objective human rights. Among these, the right to have children and become parents is one of the most important rights, linked to humanitarian values and the essence of social life.'
  },
  
  feature2Title: {
    vi: 'Sự gia tăng của IVF và hệ lụy pháp lý',
    en: 'The rise of IVF and legal implications'
  },
  feature2Description: {
    vi: 'Ngày càng nhiều trường hợp sinh con nhờ kỹ thuật hỗ trợ sinh sản, do các yếu tố như sức khỏe, tuổi tác hoặc sinh học. Điều này kéo theo các vấn đề pháp lý mới, đặc biệt liên quan đến quyền thừa kế của trẻ sinh ra bằng phương pháp này.',
    en: 'There are increasingly more cases of children born through assisted reproductive technology, due to factors such as health, age, or biology. This brings new legal issues, especially related to inheritance rights of children born through this method.'
  },
  
  feature3Title: {
    vi: 'Yêu cầu hoàn thiện pháp luật IVF',
    en: 'Requirements for improving IVF legislation'
  },
  feature3Description: {
    vi: 'Điều này đặt ra yêu cầu cần có những nghiên cứu toàn diện và kịp thời nhằm góp phần hoàn thiện hệ thống pháp luật về sinh con bằng kỹ thuật hỗ trợ sinh sản nói chung. Đặc biệt, việc đảm bảo quyền thừa kế cho các cá nhân sinh ra bằng phương pháp thụ tinh trong ống nghiệm (IVF) là một điểm nhấn quan trọng cần được quy định rõ ràng và cụ thể trong pháp luật hiện hành.',
    en: 'This requires comprehensive and timely research to contribute to improving the legal system on childbirth through assisted reproductive technology in general. In particular, ensuring inheritance rights for individuals born through in vitro fertilization (IVF) is an important highlight that needs to be clearly and specifically regulated in current law.'
  },
  
  feature4Title: {
    vi: 'Bài học từ kinh nghiệm quốc tế',
    en: 'Lessons from international experience'
  },
  feature4Description: {
    vi: 'Nhiều quốc gia đã xây dựng khung pháp lý tiến bộ nhằm bảo vệ quyền lợi của trẻ sinh từ IVF. Những mô hình này là nguồn tham khảo giá trị cho Việt Nam trong việc hoàn thiện pháp luật lĩnh vực còn mới và nhạy cảm này.',
    en: 'Many countries have developed progressive legal frameworks to protect the rights of children born through IVF. These models are valuable references for Vietnam in improving legislation in this new and sensitive field.'
  },
  
  // Travel Page
  travelTitle: {
    vi: 'Hành Trình Tìm Hiểu',
    en: 'Learning Journey'
  },
  continueButton: {
    vi: 'Tiếp Tục',
    en: 'Continue'
  },
  finishJourneyButton: {
    vi: 'Kết Thúc Hành Trình! Làm bài Test.',
    en: 'Finish Journey! Take the Test.'
  },
  checkpoint1Title: {
    vi: 'CƠ SỞ LÝ LUẬN VỀ PHƯƠNG PHÁP HỖ TRỢ SINH SẢN (THỤ TINH ỐNG NGHIỆM IVF) VÀ QUYỀN THỪA KẾ CỦA CÁ NHÂN SINH RA TỪ PHƯƠNG PHÁP HỖ TRỢ SINH SẢN IVF',
    en: 'THEORETICAL BASIS OF ASSISTED REPRODUCTIVE TECHNOLOGY (IN VITRO FERTILIZATION IVF) AND INHERITANCE RIGHTS OF INDIVIDUALS BORN THROUGH ASSISTED REPRODUCTIVE TECHNOLOGY IVF'
  },
  checkpoint1Description: {
    vi: `Cơ sở lý luận về quyền thừa kế của cá nhân. Quyền thừa kế của cá nhân, theo Bộ luật Dân sự 2015, là một trong những quyền dân sự cơ bản của cả nhân do luật quy định, theo đó cả nhân được hưởng di sản thừa kế do người chết để lại theo di chúc hoặc/và theo pháp luật, mang các đặc điểm nổi bật:
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
    en: `Theoretical basis of individual inheritance rights. According to the 2015 Civil Code, individual inheritance rights are one of the basic civil rights of individuals prescribed by law, whereby individuals are entitled to inherit property left by the deceased through a will or/and by law, with the following notable characteristics:
  - It is a statutory right, only recognized when there is a state and law, arising when the person leaving the estate passes away (Article 613).
  - Inheritance rights belong to civil legal capacity (Article 17), especially protecting fetuses conceived before the death of the person leaving the estate (Article 660).
  - This right demonstrates equality, regardless of reproduction method (natural or IVF), legalized from the Constitution to legal documents (Article 610).
  - Inheritance rights are property rights attached to personal status, only transferable according to regulations (such as assignment), cannot be bought or sold, requiring clear identification of heirs according to will or marital, blood, and nurturing relationships.
  - Inheritance rights arise from a will (according to the will of the person leaving it) or law (based on family relationships).
  - The right is guaranteed through estate division procedures, allowing agreement or litigation, and is protected when violated.

Theoretical basis for ensuring inheritance rights of individuals born through IVF
- According to Clause 21, Article 3 of the 2014 Marriage and Family Law: childbirth through assisted reproductive technology includes artificial insemination and IVF.
- Purpose: to help infertile people or single women have children.
- Legal basis:
   + Originates from parent-child relationships and human rights protection.
   + Compatible with the development of reproductive technology and parenting needs.
   + Reduces legal disputes about parent-child relationships.
   + IVF implementation principles: humanitarian, confidential, voluntary, anonymous, proper procedure (Decree 10/2015/ND-CP).`
  },
  checkpoint2Title: {
    vi: 'CÁC QUAN HỆ PHÁP LUẬT DÂN SỰ TRONG THỰC HIỆN PHƯƠNG PHÁP IVF',
    en: 'CIVIL LEGAL RELATIONSHIPS IN IVF IMPLEMENTATION'
  },
  checkpoint2Description: {
    vi: `Quan hệ giữa người nhận (noãn/phôi/tinh trùng) và đứa trẻ
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
    en: `Relationship between recipient (egg/embryo/sperm) and child
- According to Clause 3, Article 93 of the 2014 Marriage and Family Law: donors do not establish parent-child relationships with children born through IVF.
- Applying anonymity principle: protecting donor information, avoiding commercialization, ensuring privacy rights.
- Vietnam allows single women to use IVF, demonstrating humanitarian and progressive aspects in law.

Relationship between donor (sperm/egg/embryo) and child
- Biologically: donor contributes part or all genetic material.
- Legally: donor has no rights or obligations to the child; child is legally recognized as the recipient's child.
- According to Decree 10/2015/ND-CP: donation and reception are conducted under anonymity principle.
- Socially and emotionally:
  + If anonymous: no contact, nurturing role belongs to recipient.
  + If child knows origin or has opportunity to meet donor: may develop emotional connection or emotional conflict.`
  },
  checkpoint3Title: {
    vi: 'PHÁP LUẬT Ở MỘT SỐ QUỐC GIA VỀ ĐẢM BẢO QUYỀN THỪA KẾ CỦA CÁ NHÂN ĐƯỢC SINH RA TỪ PHƯƠNG PHÁP HỖ TRỢ SINH SẢN',
    en: 'LEGISLATION IN SOME COUNTRIES ON ENSURING INHERITANCE RIGHTS OF INDIVIDUALS BORN THROUGH ASSISTED REPRODUCTIVE TECHNOLOGY'
  },
  checkpoint3Description: {
    vi: `Pháp luật ở nhiều quốc gia như Hoa Kỳ, Vương quốc Anh và Úc đã có những quy định đảm bảo quyền thừa kế cho cá nhân sinh ra bằng phương pháp IVF.
    
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
    en: `Legislation in many countries such as the United States, United Kingdom, and Australia has regulations ensuring inheritance rights for individuals born through IVF.
    
United States:
- States like California apply the Uniform Parentage Act
- Ensures IVF children inherit property if intended parents are legally recognized
- Has clear regulations on inheritance rights in cases of using donated sperm/eggs

United Kingdom:
- Human Fertilisation and Embryology Act 2008
- Allows IVF children to inherit like biological children
- Applies even in cases of using embryos after parents' death
- Requires court orders in certain special cases

Australia:
- Requires parenting orders in surrogacy cases
- Ensures inheritance rights for children born through IVF
- Has regulations on access to donor information`
  },
  checkpoint4Title: {
    vi: 'THỰC TRẠNG VÀ BẢO ĐẢM QUYỀN THỪA KẾ CỦA CÁ NHÂN SINH RA BẰNG KỸ THUẬT IVF',
    en: 'CURRENT STATUS AND ENSURING INHERITANCE RIGHTS OF INDIVIDUALS BORN THROUGH IVF TECHNOLOGY'
  },
  checkpoint4Description: {
    vi: `Thực trạng việc sinh con bằng kỹ thuật hỗ trợ sinh sản IVF
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
    en: `Current status of childbirth through IVF
- IVF is increasingly popular in Vietnam, helping many infertile couples have children.
- From 1998 to present, approximately 147,000 children have been born through IVF.
- Currently, there are 54 medical facilities qualified to perform IVF; each year has over 30,000 embryo transfers, resulting in more than 10,000 births (about 1% of annual births).
- In Hanoi and Ho Chi Minh City, the rate of IVF births is higher, about 3% per year.

Evaluation of legal regulations on ensuring inheritance rights of individuals born through IVF
- Inadequacies in establishing parent-child relationships (Article 88 of Marriage and Family Law): IVF can be prolonged, exceeding the 300-day mark from father's death or divorce, causing disputes about the legality of parent-child relationships.
- Single women having children through IVF: children have no legal relationship with sperm donors, losing inheritance rights from biological fathers.
- Technical errors (sperm/embryo mix-ups): law lacks specific handling regulations.
- Illegal surrogacy or divorce: children born may not be legally recognized, affecting inheritance rights.
- Conflicts between Marriage and Family Law and Civil Code regarding inheritance rights of children born after father's death, especially exceeding the 300-day mark.
- Law has not clarified concepts of "biological child", "natural child", causing disputes about inheritance rights of IVF children.

A typical case demonstrating the inadequacies of current legal regulations on determining parent-child relationships and inheritance rights of individuals born through IVF is as follows. On December 9, 2013, for the first time in Vietnam, twins were born through in vitro fertilization using sperm from a father who had passed away three years earlier. The mother was Ms. Kim Dung, 33 years old, from Hoang Mai, Hanoi. Her husband died in a traffic accident when their first daughter was 6 months old. Six hours after his death, doctors collected and preserved his sperm. In 2013, after the mourning period, Ms. Dung decided to proceed with fertilization. The story deeply moved society, showing love and desire to have children with the deceased husband. However, birth registration for the twins faced legal obstacles because the father had passed away. On January 3, 2014, the Department of Civil Status, Nationality, and Authentication - Ministry of Justice issued Document No. 35/HTQTCT-HT, guiding Hoang Liet ward, Hoang Mai district to apply legal regulations to record both parents' names in the birth certificates.

Privacy and medical data security in assisted reproductive technology (IVF) is an important legal issue that needs protection.
	•	Privacy and medical data security in IVF needs legal protection.
	•	Personal information and medical records can only be disclosed with consent or at the request of competent authorities.
	•	Some medical facilities are still lax in security, posing risks of information leakage.
	•	Need to improve laws, security procedures, and raise awareness of medical staff.`
  },
  checkpoint5Title: {
    vi: 'GIẢI PHÁP HOÀN THIỆN PHÁP LUẬT VỀ NGƯỜI THỪA KẾ SINH RA TỪ KỸ THUẬT IVF',
    en: 'SOLUTIONS TO IMPROVE LEGISLATION ON HEIRS BORN THROUGH IVF TECHNOLOGY'
  },
  checkpoint5Description: {
    vi: `Để bảo đảm quyền thừa kế cho cá nhân sinh ra từ kỹ thuật hỗ trợ sinh sản IVF, cần thực hiện một số giải pháp pháp lý sau:

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
    en: `To ensure inheritance rights for individuals born through IVF, the following legal solutions need to be implemented:

Amend and supplement current laws:
- Amend the 2015 Civil Code (Article 609) and 2014 Marriage and Family Law (Article 88) to clearly define the legal status of children born through IVF.
- Affirm that children born through IVF have full inheritance rights like legitimate children of infertile couples or single women.
- Exclude inheritance rights of gamete donors to prevent legal disputes.

Issue specific legal guidelines:
- Clarify how to establish parent-child relationships in special situations such as father's death before IVF or single women having children from donated sperm.

Strengthen supervision at medical facilities:
- Apply biometric technology (fingerprints, iris) and citizen identification codes to control parent information, avoid confusion or fraud.

Add strict sanctions:
- Severely penalize acts such as buying and selling embryos, sperm, eggs, to protect children's rights and the humanitarian nature of IVF.`
  },

  // Test Page
  questionCount: {
    vi: 'Câu hỏi',
    en: 'Question'
  },
  score: {
    vi: 'Điểm',
    en: 'Score'
  },
  nextQuestion: {
    vi: 'Câu hỏi tiếp theo',
    en: 'Next Question'
  },
  viewResults: {
    vi: 'Xem kết quả',
    en: 'View Results'
  },
  congratulations: {
    vi: 'Chúc mừng nhà thám hiểm đã vượt qua thử thách!',
    en: 'Congratulations on completing the challenge!'
  },
  yourScore: {
    vi: 'Điểm số của bạn',
    en: 'Your Score'
  },
  excellent: {
    vi: 'Xuất sắc! Bạn đã hiểu rất rõ về quyền thừa kế của trẻ sinh từ IVF.',
    en: 'Excellent! You have a very clear understanding of inheritance rights for children born through IVF.'
  },
  good: {
    vi: 'Tốt! Bạn đã có kiến thức cơ bản về quyền thừa kế của trẻ sinh từ IVF.',
    en: 'Good! You have basic knowledge about inheritance rights for children born through IVF.'
  },
  keepLearning: {
    vi: 'Hãy tiếp tục tìm hiểu thêm về quyền thừa kế của trẻ sinh từ IVF nhé!',
    en: 'Keep learning more about inheritance rights for children born through IVF!'
  },
  viewDetails: {
    vi: 'Bấm vào đây nhé!',
    en: 'Click here!'
  },
  // Test Questions
  question1: {
    vi: "Theo quy định của Bộ luật Dân sự 2015, quyền thừa kế của cá nhân phát sinh khi nào?",
    en: "According to the 2015 Civil Code, when does an individual's inheritance right arise?"
  },
  question1Option1: {
    vi: "Khi người lập di chúc nộp tại cơ quan công chứng",
    en: "When the testator submits the will to the notary office"
  },
  question1Option2: {
    vi: "Khi người để lại di sản chết",
    en: "When the person leaving the estate dies"
  },
  question1Option3: {
    vi: "Khi có quyết định của Tòa án",
    en: "When there is a court decision"
  },
  question1Option4: {
    vi: "Khi di sản được chia xong",
    en: "When the estate is fully distributed"
  },
  question2: {
    vi: "Theo pháp luật Việt Nam, kỹ thuật hỗ trợ sinh sản, bao gồm thụ tinh trong ống nghiệm (IVF), được thực hiện dựa trên nguyên tắc nào sau đây?",
    en: "According to Vietnamese law, assisted reproductive technology, including in vitro fertilization (IVF), is implemented based on which of the following principles?"
  },
  question2Option1: {
    vi: "Bí mật, nhân đạo, vô danh, tự nguyện, đúng quy trình",
    en: "Confidentiality, humanitarian, anonymous, voluntary, proper procedure"
  },
  question2Option2: {
    vi: "Bình đẳng, công khai, bắt buộc, vô danh, có điều kiện",
    en: "Equality, public, mandatory, anonymous, conditional"
  },
  question2Option3: {
    vi: "Xã hội hóa, thương mại hóa, tự nguyện, công khai",
    en: "Socialization, commercialization, voluntary, public"
  },
  question2Option4: {
    vi: "Tùy theo cơ sở y tế quy định",
    en: "According to medical facility regulations"
  },
  question3: {
    vi: "Theo Luật Hôn nhân và Gia đình 2014, người hiến tinh trùng, noãn hoặc phôi khi tham gia kỹ thuật hỗ trợ sinh sản sẽ có quan hệ pháp lý gì với đứa trẻ sinh ra từ IVF?",
    en: "According to the 2014 Marriage and Family Law, what legal relationship will a sperm, egg, or embryo donor have with a child born through IVF?"
  },
  question3Option1: {
    vi: "Là cha/mẹ hợp pháp của đứa trẻ",
    en: "Is the legal parent of the child"
  },
  question3Option2: {
    vi: "Có quyền nhận con nếu có kết nối di truyền",
    en: "Has the right to claim the child if there is a genetic connection"
  },
  question3Option3: {
    vi: "Không phát sinh quan hệ cha mẹ con với đứa trẻ",
    en: "No parent-child relationship with the child"
  },
  question3Option4: {
    vi: "Có nghĩa vụ cấp dưỡng cho đứa trẻ",
    en: "Has the obligation to provide child support"
  },
  question4: {
    vi: "Nguyên tắc vô danh trong kỹ thuật hỗ trợ sinh sản tại Việt Nam nhằm mục đích gì?",
    en: "What is the purpose of the anonymity principle in assisted reproductive technology in Vietnam?"
  },
  question4Option1: {
    vi: "Đảm bảo quyền thừa kế cho người hiến",
    en: "Ensure inheritance rights for donors"
  },
  question4Option2: {
    vi: "Hạn chế số lượng người sử dụng IVF",
    en: "Limit the number of people using IVF"
  },
  question4Option3: {
    vi: "Bảo vệ thông tin người hiến, ngăn chặn thương mại hóa, đảm bảo quyền riêng tư",
    en: "Protect donor information, prevent commercialization, ensure privacy rights"
  },
  question4Option4: {
    vi: "Cho phép người hiến nhận lại con sau khi sinh",
    en: "Allow donors to reclaim children after birth"
  },
  question5: {
    vi: "Tại bang California (Hoa Kỳ), điều kiện nào để một đứa trẻ sinh ra bằng phương pháp IVF được đảm bảo quyền thừa kế?",
    en: "In California (USA), what condition ensures inheritance rights for a child born through IVF?"
  },
  question5Option1: {
    vi: "Có ADN trùng khớp với người để lại di sản",
    en: "Has matching DNA with the person leaving the estate"
  },
  question5Option2: {
    vi: "Có tên trong di chúc",
    en: "Is named in the will"
  },
  question5Option3: {
    vi: "Cha mẹ có dự định sinh con và được công nhận pháp lý theo luật",
    en: "Parents intended to have children and are legally recognized under the law"
  },
  question5Option4: {
    vi: "Cha mẹ phải còn sống khi trẻ được sinh ra",
    en: "Parents must be alive when the child is born"
  },
  question6: {
    vi: "Theo Đạo luật Thụ tinh phôi người 2008 tại Vương quốc Anh, trẻ sinh ra từ phôi được cấy sau khi cha mẹ qua đời chỉ được thừa kế nếu:",
    en: "According to the Human Fertilisation and Embryology Act 2008 in the UK, a child born from an embryo implanted after the parents' death can only inherit if:"
  },
  question6Option1: {
    vi: "Có xác nhận từ bác sĩ điều trị",
    en: "Has confirmation from the treating doctor"
  },
  question6Option2: {
    vi: "Có lệnh của tòa án cho phép thừa kế",
    en: "Has a court order allowing inheritance"
  },
  question6Option3: {
    vi: "Phôi được cấy trong vòng 6 tháng sau khi cha mẹ mất",
    en: "The embryo was implanted within 6 months of the parents' death"
  },
  question6Option4: {
    vi: "Người hiến phôi chấp thuận bằng văn bản",
    en: "The embryo donor gives written consent"
  },
  question7: {
    vi: "Một trong những bất cập pháp lý nổi bật khi xác định quyền thừa kế cho trẻ sinh từ IVF là gì?",
    en: "What is one of the prominent legal inadequacies when determining inheritance rights for children born through IVF?"
  },
  question7Option1: {
    vi: "Không có cơ sở y tế nào thực hiện IVF ở Việt Nam",
    en: "There are no medical facilities performing IVF in Vietnam"
  },
  question7Option2: {
    vi: "Pháp luật quy định IVF chỉ áp dụng cho cặp vợ chồng có giấy kết hôn",
    en: "Law stipulates IVF is only applicable to married couples"
  },
  question7Option3: {
    vi: "Việc xác lập quan hệ cha con có thể vượt mốc 300 ngày kể từ ngày người cha mất",
    en: "Establishing father-child relationship may exceed 300 days from the father's death"
  },
  question7Option4: {
    vi: "Trẻ sinh từ IVF không được khai sinh",
    en: "Children born through IVF cannot be registered"
  },
  question8: {
    vi: 'Trong vụ việc chị Kim Dung sinh con bằng tinh trùng của người chồng đã mất: vấn đề pháp lý lớn nhất khi khai sinh cho hai bé là:',
    en: 'In the case of Ms. Kim Dung having children using her deceased husband\'s sperm: the biggest legal issue when registering the twins\' birth was:'
  },
  question8Option1: {
    vi: "Không có hồ sơ y tế chứng minh IVF",
    en: "No medical records proving IVF"
  },
  question8Option2: {
    vi: "Không có xác nhận từ cơ sở y tế",
    en: "No confirmation from medical facility"
  },
  question8Option3: {
    vi: "Người cha đã mất, gây vướng mắc trong việc ghi tên cha vào giấy khai sinh",
    en: "The father had passed away, causing obstacles in recording the father's name in birth certificates"
  },
  question8Option4: {
    vi: "Chị Dung không đăng ký kết hôn trước đó",
    en: "Ms. Dung was not previously married"
  },
  question9: {
    vi: "Một trong những đề xuất sửa đổi pháp luật để bảo đảm quyền thừa kế của trẻ sinh ra từ IVF là:",
    en: "One of the proposed legal amendments to ensure inheritance rights for children born through IVF is:"
  },
  question9Option1: {
    vi: "Cấm phụ nữ độc thân sử dụng kỹ thuật IVF",
    en: "Prohibit single women from using IVF technology"
  },
  question9Option2: {
    vi: "Bổ sung quy định loại trừ quyền thừa kế của người hiến giao tử",
    en: "Add regulations excluding inheritance rights of gamete donors"
  },
  question9Option3: {
    vi: "Quy định trẻ sinh từ IVF không được thừa kế tài sản",
    en: "Stipulate that children born through IVF cannot inherit property"
  },
  question9Option4: {
    vi: "Giao quyền nuôi dưỡng trẻ IVF cho người hiến noãn",
    en: "Grant custody of IVF children to egg donors"
  },
  question10: {
    vi: "Giải pháp nào sau đây được đề xuất để tránh nhầm lẫn danh tính trong quá trình thực hiện IVF?",
    en: "Which of the following solutions is proposed to avoid identity confusion during IVF implementation?"
  },
  question10Option1: {
    vi: "Chỉ cho phép IVF tại bệnh viện công lập",
    en: "Only allow IVF at public hospitals"
  },
  question10Option2: {
    vi: "Yêu cầu khai báo người hiến trước tòa án",
    en: "Require donor declaration before court"
  },
  question10Option3: {
    vi: "Áp dụng công nghệ sinh trắc học và mã định danh công dân",
    en: "Apply biometric technology and citizen identification codes"
  },
  question10Option4: {
    vi: "Cấm hoàn toàn việc hiến tinh trùng và noãn",
    en: "Completely prohibit sperm and egg donation"
  },
  infoTitle: {
    vi: 'Bạn có biết không?',
    en: 'Did you know?'
  },
  infoContent: {
    vi: "Trong bối cảnh y học hiện đại phát triển mạnh mẽ, kỹ thuật hỗ trợ sinh sản, đặc biệt là thụ tinh trong ống nghiệm (IVF), đã và đang làm thay đổi cách nhìn truyền thống về quan hệ huyết thống và gia đình. Điều này đặt ra những thách thức không nhỏ cho pháp luật dân sự, đặc biệt là trong việc xác lập quyền thừa kế của những cá nhân được sinh ra từ phương pháp này. Pháp luật Việt Nam đã ghi nhận và bảo vệ quyền lợi của những cá nhân này, trong đó có quyền thừa kế. Tuy nhiên, để đảm bảo công bằng và đầy đủ hơn, cần tiếp tục hoàn thiện các quy định pháp luật, đặc biệt trong việc xác định cha, mẹ hợp pháp và thời điểm phát sinh quyền thừa kế. Mỗi người dân cần hiểu đúng để bảo vệ quyền lợi của mình và người thân trong những tình huống mới của cuộc sống hiện đại.",
    en: "In the context of rapidly developing modern medicine, assisted reproductive technology, particularly in vitro fertilization (IVF), has been changing traditional perspectives on blood relations and family. This poses significant challenges to civil law, especially in establishing inheritance rights for individuals born through this method. Vietnamese law has recognized and protected the rights of these individuals, including inheritance rights. However, to ensure greater fairness and completeness, legal regulations need to be further improved, particularly in determining legal parents and the timing of inheritance rights. Each citizen needs to understand correctly to protect their rights and those of their relatives in new situations of modern life."
  },
  // Add more translations as needed
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    // If the key doesn't exist, return the key itself
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    
    return translations[key][language];
  };

  return { t };
}; 