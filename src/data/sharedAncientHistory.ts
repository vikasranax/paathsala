import type { Question } from './questions';
import type { Flashcard } from './flashcards';
import type { Note } from './notes';

// Topic id this content is filed under for each exam (matches each exam's syllabus data).
const examTopicMap: Record<string, string> = {
  'upsc-cse': 'history',
  'ssc-cgl': 'ga',
  'rrb-ntpc': 'ga-railway',
  nda: 'gat',
  cds: 'ga-defence',
};

type BaseQuestion = Omit<Question, 'topicId'>;
type BaseNote = Omit<Note, 'topicId'>;

const questions: BaseQuestion[] = [
  // Buddhism
  { id: 'ah-bud-1', text: 'Where was Gautama Buddha born?', options: ['Lumbini', 'Bodh Gaya', 'Sarnath', 'Kushinagar'], correctIndex: 0 },
  { id: 'ah-bud-2', text: 'Buddha delivered his first sermon (Dharmachakra Pravartana) at:', options: ['Bodh Gaya', 'Sarnath', 'Rajgir', 'Vaishali'], correctIndex: 1 },
  { id: 'ah-bud-3', text: 'Buddha attained Mahaparinirvana at:', options: ['Lumbini', 'Kushinagar', 'Sravasti', 'Vaishali'], correctIndex: 1 },
  { id: 'ah-bud-4', text: 'Which of the following is NOT part of the Buddhist Eightfold Path?', options: ['Right livelihood', 'Right mindfulness', 'Right ritual', 'Right speech'], correctIndex: 2 },
  { id: 'ah-bud-5', text: 'Who presided over the Third Buddhist Council held at Pataliputra under Ashoka?', options: ['Mahakassapa', 'Sabakami', 'Vasumitra', 'Moggaliputta Tissa'], correctIndex: 3 },
  { id: 'ah-bud-6', text: 'The Second Buddhist Council at Vaishali led to the split of the Sangha into:', options: ['Hinayana and Mahayana', 'Sthaviravadins and Mahasanghikas', 'Digambaras and Shvetambaras', 'Theravada and Vajrayana'], correctIndex: 1 },
  { id: 'ah-bud-7', text: 'Buddhacharita, a Sanskrit biography of the Buddha, was composed by:', options: ['Nagarjuna', 'Ashvaghosha', 'Vasubandhu', 'Asanga'], correctIndex: 1 },
  { id: 'ah-bud-8', text: 'The Pali Tripitaka consists of the Vinaya Pitaka, the Sutta Pitaka and the:', options: ['Jataka Pitaka', 'Abhidhamma Pitaka', 'Dhammapada Pitaka', 'Milinda Pitaka'], correctIndex: 1 },
  { id: 'ah-bud-9', text: 'The First Buddhist Council at Rajgriha was held under the patronage of:', options: ['Bimbisara', 'Ajatashatru', 'Ashoka', 'Kanishka'], correctIndex: 1 },
  { id: 'ah-bud-10', text: "In early Buddhist art, the horse symbolises which event in the Buddha's life?", options: ['His birth', 'His Great Renunciation', 'His enlightenment', 'His death'], correctIndex: 1 },

  // Jainism
  { id: 'ah-jain-1', text: 'Mahavira, the 24th Tirthankara, was born at Kundagrama near:', options: ['Vaishali', 'Pataliputra', 'Kaushambi', 'Varanasi'], correctIndex: 0 },
  { id: 'ah-jain-2', text: 'Who was the first Tirthankara of Jainism?', options: ['Parshvanatha', 'Rishabhanatha', 'Neminatha', 'Mahavira'], correctIndex: 1 },
  { id: 'ah-jain-3', text: 'The emblem (lanchana) of Mahavira is the:', options: ['Bull', 'Snake', 'Lion', 'Elephant'], correctIndex: 2 },
  { id: 'ah-jain-4', text: 'Which vow did Mahavira add to the four vows taught by Parshvanatha?', options: ['Ahimsa', 'Brahmacharya', 'Satya', 'Asteya'], correctIndex: 1 },
  { id: 'ah-jain-5', text: 'Which of these is part of the Jain Triratna?', options: ['Right livelihood', 'Right faith', 'Right mindfulness', 'Right effort'], correctIndex: 1 },
  { id: 'ah-jain-6', text: 'Mahavira attained Kevala Jnana (omniscience) under a:', options: ['Peepal tree', 'Sal tree', 'Banyan tree', 'Ashoka tree'], correctIndex: 1 },
  { id: 'ah-jain-7', text: 'Mahavira attained nirvana at:', options: ['Pavapuri', 'Kushinagar', 'Shravanabelagola', 'Sarnath'], correctIndex: 0 },
  { id: 'ah-jain-8', text: 'According to tradition, which Jain monk migrated south, leading to the Digambara–Shvetambara division?', options: ['Sthulabhadra', 'Bhadrabahu', 'Jamali', 'Hemachandra'], correctIndex: 1 },
  { id: 'ah-jain-9', text: 'The colossal Gomateshwara (Bahubali) statue at Shravanabelagola was commissioned by:', options: ['Chamundaraya', 'Amoghavarsha', 'Kharavela', 'Vimala Shah'], correctIndex: 0 },
  { id: 'ah-jain-10', text: 'The Hathigumpha inscription near Bhubaneswar belongs to the Jain-patron king:', options: ['Kharavela', 'Ashoka', 'Rudradaman', 'Samudragupta'], correctIndex: 0 },

  // Gupta Empire
  { id: 'ah-gup-1', text: 'The Gupta era began in approximately:', options: ['78 CE', '319–320 CE', '57 BCE', '606 CE'], correctIndex: 1 },
  { id: 'ah-gup-2', text: 'Which Gupta ruler is often called the "Napoleon of India"?', options: ['Chandragupta I', 'Samudragupta', 'Chandragupta II', 'Skandagupta'], correctIndex: 1 },
  { id: 'ah-gup-3', text: 'The Prayag Prashasti (Allahabad Pillar inscription) was composed by:', options: ['Harishena', 'Kalidasa', 'Ravikirti', 'Banabhatta'], correctIndex: 0 },
  { id: 'ah-gup-4', text: 'The Chinese pilgrim Fa-Hien visited India during the reign of:', options: ['Samudragupta', 'Chandragupta II', 'Kumaragupta I', 'Harshavardhana'], correctIndex: 1 },
  { id: 'ah-gup-5', text: 'Nalanda Mahavihara is traditionally credited to which Gupta ruler?', options: ['Chandragupta I', 'Kumaragupta I', 'Samudragupta', 'Skandagupta'], correctIndex: 1 },
  { id: 'ah-gup-6', text: 'Which Gupta ruler repulsed the Huna invasion?', options: ['Chandragupta II', 'Skandagupta', 'Kumaragupta I', 'Budhagupta'], correctIndex: 1 },
  { id: 'ah-gup-7', text: 'Aryabhata, author of the Aryabhatiya (499 CE), belonged to which period?', options: ['Maurya', 'Gupta', 'Kushana', 'Chola'], correctIndex: 1 },
  { id: 'ah-gup-8', text: 'The common name for Gupta gold coins was:', options: ['Dinara', 'Karshapana', 'Nishka', 'Tanka'], correctIndex: 0 },
  { id: 'ah-gup-9', text: 'Which Gupta ruler married the Lichchhavi princess Kumaradevi?', options: ['Samudragupta', 'Chandragupta I', 'Ghatotkacha', 'Chandragupta II'], correctIndex: 1 },
  { id: 'ah-gup-10', text: "Some of Samudragupta's coins show him playing the:", options: ['Flute', 'Veena', 'Sitar', 'Drum'], correctIndex: 1 },
];

const flashcards: Flashcard[] = [
  { id: 'ah-fc-1', front: 'Four Noble Truths (Buddhism)', back: 'Dukkha (life involves suffering), Samudaya (suffering arises from craving), Nirodha (suffering can end), Magga (the Eightfold Path is the way to end it).' },
  { id: 'ah-fc-2', front: 'Buddhist Eightfold Path', back: 'Right view, right intention, right speech, right action, right livelihood, right effort, right mindfulness, right concentration.' },
  { id: 'ah-fc-3', front: 'Triratna of Buddhism', back: 'The Buddha, the Dhamma (his teaching) and the Sangha (the monastic community).' },
  { id: 'ah-fc-4', front: 'Four Buddhist Councils: place and president', back: 'I: Rajgriha, Mahakassapa. II: Vaishali, Sabakami. III: Pataliputra, Moggaliputta Tissa. IV: Kundalavana (Kashmir), Vasumitra with Ashvaghosha as vice-president.' },
  { id: 'ah-fc-5', front: 'Five Mahavratas of Jainism', back: 'Ahimsa, Satya, Asteya, Aparigraha and Brahmacharya. Parshvanatha taught the first four; Mahavira added Brahmacharya.' },
  { id: 'ah-fc-6', front: 'Jain Triratna', back: 'Samyak Darshan (right faith), Samyak Jnana (right knowledge) and Samyak Charitra (right conduct).' },
  { id: 'ah-fc-7', front: 'Digambara vs Shvetambara', back: "Digambara means 'sky-clad' (southern group linked with Bhadrabahu). Shvetambara means 'white-clad' (followers of Sthulabhadra in the north)." },
  { id: 'ah-fc-8', front: 'Syadvada / Anekantavada', back: "The Jain doctrine that truth has many sides, so any statement is true only from a certain standpoint (the 'may be' approach)." },
  { id: 'ah-fc-9', front: 'Parshvanatha', back: '23rd Jain Tirthankara, a prince of Kashi (Varanasi). His emblem is the snake, and he taught four vows (chaturyama).' },
  { id: 'ah-fc-10', front: 'Gupta provincial administration', back: 'Empire divided into Bhuktis (governed by Uparikas), then Vishayas (headed by Vishayapatis), then villages (headed by Gramikas).' },
  { id: 'ah-fc-11', front: 'Famous Gupta-period writers and works', back: 'Kalidasa (Abhijnanashakuntalam, Meghaduta), Shudraka (Mrichchhakatika), Vishakhadatta (Mudrarakshasa), Amarasimha (Amarakosha).' },
  { id: 'ah-fc-12', front: 'Prayag Prashasti', back: "Allahabad Pillar inscription composed by Harishena, court poet of Samudragupta. It lists his conquests and is on an Ashokan pillar." },
  { id: 'ah-fc-13', front: 'Fa-Hien', back: "Chinese Buddhist pilgrim who visited India c. 399–414 CE during Chandragupta II's reign." },
];

const notes: BaseNote[] = [
  {
    id: 'ah-note-buddhism',
    title: 'Buddhism: Life, Teachings and Councils',
    sections: [
      {
        heading: 'Life of the Buddha',
        body: 'Siddhartha Gautama was born around 563 BCE at Lumbini (in present-day Nepal) into the Shakya clan, the son of Suddhodana, chief of Kapilavastu, and Mahamaya. He married Yashodhara and had a son, Rahula. The sight of an old man, a sick man, a dead body and an ascetic led him to leave home at about 29 (the Mahabhinishkramana, or Great Renunciation). After years of searching he attained enlightenment at about 35 under a peepal tree at Bodh Gaya, on the banks of the Niranjana river. He gave his first sermon to five ascetics at Sarnath (Dharmachakra Pravartana) and passed away at Kushinagar at the age of 80 (Mahaparinirvana). These dates are the commonly taught textbook dates and are approximate; some modern scholarship places his life somewhat later.',
      },
      {
        heading: 'Core Teachings',
        body: 'The Buddha taught the Middle Path between extreme indulgence and extreme asceticism. The Four Noble Truths state that life involves suffering (dukkha), that suffering arises from craving (samudaya), that it can be ended (nirodha), and that the way to end it is the Eightfold Path (magga). The Eightfold Path comprises right view, right intention, right speech, right action, right livelihood, right effort, right mindfulness and right concentration. Other key ideas are impermanence (anicca), the absence of a permanent self (anatta), karma and rebirth, and nirvana as freedom from the cycle of rebirth. Buddhism did not accept the authority of the Vedas or birth-based caste hierarchy, and the Buddha taught in Pali, a language of the common people. The Triratna, or Three Jewels, are the Buddha, the Dhamma and the Sangha.',
      },
      {
        heading: 'Councils, Schools and Spread',
        body: 'Four councils are asked about most often. First: Rajgriha, under Ajatashatru, presided by Mahakassapa, where Ananda recited the Sutta and Upali the Vinaya. Second: Vaishali, under Kalashoka, presided by Sabakami, where the Sangha split into Sthaviravadins and Mahasanghikas. Third: Pataliputra, under Ashoka, presided by Moggaliputta Tissa, where the Abhidhamma Pitaka was compiled and missionaries were sent abroad, including Mahinda and Sanghamitta to Sri Lanka. Fourth: Kundalavana in Kashmir, under Kanishka, presided by Vasumitra with Ashvaghosha as vice-president, associated with the rise of Mahayana. The Pali Tripitaka has three parts: Vinaya (monastic rules), Sutta (discourses) and Abhidhamma (philosophy). Later schools are Theravada (Hinayana), Mahayana (bodhisattvas and image worship) and Vajrayana. Important centres of learning were Taxila, Nalanda and Vikramashila, and Buddhist art flourished at Sanchi, Bharhut, Amaravati, Ajanta and in the Gandhara and Mathura schools.',
      },
    ],
  },
  {
    id: 'ah-note-jainism',
    title: 'Jainism: Tirthankaras, Doctrine and Sects',
    sections: [
      {
        heading: 'Tirthankaras and Mahavira',
        body: 'Jain tradition counts 24 Tirthankaras (ford-makers). The first was Rishabhanatha (Adinath), whose emblem is the bull. The 23rd, Parshvanatha, a prince of Kashi (Varanasi) whose emblem is the snake, taught four vows (chaturyama): non-violence, truth, non-stealing and non-possession. Vardhamana Mahavira, the 24th, was born around 540 BCE at Kundagrama near Vaishali into the Jnatrika clan; his father was Siddhartha and his mother Trishala, a Lichchhavi princess. He left home at 30, practised severe austerity for 12 years, and attained Kevala Jnana (omniscience) at about 42 under a sal tree on the bank of the Rijupalika river. He preached for about 30 years and died at Pavapuri, near Rajgir, around 468 BCE at the age of 72. His emblem is the lion.',
      },
      {
        heading: 'Doctrine',
        body: "Jain ethics rests on the Triratna: right faith (samyak darshan), right knowledge (samyak jnana) and right conduct (samyak charitra). Mahavira added a fifth vow, brahmacharya, to Parshvanatha's four, giving the five Mahavratas: ahimsa, satya, asteya, aparigraha and brahmacharya. Monks follow these strictly, while lay followers observe a milder set called Anuvratas. Jainism teaches that the universe has no creator god; it consists of souls (jiva) and non-living matter (ajiva), and karma is a subtle matter that binds the soul. Liberation (moksha) comes by ending karmic bondage through austerity and right conduct. Ahimsa is its most prominent principle. Anekantavada and Syadvada hold that truth has many sides, so any statement is true only from a particular standpoint. Early Jain texts are in Prakrit (Ardhamagadhi), and ascetics may end life by sallekhana, a ritual fast.",
      },
      {
        heading: 'Sects, Councils and Patronage',
        body: "According to tradition, a famine in Magadha around 300 BCE led Bhadrabahu to migrate south to Shravanabelagola in Karnataka with his followers; Chandragupta Maurya is said to have accompanied him. Those who stayed behind under Sthulabhadra began wearing white clothes, giving the Shvetambara ('white-clad') sect, while the southern group remained unclothed as the Digambara ('sky-clad') sect. The first Jain council at Pataliputra, under Sthulabhadra, compiled the twelve Angas. The second, at Vallabhi in Gujarat around 512 CE under Devardhi Kshamashramana, gave the canon its final written form. Jainism received royal patronage from Magadhan kings such as Bimbisara and Ajatashatru, from Kharavela of Kalinga (Hathigumpha inscription), the Ganga dynasty, the Rashtrakutas (Amoghavarsha) and the Solankis. Famous monuments include the Dilwara temples at Mount Abu, the Gomateshwara statue at Shravanabelagola (c. 981 CE, commissioned by Chamundaraya), the Jain temples at Khajuraho and the Udayagiri–Khandagiri caves in Odisha.",
      },
    ],
  },
  {
    id: 'ah-note-gupta',
    title: 'The Gupta Empire: Rulers, Administration and Culture',
    sections: [
      {
        heading: 'Rulers of the Dynasty',
        body: "The founder was Sri Gupta (c. 240–280 CE), followed by Ghatotkacha. Chandragupta I (c. 319–335 CE) married the Lichchhavi princess Kumaradevi, took the title Maharajadhiraja and is linked with the start of the Gupta era (319–320 CE). Samudragupta (c. 335–375 CE), called the Napoleon of India by V. A. Smith, is known from the Prayag Prashasti (Allahabad Pillar inscription) composed by his court poet Harishena. He uprooted rulers of Aryavarta, defeated twelve kings of Dakshinapatha but reinstated them, performed the Ashvamedha sacrifice, and issued coins showing him playing the veena. Chandragupta II Vikramaditya (c. 375–415 CE) defeated the Western Kshatrapas (Shakas), married his daughter Prabhavatigupta to the Vakataka king Rudrasena II, and ruled when the Chinese pilgrim Fa-Hien visited (c. 399–414 CE). Kumaragupta I (c. 415–455 CE) is credited with founding Nalanda. Skandagupta (c. 455–467 CE) repulsed the Huna invasion, and his governor repaired the Sudarshana lake, as recorded in the Junagadh inscription. Weak successors, further Huna attacks (Toramana and Mihirakula) and the rise of regional powers ended the empire by the mid-6th century.",
      },
      {
        heading: 'Administration and Economy',
        body: 'The king, with the title Maharajadhiraja, was assisted by ministers and officials such as the Sandhivigrahika (minister for war and peace), the Mahadandanayaka and the Kumaramatyas. The empire was divided into provinces called bhuktis (governed by uparikas), which were divided into vishayas (headed by vishayapatis) and villages (headed by gramikas). The Guptas issued a large number of gold coins called Dinaras, though the purity of gold declined in later reigns. Land grants to Brahmanas and religious institutions became common, with administrative and judicial rights often passing to the grantees, a trend that fed the growth of feudal structures. Overseas trade, especially with Southeast Asia, continued, while forced labour (vishti) was imposed on peasants. Fa-Hien described a prosperous and peaceful empire with mild punishments.',
      },
      {
        heading: 'Culture, Science and Art',
        body: "The period is often called a Golden Age, a label popularised by V. A. Smith and nationalist historians, though modern historians debate it. Sanskrit literature flourished: Kalidasa (Abhijnanashakuntalam, Meghaduta, Raghuvamsha), Shudraka (Mrichchhakatika), Vishakhadatta (Mudrarakshasa) and Amarasimha (Amarakosha). The Puranas and several Smritis took their present form. In science, Aryabhata wrote the Aryabhatiya (499 CE) and stated that the earth rotates on its axis, and Varahamihira wrote the Brihat Samhita and the Panchasiddhantika. Notable art and architecture includes the Dashavatara temple at Deogarh, the brick temple at Bhitargaon, the Sarnath Buddha image, the paintings at Ajanta, and the rust-resistant iron pillar at Mehrauli, usually linked with Chandragupta II. Nalanda became a major centre of Buddhist learning.",
      },
    ],
  },
];

export function getAncientHistoryQuestions(examId: string): Question[] {
  const topicId = examTopicMap[examId];
  if (!topicId) return [];
  return questions.map((q) => ({ ...q, topicId }));
}

export function getAncientHistoryFlashcards(examId: string): Flashcard[] {
  return examTopicMap[examId] ? flashcards : [];
}

export function getAncientHistoryNotes(examId: string): Note[] {
  const topicId = examTopicMap[examId];
  if (!topicId) return [];
  return notes.map((n) => ({ ...n, topicId }));
}
