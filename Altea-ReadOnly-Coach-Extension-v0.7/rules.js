// Read-only rules. No auto-fill, no auto-correct, no writing into the page.
// Only read the command you type + read visible output blocks.

window.ASHELP_COMMANDS = [
  // ═══════════════════════════════════════════════════════════════
  // PNR RETRIEVAL & DISPLAY - استعراض الحجز
  // ═══════════════════════════════════════════════════════════════
  { key: "RT", desc: "استعراض الحجز (PNR)", ex: "RT 8GX5S7" },
  { key: "RT TKT", desc: "استعراض الحجز برقم التذكرة", ex: "RT TKT/065-2188718468" },
  { key: "RTN", desc: "استعراض الحجز بالاسم", ex: "RTN/ALZUWAYDI" },
  { key: "RTG", desc: "استعراض حجز مجموعة", ex: "RTG/GROUP NAME" },
  { key: "RTA", desc: "استعراض قطاعات الطيران فقط", ex: "RTA" },
  { key: "RTN", desc: "استعراض الأسماء فقط", ex: "RTN" },
  { key: "RTP", desc: "استعراض معلومات الاتصال", ex: "RTP" },
  { key: "RTT", desc: "استعراض التذاكر", ex: "RTT" },
  { key: "RTF", desc: "استعراض التذاكر/القسائم المرتبطة", ex: "RTF" },
  { key: "RTJ", desc: "استعراض سجل التواصل", ex: "RTJ" },
  { key: "RTR", desc: "استعراض الملاحظات ورمز الأمان", ex: "RTR" },
  { key: "RTSTR", desc: "استعراض المقاعد المحجوزة", ex: "RTSTR" },
  { key: "E*RT", desc: "استعراض الحجز من داخل التذكرة", ex: "E*RT" },
  { key: "AXR RT", desc: "استعراض الحجوزات المفصولة", ex: "AXR RT" },

  // ═══════════════════════════════════════════════════════════════
  // PNR HISTORY - تاريخ الحجز
  // ═══════════════════════════════════════════════════════════════
  { key: "RH", desc: "عرض تاريخ الحجز الكامل", ex: "RH" },
  { key: "RHA", desc: "تاريخ القطاعات الجوية", ex: "RHA" },
  { key: "RHN", desc: "تاريخ الأسماء", ex: "RHN" },
  { key: "RHG", desc: "استعراض DOCS والخدمات", ex: "RHG" },
  { key: "RHF", desc: "سجل عمليات الدفع", ex: "RHF" },
  { key: "RHI", desc: "تحديثات الحجز", ex: "RHI" },
  { key: "RHP", desc: "تاريخ معلومات الاتصال", ex: "RHP" },
  { key: "RHT", desc: "تاريخ الإصدار", ex: "RHT" },

  // ═══════════════════════════════════════════════════════════════
  // TICKET DISPLAY - استعراض التذكرة
  // ═══════════════════════════════════════════════════════════════
  { key: "TWD", desc: "استعراض التذكرة", ex: "TWD/TKT065-2188718468" },
  { key: "TWD/L", desc: "استعراض التذكرة برقم السطر", ex: "TWD/L15" },
  { key: "TWD/O*", desc: "استعراض أصل التذكرة", ex: "TWD/O*" },
  { key: "TWD/XT", desc: "تفاصيل/ضرائب التذكرة", ex: "TWD/XT" },
  { key: "TWH", desc: "تاريخ التذكرة", ex: "TWH/XT" },
  { key: "TDD", desc: "التأكد من ربط التذاكر", ex: "TDD" },

  // ═══════════════════════════════════════════════════════════════
  // EMD - القسائم الإلكترونية
  // ═══════════════════════════════════════════════════════════════
  { key: "EWD", desc: "استعراض القسيمة (EMD)", ex: "EWD/EMD065-1234567890" },
  { key: "EWD/L", desc: "استعراض القسيمة برقم السطر", ex: "EWD/L5" },
  { key: "TQM", desc: "استعراض TSM للقسائم", ex: "TQM" },
  { key: "TMC", desc: "إنشاء TSM-P للإصدار", ex: "TMC/V6X" },
  { key: "TMI", desc: "إدخال مبلغ القسيمة", ex: "TMI/FSAR250.00" },
  { key: "EGSD", desc: "عرض خدمات EMD للناقل", ex: "EGSD/VAF" },
  { key: "TTM", desc: "إصدار EMD", ex: "TTM" },

  // ═══════════════════════════════════════════════════════════════
  // AVAILABILITY & SCHEDULE - التوفر والجدول
  // ═══════════════════════════════════════════════════════════════
  { key: "AN", desc: "بحث التوفر", ex: "AN15JANRUHLHR/ASV" },
  { key: "AD", desc: "عرض التوفر المباشر", ex: "AD15JANRUHLHR" },
  { key: "AA", desc: "توفر مع اتصالات", ex: "AA15JANRUHJFK" },
  { key: "SN", desc: "بيع من شاشة التوفر", ex: "SN2Y1" },
  { key: "SS", desc: "بيع مقاعد", ex: "SS2Y1" },
  { key: "SA", desc: "بيع من شاشة الجدول", ex: "SA2Y1" },
  { key: "DO", desc: "الجدول اليومي", ex: "DORUHLHR/15JAN" },
  { key: "TN", desc: "الجدول الزمني", ex: "TN RUHLHR/15JAN" },
  { key: "SB", desc: "بيع قطاع مفتوح", ex: "SB SV Y 15JAN RUHJED" },

  // ═══════════════════════════════════════════════════════════════
  // NAMES - الأسماء
  // ═══════════════════════════════════════════════════════════════
  { key: "NM", desc: "إضافة اسم مسافر", ex: "NM1ALZUWAYDI/WALEED MR" },
  { key: "NM CHD", desc: "إضافة طفل", ex: "NM1ALZUWAYDI/SARA MSTR(CHD/19DEC18)" },
  { key: "NM INF", desc: "إضافة رضيع", ex: "NM1ALDOSSARI/HAYA MS(INFALDOSSARI/FAHAD/29OCT24)" },
  { key: "NG", desc: "إنشاء حجز مجموعة", ex: "NG25 COMPANY TRIP" },

  // ═══════════════════════════════════════════════════════════════
  // CONTACT - معلومات الاتصال
  // ═══════════════════════════════════════════════════════════════
  { key: "APM", desc: "جوال مشترك", ex: "APM-SV/M+9665XXXXXXX" },
  { key: "APN", desc: "جوال لمسافر محدد", ex: "APN-SV/M+9665XXXXXXX/P1" },
  { key: "APE", desc: "بريد إلكتروني", ex: "APE-EMAIL@DOMAIN.COM" },
  { key: "APH", desc: "هاتف منزل", ex: "APH-RUH 011XXXXXXX" },
  { key: "APB", desc: "هاتف عمل", ex: "APB-RUH 011XXXXXXX" },
  { key: "APF", desc: "فاكس", ex: "APF-RUH 011XXXXXXX" },

  // ═══════════════════════════════════════════════════════════════
  // SSR - طلبات الخدمات الخاصة
  // ═══════════════════════════════════════════════════════════════
  { key: "SR DOCS", desc: "وثائق السفر APIS", ex: "SR DOCS SV HK1/P/SA/A12345678/SA/10JAN90/M/20DEC30/ALZUWAYDI/WALEED/P1" },
  { key: "SR DOCO", desc: "معلومات التأشيرة", ex: "SR DOCO SV HK1/V/SA/12345678/JED/20DEC25/P1" },
  { key: "SR DOCA", desc: "عنوان الوجهة", ex: "SR DOCA SV HK1/D/US/123 STREET/NEW YORK/NY/10001/P1" },
  { key: "SR CTCE", desc: "بريد المسافر للطوارئ", ex: "SR CTCE EMAIL//DOMAIN.COM/P1" },
  { key: "SR CTCM", desc: "جوال المسافر للطوارئ", ex: "SR CTCM 9665XXXXXXXX/P1" },
  { key: "SR FOID", desc: "وثيقة الهوية", ex: "SR FOID SV HK1/PP/A12345678/P1" },
  { key: "SR WCHC", desc: "كرسي متحرك (المقصورة)", ex: "SR WCHC/P1" },
  { key: "SR WCHR", desc: "كرسي متحرك (للدرج)", ex: "SR WCHR/P1" },
  { key: "SR WCHS", desc: "كرسي متحرك (للسلالم)", ex: "SR WCHS/P1" },
  { key: "SR BLND", desc: "مسافر كفيف", ex: "SR BLND/P1" },
  { key: "SR DEAF", desc: "مسافر أصم", ex: "SR DEAF/P1" },
  { key: "SR UMNR", desc: "قاصر بدون مرافق", ex: "SR UMNR/P1" },
  { key: "SR BSCT", desc: "سرير رضيع", ex: "SR BSCT/P1" },
  { key: "SR BIKE", desc: "دراجة", ex: "SR BIKE NN1/S2/P1" },
  { key: "SR SPEQ", desc: "معدات رياضية", ex: "SR SPEQ NN1/S2/P1" },
  { key: "SR PETC", desc: "حيوان أليف (المقصورة)", ex: "SR PETC NN1/S2/P1" },
  { key: "SR AVIH", desc: "حيوان أليف (الشحن)", ex: "SR AVIH NN1/S2/P1" },
  { key: "SR XBAG", desc: "حقيبة إضافية", ex: "SR XBAG NN1/S3/P1" },
  { key: "SR OTHS", desc: "معلومات أخرى للناقل", ex: "SR OTHS SV FREE TEXT" },

  // ═══════════════════════════════════════════════════════════════
  // MEALS - الوجبات
  // ═══════════════════════════════════════════════════════════════
  { key: "SR VGML", desc: "وجبة نباتية", ex: "SR VGML/P1" },
  { key: "SR VLML", desc: "وجبة نباتية (لاكتو)", ex: "SR VLML/P1" },
  { key: "SR AVML", desc: "وجبة هندية نباتية", ex: "SR AVML/P1" },
  { key: "SR HNML", desc: "وجبة هندوسية", ex: "SR HNML/P1" },
  { key: "SR MOML", desc: "وجبة إسلامية/حلال", ex: "SR MOML/P1" },
  { key: "SR KSML", desc: "وجبة كوشر", ex: "SR KSML/P1" },
  { key: "SR DBML", desc: "وجبة لمرضى السكر", ex: "SR DBML/P1" },
  { key: "SR BLML", desc: "وجبة سائلة", ex: "SR BLML/P1" },
  { key: "SR GFML", desc: "وجبة خالية من الجلوتين", ex: "SR GFML/P1" },
  { key: "SR LFML", desc: "وجبة قليلة الدهون", ex: "SR LFML/P1" },
  { key: "SR LSML", desc: "وجبة قليلة الملح", ex: "SR LSML/P1" },
  { key: "SR SFML", desc: "وجبة مأكولات بحرية", ex: "SR SFML/P1" },
  { key: "SR CHML", desc: "وجبة أطفال", ex: "SR CHML/P1" },
  { key: "SR BBML", desc: "وجبة رضيع", ex: "SR BBML/P1" },

  // ═══════════════════════════════════════════════════════════════
  // SEATS - المقاعد
  // ═══════════════════════════════════════════════════════════════
  { key: "SM", desc: "عرض خريطة المقاعد", ex: "SM3" },
  { key: "SM/V", desc: "خريطة المقاعد عمودية", ex: "SM3/V" },
  { key: "ST", desc: "طلب مقعد محدد", ex: "ST/20K/P1" },
  { key: "ST/W", desc: "طلب مقعد نافذة", ex: "ST/W/P1" },
  { key: "ST/A", desc: "طلب مقعد ممر", ex: "ST/A/P1" },
  { key: "ST/B", desc: "طلب مقعد أمامي", ex: "ST/B/P1" },
  { key: "STX", desc: "إلغاء طلب المقعد", ex: "STX/P1" },
  { key: "RTSM", desc: "استعراض المقاعد المحجوزة", ex: "RTSM" },

  // ═══════════════════════════════════════════════════════════════
  // PRICING - التسعير
  // ═══════════════════════════════════════════════════════════════
  { key: "FXX", desc: "تسعير (عرض فقط)", ex: "FXX" },
  { key: "FXP", desc: "تسعير وحفظ TST", ex: "FXP" },
  { key: "FXR", desc: "أقل سعر (عرض)", ex: "FXR" },
  { key: "FXB", desc: "أقل سعر وحفظ", ex: "FXB" },
  { key: "FXA", desc: "Best Pricer تلقائي", ex: "FXA" },
  { key: "FXP/FF-", desc: "تسعير مع باقة محددة", ex: "FXP/FF-NSAVERE" },
  { key: "FXP/R,UP", desc: "تسعير منشور وغير منشور", ex: "FXP/R,UP" },
  { key: "FXP/R,", desc: "تسعير مع Deal Code", ex: "FXP/R,DEALCODE" },
  { key: "FXP/PAX", desc: "تسعير نوع مسافر", ex: "FXP/RADT/P1" },
  { key: "FXV", desc: "تسعير قطاع محدد", ex: "FXV1" },
  { key: "FXL", desc: "تسعير مع قائمة الأسعار", ex: "FXL" },

  // ═══════════════════════════════════════════════════════════════
  // TST - التسعيرة المخزنة
  // ═══════════════════════════════════════════════════════════════
  { key: "TQT", desc: "عرض TST", ex: "TQT" },
  { key: "TQT/T", desc: "عرض TST محدد", ex: "TQT/T1" },
  { key: "TQR", desc: "عرض سلة إعادة الإصدار", ex: "TQR" },
  { key: "TTE", desc: "حذف TST", ex: "TTE/T1" },
  { key: "TTE/ALL", desc: "حذف كل TST", ex: "TTE/ALL" },
  { key: "TMX/ALL", desc: "تنظيف كل التسعيرات", ex: "TMX/ALL" },
  { key: "TTU", desc: "تحديث TST", ex: "TTU/T1" },

  // ═══════════════════════════════════════════════════════════════
  // FARE RULES - شروط السعر
  // ═══════════════════════════════════════════════════════════════
  { key: "FQD", desc: "عرض الأسعار", ex: "FQD RUHLHR/ASV/D15JAN" },
  { key: "FQS", desc: "استعلام RBD والأسعار", ex: "FQS RUHLHR/ASV" },
  { key: "FQN", desc: "شروط السعر", ex: "FQN1" },
  { key: "FQN*PE", desc: "شروط الإلغاء/الغرامات", ex: "FQN1*PE" },
  { key: "FQN*MN", desc: "الحد الأدنى للإقامة", ex: "FQN1*MN" },
  { key: "FQN*MX", desc: "الحد الأقصى للإقامة", ex: "FQN1*MX" },
  { key: "FQN*AP", desc: "شروط الحجز المسبق", ex: "FQN1*AP" },
  { key: "FQN*SU", desc: "الرسوم الإضافية", ex: "FQN1*SU" },
  { key: "FQN*CO", desc: "شروط الدمج", ex: "FQN1*CO" },
  { key: "FQN*L", desc: "قائمة فئات الشروط", ex: "FQN1*L" },
  { key: "FRN", desc: "شروط السعر التفصيلية", ex: "FRN" },

  // ═══════════════════════════════════════════════════════════════
  // PAYMENT - الدفع
  // ═══════════════════════════════════════════════════════════════
  { key: "FP CASH", desc: "الدفع نقداً", ex: "FP CASH" },
  { key: "FP SADAD", desc: "الدفع عبر سداد", ex: "FP SADAD" },
  { key: "FP CC", desc: "الدفع ببطاقة ائتمان", ex: "FP CCVI4111111111111111/0826" },
  { key: "FP INV", desc: "فاتورة", ex: "FP INV" },
  { key: "FP MS", desc: "دفع متعدد", ex: "FP MS CASH+CCVI4111111111111111/0826" },
  { key: "FP O", desc: "تجاوز الدفع", ex: "FP O/CASH" },

  // ═══════════════════════════════════════════════════════════════
  // TICKETING - الإصدار
  // ═══════════════════════════════════════════════════════════════
  { key: "TKOK", desc: "ترتيب الإصدار", ex: "TKOK" },
  { key: "TTP", desc: "إصدار التذكرة", ex: "TTP" },
  { key: "TTP/RT", desc: "إصدار مع استعراض", ex: "TTP/RT" },
  { key: "TTP/P", desc: "إصدار لمسافر محدد", ex: "TTP/P1" },
  { key: "TTP/T", desc: "إصدار TST محدد", ex: "TTP/T1" },
  { key: "TTP/TTM", desc: "إصدار تذكرة + EMD", ex: "TTP/TTM" },
  { key: "TTP/ET", desc: "إصدار مع حفظ", ex: "TTP/ET" },
  { key: "TTP/INF", desc: "إصدار للرضيع", ex: "TTP/INF" },
  { key: "TTP/ETRV", desc: "إعادة تصديق التذكرة", ex: "TTP/ETRV/L10" },
  { key: "VOID", desc: "إلغاء تذكرة (نفس اليوم)", ex: "VOID/L15" },

  // ═══════════════════════════════════════════════════════════════
  // TICKET CHANGER - تغيير التذكرة
  // ═══════════════════════════════════════════════════════════════
  { key: "TRF", desc: "بدء إعادة الإصدار", ex: "TRF" },
  { key: "TRDC", desc: "حساب فرق الإعادة", ex: "TRDC" },
  { key: "FXQ", desc: "تسعير إعادة الإصدار", ex: "FXQ" },
  { key: "FXO", desc: "أقل سعر إعادة إصدار", ex: "FXO" },
  { key: "TRF/TKT", desc: "إعادة إصدار برقم التذكرة", ex: "TRF/TKT065-2188718468" },

  // ═══════════════════════════════════════════════════════════════
  // REFUND - الاسترجاع
  // ═══════════════════════════════════════════════════════════════
  { key: "TRF REFUND", desc: "طلب استرجاع", ex: "TRF REFUND" },
  { key: "TRFP", desc: "معالجة الاسترجاع", ex: "TRFP" },

  // ═══════════════════════════════════════════════════════════════
  // QUEUES - الطوابير
  // ═══════════════════════════════════════════════════════════════
  { key: "QT", desc: "عدد الحجوزات في الطوابير", ex: "QT" },
  { key: "QTQ", desc: "إجمالي كل الطوابير", ex: "QTQ" },
  { key: "QCA", desc: "طوابيري فقط", ex: "QCA" },
  { key: "QS", desc: "بدء طابور", ex: "QS1" },
  { key: "QN", desc: "التالي في الطابور", ex: "QN" },
  { key: "QI", desc: "تجاهل والخروج", ex: "QI" },
  { key: "QD", desc: "تأجيل لآخر الطابور", ex: "QD" },
  { key: "QF", desc: "إنهاء والخروج", ex: "QF" },
  { key: "QE", desc: "وضع في طابور", ex: "QE50C0" },
  { key: "QC", desc: "حذف من الطابور", ex: "QC" },

  // ═══════════════════════════════════════════════════════════════
  // REMARKS - الملاحظات
  // ═══════════════════════════════════════════════════════════════
  { key: "RM", desc: "ملاحظة عامة", ex: "RM VIP PASSENGER" },
  { key: "RM*", desc: "ملاحظة مخفية", ex: "RM* INTERNAL NOTE" },
  { key: "RMA", desc: "ملاحظة مصنفة A", ex: "RMA/ACCOUNTING NOTE" },
  { key: "RIR", desc: "ملاحظة على الفاتورة", ex: "RIR SPECIAL REQUEST" },
  { key: "RII", desc: "ملاحظة فاتورة + جدول", ex: "RII VIP ACCOUNT" },
  { key: "RIA", desc: "مبلغ على الفاتورة", ex: "RIA100.00" },
  { key: "RX", desc: "حذف ملاحظة", ex: "RX5" },

  // ═══════════════════════════════════════════════════════════════
  // OSI - معلومات أخرى
  // ═══════════════════════════════════════════════════════════════
  { key: "OS", desc: "معلومات أخرى للناقل", ex: "OS SV VIP PAX" },
  { key: "OS YY", desc: "معلومات لكل الناقلين", ex: "OS YY CTC 966XXXXXXX" },

  // ═══════════════════════════════════════════════════════════════
  // SAVE & END - الحفظ
  // ═══════════════════════════════════════════════════════════════
  { key: "RF", desc: "Received From", ex: "RF AGENT NAME" },
  { key: "RFF", desc: "RF سريع", ex: "RFF" },
  { key: "ER", desc: "حفظ وإنهاء", ex: "ER" },
  { key: "ET", desc: "حفظ وعرض", ex: "ET" },
  { key: "ETR", desc: "حفظ وإعادة عرض", ex: "ETR" },
  { key: "IG", desc: "تجاهل التعديلات", ex: "IG" },
  { key: "IR", desc: "تجاهل وإعادة عرض", ex: "IR" },

  // ═══════════════════════════════════════════════════════════════
  // CANCEL - الإلغاء
  // ═══════════════════════════════════════════════════════════════
  { key: "XE", desc: "حذف عنصر", ex: "XE5" },
  { key: "XE ALL", desc: "حذف كل القطاعات", ex: "XE ALL" },
  { key: "XI", desc: "إلغاء الحجز", ex: "XI" },
  { key: "XP", desc: "حذف مسافر", ex: "XP1" },

  // ═══════════════════════════════════════════════════════════════
  // CODES & LOOKUPS - الرموز والاستعلامات
  // ═══════════════════════════════════════════════════════════════
  { key: "DD", desc: "توقيت مدينة", ex: "DD RUH" },
  { key: "DC", desc: "استعلام الجنسية", ex: "DC SAUDIARABIA" },
  { key: "DAC", desc: "رمز إلى اسم دولة", ex: "DAC SA" },
  { key: "DAN", desc: "اسم إلى رمز مدينة", ex: "DAN RIYADH" },
  { key: "DNA", desc: "رمز المطار", ex: "DNA RIYADH" },
  { key: "GGAIR", desc: "معلومات الناقل", ex: "GGAIRSV" },
  { key: "GGPCA", desc: "معلومات الناقل المفصلة", ex: "GGPCASV" },
  { key: "HE", desc: "مساعدة للأمر", ex: "HE RT" },

  // ═══════════════════════════════════════════════════════════════
  // ALFURSAN - الفرسان
  // ═══════════════════════════════════════════════════════════════
  { key: "PDAP/PHONE-", desc: "استعلام الفرسان بالجوال", ex: "PDAP/PHONE-9665XXXXXXX" },
  { key: "FFD SV-", desc: "تفاصيل عضوية الفرسان", ex: "FFD SV-XXXXXX" },
  { key: "FFA SV-", desc: "إضافة اسم من الفرسان", ex: "FFA SV-XXXXXX" },
  { key: "FFN SV-", desc: "ربط عضوية الفرسان", ex: "FFN SV-XXXXXX/P1" },

  // ═══════════════════════════════════════════════════════════════
  // MISCELLANEOUS - متفرقات
  // ═══════════════════════════════════════════════════════════════
  { key: "JD", desc: "تاريخ السفر", ex: "JD" },
  { key: "JC", desc: "تاريخ الحجز", ex: "JC" },
  { key: "MD", desc: "الانتقال للأسفل", ex: "MD" },
  { key: "MU", desc: "الانتقال للأعلى", ex: "MU" },
  { key: "MT", desc: "الانتقال للأعلى", ex: "MT" },
  { key: "MB", desc: "الانتقال للأسفل", ex: "MB" }
];

window.ASHELP_ERRORS = [
  // ═══════════════════════════════════════════════════════════════
  // TICKETING ERRORS - أخطاء الإصدار
  // ═══════════════════════════════════════════════════════════════
  { re: /NEED\s+TICKETING\s+ARGUMENTS/i, hint: "ناقص TKOK.", fix: ["TKOK"] },
  { re: /NEED\s+TST/i, hint: "ما فيه TST داخل الحجز.", fix: ["FXP لإنشاء TST", "ثم TQT للتأكد", "ثم TTP/RT"] },
  { re: /NO\s+TST\s+RECORD/i, hint: "لا يوجد تسعيرة TST.", fix: ["FXP لإنشاء تسعيرة", "ثم TQT للتأكد"] },
  { re: /TST\s+ALREADY\s+TICKETED/i, hint: "التسعيرة مُصدرة مسبقاً.", fix: ["TQT لعرض التسعيرات", "أو إنشاء تسعيرة جديدة"] },
  { re: /UNABLE\s+TO\s+TICKET/i, hint: "تعذر الإصدار.", fix: ["راجع التسعيرة والدفع", "ثم TQT"] },
  { re: /TICKET\s+ALREADY\s+VOIDED/i, hint: "التذكرة ملغاة مسبقاً.", fix: ["TWD للتأكد من حالة التذكرة"] },

  // ═══════════════════════════════════════════════════════════════
  // PRICING ERRORS - أخطاء التسعير
  // ═══════════════════════════════════════════════════════════════
  { re: /NO\s+FARES\/RBD\/CARRIER\/PASSENGER\s+TYPE/i, hint: "لا يوجد Fare يطابق RBD/Carrier/Passenger Type.", fix: ["راجع RBD (FQS)", "ثم جرّب FXV + رقم السطر", "ثم FXP"] },
  { re: /NO\s+VALID\s+FARE/i, hint: "لا يوجد سعر صالح.", fix: ["FQD للبحث عن الأسعار", "أو FXR لأقل سعر"] },
  { re: /FARE\s+NOT\s+VALID/i, hint: "السعر غير صالح.", fix: ["تأكد من التاريخ والـ RBD", "ثم FXP"] },
  { re: /NO\s+COMBINABLE\s+FARES/i, hint: "لا يمكن دمج الأسعار.", fix: ["جرّب FXP لكل قطاع على حدة"] },
  { re: /PRICING\s+OPTION\s+NOT\s+AVAILABLE/i, hint: "خيار التسعير غير متاح.", fix: ["استخدم FXX بدون خيارات"] },

  // ═══════════════════════════════════════════════════════════════
  // PNR ERRORS - أخطاء الحجز
  // ═══════════════════════════════════════════════════════════════
  { re: /FINISH\s+OR\s+IGNORE/i, hint: "عملية معلّقة: أكمل أو تجاهل.", fix: ["ER لإكمال", "IG للتجاهل"] },
  { re: /NO\s+PNR/i, hint: "لا يوجد حجز مفتوح.", fix: ["RT + رقم الحجز"] },
  { re: /INVALID\s+RECORD\s+LOCATOR/i, hint: "رقم الحجز غير صحيح.", fix: ["تأكد من رقم الحجز"] },
  { re: /PNR\s+NOT\s+FOUND/i, hint: "الحجز غير موجود.", fix: ["تأكد من رقم الحجز"] },
  { re: /RESTRICTED\s+PNR/i, hint: "الحجز مقيّد.", fix: ["تواصل مع المشرف"] },
  { re: /SIMULTANEOUS\s+CHANGES/i, hint: "تعديلات متزامنة على الحجز.", fix: ["RT لإعادة فتح الحجز", "ثم أعد المحاولة"] },
  { re: /UNABLE\s+-\s+NEED\s+RECEIVED\s+FROM/i, hint: "ناقص حقل RF.", fix: ["RFF + اسمك أو صفتك"] },
  { re: /PNR\s+HAS\s+BEEN\s+CANCELLED/i, hint: "الحجز ملغي.", fix: ["تحقق من حالة الحجز"] },

  // ═══════════════════════════════════════════════════════════════
  // SEGMENT ERRORS - أخطاء القطاعات
  // ═══════════════════════════════════════════════════════════════
  { re: /SERVICES\s+EXCEED\s+NAMES/i, hint: "عدد المقاعد أكبر من الأسماء.", fix: ["أضف أسماء أو قلل المقاعد"] },
  { re: /PAST\s+DATE\s+SEGMENT/i, hint: "تاريخ القطاع في الماضي.", fix: ["تأكد من التاريخ الصحيح"] },
  { re: /FLIGHT\s+NOT\s+AVAILABLE/i, hint: "الرحلة غير متوفرة.", fix: ["AN للبحث عن رحلات بديلة"] },
  { re: /CLASS\s+NOT\s+AVAILABLE/i, hint: "الدرجة غير متوفرة.", fix: ["AN للبحث عن درجات أخرى"] },
  { re: /WAITLIST\s+CLOSED/i, hint: "قائمة الانتظار مغلقة.", fix: ["ابحث عن تاريخ/درجة بديلة"] },
  { re: /SEGMENT\s+NOT\s+FOUND/i, hint: "القطاع غير موجود.", fix: ["RT لعرض القطاعات"] },
  { re: /NO\s+ITINERARY/i, hint: "لا يوجد جدول رحلات.", fix: ["أضف قطاعات للحجز"] },

  // ═══════════════════════════════════════════════════════════════
  // NAME ERRORS - أخطاء الأسماء
  // ═══════════════════════════════════════════════════════════════
  { re: /NAME\s+CHANGE\s+NOT\s+ALLOWED/i, hint: "تغيير الاسم غير مسموح.", fix: ["تواصل مع الناقل"] },
  { re: /INVALID\s+NAME\s+FORMAT/i, hint: "صيغة الاسم غير صحيحة.", fix: ["NM1FAMILY/FIRST MR أو MS"] },
  { re: /NO\s+NAMES/i, hint: "لا توجد أسماء في الحجز.", fix: ["NM1FAMILY/FIRST MR لإضافة اسم"] },
  { re: /DUPLICATE\s+NAME/i, hint: "الاسم مكرر.", fix: ["تأكد من عدم تكرار الأسماء"] },

  // ═══════════════════════════════════════════════════════════════
  // FORMAT ERRORS - أخطاء الصيغة
  // ═══════════════════════════════════════════════════════════════
  { re: /CHECK\s+FORMAT/i, hint: "صيغة الأمر خاطئة.", fix: ["راجع صيغة الأمر"] },
  { re: /INVALID\s+ACTION\s+CODE/i, hint: "رمز الإجراء غير صحيح.", fix: ["تأكد من صيغة الأمر"] },
  { re: /INVALID\s+DATE/i, hint: "التاريخ غير صحيح.", fix: ["استخدم صيغة DDMMM مثل 15JAN"] },
  { re: /INVALID\s+NUMBER/i, hint: "الرقم غير صحيح.", fix: ["تأكد من الرقم المُدخل"] },
  { re: /ENTRY\s+NOT\s+RECOGNIZED/i, hint: "الأمر غير معروف.", fix: ["HE للمساعدة"] },

  // ═══════════════════════════════════════════════════════════════
  // PAYMENT ERRORS - أخطاء الدفع
  // ═══════════════════════════════════════════════════════════════
  { re: /INVALID\s+FORM\s+OF\s+PAYMENT/i, hint: "طريقة الدفع غير صحيحة.", fix: ["FP CASH أو FP CC..."] },
  { re: /CREDIT\s+CARD\s+REJECTED/i, hint: "البطاقة مرفوضة.", fix: ["تأكد من بيانات البطاقة"] },
  { re: /CARD\s+EXPIRED/i, hint: "البطاقة منتهية.", fix: ["استخدم بطاقة سارية"] },

  // ═══════════════════════════════════════════════════════════════
  // SSR ERRORS - أخطاء الخدمات
  // ═══════════════════════════════════════════════════════════════
  { re: /SSR\s+NOT\s+ALLOWED/i, hint: "الخدمة غير مسموحة.", fix: ["تأكد من نوع الخدمة والناقل"] },
  { re: /INVALID\s+SSR\s+CODE/i, hint: "رمز الخدمة غير صحيح.", fix: ["راجع رموز SSR الصحيحة"] },
  { re: /DOCS\s+REQUIRED/i, hint: "مطلوب إضافة DOCS.", fix: ["SR DOCS لإضافة بيانات الجواز"] },

  // ═══════════════════════════════════════════════════════════════
  // QUEUE ERRORS - أخطاء الطوابير
  // ═══════════════════════════════════════════════════════════════
  { re: /QUEUE\s+EMPTY/i, hint: "الطابور فارغ.", fix: ["QT لعرض الطوابير"] },
  { re: /INVALID\s+QUEUE/i, hint: "رقم الطابور غير صحيح.", fix: ["QT لعرض الطوابير المتاحة"] },

  // ═══════════════════════════════════════════════════════════════
  // TICKET REISSUE ERRORS - أخطاء إعادة الإصدار
  // ═══════════════════════════════════════════════════════════════
  { re: /TICKET\s+COUPON\s+USED/i, hint: "كوبون التذكرة مستخدم.", fix: ["TWD للتحقق من حالة الكوبونات"] },
  { re: /TICKET\s+NOT\s+FOUND/i, hint: "التذكرة غير موجودة.", fix: ["تأكد من رقم التذكرة"] },
  { re: /REISSUE\s+NOT\s+ALLOWED/i, hint: "إعادة الإصدار غير مسموحة.", fix: ["راجع شروط التذكرة"] },
  { re: /NO\s+RESIDUAL\s+VALUE/i, hint: "لا قيمة متبقية.", fix: ["التذكرة مستخدمة بالكامل"] },

  // ═══════════════════════════════════════════════════════════════
  // GENERAL ERRORS - أخطاء عامة
  // ═══════════════════════════════════════════════════════════════
  { re: /SYSTEM\s+ERROR/i, hint: "خطأ في النظام.", fix: ["أعد المحاولة لاحقاً"] },
  { re: /TIME\s+OUT/i, hint: "انتهت المهلة.", fix: ["أعد الأمر مرة أخرى"] },
  { re: /NOT\s+AUTHORIZED/i, hint: "غير مصرح لك.", fix: ["تواصل مع المشرف"] },
  { re: /ACCESS\s+DENIED/i, hint: "الوصول ممنوع.", fix: ["تواصل مع المشرف"] }
];

// Flow state (driven by inference + typed commands)
window.ASHELP_FLOW = {
  stateKeys: ["hasPnr","hasSell","hasNames","hasContact","hasTkOk","hasDocs","hasPricing","hasTst","hasPayment","hasSaved"],

  apply(cmd, state) {
    if (/^RT\b/.test(cmd)) state.hasPnr = true;
    if (/^(SS|SN)\b/.test(cmd)) state.hasSell = true;
    if (/^NM\b/.test(cmd)) state.hasNames = true;
    if (/^AP(M|N|E)\b/.test(cmd)) state.hasContact = true;
    if (/^TKOK\b/.test(cmd)) state.hasTkOk = true;
    if (/^(SR\s*DOCS|SSR\s*DOCS|SRDOCS)\b/i.test(cmd)) state.hasDocs = true;
    if (/^(FXP|FXX)\b/.test(cmd)) state.hasPricing = true;
    if (/^TQT\b/.test(cmd)) state.hasTst = true;
    if (/^FP\b/.test(cmd)) state.hasPayment = true;
    if (/^(RFF|ER)\b/.test(cmd)) state.hasSaved = true;
  },

  next(state) {
    if (!state.hasPnr) return { text: "الخطوة الجاية: RT (افتح الحجز) أو AN (بحث)", want: ["RT", "AN"] };
    if (!state.hasSell) return { text: "الخطوة الجاية: تأكد من القطاعات (SS/RT)", want: ["RT", "SS"] };
    if (!state.hasNames) return { text: "الخطوة الجاية: أسماء (NM...)", want: ["NM"] };
    if (!state.hasContact) return { text: "الخطوة الجاية: تواصل (APM/APN/APE...)", want: ["APM", "APN", "APE"] };
    if (!state.hasTkOk) return { text: "الخطوة الجاية: TKOK", want: ["TKOK"] };
    if (!state.hasDocs) return { text: "الخطوة الجاية: SSR DOCS (أو RHG للمراجعة)", want: ["SSR DOCS", "RHG"] };
    if (!state.hasPricing) return { text: "الخطوة الجاية: تسعير (FXP أو FXX)", want: ["FXP", "FXX"] };
    if (!state.hasTst) return { text: "الخطوة الجاية: TQT (تأكد من TST)", want: ["TQT"] };
    if (!state.hasPayment) return { text: "الخطوة الجاية: FP ...", want: ["FP"] };
    if (!state.hasSaved) return { text: "الخطوة الجاية: حفظ (RFF ثم ER)", want: ["RFF", "ER"] };
    return { text: "إذا مكتمل: TTP/RT", want: ["TTP/RT"] };
  }
};

// NM Templates (display only)
window.ASHELP_NM_TEMPLATES = [
  { label: "بالغ (ذكر)",     ex: "NM1ALZUWAYDI/WALEED MR" },
  { label: "بالغة (أنثى)",   ex: "NM1ALZUWAYDI/HAYA MS" },
  { label: "بالغة متزوجة",   ex: "NM1ALZUWAYDI/FATIMA MRS" },
  { label: "طفل ذكر",        ex: "NM1ALZUWAYDI/MOHAMMED MSTR(CHD/19DEC18)" },
  { label: "طفلة أنثى",      ex: "NM1ALZUWAYDI/SARA MISS(CHD/19DEC18)" },
  { label: "رضيع ذكر مع بالغ",  ex: "NM1ALDOSSARI/HAYA MS(INFALDOSSARI/FAHAD/29OCT24)" },
  { label: "رضيعة أنثى مع بالغة", ex: "NM1ALDOSSARI/NOURA MS(INFALDOSSARI/LAMA/15MAR25)" },
  { label: "مسافرين متعددين", ex: "NM2ALZUWAYDI/WALEED MR/ALZUWAYDI/HAYA MS" }
];

window.ASHELP_NM_NOTE = "تنبيه: صيغة الاسم: NM + العدد + العائلة / الاسم الأول + اللقب (MR/MS/MRS/MSTR/MISS). للأطفال أضف (CHD/تاريخ الميلاد). للرضع أضف (INF + اسم الرضيع/تاريخ الميلاد).";

// DOCS Template
window.ASHELP_DOCS_TEMPLATE = {
  format: "SR DOCS SV HK1/P/جنسية/رقم الجواز/جنسية الإصدار/تاريخ الميلاد/الجنس/تاريخ الانتهاء/الاسم العائلي/الاسم الأول/رقم المسافر",
  example: "SR DOCS SV HK1/P/SA/A12345678/SA/15JAN90/M/20DEC30/ALZUWAYDI/WALEED/P1",
  fields: [
    { name: "P", desc: "نوع الوثيقة (P=جواز)" },
    { name: "SA", desc: "رمز الجنسية (مثال: SA=سعودي)" },
    { name: "A12345678", desc: "رقم الجواز" },
    { name: "15JAN90", desc: "تاريخ الميلاد (DDMMMYY)" },
    { name: "M/F", desc: "الجنس (M=ذكر, F=أنثى)" },
    { name: "20DEC30", desc: "تاريخ انتهاء الجواز" },
    { name: "P1", desc: "رقم المسافر في الحجز" }
  ]
};

// Status Codes Reference
window.ASHELP_STATUS_CODES = {
  confirmed: [
    { code: "HK", desc: "مؤكد (Holds Confirmed)" },
    { code: "KK", desc: "مؤكد من الناقل" },
    { code: "RR", desc: "إعادة تأكيد" },
    { code: "TK", desc: "مؤكد للإصدار" }
  ],
  pending: [
    { code: "NN", desc: "طلب Need (بانتظار التأكيد)" },
    { code: "HL", desc: "قائمة انتظار مؤكدة" },
    { code: "HN", desc: "قائمة انتظار بانتظار" },
    { code: "SS", desc: "تم البيع" },
    { code: "PN", desc: "بانتظار الأسماء" }
  ],
  problem: [
    { code: "UC", desc: "غير قادر على التأكيد" },
    { code: "US", desc: "غير قادر على البيع" },
    { code: "UN", desc: "غير مؤكد" },
    { code: "NO", desc: "لا توجد مقاعد" },
    { code: "HX", desc: "ملغي من الناقل" },
    { code: "SC", desc: "جدول تغيّر" }
  ],
  cancelled: [
    { code: "XX", desc: "ملغي" },
    { code: "XK", desc: "ملغي من الناقل" }
  ]
};
