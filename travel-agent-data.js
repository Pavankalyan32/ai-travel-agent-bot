// Travel Agent Bot - Response Database and Logic
// This file contains all travel agent responses and response logic

// Travel agent responses database
const travelResponses = {
  'en-US': {
    'hello': "Hello! I'm your personal travel agent. How can I help you plan your next adventure? I can assist with destinations, flights, hotels, tours, and travel tips. You can ask me anything about travel planning!",
    'destinations': "I can help you explore amazing destinations! Popular choices include Paris, Tokyo, Bali, New York, Santorini, London, Rome, and Dubai. What type of experience are you looking for - adventure, relaxation, culture, or luxury? I can also suggest destinations based on your budget and travel style.",
    'flights': "I can assist with flight bookings! When are you planning to travel and what's your budget? I'll find the best deals for you. Do you prefer direct flights or are you flexible with layovers? I can also help you find the best time to book flights for maximum savings.",
    'hotels': "Let me help you find the perfect accommodation! Do you prefer luxury hotels, boutique stays, budget-friendly options, or all-inclusive resorts? What's your preferred location - city center, beachfront, or countryside? I can also suggest hotels based on your specific needs and preferences.",
    'budget': "I can work with any budget! Let me know your price range and I'll suggest amazing destinations and accommodations that fit your needs. I can also help you find deals and discounts. For budget travel, consider hostels, Airbnb, or off-season travel for better prices.",
    'weather': "I can provide weather information for your destination! Which place are you interested in visiting? I can also suggest the best time to visit based on weather patterns. Most destinations have ideal visiting seasons - would you like recommendations for specific countries?",
    'visa': "I can help you with visa requirements! Which country are you planning to visit? I'll guide you through the application process and required documents. Visa requirements vary by nationality and destination - I can provide specific guidance for your situation.",
    'insurance': "Travel insurance is essential for peace of mind! I can help you find comprehensive coverage that includes medical, trip cancellation, and baggage protection. Different policies cover different scenarios - would you like recommendations based on your travel type?",
    'packing': "Let me help you pack smart! What's your destination and duration? I'll create a personalized packing list based on weather, activities, and local customs. Don't forget essentials like adapters, medications, and copies of important documents!",
    'currency': "I can help you with currency exchange and payment methods! Which country are you visiting? I'll advise on the best ways to handle money while traveling. Consider using credit cards with no foreign transaction fees and always have some local currency for emergencies.",
    'safety': "Your safety is my priority! I can provide travel advisories, local customs, and safety tips for your destination. Which country are you planning to visit? I can also share specific safety information for different types of travelers.",
    'tours': "I can arrange guided tours and activities! From city sightseeing to adventure tours, I'll find the perfect experiences for your interests and schedule. Popular options include food tours, cultural experiences, and outdoor adventures.",
    'transportation': "I can help with local transportation! From airport transfers to public transport, I'll guide you on the best ways to get around your destination. Many cities offer tourist passes that can save you money on transportation and attractions.",
    'food': "I can recommend local cuisine and restaurants! Tell me your destination and food preferences, and I'll suggest must-try dishes and dining spots. Local food is often the best way to experience a culture - would you like recommendations for specific cuisines?",
    'family': "Traveling with family? I can help plan family-friendly destinations, accommodations, and activities that everyone will enjoy. Consider destinations with kid-friendly attractions, safe environments, and activities suitable for all ages.",
    'business': "For business travel, I can arrange corporate bookings, meeting venues, and professional services. What type of business trip are you planning? I can also help with travel policies, expense management, and corporate travel solutions.",
    'honeymoon': "Planning a romantic getaway? I can suggest honeymoon destinations, romantic hotels, and special experiences for couples. Popular honeymoon destinations include Maldives, Bali, Santorini, and tropical islands with private accommodations.",
    'adventure': "Looking for adventure? I can recommend destinations for hiking, diving, skiing, and other thrilling activities. What type of adventure interests you? Popular adventure destinations include New Zealand, Costa Rica, Iceland, and Nepal.",
    'luxury': "For luxury travel, I can arrange premium accommodations, private tours, and exclusive experiences. What's your dream luxury destination? Consider destinations like Dubai, Monaco, or exclusive resorts in the Maldives and Seychelles.",
    'backpacking': "Backpacking on a budget? I can suggest affordable destinations, hostels, and budget-friendly activities for your adventure. Popular backpacking destinations include Southeast Asia, Eastern Europe, and South America.",
    'default': "As your travel agent, I'm here to help with destinations, flights, hotels, tours, visas, insurance, and travel tips. What would you like to know? You can ask me anything about travel planning!"
  },
  'hi-IN': {
    'hello': "नमस्ते! मैं आपका व्यक्तिगत ट्रैवल एजेंट हूं। मैं आपकी अगली यात्रा की योजना बनाने में कैसे मदद कर सकता हूं? मैं गंतव्यों, फ्लाइट्स, होटलों, टूर और यात्रा युक्तियों में सहायता कर सकता हूं। आप यात्रा योजना के बारे में कुछ भी पूछ सकते हैं!",
    'destinations': "मैं आपको अद्भुत गंतव्यों की खोज में मदद कर सकता हूं! लोकप्रिय विकल्पों में पेरिस, टोक्यो, बाली, न्यूयॉर्क, सेंटोरिनी, लंदन, रोम और दुबई शामिल हैं। आप किस तरह का अनुभव चाहते हैं - साहसिक, आराम, संस्कृति या लक्जरी? मैं आपके बजट और यात्रा शैली के आधार पर गंतव्य भी सुझा सकता हूं।",
    'flights': "मैं फ्लाइट बुकिंग में सहायता कर सकता हूं! आप कब यात्रा करने की योजना बना रहे हैं और आपका बजट क्या है? मैं आपके लिए सर्वोत्तम डील खोजूंगा। क्या आप डायरेक्ट फ्लाइट पसंद करते हैं या लेओवर के साथ लचीले हैं? मैं अधिकतम बचत के लिए फ्लाइट बुक करने का सर्वोत्तम समय भी बता सकता हूं।",
    'hotels': "मुझे आपको सही आवास खोजने में मदद करने दें! क्या आप लक्जरी होटल, बुटीक स्टे, बजट-अनुकूल विकल्प या ऑल-इनक्लूसिव रिसॉर्ट पसंद करते हैं? आपकी पसंदीदा स्थान क्या है - शहर का केंद्र, समुद्र तट या ग्रामीण क्षेत्र? मैं आपकी विशिष्ट जरूरतों और पसंद के आधार पर होटल भी सुझा सकता हूं।",
    'budget': "मैं किसी भी बजट के साथ काम कर सकता हूं! अपनी कीमत सीमा बताएं और मैं आपकी जरूरतों के अनुरूप अद्भुत गंतव्य और आवास सुझाऊंगा। मैं डील और छूट खोजने में भी मदद कर सकता हूं। बजट यात्रा के लिए, बेहतर कीमतों के लिए होस्टल, Airbnb, या ऑफ-सीजन यात्रा पर विचार करें।",
    'weather': "मैं आपके गंतव्य के लिए मौसम की जानकारी प्रदान कर सकता हूं! आप किस स्थान पर जाने में रुचि रखते हैं? मैं मौसम पैटर्न के आधार पर यात्रा का सर्वोत्तम समय भी सुझा सकता हूं। अधिकांश गंतव्यों में आदर्श यात्रा सीजन होते हैं - क्या आप विशिष्ट देशों के लिए सिफारिशें चाहते हैं?",
    'visa': "मैं वीजा आवश्यकताओं में आपकी मदद कर सकता हूं! आप किस देश की यात्रा की योजना बना रहे हैं? मैं आपको आवेदन प्रक्रिया और आवश्यक दस्तावेजों के माध्यम से मार्गदर्शन करूंगा। वीजा आवश्यकताएं राष्ट्रीयता और गंतव्य के अनुसार भिन्न होती हैं - मैं आपकी स्थिति के लिए विशिष्ट मार्गदर्शन प्रदान कर सकता हूं।",
    'insurance': "यात्रा बीमा मन की शांति के लिए आवश्यक है! मैं आपको चिकित्सा, यात्रा रद्दीकरण और सामान सुरक्षा सहित व्यापक कवरेज खोजने में मदद कर सकता हूं। विभिन्न पॉलिसियां विभिन्न परिदृश्यों को कवर करती हैं - क्या आप अपनी यात्रा प्रकार के आधार पर सिफारिशें चाहते हैं?",
    'packing': "मुझे स्मार्ट पैकिंग में आपकी मदद करने दें! आपका गंतव्य और अवधि क्या है? मैं मौसम, गतिविधियों और स्थानीय रीति-रिवाजों के आधार पर व्यक्तिगत पैकिंग सूची बनाऊंगा। एडाप्टर, दवाएं और महत्वपूर्ण दस्तावेजों की प्रतियां जैसे आवश्यकताओं को न भूलें!",
    'currency': "मैं मुद्रा विनिमय और भुगतान विधियों में आपकी मदद कर सकता हूं! आप किस देश की यात्रा कर रहे हैं? मैं यात्रा के दौरान पैसे संभालने के सर्वोत्तम तरीकों की सलाह दूंगा। विदेशी लेनदेन शुल्क के बिना क्रेडिट कार्ड का उपयोग करने पर विचार करें और आपात स्थितियों के लिए हमेशा कुछ स्थानीय मुद्रा रखें।",
    'safety': "आपकी सुरक्षा मेरी प्राथमिकता है! मैं आपके गंतव्य के लिए यात्रा सलाह, स्थानीय रीति-रिवाज और सुरक्षा युक्तियां प्रदान कर सकता हूं। आप किस देश की यात्रा की योजना बना रहे हैं? मैं विभिन्न प्रकार के यात्रियों के लिए विशिष्ट सुरक्षा जानकारी भी साझा कर सकता हूं।",
    'tours': "मैं निर्देशित टूर और गतिविधियों की व्यवस्था कर सकता हूं! शहर के दर्शनीय स्थलों से लेकर साहसिक टूर तक, मैं आपकी रुचियों और कार्यक्रम के लिए सर्वोत्तम अनुभव खोजूंगा। लोकप्रिय विकल्पों में फूड टूर, सांस्कृतिक अनुभव और आउटडोर साहसिक गतिविधियां शामिल हैं।",
    'transportation': "मैं स्थानीय परिवहन में मदद कर सकता हूं! हवाई अड्डे के स्थानांतरण से लेकर सार्वजनिक परिवहन तक, मैं आपको अपने गंतव्य के आसपास जाने के सर्वोत्तम तरीकों पर मार्गदर्शन करूंगा। कई शहर पर्यटक पास प्रदान करते हैं जो परिवहन और आकर्षणों पर पैसे बचा सकते हैं।",
    'food': "मैं स्थानीय व्यंजन और रेस्तरां की सिफारिश कर सकता हूं! मुझे अपना गंतव्य और भोजन की पसंद बताएं, और मैं जरूरी कोशिश करने वाले व्यंजन और भोजन स्थानों का सुझाव दूंगा। स्थानीय भोजन अक्सर संस्कृति का अनुभव करने का सर्वोत्तम तरीका होता है - क्या आप विशिष्ट व्यंजनों के लिए सिफारिशें चाहते हैं?",
    'family': "परिवार के साथ यात्रा कर रहे हैं? मैं परिवार-अनुकूल गंतव्यों, आवासों और गतिविधियों की योजना बनाने में मदद कर सकता हूं जो सभी को पसंद आएंगी। बच्चे-अनुकूल आकर्षण, सुरक्षित वातावरण और सभी उम्र के लिए उपयुक्त गतिविधियों वाले गंतव्यों पर विचार करें।",
    'business': "व्यावसायिक यात्रा के लिए, मैं कॉर्पोरेट बुकिंग, बैठक स्थलों और पेशेवर सेवाओं की व्यवस्था कर सकता हूं। आप किस प्रकार की व्यावसायिक यात्रा की योजना बना रहे हैं? मैं यात्रा नीतियों, खर्च प्रबंधन और कॉर्पोरेट यात्रा समाधानों में भी मदद कर सकता हूं।",
    'honeymoon': "रोमांटिक यात्रा की योजना बना रहे हैं? मैं हनीमून गंतव्यों, रोमांटिक होटलों और जोड़ों के लिए विशेष अनुभवों का सुझाव दे सकता हूं। लोकप्रिय हनीमून गंतव्यों में मालदीव, बाली, सेंटोरिनी और निजी आवास के साथ उष्णकटिबंधीय द्वीप शामिल हैं।",
    'adventure': "साहस की तलाश में हैं? मैं हाइकिंग, डाइविंग, स्कीइंग और अन्य रोमांचक गतिविधियों के लिए गंतव्यों की सिफारिश कर सकता हूं। आपको किस प्रकार का साहस पसंद है? लोकप्रिय साहसिक गंतव्यों में न्यूजीलैंड, कोस्टा रिका, आइसलैंड और नेपाल शामिल हैं।",
    'luxury': "लक्जरी यात्रा के लिए, मैं प्रीमियम आवास, निजी टूर और विशेष अनुभवों की व्यवस्था कर सकता हूं। आपका सपना लक्जरी गंतव्य क्या है? दुबई, मोनाको, या मालदीव और सेशेल्स में विशेष रिसॉर्ट जैसे गंतव्यों पर विचार करें।",
    'backpacking': "बजट पर बैकपैकिंग? मैं आपकी साहसिक यात्रा के लिए सस्ते गंतव्यों, होस्टलों और बजट-अनुकूल गतिविधियों का सुझाव दे सकता हूं। लोकप्रिय बैकपैकिंग गंतव्यों में दक्षिण-पूर्व एशिया, पूर्वी यूरोप और दक्षिण अमेरिका शामिल हैं।",
    'default': "आपके ट्रैवल एजेंट के रूप में, मैं गंतव्यों, फ्लाइट्स, होटलों, टूर, वीजा, बीमा और यात्रा युक्तियों में मदद के लिए यहां हूं। आप क्या जानना चाहते हैं? आप यात्रा योजना के बारे में कुछ भी पूछ सकते हैं!"
  },
  'ru-RU': {
    'hello': "Привет! Я ваш персональный туристический агент. Как я могу помочь спланировать ваше следующее путешествие? Я могу помочь с направлениями, авиабилетами, отелями, турами и советами по путешествиям. Вы можете спросить меня о чем угодно, связанном с планированием путешествий!",
    'destinations': "Я могу помочь вам исследовать удивительные направления! Популярные варианты включают Париж, Токио, Бали, Нью-Йорк, Санторини, Лондон, Рим и Дубай. Какой опыт вы ищете - приключения, отдых, культура или роскошь? Я также могу предложить направления на основе вашего бюджета и стиля путешествий.",
    'flights': "Я могу помочь с бронированием авиабилетов! Когда вы планируете путешествовать и какой у вас бюджет? Я найду лучшие предложения для вас. Вы предпочитаете прямые рейсы или гибки с пересадками? Я также могу помочь найти лучшее время для бронирования авиабилетов для максимальной экономии.",
    'hotels': "Позвольте мне помочь найти идеальное жилье! Вы предпочитаете роскошные отели, бутик-отели, бюджетные варианты или отели 'все включено'? Какое предпочтительное местоположение - центр города, набережная или сельская местность? Я также могу предложить отели на основе ваших конкретных потребностей и предпочтений.",
    'budget': "Я могу работать с любым бюджетом! Скажите мне ваш ценовой диапазон, и я предложу удивительные направления и жилье, которые соответствуют вашим потребностям. Я также могу помочь найти предложения и скидки. Для бюджетных путешествий рассмотрите хостелы, Airbnb или путешествия в межсезонье для лучших цен.",
    'weather': "Я могу предоставить информацию о погоде для вашего направления! Какое место вас интересует? Я также могу предложить лучшее время для посещения на основе погодных условий. У большинства направлений есть идеальные сезоны для посещения - хотите ли вы рекомендации для конкретных стран?",
    'visa': "Я могу помочь с требованиями к визе! Какую страну вы планируете посетить? Я проведу вас через процесс подачи заявления и необходимые документы. Требования к визе различаются в зависимости от национальности и направления - я могу предоставить конкретные рекомендации для вашей ситуации.",
    'insurance': "Страховка путешествий необходима для спокойствия! Я могу помочь найти комплексное покрытие, включающее медицинское, отмену поездки и защиту багажа. Разные полисы покрывают разные сценарии - хотите ли вы рекомендации на основе типа вашего путешествия?",
    'packing': "Позвольте мне помочь упаковаться умно! Какое ваше направление и продолжительность? Я создам персональный список упаковки на основе погоды, мероприятий и местных обычаев. Не забудьте essentials как адаптеры, лекарства и копии важных документов!",
    'currency': "Я могу помочь с обменом валют и способами оплаты! Какую страну вы посещаете? Я посоветую лучшие способы обращения с деньгами во время путешествий. Рассмотрите использование кредитных карт без комиссии за иностранные транзакции и всегда имейте немного местной валюты на случай чрезвычайных ситуаций.",
    'safety': "Ваша безопасность - мой приоритет! Я могу предоставить туристические рекомендации, местные обычаи и советы по безопасности для вашего направления. Какую страну вы планируете посетить? Я также могу поделиться конкретной информацией о безопасности для разных типов путешественников.",
    'tours': "Я могу организовать экскурсии и мероприятия! От городских достопримечательностей до приключенческих туров, я найду идеальные впечатления для ваших интересов и расписания. Популярные варианты включают гастрономические туры, культурные впечатления и приключения на свежем воздухе.",
    'transportation': "Я могу помочь с местным транспортом! От трансферов из аэропорта до общественного транспорта, я направлю вас на лучшие способы передвижения по вашему направлению. Многие города предлагают туристические проездные, которые могут сэкономить вам деньги на транспорте и достопримечательностях.",
    'food': "Я могу порекомендовать местную кухню и рестораны! Скажите мне ваше направление и предпочтения в еде, и я предложу обязательные блюда и места для обеда. Местная еда часто является лучшим способом познакомиться с культурой - хотите ли вы рекомендации для конкретных кухонь?",
    'family': "Путешествуете с семьей? Я могу помочь спланировать семейные направления, жилье и мероприятия, которые понравятся всем. Рассмотрите направления с достопримечательностями для детей, безопасной средой и мероприятиями, подходящими для всех возрастов.",
    'business': "Для деловых поездок я могу организовать корпоративные бронирования, места для встреч и профессиональные услуги. Какую деловую поездку вы планируете? Я также могу помочь с политиками путешествий, управлением расходами и корпоративными решениями для путешествий.",
    'honeymoon': "Планируете романтическое путешествие? Я могу предложить направления для медового месяца, романтические отели и особые впечатления для пар. Популярные направления для медового месяца включают Мальдивы, Бали, Санторини и тропические острова с частным жильем.",
    'adventure': "Ищете приключения? Я могу порекомендовать направления для походов, дайвинга, катания на лыжах и других захватывающих мероприятий. Какие приключения вас интересуют? Популярные приключенческие направления включают Новую Зеландию, Коста-Рику, Исландию и Непал.",
    'luxury': "Для роскошных путешествий я могу организовать премиум жилье, частные туры и эксклюзивные впечатления. Какое ваше мечтательное роскошное направление? Рассмотрите направления как Дубай, Монако или эксклюзивные курорты на Мальдивах и Сейшелах.",
    'backpacking': "Бэкпекинг с ограниченным бюджетом? Я могу предложить доступные направления, хостелы и бюджетные мероприятия для вашего приключения. Популярные направления для бэкпекинга включают Юго-Восточную Азию, Восточную Европу и Южную Америку.",
    'default': "Как ваш туристический агент, я здесь, чтобы помочь с направлениями, авиабилетами, отелями, турами, визами, страховкой и советами по путешествиям. Что бы вы хотели узнать? Вы можете спросить меня о чем угодно, связанном с планированием путешествий!"
  },
  'ja-JP': {
    'hello': "こんにちは！私はあなたのパーソナル旅行代理店です。次の冒険の計画をどのようにお手伝いできますか？目的地、フライト、ホテル、ツアー、旅行のヒントについてお手伝いできます。旅行計画について何でもお聞かせください！",
    'destinations': "素晴らしい目的地の探索をお手伝いできます！人気の選択肢にはパリ、東京、バリ、ニューヨーク、サントリーニ、ロンドン、ローマ、ドバイが含まれます。どのような体験をお探しですか - 冒険、リラクゼーション、文化、それとも贅沢？予算と旅行スタイルに基づいて目的地もご提案できます。",
    'flights': "フライト予約をお手伝いできます！いつ旅行を計画していますか、予算はいくらですか？あなたに最適なお得な情報を見つけます。直行便がお好みですか、それとも乗り継ぎに柔軟ですか？最大の節約のためのフライト予約のベストタイミングもお手伝いできます。",
    'hotels': "完璧な宿泊施設を見つけるお手伝いをさせてください！高級ホテル、ブティックホテル、予算に優しいオプション、それともオールインクルーシブリゾートがお好みですか？お好みの場所はどこですか - 市街地、ビーチフロント、それとも田舎？特定のニーズと好みに基づいてホテルもご提案できます。",
    'budget': "どの予算でも対応できます！価格帯を教えてください。あなたのニーズに合った素晴らしい目的地と宿泊施設をご提案します。お得な情報や割引を見つけるお手伝いもできます。予算旅行の場合は、より良い価格のためにホステル、Airbnb、またはオフシーズン旅行を検討してください。",
    'weather': "目的地の天気情報を提供できます！どの場所に興味がありますか？天気パターンに基づいて訪問のベストタイミングもご提案できます。ほとんどの目的地には理想的な訪問シーズンがあります - 特定の国々の推奨事項をご希望ですか？",
    'visa': "ビザ要件についてお手伝いできます！どの国を訪問する予定ですか？申請プロセスと必要な書類についてご案内します。ビザ要件は国籍と目的地によって異なります - あなたの状況に特化したガイダンスを提供できます。",
    'insurance': "旅行保険は安心のために不可欠です！医療、旅行キャンセル、手荷物保護を含む包括的なカバレッジを見つけるお手伝いができます。異なるポリシーは異なるシナリオをカバーします - あなたの旅行タイプに基づいて推奨事項をご希望ですか？",
    'packing': "スマートなパッキングをお手伝いします！目的地と期間は何ですか？天気、アクティビティ、現地の習慣に基づいてパーソナライズされたパッキングリストを作成します。アダプター、薬、重要な書類のコピーなどの必需品を忘れないでください！",
    'currency': "通貨交換と支払い方法についてお手伝いできます！どの国を訪問しますか？旅行中の金銭管理の最良の方法についてアドバイスします。外国取引手数料のないクレジットカードの使用を検討し、緊急事態に備えて常にいくらかの現地通貨を持っておいてください。",
    'safety': "あなたの安全が私の優先事項です！目的地の旅行アドバイザリー、現地の習慣、安全のヒントを提供できます。どの国を訪問する予定ですか？異なるタイプの旅行者のための特定の安全情報も共有できます。",
    'tours': "ガイド付きツアーとアクティビティを手配できます！都市観光からアドベンチャーツアーまで、あなたの興味とスケジュールに最適な体験を見つけます。人気のオプションには、フードツアー、文化的体験、アウトドアアドベンチャーが含まれます。",
    'transportation': "現地交通についてお手伝いできます！空港送迎から公共交通機関まで、目的地周辺の最良の移動方法をご案内します。多くの都市では、交通機関や観光地でお金を節約できる観光パスを提供しています。",
    'food': "現地の料理とレストランをお勧めできます！目的地と食べ物の好みを教えてください。必ず試すべき料理とダイニングスポットをご提案します。現地の食べ物はしばしば文化を体験する最良の方法です - 特定の料理の推奨事項をご希望ですか？",
    'family': "家族と旅行していますか？家族全員が楽しめる家族向けの目的地、宿泊施設、アクティビティの計画をお手伝いできます。子供向けのアトラクション、安全な環境、すべての年齢に適したアクティビティのある目的地を検討してください。",
    'business': "ビジネス旅行の場合、企業予約、会議会場、専門サービスを手配できます。どのようなビジネス旅行を計画していますか？旅行ポリシー、経費管理、企業旅行ソリューションでもお手伝いできます。",
    'honeymoon': "ロマンチックな旅行を計画していますか？ハネムーン目的地、ロマンチックなホテル、カップル向けの特別な体験をご提案できます。人気のハネムーン目的地には、マルディブ、バリ、サントリーニ、プライベート宿泊施設のある熱帯の島々が含まれます。",
    'adventure': "冒険を探していますか？ハイキング、ダイビング、スキー、その他のスリリングなアクティビティの目的地をお勧めできます。どのような冒険に興味がありますか？人気の冒険目的地には、ニュージーランド、コスタリカ、アイスランド、ネパールが含まれます。",
    'luxury': "贅沢な旅行の場合、プレミアム宿泊施設、プライベートツアー、エクスクルーシブな体験を手配できます。あなたの夢の贅沢な目的地は何ですか？ドバイ、モナコ、マルディブやセイシェルでのエクスクルーシブリゾートなどの目的地を検討してください。",
    'backpacking': "予算でバックパッキング？あなたの冒険に適した手頃な目的地、ホステル、予算に優しいアクティビティをご提案できます。人気のバックパッキング目的地には、東南アジア、東ヨーロッパ、南アメリカが含まれます。",
    'default': "あなたの旅行代理店として、目的地、フライト、ホテル、ツアー、ビザ、保険、旅行のヒントについてお手伝いします。何を知りたいですか？旅行計画について何でもお聞かせください！"
  }
};

// Function to get travel agent response
function getTravelResponse(userInput, language) {
  const input = userInput.toLowerCase();
  const responses = travelResponses[language] || travelResponses['en-US'];
  
  // Enhanced keyword detection for better travel agent responses
  if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('start')) {
    return responses.hello;
  } else if (input.includes('destination') || input.includes('place') || input.includes('where') || input.includes('country') || input.includes('city') || input.includes('visit')) {
    return responses.destinations;
  } else if (input.includes('flight') || input.includes('airline') || input.includes('fly') || input.includes('booking') || input.includes('airport') || input.includes('ticket')) {
    return responses.flights;
  } else if (input.includes('hotel') || input.includes('accommodation') || input.includes('stay') || input.includes('room') || input.includes('resort') || input.includes('lodge')) {
    return responses.hotels;
  } else if (input.includes('budget') || input.includes('cheap') || input.includes('expensive') || input.includes('cost') || input.includes('price') || input.includes('money') || input.includes('affordable')) {
    return responses.budget;
  } else if (input.includes('weather') || input.includes('climate') || input.includes('temperature') || input.includes('season') || input.includes('rain') || input.includes('sunny')) {
    return responses.weather;
  } else if (input.includes('visa') || input.includes('passport') || input.includes('document') || input.includes('permit') || input.includes('entry')) {
    return responses.visa;
  } else if (input.includes('insurance') || input.includes('cover') || input.includes('protection') || input.includes('safe') || input.includes('secure')) {
    return responses.insurance;
  } else if (input.includes('pack') || input.includes('suitcase') || input.includes('luggage') || input.includes('clothes') || input.includes('what to bring')) {
    return responses.packing;
  } else if (input.includes('currency') || input.includes('money') || input.includes('exchange') || input.includes('dollar') || input.includes('euro') || input.includes('cash')) {
    return responses.currency;
  } else if (input.includes('safe') || input.includes('danger') || input.includes('crime') || input.includes('security') || input.includes('risk')) {
    return responses.safety;
  } else if (input.includes('tour') || input.includes('guide') || input.includes('excursion') || input.includes('activity') || input.includes('sightseeing')) {
    return responses.tours;
  } else if (input.includes('transport') || input.includes('bus') || input.includes('train') || input.includes('taxi') || input.includes('metro') || input.includes('subway')) {
    return responses.transportation;
  } else if (input.includes('food') || input.includes('restaurant') || input.includes('cuisine') || input.includes('dining') || input.includes('eat') || input.includes('meal')) {
    return responses.food;
  } else if (input.includes('family') || input.includes('children') || input.includes('kids') || input.includes('baby') || input.includes('child')) {
    return responses.family;
  } else if (input.includes('business') || input.includes('work') || input.includes('meeting') || input.includes('conference') || input.includes('corporate')) {
    return responses.business;
  } else if (input.includes('honeymoon') || input.includes('romantic') || input.includes('couple') || input.includes('wedding') || input.includes('anniversary')) {
    return responses.honeymoon;
  } else if (input.includes('adventure') || input.includes('hiking') || input.includes('diving') || input.includes('skiing') || input.includes('climbing') || input.includes('trekking')) {
    return responses.adventure;
  } else if (input.includes('luxury') || input.includes('premium') || input.includes('exclusive') || input.includes('high-end') || input.includes('vip')) {
    return responses.luxury;
  } else if (input.includes('backpack') || input.includes('budget') || input.includes('cheap') || input.includes('hostel') || input.includes('economy')) {
    return responses.backpacking;
  } else {
    return responses.default;
  }
} 