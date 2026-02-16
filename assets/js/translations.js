(() => {
// Translation system for Ibn Al-Jazari Center
const translations = {
    ar: {
        // Navigation
        brand_name: "مركز ابن الجزري",
        nav_home: "الرئيسية",
        nav_about: "عن المركز",
        nav_teachers: "المعلمون",
        nav_programs: "الباقات والبرامج",
        nav_courses: "الدورات",
        nav_memorization: "الحفظ والمتابعة",
        nav_testimonials: "آراء الطلاب",
        nav_faq: "الأسئلة الشائعة",
        nav_signup: "سجّل الآن",
        
        // Hero Section
        hero_title: "مركز ابن الجزري لتحفيظ القرآن الكريم",
        hero_lead: "حلقاتٌ قرآنية متميزة، إشراف علمي، متابعة مستمرة، ومناهج تربوية تعتني بحفظ كتاب الله فهمًا وتدبرًا.",
        hero_cta_programs: "استعرض الباقات",
        hero_cta_contact: "احجز مقعدًا الآن",
        hero_form_title: "سجّل اهتمامك",
        hero_form_subtitle: "اكتب بياناتك وسيتواصل معك فريق القبول لترشيح الحلقة الأنسب لك.",
        hero_form_name: "الاسم الكامل",
        hero_form_phone: "رقم الجوال (واتساب)",
        hero_form_age: "العمر التقريبي",
        hero_form_age_placeholder: "اختر الفئة العمرية",
        hero_form_level: "مستوى الحفظ الحالي",
        hero_form_level_placeholder: "اختر المستوى",
        hero_form_level_opt1: "مبتدئ (لا يوجد حفظ)",
        hero_form_level_opt2: "حفظ أقل من 5 أجزاء",
        hero_form_level_opt3: "حفظ من 5 إلى 15 جزءًا",
        hero_form_level_opt4: "حفظ أكثر من 15 جزءًا",
        hero_form_submit: "إرسال الطلب",
        
        // About Section
        about_title: "عن مركز ابن الجزري",
        about_p1: "مركز ابن الجزري هو مركز متخصص في تعليم القرآن الكريم وعلومه، يهدف إلى إعداد جيلٍ قرآني متقنٍ للحفظ والتلاوة، ملتزمٍ بهدي كتاب الله وسنّة نبيه ﷺ، عبر حلقاتٍ حضورية وعن بُعد بإشراف معلمين ومعلمات مجازين بالسند المتصل.",
        about_p2: "نعتمد مناهج مدروسة تراعي الفروق الفردية بين الطلاب، مع متابعة رقمية دقيقة لمستوى الحفظ والمراجعة، وتواصل مستمر مع ولي الأمر، ليبقى الطالب مرتبطًا بالقرآن قلبًا وقالبًا.",
        about_list_1: "حلقات تحفيظ ومراجعة لجميع الأعمار.",
        about_list_2: "برامج خاصة للإجازات بالسند في القراءات.",
        about_list_3: "برامج تأسيس للقراءة (نور البيان/القاعدة النورانية).",
        about_list_4: "برامج تربوية وإيمانية مرافقة للحفظ.",
        about_features_title: "مميزات المركز",
        about_feature_1_title: "إجازات معتمدة",
        about_feature_1_desc: "سلاسل سند متصلة إلى النبي ﷺ.",
        about_feature_2_title: "تعليم عن بُعد",
        about_feature_2_desc: "حلقات أونلاين عبر منصات موثوقة.",
        about_feature_3_title: "متابعة الأسرة",
        about_feature_3_desc: "تقارير دورية لولي الأمر.",
        about_feature_4_title: "بيئة تربوية",
        about_feature_4_desc: "عناية بالأخلاق والسلوك والقدوة.",
        
        // Teachers Section
        teachers_title: "طاقم المعلمين والمعلمات",
        teachers_lead: "نخبة من أهل القرآن المجازين بالسند المتصل، يجمعون بين الإتقان العلمي والخبرة التربوية وحسن التعامل مع مختلف الأعمار.",
        teacher_1_name: "الشيخ أحمد الأنصاري",
        teacher_1_cert: "إجازة برواية حفص عن عاصم",
        teacher_1_desc: "متخصص في برامج الحفظ المكثف للشباب، خبرة أكثر من 10 سنوات.",
        teacher_1_badge: "حلقات حضورية",
        teacher_2_name: "الشيخة مريم الزهراء",
        teacher_2_cert: "إجازة في عدة قراءات",
        teacher_2_desc: "متخصصة في تحفيظ الفتيات والنساء وإعداد الحافظات للإجازة.",
        teacher_2_badge: "حلقات أونلاين",
        teacher_3_name: "الشيخ خالد العُمري",
        teacher_3_cert: "إجازة بالسند المتصل",
        teacher_3_desc: "مسؤول برامج المراجعة وضبط الحفظ للطلاب المتقدمين.",
        teacher_3_badge: "برامج متقدمة",
        teacher_4_name: "الأستاذة سارة الرفاعي",
        teacher_4_cert: "تربوية ومتخصصة في التأسيس",
        teacher_4_desc: "متخصصة في برامج الأطفال وتعليم نور البيان والقاعدة النورانية.",
        teacher_4_badge: "تأسيس الأطفال",
        
        // Programs Section
        programs_title: "الباقات والبرامج",
        programs_lead: "اختر الباقة الأنسب لمستوى الحفظ ووقت الفراغ لديك، فجميع برامجنا تشمل متابعة دقيقة وتقارير دورية تعكس تقدّمك.",
        program_1_title: "باقة المبتدئين",
        program_1_desc: "تأسيس القراءة وحفظ قصار السور",
        program_1_badge: "الأكثر اختيارًا",
        program_1_item1: "٣ حصص أسبوعيًا (حضور/أونلاين).",
        program_1_item2: "برنامج تأسيسي في مخارج الحروف.",
        program_1_item3: "حفظ جزء عمّ مع مراجعة مستمرة.",
        program_1_item4: "تقارير شهرية لولي الأمر.",
        program_1_cta: "اختر هذه الباقة",
        program_2_title: "باقة الحفظ المنتظم",
        program_2_desc: "لمن يرغب في حفظ مستمر ومتدرج",
        program_2_item1: "٤ حصص أسبوعيًا.",
        program_2_item2: "خطة حفظ مخصصة بحسب مستواك.",
        program_2_item3: "تركيز على ضبط التلاوة وأحكام التجويد.",
        program_2_item4: "لقاءات تربوية وإيمانية دورية.",
        program_2_cta: "اختر هذه الباقة",
        program_3_title: "باقة الحفظ المكثف",
        program_3_desc: "لمن لديهم هدف ختم القرآن أو الإجازة",
        program_3_item1: "٦ حصص أسبوعيًا.",
        program_3_item2: "برنامج حفظ ومراجعة مكثف.",
        program_3_item3: "إعداد للإجازة بالسند لمن تأهّل.",
        program_3_item4: "مقابلات تقييمية دورية مع المشرف العلمي.",
        program_3_cta: "اختر هذه الباقة",
        
        // Courses Section
        courses_title: "الدورات القرآنية",
        courses_lead: "دورات متخصصة حضورية (أوفلاين) وعن بُعد (أونلاين) تناسب الطلاب والطالبات في مختلف المستويات.",
        courses_offline_badge: "حضوري - في مقر المركز",
        courses_offline_title: "دورات حضورية (أوفلاين)",
        courses_offline_desc: "لأبناء وبنات الحي، في قاعات مجهّزة داخل المركز، بإشراف مباشر من المعلمين.",
        courses_offline_item1: "دورات تلاوة وتحفيظ لجميع الأعمار.",
        courses_offline_item2: "دورة تجويد تأسيسية ومتقدمة.",
        courses_offline_item3: "أوقات صباحية ومسائية مرنة.",
        courses_offline_cta: "احجز في دورة حضورية",
        courses_online_badge: "أونلاين - عبر الإنترنت",
        courses_online_title: "دورات أونلاين (عن بُعد)",
        courses_online_desc: "دروس مباشرة عبر منصات آمنة، مع تسجيل الحصص وإتاحة متابعتها لولي الأمر.",
        courses_online_item1: "حلقات تحفيظ فردية وجماعية.",
        courses_online_item2: "دورات تجويد مكثفة وشهادات حضور.",
        courses_online_item3: "إمكانية الانضمام من أي دولة.",
        courses_online_cta: "احجز في دورة أونلاين",
        
        // Memorization Section
        memorization_title: "نظام الحفظ والمتابعة",
        memorization_p1: "نؤمن أن حفظ القرآن رحلة حياة، لذلك وضعنا نظامًا دقيقًا يضمن ثبات الحفظ وجودة التلاوة، مع مراعاة وقت الطالب وظروفه.",
        memorization_step1: "تقييم أولي لمستوى الطالب في الحفظ والتلاوة.",
        memorization_step2: "وضع خطة حفظ ومراجعة تناسب عمره ووقته.",
        memorization_step3: "متابعة يومية للحفظ الجديد والمراجعة.",
        memorization_step4: "اختبارات شهرية وفصلية لقياس التقدّم.",
        memorization_step5: "تقارير دورية للطالب وولي الأمر.",
        memorization_p2: "كما نتيح للطلاب منصة إلكترونية لعرض تقدّمهم في الحفظ والمراجعة، مع تحفيز عبر الأوسمة والشهادات.",
        memorization_table_title: "مثال على خطة أسبوعية",
        memorization_table_day: "اليوم",
        memorization_table_new: "الحفظ الجديد",
        memorization_table_review: "المراجعة",
        memorization_table_sunday_new: "١ صفحة من سورة البقرة",
        memorization_table_sunday_review: "آخر ٣ صفحات تم حفظها",
        memorization_table_monday_new: "١ صفحة من سورة البقرة",
        memorization_table_monday_review: "٥ صفحات سابقة",
        memorization_table_tuesday_new: "١ صفحة من سورة البقرة",
        memorization_table_tuesday_review: "ربع حزب كامل",
        memorization_table_wednesday_new: "نصف صفحة مراجعة مركّزة",
        memorization_table_wednesday_review: "حفظ الأسبوع كاملاً",
        memorization_table_thursday_new: "تثبيت الحفظ",
        memorization_table_thursday_review: "مراجعة عامة لما سبق",
        memorization_table_note: "يتم تعديل الخطة بحسب مستوى الطالب وقدرته، مع إمكانية الجمع بين الحفظ والمراجعة فقط لمن أنهى حفظ القرآن.",
        
        // Testimonials Section
        testimonials_title: "ماذا يقول طلابنا وأولياء الأمور؟",
        testimonials_lead: "بعض كلمات الشكر التي نعتز بها من طلابنا الكرام ومن أولياء الأمور.",
        testimonial_1_text: "ابني كان يجد صعوبة في النطق الصحيح للحروف، خلال أشهر قليلة تحسّن مستواه بشكل ملحوظ، وأصبح يحب حضور الحلقة.",
        testimonial_1_author: "أم محمد",
        testimonial_1_role: "ولي أمر طالب في حلقة التأسيس",
        testimonial_2_text: "أنا الآن في مراجعة الجزء الأخير من الحفظ، والمتابعة دقيقة، والمعلم يعتني بتجويدي وتصحيح أخطائي.",
        testimonial_2_author: "عبدالرحمن",
        testimonial_2_role: "طالب في باقة الحفظ المكثف",
        testimonial_3_text: "أشكر القائمين على المركز على حسن التنظيم والتواصل، وتوفير حلقات تناسب أوقاتنا وظروف الأبناء.",
        testimonial_3_author: "أبو يوسف",
        testimonial_3_role: "ولي أمر ثلاثة طلاب",
        
        // FAQ Section
        faq_title: "الأسئلة الشائعة",
        faq_lead: "إن لم تجد إجابة سؤالك هنا، تواصل معنا وسنسعد بخدمتك.",
        faq_q1: "هل الحلقات حضورية أم عن بُعد؟",
        faq_a1: "تتوفر لدينا حلقات حضورية في مقر المركز، وحلقات أونلاين عبر منصات معتمدة، ويمكنك اختيار ما يناسبك عند التسجيل.",
        faq_q2: "ما الأعمار التي يُقبل تسجيلها؟",
        faq_a2: "نقبل الطلاب من عمر ٦ سنوات فما فوق، مع وجود برامج خاصة للأطفال، وبرامج للكبار والنساء.",
        faq_q3: "هل توجد خصومات للأشقاء؟",
        faq_a3: "نعم، تتوفر خصومات خاصة للأشقاء وللمجموعات، يمكنك الاستفسار عنها عند التواصل مع إدارة المركز.",
        faq_q4: "كيف يتم تسديد الرسوم؟",
        faq_a4: "يتم التسديد شهريًا عبر تحويل بنكي أو دفع إلكتروني، ويتم إرسال الفاتورة ورقم الحساب بعد تأكيد التسجيل.",
        
        // Contact Section
        contact_title: "تواصل معنا وسجّل الآن",
        contact_lead: "يسعدنا خدمتك عبر النموذج أو الواتساب، وسنتواصل معك لتحديد البرنامج والحلقة الأنسب لك أو لابنك.",
        contact_phone_label: "الجوال (واتساب):",
        contact_email_label: "البريد الإلكتروني:",
        contact_location_label: "الموقع:",
        contact_location: "( محافظة المنيا - مركز مطاي - مطاي البلد - شارع المحدة - مسجد الامام علي بن ابي طالب)",
        contact_whatsapp_label: "تواصل عبر واتساب",
        contact_social: "يمكنك أيضًا متابعة أخبار المركز عبر منصات التواصل الاجتماعي (أضف روابط حساباتكم هنا).",
        contact_form_title: "نموذج التسجيل السريع",
        contact_form_name: "الاسم الكامل",
        contact_form_phone: "رقم الجوال",
        contact_form_email: "البريد الإلكتروني (اختياري)",
        contact_form_program: "اختيار البرنامج",
        contact_form_program_placeholder: "اختر البرنامج",
        contact_form_program_opt1: "باقة المبتدئين",
        contact_form_program_opt2: "باقة الحفظ المنتظم",
        contact_form_program_opt3: "باقة الحفظ المكثف",
        contact_form_program_opt4: "برنامج الإجازة بالسند",
        contact_form_message: "رسالتك أو ملاحظاتك",
        contact_form_submit: "إرسال الطلب",
        
        // Footer
        footer_copyright: "مركز ابن الجزري لتحفيظ القرآن الكريم",
        footer_design: "تصميم وتنفيذ: يمكنك وضع اسمك هنا",
        
        // Currency
        currency: "ر.س / شهر",
        
        // Age options
        age_placeholder: "اختر الفئة العمرية",
        age_opt1: "6 - 9 سنوات",
        age_opt2: "10 - 14 سنة",
        age_opt3: "15 - 18 سنة",
        age_opt4: "أكثر من 18 سنة",
        
        // Level options
        level_placeholder: "اختر المستوى"
    },
    en: {
        // Navigation
        brand_name: "Ibn Al-Jazari Center",
        nav_home: "Home",
        nav_about: "About",
        nav_teachers: "Teachers",
        nav_programs: "Packages & Programs",
        nav_courses: "Courses",
        nav_memorization: "Memorization & Tracking",
        nav_testimonials: "Student Reviews",
        nav_faq: "FAQ",
        nav_signup: "Register Now",
        
        // Hero Section
        hero_title: "Ibn Al-Jazari Quran Memorization Center",
        hero_lead: "Distinctive Quran circles, scientific supervision, continuous follow-up, and educational curricula that care for memorizing Allah's book with understanding and contemplation.",
        hero_cta_programs: "View Packages",
        hero_cta_contact: "Book Your Seat Now",
        hero_form_title: "Register Your Interest",
        hero_form_subtitle: "Enter your details and our admissions team will contact you to recommend the most suitable circle.",
        hero_form_name: "Full Name",
        hero_form_phone: "Mobile Number (WhatsApp)",
        hero_form_age: "Approximate Age",
        hero_form_age_placeholder: "Select Age Group",
        hero_form_level: "Current Memorization Level",
        hero_form_level_placeholder: "Select Level",
        hero_form_level_opt1: "Beginner (no memorization)",
        hero_form_level_opt2: "Memorized less than 5 parts",
        hero_form_level_opt3: "Memorized 5 to 15 parts",
        hero_form_level_opt4: "Memorized more than 15 parts",
        hero_form_submit: "Submit Request",
        
        // About Section
        about_title: "About Ibn Al-Jazari Center",
        about_p1: "Ibn Al-Jazari Center is a specialized center for teaching the Holy Quran and its sciences, aiming to prepare a Quranic generation proficient in memorization and recitation, committed to the guidance of Allah's book and the Sunnah of His Prophet ﷺ, through in-person and remote circles under the supervision of certified male and female teachers with connected chains.",
        about_p2: "We adopt studied curricula that consider individual differences among students, with precise digital tracking of memorization and review levels, and continuous communication with parents, to keep the student connected to the Quran heart and soul.",
        about_list_1: "Memorization and review circles for all ages.",
        about_list_2: "Special programs for certification with chains in recitations.",
        about_list_3: "Foundation programs for reading (Nour Al-Bayan/Al-Qaidah Al-Nuraniyah).",
        about_list_4: "Educational and faith programs accompanying memorization.",
        about_features_title: "Center Features",
        about_feature_1_title: "Certified Certifications",
        about_feature_1_desc: "Connected chains to the Prophet ﷺ.",
        about_feature_2_title: "Remote Learning",
        about_feature_2_desc: "Online circles through trusted platforms.",
        about_feature_3_title: "Family Follow-up",
        about_feature_3_desc: "Periodic reports for parents.",
        about_feature_4_title: "Educational Environment",
        about_feature_4_desc: "Focus on ethics, behavior, and role modeling.",
        
        // Teachers Section
        teachers_title: "Teaching Team",
        teachers_lead: "An elite group of Quran people certified with connected chains, combining scientific mastery, educational expertise, and excellent dealing with different ages.",
        teacher_1_name: "Sheikh Ahmed Al-Ansari",
        teacher_1_cert: "Certification in Hafs narration from Asim",
        teacher_1_desc: "Specialized in intensive memorization programs for youth, with over 10 years of experience.",
        teacher_1_badge: "In-person circles",
        teacher_2_name: "Sheikha Maryam Al-Zahra",
        teacher_2_cert: "Certification in multiple recitations",
        teacher_2_desc: "Specialized in memorization for girls and women and preparing female memorizers for certification.",
        teacher_2_badge: "Online circles",
        teacher_3_name: "Sheikh Khalid Al-Omari",
        teacher_3_cert: "Certification with connected chain",
        teacher_3_desc: "Responsible for review programs and memorization accuracy for advanced students.",
        teacher_3_badge: "Advanced programs",
        teacher_4_name: "Ms. Sara Al-Rifai",
        teacher_4_cert: "Educational specialist and foundation expert",
        teacher_4_desc: "Specialized in children's programs and teaching Nour Al-Bayan and Al-Qaidah Al-Nuraniyah.",
        teacher_4_badge: "Children's foundation",
        
        // Programs Section
        programs_title: "Packages & Programs",
        programs_lead: "Choose the most suitable package for your memorization level and free time, as all our programs include precise tracking and periodic reports reflecting your progress.",
        program_1_title: "Beginners Package",
        program_1_desc: "Reading foundation and short surahs memorization",
        program_1_badge: "Most Popular",
        program_1_item1: "3 sessions weekly (in-person/online).",
        program_1_item2: "Foundation program in letter articulation.",
        program_1_item3: "Memorize Juzu Amma with continuous review.",
        program_1_item4: "Monthly reports for parents.",
        program_1_cta: "Choose This Package",
        program_2_title: "Regular Memorization Package",
        program_2_desc: "For those who want continuous and gradual memorization",
        program_2_item1: "4 sessions weekly.",
        program_2_item2: "Customized memorization plan according to your level.",
        program_2_item3: "Focus on recitation accuracy and tajweed rules.",
        program_2_item4: "Periodic educational and faith meetings.",
        program_2_cta: "Choose This Package",
        program_3_title: "Intensive Memorization Package",
        program_3_desc: "For those aiming to complete the Quran or get certification",
        program_3_item1: "6 sessions weekly.",
        program_3_item2: "Intensive memorization and review program.",
        program_3_item3: "Preparation for certification with chain for qualified students.",
        program_3_item4: "Periodic evaluation meetings with scientific supervisor.",
        program_3_cta: "Choose This Package",
        
        // Courses Section
        courses_title: "Quranic Courses",
        courses_lead: "Specialized in-person (offline) and remote (online) courses suitable for male and female students at different levels.",
        courses_offline_badge: "In-person - At Center",
        courses_offline_title: "In-person Courses (Offline)",
        courses_offline_desc: "For neighborhood boys and girls, in equipped halls inside the center, with direct teacher supervision.",
        courses_offline_item1: "Recitation and memorization courses for all ages.",
        courses_offline_item2: "Foundation and advanced tajweed courses.",
        courses_offline_item3: "Flexible morning and evening times.",
        courses_offline_cta: "Book In-person Course",
        courses_online_badge: "Online - Via Internet",
        courses_online_title: "Online Courses (Remote)",
        courses_online_desc: "Live lessons through secure platforms, with session recording and availability for parent follow-up.",
        courses_online_item1: "Individual and group memorization circles.",
        courses_online_item2: "Intensive tajweed courses and attendance certificates.",
        courses_online_item3: "Ability to join from any country.",
        courses_online_cta: "Book Online Course",
        
        // Memorization Section
        memorization_title: "Memorization & Tracking System",
        memorization_p1: "We believe that Quran memorization is a life journey, so we have established a precise system that ensures memorization stability and recitation quality, while considering the student's time and circumstances.",
        memorization_step1: "Initial evaluation of student's memorization and recitation level.",
        memorization_step2: "Creating a memorization and review plan suitable for their age and time.",
        memorization_step3: "Daily follow-up of new memorization and review.",
        memorization_step4: "Monthly and quarterly tests to measure progress.",
        memorization_step5: "Periodic reports for student and parents.",
        memorization_p2: "We also provide students with an electronic platform to display their progress in memorization and review, with motivation through badges and certificates.",
        memorization_table_title: "Example Weekly Plan",
        memorization_table_day: "Day",
        memorization_table_new: "New Memorization",
        memorization_table_review: "Review",
        memorization_table_sunday_new: "1 page from Surah Al-Baqarah",
        memorization_table_sunday_review: "Last 3 memorized pages",
        memorization_table_monday_new: "1 page from Surah Al-Baqarah",
        memorization_table_monday_review: "5 previous pages",
        memorization_table_tuesday_new: "1 page from Surah Al-Baqarah",
        memorization_table_tuesday_review: "Complete quarter hizb",
        memorization_table_wednesday_new: "Half page focused review",
        memorization_table_wednesday_review: "Complete week's memorization",
        memorization_table_thursday_new: "Memorization consolidation",
        memorization_table_thursday_review: "General review of previous content",
        memorization_table_note: "The plan is adjusted according to the student's level and ability, with the possibility of combining memorization and review only for those who have completed the Quran memorization.",
        
        // Testimonials Section
        testimonials_title: "What Our Students & Parents Say",
        testimonials_lead: "Some words of gratitude we cherish from our dear students and parents.",
        testimonial_1_text: "My son had difficulty with correct letter pronunciation, within a few months his level improved noticeably, and he started to love attending the circle.",
        testimonial_1_author: "Mother of Mohammed",
        testimonial_1_role: "Parent of a student in foundation circle",
        testimonial_2_text: "I am now reviewing the last part of my memorization, the follow-up is precise, and the teacher cares about my tajweed and correcting my mistakes.",
        testimonial_2_author: "Abdulrahman",
        testimonial_2_role: "Student in intensive memorization package",
        testimonial_3_text: "I thank the center management for excellent organization and communication, and for providing circles that suit our times and children's circumstances.",
        testimonial_3_author: "Abu Yusuf",
        testimonial_3_role: "Parent of three students",
        
        // FAQ Section
        faq_title: "Frequently Asked Questions",
        faq_lead: "If you don't find an answer to your question here, contact us and we'll be happy to assist you.",
        faq_q1: "Are the circles in-person or remote?",
        faq_a1: "We offer both in-person circles at our center and online circles through approved platforms, and you can choose what suits you when registering.",
        faq_q2: "What ages are accepted for registration?",
        faq_a2: "We accept students from 6 years and above, with special programs for children, and programs for adults and women.",
        faq_q3: "Are there discounts for siblings?",
        faq_a3: "Yes, special discounts are available for siblings and groups, you can inquire about them when contacting the center administration.",
        faq_q4: "How are fees paid?",
        faq_a4: "Payment is made monthly via bank transfer or electronic payment, and the invoice and account number are sent after registration confirmation.",
        
        // Contact Section
        contact_title: "Contact Us & Register Now",
        contact_lead: "We are happy to serve you through the form or WhatsApp, and we will contact you to determine the most suitable program and circle for you or your son.",
        contact_phone_label: "Mobile (WhatsApp):",
        contact_email_label: "Email:",
        contact_location_label: "Location:",
        contact_location: "(Minya Governorate - Mallawi Center - Mallawi City - Al-Muhadda Street - Imam Ali bin Abi Talib Mosque)",
        contact_whatsapp_label: "Contact via WhatsApp",
        contact_social: "You can also follow the center news on social media platforms (add your account links here).",
        contact_form_title: "Quick Registration Form",
        contact_form_name: "Full Name",
        contact_form_phone: "Mobile Number",
        contact_form_email: "Email (optional)",
        contact_form_program: "Program Selection",
        contact_form_program_placeholder: "Select Program",
        contact_form_program_opt1: "Beginners Package",
        contact_form_program_opt2: "Regular Memorization Package",
        contact_form_program_opt3: "Intensive Memorization Package",
        contact_form_program_opt4: "Certification Program with Chain",
        contact_form_message: "Your Message or Notes",
        contact_form_submit: "Submit Request",
        
        // Footer
        footer_copyright: "Ibn Al-Jazari Quran Memorization Center",
        footer_design: "Design & Development: You can put your name here",
        
        // Currency
        currency: "SAR / month",
        
        // Age options
        age_placeholder: "Select Age Group",
        age_opt1: "6 - 9 years",
        age_opt2: "10 - 14 years",
        age_opt3: "15 - 18 years",
        age_opt4: "Over 18 years",
        
        // Level options
        level_placeholder: "Select Level"
    }
};

// Language switching functionality
let currentLang = 'ar';

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update Bootstrap CSS
    const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
    if (bootstrapLink) {
        if (lang === 'ar') {
            bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css';
        } else {
            bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
        }
    }
    
    // Update page title
    document.title = lang === 'ar' ? 'مركز ابن الجزري لتحفيظ القرآن' : 'Ibn Al-Jazari Quran Memorization Center';
    
    // Update logo alt text
    const logo = document.querySelector('.logo-img');
    if (logo) {
        logo.alt = lang === 'ar' ? 'شعار مركز ابن الجزري' : 'Ibn Al-Jazari Center Logo';
    }
    
    // Update language button
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
    }
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update teacher avatars
    const avatars = document.querySelectorAll('.teacher-avatar span');
    const avatarLetters = lang === 'ar' ? ['أ', 'م', 'خ', 'س'] : ['A', 'M', 'K', 'S'];
    avatars.forEach((avatar, index) => {
        if (avatarLetters[index]) {
            avatar.textContent = avatarLetters[index];
        }
    });
    
    // Update currency
    document.querySelectorAll('.price-currency').forEach(element => {
        element.textContent = translations[lang].currency;
    });
    
    // Update age options
    const heroFormSelects = document.querySelectorAll('#heroLeadForm select.form-select');
    const ageSelect = heroFormSelects[0];
    if (ageSelect) {
        if (lang === 'ar') {
            ageSelect.innerHTML = `
                <option value="" data-i18n="hero_form_age_placeholder">${translations['ar'].age_placeholder}</option>
                <option>${translations['ar'].age_opt1}</option>
                <option>${translations['ar'].age_opt2}</option>
                <option>${translations['ar'].age_opt3}</option>
                <option>${translations['ar'].age_opt4}</option>
            `;
        } else {
            ageSelect.innerHTML = `
                <option value="" data-i18n="hero_form_age_placeholder">${translations['en'].age_placeholder}</option>
                <option>${translations['en'].age_opt1}</option>
                <option>${translations['en'].age_opt2}</option>
                <option>${translations['en'].age_opt3}</option>
                <option>${translations['en'].age_opt4}</option>
            `;
        }
    }
    
    // Update memorization level options
    const levelSelect = heroFormSelects[1];
    if (levelSelect) {
        if (lang === 'ar') {
            levelSelect.innerHTML = `
                <option value="" data-i18n="hero_form_level_placeholder">${translations['ar'].level_placeholder}</option>
                <option data-i18n="hero_form_level_opt1">${translations['ar'].hero_form_level_opt1}</option>
                <option data-i18n="hero_form_level_opt2">${translations['ar'].hero_form_level_opt2}</option>
                <option data-i18n="hero_form_level_opt3">${translations['ar'].hero_form_level_opt3}</option>
                <option data-i18n="hero_form_level_opt4">${translations['ar'].hero_form_level_opt4}</option>
            `;
        } else {
            levelSelect.innerHTML = `
                <option value="" data-i18n="hero_form_level_placeholder">${translations['en'].level_placeholder}</option>
                <option data-i18n="hero_form_level_opt1">${translations['en'].hero_form_level_opt1}</option>
                <option data-i18n="hero_form_level_opt2">${translations['en'].hero_form_level_opt2}</option>
                <option data-i18n="hero_form_level_opt3">${translations['en'].hero_form_level_opt3}</option>
                <option data-i18n="hero_form_level_opt4">${translations['en'].hero_form_level_opt4}</option>
            `;
        }
    }
    
    // Update program options
    const programSelect = document.querySelector('#packageSelect');
    if (programSelect) {
        if (lang === 'ar') {
            programSelect.innerHTML = `
                <option value="" data-i18n="contact_form_program_placeholder">${translations['ar'].contact_form_program_placeholder}</option>
                <option data-i18n="contact_form_program_opt1">${translations['ar'].contact_form_program_opt1}</option>
                <option data-i18n="contact_form_program_opt2">${translations['ar'].contact_form_program_opt2}</option>
                <option data-i18n="contact_form_program_opt3">${translations['ar'].contact_form_program_opt3}</option>
                <option data-i18n="contact_form_program_opt4">${translations['ar'].contact_form_program_opt4}</option>
            `;
        } else {
            programSelect.innerHTML = `
                <option value="" data-i18n="contact_form_program_placeholder">${translations['en'].contact_form_program_placeholder}</option>
                <option data-i18n="contact_form_program_opt1">${translations['en'].contact_form_program_opt1}</option>
                <option data-i18n="contact_form_program_opt2">${translations['en'].contact_form_program_opt2}</option>
                <option data-i18n="contact_form_program_opt3">${translations['en'].contact_form_program_opt3}</option>
                <option data-i18n="contact_form_program_opt4">${translations['en'].contact_form_program_opt4}</option>
            `;
        }
    }
    
    // Update static text elements that don't have data-i18n
    updateStaticTexts(lang);
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

function updateStaticTexts(lang) {
    const t = translations[lang];
    
    // Update hero section
    const heroTitle = document.querySelector('.hero h1.display-5');
    if (heroTitle) heroTitle.textContent = t.hero_title;
    
    const heroLead = document.querySelector('.hero p.lead');
    if (heroLead) heroLead.textContent = t.hero_lead;
    
    const heroCtaPrograms = document.querySelector('.hero a[data-i18n="hero_cta_programs"]');
    if (heroCtaPrograms) heroCtaPrograms.textContent = t.hero_cta_programs;
    
    const heroCtaContact = document.querySelector('.hero a[data-i18n="hero_cta_contact"]');
    if (heroCtaContact) heroCtaContact.textContent = t.hero_cta_contact;
    
    const heroFormTitle = document.querySelector('.hero-card h5');
    if (heroFormTitle) heroFormTitle.textContent = t.hero_form_title;
    
    const heroFormSubtitle = document.querySelector('.hero-card p.text-muted');
    if (heroFormSubtitle) heroFormSubtitle.textContent = t.hero_form_subtitle;
    
    const heroFormSubmit = document.querySelector('.hero-card button');
    if (heroFormSubmit) heroFormSubmit.textContent = t.hero_form_submit;
    
    // Update stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = lang === 'ar' ? 'حافظ/ة قيد المتابعة' : 'Memorizers under follow-up';
    if (statLabels[1]) statLabels[1].textContent = lang === 'ar' ? 'معلم ومعلمة مجازون' : 'Certified male & female teachers';
    if (statLabels[2]) statLabels[2].textContent = lang === 'ar' ? 'سنوات من العطاء' : 'Years of service';
    
    // Update about section paragraphs
    const aboutP1 = document.querySelector('[data-i18n="about_p1"]');
    if (aboutP1) aboutP1.textContent = t.about_p1;
    
    const aboutP2 = document.querySelector('[data-i18n="about_p2"]');
    if (aboutP2) aboutP2.textContent = t.about_p2;
    
    // Update about features
    const aboutFeaturesTitle = document.querySelector('.about-box h5');
    if (aboutFeaturesTitle) aboutFeaturesTitle.textContent = t.about_features_title;
    
    const featureTitles = document.querySelectorAll('.feature-card h6');
    const featureDescs = document.querySelectorAll('.feature-card p');
    if (featureTitles[0]) featureTitles[0].textContent = t.about_feature_1_title;
    if (featureDescs[0]) featureDescs[0].textContent = t.about_feature_1_desc;
    if (featureTitles[1]) featureTitles[1].textContent = t.about_feature_2_title;
    if (featureDescs[1]) featureDescs[1].textContent = t.about_feature_2_desc;
    if (featureTitles[2]) featureTitles[2].textContent = t.about_feature_3_title;
    if (featureDescs[2]) featureDescs[2].textContent = t.about_feature_3_desc;
    if (featureTitles[3]) featureTitles[3].textContent = t.about_feature_4_title;
    if (featureDescs[3]) featureDescs[3].textContent = t.about_feature_4_desc;
    
    // Update teachers
    const teacherNames = document.querySelectorAll('.teacher-card h5');
    const teacherCerts = document.querySelectorAll('.teacher-card p.small.text-muted');
    const teacherDescs = document.querySelectorAll('.teacher-card p.small.mb-2:not(.text-muted)');
    const teacherBadges = document.querySelectorAll('.teacher-card .badge');
    
    if (teacherNames[0]) teacherNames[0].textContent = t.teacher_1_name;
    if (teacherCerts[0]) teacherCerts[0].textContent = t.teacher_1_cert;
    if (teacherDescs[0]) teacherDescs[0].textContent = t.teacher_1_desc;
    if (teacherBadges[0]) teacherBadges[0].textContent = t.teacher_1_badge;
    
    if (teacherNames[1]) teacherNames[1].textContent = t.teacher_2_name;
    if (teacherCerts[1]) teacherCerts[1].textContent = t.teacher_2_cert;
    if (teacherDescs[1]) teacherDescs[1].textContent = t.teacher_2_desc;
    if (teacherBadges[1]) teacherBadges[1].textContent = t.teacher_2_badge;
    
    if (teacherNames[2]) teacherNames[2].textContent = t.teacher_3_name;
    if (teacherCerts[2]) teacherCerts[2].textContent = t.teacher_3_cert;
    if (teacherDescs[2]) teacherDescs[2].textContent = t.teacher_3_desc;
    if (teacherBadges[2]) teacherBadges[2].textContent = t.teacher_3_badge;
    
    if (teacherNames[3]) teacherNames[3].textContent = t.teacher_4_name;
    if (teacherCerts[3]) teacherCerts[3].textContent = t.teacher_4_cert;
    if (teacherDescs[3]) teacherDescs[3].textContent = t.teacher_4_desc;
    if (teacherBadges[3]) teacherBadges[3].textContent = t.teacher_4_badge;
    
    // Update programs
    const programTitles = document.querySelectorAll('.pricing-card h5');
    const programDescs = document.querySelectorAll('.pricing-card p.text-muted.small');
    const programBadges = document.querySelectorAll('.pricing-card .badge');
    const programItems = document.querySelectorAll('.pricing-card ul li');
    const programButtons = document.querySelectorAll('.choose-package-btn');
    
    if (programTitles[0]) programTitles[0].textContent = t.program_1_title;
    if (programDescs[0]) programDescs[0].textContent = t.program_1_desc;
    if (programItems[0]) programItems[0].textContent = t.program_1_item1;
    if (programItems[1]) programItems[1].textContent = t.program_1_item2;
    if (programItems[2]) programItems[2].textContent = t.program_1_item3;
    if (programItems[3]) programItems[3].textContent = t.program_1_item4;
    if (programButtons[0]) programButtons[0].textContent = t.program_1_cta;
    
    if (programBadges[0]) programBadges[0].textContent = t.program_1_badge;
    if (programTitles[1]) programTitles[1].textContent = t.program_2_title;
    if (programDescs[1]) programDescs[1].textContent = t.program_2_desc;
    if (programItems[4]) programItems[4].textContent = t.program_2_item1;
    if (programItems[5]) programItems[5].textContent = t.program_2_item2;
    if (programItems[6]) programItems[6].textContent = t.program_2_item3;
    if (programItems[7]) programItems[7].textContent = t.program_2_item4;
    if (programButtons[1]) programButtons[1].textContent = t.program_2_cta;
    
    if (programTitles[2]) programTitles[2].textContent = t.program_3_title;
    if (programDescs[2]) programDescs[2].textContent = t.program_3_desc;
    if (programItems[8]) programItems[8].textContent = t.program_3_item1;
    if (programItems[9]) programItems[9].textContent = t.program_3_item2;
    if (programItems[10]) programItems[10].textContent = t.program_3_item3;
    if (programItems[11]) programItems[11].textContent = t.program_3_item4;
    if (programButtons[2]) programButtons[2].textContent = t.program_3_cta;
    
    // Update courses
    const coursesLead = document.querySelector('[data-i18n="courses_lead"]');
    if (coursesLead) coursesLead.textContent = t.courses_lead;
    
    const coursesDesc1 = document.querySelector('[data-i18n="courses_offline_desc"]');
    if (coursesDesc1) coursesDesc1.textContent = t.courses_offline_desc;
    
    const coursesDesc2 = document.querySelector('[data-i18n="courses_online_desc"]');
    if (coursesDesc2) coursesDesc2.textContent = t.courses_online_desc;
    
    // Update memorization section
    const memP1 = document.querySelector('.col-lg-6 p.mb-3');
    if (memP1) memP1.textContent = t.memorization_p1;
    
    const memSteps = document.querySelectorAll('.memorization-steps li');
    if (memSteps[0]) memSteps[0].textContent = t.memorization_step1;
    if (memSteps[1]) memSteps[1].textContent = t.memorization_step2;
    if (memSteps[2]) memSteps[2].textContent = t.memorization_step3;
    if (memSteps[3]) memSteps[3].textContent = t.memorization_step4;
    if (memSteps[4]) memSteps[4].textContent = t.memorization_step5;
    
    const memP2 = document.querySelector('.col-lg-6 p.mb-0');
    if (memP2) memP2.textContent = t.memorization_p2;
    
    const memTitle = document.querySelector('.tracking-box h5');
    if (memTitle) memTitle.textContent = t.memorization_table_title;
    
    const tableHeaders = document.querySelectorAll('.table th');
    if (tableHeaders[0]) tableHeaders[0].textContent = t.memorization_table_day;
    if (tableHeaders[1]) tableHeaders[1].textContent = t.memorization_table_new;
    if (tableHeaders[2]) tableHeaders[2].textContent = t.memorization_table_review;
    
    const tableCells = document.querySelectorAll('.table td');
    if (tableCells[0]) tableCells[0].textContent = lang === 'ar' ? 'الأحد' : 'Sunday';
    if (tableCells[1]) tableCells[1].textContent = t.memorization_table_sunday_new;
    if (tableCells[2]) tableCells[2].textContent = t.memorization_table_sunday_review;
    if (tableCells[3]) tableCells[3].textContent = lang === 'ar' ? 'الإثنين' : 'Monday';
    if (tableCells[4]) tableCells[4].textContent = t.memorization_table_monday_new;
    if (tableCells[5]) tableCells[5].textContent = t.memorization_table_monday_review;
    if (tableCells[6]) tableCells[6].textContent = lang === 'ar' ? 'الثلاثاء' : 'Tuesday';
    if (tableCells[7]) tableCells[7].textContent = t.memorization_table_tuesday_new;
    if (tableCells[8]) tableCells[8].textContent = t.memorization_table_tuesday_review;
    if (tableCells[9]) tableCells[9].textContent = lang === 'ar' ? 'الأربعاء' : 'Wednesday';
    if (tableCells[10]) tableCells[10].textContent = t.memorization_table_wednesday_new;
    if (tableCells[11]) tableCells[11].textContent = t.memorization_table_wednesday_review;
    if (tableCells[12]) tableCells[12].textContent = lang === 'ar' ? 'الخميس' : 'Thursday';
    if (tableCells[13]) tableCells[13].textContent = t.memorization_table_thursday_new;
    if (tableCells[14]) tableCells[14].textContent = t.memorization_table_thursday_review;
    
    const tableNote = document.querySelector('.tracking-box p.small.text-muted');
    if (tableNote) tableNote.textContent = t.memorization_table_note;
    
    // Update testimonials
    const testimonialsLead = document.querySelector('.testimonials-section p.text-muted');
    if (testimonialsLead) testimonialsLead.textContent = t.testimonials_lead;
    
    const testimonialTexts = document.querySelectorAll('.testimonial-card p.mb-3');
    const testimonialAuthors = document.querySelectorAll('.testimonial-card h6');
    const testimonialRoles = document.querySelectorAll('.testimonial-card span.small.text-muted');
    
    if (testimonialTexts[0]) testimonialTexts[0].textContent = t.testimonial_1_text;
    if (testimonialAuthors[0]) testimonialAuthors[0].textContent = t.testimonial_1_author;
    if (testimonialRoles[0]) testimonialRoles[0].textContent = t.testimonial_1_role;
    
    if (testimonialTexts[1]) testimonialTexts[1].textContent = t.testimonial_2_text;
    if (testimonialAuthors[1]) testimonialAuthors[1].textContent = t.testimonial_2_author;
    if (testimonialRoles[1]) testimonialRoles[1].textContent = t.testimonial_2_role;
    
    if (testimonialTexts[2]) testimonialTexts[2].textContent = t.testimonial_3_text;
    if (testimonialAuthors[2]) testimonialAuthors[2].textContent = t.testimonial_3_author;
    if (testimonialRoles[2]) testimonialRoles[2].textContent = t.testimonial_3_role;
    
    // Update FAQ
    const faqLead = document.querySelector('.faq-section p.text-muted');
    if (faqLead) faqLead.textContent = t.faq_lead;
    
    const faqButtons = document.querySelectorAll('.accordion-button');
    const faqBodies = document.querySelectorAll('.accordion-body');
    
    if (faqButtons[0]) faqButtons[0].textContent = t.faq_q1;
    if (faqBodies[0]) faqBodies[0].textContent = t.faq_a1;
    if (faqButtons[1]) faqButtons[1].textContent = t.faq_q2;
    if (faqBodies[1]) faqBodies[1].textContent = t.faq_a2;
    if (faqButtons[2]) faqButtons[2].textContent = t.faq_q3;
    if (faqBodies[2]) faqBodies[2].textContent = t.faq_a3;
    if (faqButtons[3]) faqButtons[3].textContent = t.faq_q4;
    if (faqBodies[3]) faqBodies[3].textContent = t.faq_a4;
    
    // Update contact section
    const contactLabels = document.querySelectorAll('.contact-info strong');
    const contactLocation = document.querySelectorAll('.contact-info li')[2];
    const whatsappSpan = document.querySelector('.btn-whatsapp span:last-child');
    const whatsappBtn = document.querySelector('.btn-whatsapp');
    const contactSocial = document.querySelector('.contact-info ~ p');
    
    if (contactLabels[0]) contactLabels[0].textContent = t.contact_phone_label;
    if (contactLabels[1]) contactLabels[1].textContent = t.contact_email_label;
    if (contactLabels[2]) contactLabels[2].textContent = t.contact_location_label;
    if (contactLocation) contactLocation.innerHTML = `<strong>${t.contact_location_label}</strong> ${t.contact_location}`;
    if (whatsappSpan) whatsappSpan.textContent = t.contact_whatsapp_label;
    if (whatsappBtn) whatsappBtn.setAttribute('aria-label', t.contact_whatsapp_label);
    if (contactSocial) contactSocial.textContent = t.contact_social;
    
    // Update footer
    const footerSpans = document.querySelectorAll('footer span');
    if (footerSpans[0]) footerSpans[0].innerHTML = `© <span id="year"></span> ${t.footer_copyright}`;
    if (footerSpans[1]) footerSpans[1].textContent = t.footer_design;
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
    switchLanguage(savedLang);
    
    // Add click event to language toggle button
    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', function() {
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            switchLanguage(newLang);
        });
    }
});

})();
