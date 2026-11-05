import type { ContentPack } from './contentPacks';
import { pts } from './packHelpers';

export const geographyPack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'geography',
    'ssc-cgl': 'ga',
    'rrb-ntpc': 'ga-railway',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    { id: 'geo-1', text: 'The highest mountain peak located in India is:', options: ['Kangchenjunga', 'Nanda Devi', 'Mount Everest', 'Anamudi'], correctIndex: 0 },
    { id: 'geo-2', text: 'The longest peninsular river of India is:', options: ['Krishna', 'Godavari', 'Kaveri', 'Narmada'], correctIndex: 1 },
    { id: 'geo-3', text: "The 'Sorrow of Bihar' is the river:", options: ['Gandak', 'Kosi', 'Son', 'Ghaghara'], correctIndex: 1 },
    { id: 'geo-4', text: 'The Tropic of Cancer passes through how many Indian states?', options: ['6', '7', '8', '9'], correctIndex: 2 },
    { id: 'geo-5', text: 'Indian Standard Time is based on the longitude of:', options: ['68°E', '82.5°E', '90°E', '97°E'], correctIndex: 1 },
    { id: 'geo-6', text: 'The highest peak of the Western Ghats and peninsular India is:', options: ['Doddabetta', 'Anamudi', 'Mahendragiri', 'Dhupgarh'], correctIndex: 1 },
    { id: 'geo-7', text: 'Black (regur) soil is best suited for:', options: ['Cotton', 'Tea', 'Jute', 'Coffee'], correctIndex: 0 },
    { id: 'geo-8', text: 'The most widespread soil group in India is:', options: ['Black soil', 'Red soil', 'Alluvial soil', 'Laterite soil'], correctIndex: 2 },
    { id: 'geo-9', text: 'The southwest monsoon first reaches the Indian mainland at:', options: ['Kerala', 'Goa', 'Mumbai', 'Chennai'], correctIndex: 0 },
    { id: 'geo-10', text: 'Most of the rainfall on the Coromandel coast comes from the:', options: ['Southwest monsoon', 'Northeast (retreating) monsoon', 'Western disturbances', 'Norwesters'], correctIndex: 1 },
    { id: 'geo-11', text: 'Winter rain in north-western India is mainly caused by:', options: ['Western disturbances', 'Southwest monsoon', 'Loo', 'Mango showers'], correctIndex: 0 },
    { id: 'geo-12', text: 'The largest Indian state by area is:', options: ['Madhya Pradesh', 'Rajasthan', 'Maharashtra', 'Uttar Pradesh'], correctIndex: 1 },
    { id: 'geo-13', text: 'Chilika Lake, a large coastal lagoon, is in:', options: ['Andhra Pradesh', 'Odisha', 'Tamil Nadu', 'West Bengal'], correctIndex: 1 },
    { id: 'geo-14', text: "Sambhar Lake, India's largest inland saline lake, is in:", options: ['Gujarat', 'Rajasthan', 'Haryana', 'Madhya Pradesh'], correctIndex: 1 },
    { id: 'geo-15', text: 'The Sundarbans mangroves lie in the delta of the:', options: ['Mahanadi', 'Godavari-Krishna', 'Ganga-Brahmaputra', 'Kaveri'], correctIndex: 2 },
    { id: 'geo-16', text: 'The largest tea-producing state of India is:', options: ['Assam', 'West Bengal', 'Kerala', 'Tamil Nadu'], correctIndex: 0 },
    { id: 'geo-17', text: 'Which pair of rivers flows westward into the Arabian Sea?', options: ['Narmada and Tapi', 'Godavari and Krishna', 'Mahanadi and Kaveri', 'Ganga and Yamuna'], correctIndex: 0 },
    { id: 'geo-18', text: "'Dakshin Ganga' is the popular name of:", options: ['Krishna', 'Godavari', 'Kaveri', 'Tungabhadra'], correctIndex: 1 },
    { id: 'geo-19', text: 'The Palk Strait separates India from:', options: ['Maldives', 'Sri Lanka', 'Myanmar', 'Indonesia'], correctIndex: 1 },
    { id: 'geo-20', text: 'The southernmost point of Indian territory is:', options: ['Kanyakumari', 'Indira Point', 'Rameswaram', 'Minicoy'], correctIndex: 1 },
    { id: 'geo-21', text: 'The Himalayan range lying between the Greater Himalaya and the Shiwaliks is the:', options: ['Karakoram', 'Himachal (Lesser Himalaya)', 'Purvanchal', 'Zanskar'], correctIndex: 1 },
    { id: 'geo-22', text: 'Zoji La connects Srinagar with:', options: ['Leh', 'Shimla', 'Gangtok', 'Dehradun'], correctIndex: 0 },
    { id: 'geo-23', text: 'Nathu La pass is located in:', options: ['Himachal Pradesh', 'Sikkim', 'Arunachal Pradesh', 'Uttarakhand'], correctIndex: 1 },
    { id: 'geo-24', text: 'Which state has the longest coastline in India?', options: ['Gujarat', 'Andhra Pradesh', 'Tamil Nadu', 'Maharashtra'], correctIndex: 0 },
    { id: 'geo-25', text: 'The Jharia coalfield is in:', options: ['Odisha', 'Jharkhand', 'Chhattisgarh', 'West Bengal'], correctIndex: 1 },
    { id: 'geo-26', text: 'The Kolar Gold Fields are in:', options: ['Karnataka', 'Andhra Pradesh', 'Jharkhand', 'Rajasthan'], correctIndex: 0 },
    { id: 'geo-27', text: 'Which of these is a Kharif crop?', options: ['Wheat', 'Rice', 'Mustard', 'Barley'], correctIndex: 1 },
    { id: 'geo-28', text: 'Which of these is a Rabi crop?', options: ['Cotton', 'Maize', 'Wheat', 'Bajra'], correctIndex: 2 },
    { id: 'geo-29', text: 'The Green Revolution in India is most closely associated with:', options: ['High-yielding variety seeds', 'Mechanised cotton mills', 'Nationalised banks', 'Special economic zones'], correctIndex: 0 },
    { id: 'geo-30', text: 'Which place is commonly cited as receiving the highest average annual rainfall in India?', options: ['Mawsynram', 'Shillong', 'Ooty', 'Mumbai'], correctIndex: 0 },
  ],

  flashcards: [
    { id: 'geo-fc-1', front: 'Physiographic divisions of India', back: 'Northern Mountains (Himalaya), Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains and Islands.' },
    { id: 'geo-fc-2', front: 'Himalayan ranges, north to south', back: 'Greater Himalaya (Himadri), Lesser Himalaya (Himachal) and Outer Himalaya (Shiwaliks).' },
    { id: 'geo-fc-3', front: 'Soils and their crops', back: 'Alluvial: wheat, rice, sugarcane. Black: cotton. Red: millets and pulses. Laterite: tea, coffee, cashew. Arid: bajra and other millets.' },
    { id: 'geo-fc-4', front: 'The four seasons of India', back: 'Winter (December-February), summer (March-May), southwest monsoon (June-September) and retreating monsoon (October-November).' },
    { id: 'geo-fc-5', front: 'Local winds and storms', back: 'Loo: hot dry wind of the northern plains in summer. Kalbaisakhi (Norwesters): pre-monsoon thunderstorms in Bengal and Assam. Mango showers: pre-monsoon showers in Kerala and Karnataka.' },
    { id: 'geo-fc-6', front: 'West-flowing vs east-flowing peninsular rivers', back: 'Narmada and Tapi flow west through rift valleys and form estuaries. Mahanadi, Godavari, Krishna and Kaveri flow east and form deltas.' },
    { id: 'geo-fc-7', front: 'Tributaries of the Indus system', back: 'Jhelum, Chenab, Ravi, Beas and Sutlej; Punjab means the land of five waters.' },
    { id: 'geo-fc-8', front: 'Kharif, Rabi and Zaid crops', back: 'Kharif (June-October): rice, maize, cotton, jowar, bajra. Rabi (October-March): wheat, barley, gram, mustard. Zaid (March-June): watermelon, cucumber, fodder.' },
    { id: 'geo-fc-9', front: 'Green Revolution', back: 'Began in the 1960s with high-yielding seeds, fertilisers and irrigation, mainly in Punjab, Haryana and western Uttar Pradesh; wheat gained first. M. S. Swaminathan is called its father in India.' },
    { id: 'geo-fc-10', front: 'States on the Tropic of Cancer', back: 'Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram.' },
    { id: 'geo-fc-11', front: 'Major mountain passes', back: 'Zoji La (Srinagar-Leh), Banihal (Jammu-Srinagar), Rohtang (Himachal), Nathu La and Jelep La (Sikkim), Shipki La (Himachal-Tibet).' },
    { id: 'geo-fc-12', front: 'Public sector steel plants and partners', back: 'Bhilai (USSR), Rourkela (West Germany), Durgapur (UK) and Bokaro (USSR). Jamshedpur is the older private TISCO plant.' },
  ],

  notes: [
    {
      id: 'geo-note-physical',
      title: 'Physical Features and Drainage of India',
      sections: [
        {
          heading: 'Physiographic Divisions',
          body: pts([
            'Six divisions: the Himalayan mountains, the Northern Plains, the Peninsular Plateau, the Indian Desert, the Coastal Plains and the Islands.',
            'The Himalaya has three parallel ranges: Greater Himalaya (Himadri), Lesser Himalaya (Himachal) and Outer Himalaya (Shiwaliks).',
            'The Northern Plains are alluvial plains built by the Indus, Ganga and Brahmaputra systems; the main belts are Bhabar, Terai, Bhangar (old alluvium) and Khadar (new alluvium).',
            'The Peninsular Plateau is the oldest landmass, with the Central Highlands and the Deccan Plateau.',
            'The Western Ghats are higher and continuous; the Eastern Ghats are broken by rivers such as the Godavari and Krishna.',
            'The Thar Desert lies mainly in Rajasthan; the Luni is its only significant river.',
            'Coasts: the western coast (Konkan, Kannad, Malabar) and the eastern coast (Northern Circars and Coromandel). Islands: Andaman and Nicobar in the Bay of Bengal and Lakshadweep (coral) in the Arabian Sea.',
          ]),
        },
        {
          heading: 'Drainage Systems',
          body: pts([
            'Himalayan rivers are perennial because they are fed by snow and rain; peninsular rivers are mostly seasonal.',
            'Indus system: the Jhelum, Chenab, Ravi, Beas and Sutlej join the Indus.',
            'Ganga system: the Yamuna, Ghaghara, Gandak, Kosi and Son are major tributaries.',
            'The Brahmaputra rises in Tibet (as the Tsangpo) and enters India in Arunachal Pradesh as the Siang or Dihang.',
            'West-flowing rivers: Narmada and Tapi (through rift valleys, forming estuaries), plus the Mahi and Sabarmati.',
            'East-flowing rivers: Mahanadi, Godavari, Krishna and Kaveri form deltas on the east coast.',
            'The Godavari is the longest peninsular river and is called Dakshin Ganga.',
          ]),
        },
        {
          heading: 'Lakes, Passes and Extremes',
          body: pts([
            'Chilika (Odisha) is a large coastal lagoon; Sambhar (Rajasthan) is the largest inland saline lake.',
            'Passes: Zoji La (Srinagar-Leh), Banihal (Jammu-Srinagar), Rohtang (Himachal), Nathu La and Jelep La (Sikkim), Shipki La (Himachal).',
            'Kangchenjunga is the highest peak in India; Anamudi is the highest peak of peninsular India.',
            'Rajasthan is the largest state by area and Goa the smallest.',
            'Indira Point on Great Nicobar is the southernmost point of Indian territory.',
            'Mawsynram in Meghalaya is commonly cited as the wettest place in India.',
          ]),
        },
      ],
    },
    {
      id: 'geo-note-climate',
      title: 'Climate, Monsoon, Soils and Vegetation',
      sections: [
        {
          heading: 'Climate and the Monsoon',
          body: pts([
            'India has a tropical monsoon climate with four seasons.',
            'The southwest monsoon reaches Kerala around 1 June and covers the country by mid-July; it withdraws from October.',
            'The retreating (northeast) monsoon brings most of the rainfall to the Tamil Nadu coast (Coromandel).',
            'Western disturbances bring winter rain to north-western India, which helps the Rabi wheat crop.',
            'Loo is a hot, dry summer wind of the northern plains.',
            'Kalbaisakhi (Norwesters) are pre-monsoon thunderstorms in Bengal and Assam; mango showers fall in Kerala and Karnataka.',
            'El Nino years are generally associated with a weaker monsoon.',
          ]),
        },
        {
          heading: 'Soils',
          body: pts([
            'Alluvial soil is the most widespread and most fertile in the Ganga-Brahmaputra plains; wheat, rice and sugarcane grow well.',
            'Black (regur) soil forms from basalt in the Deccan; it holds moisture and suits cotton.',
            'Red soil gets its colour from iron oxide and suits millets and pulses.',
            'Laterite soil forms under heavy rain with leaching; it supports tea, coffee and cashew.',
            'Arid (desert) soil is sandy and low in humus; saline soils occur in parts of Gujarat, Rajasthan and Punjab.',
            'Mountain and forest soils vary with altitude.',
          ]),
        },
        {
          heading: 'Natural Vegetation',
          body: pts([
            'Tropical evergreen forests occur in areas of very heavy rain (above about 200 cm), such as the Western Ghats and Assam.',
            'Tropical deciduous (monsoon) forests are the most widespread; teak and sal are typical trees.',
            'Thorny scrub forests grow in arid and semi-arid regions such as Rajasthan.',
            'Montane forests change with altitude in the Himalaya.',
            'Mangroves grow in coastal deltas; the Sundarbans in the Ganga-Brahmaputra delta is the largest mangrove forest.',
          ]),
        },
      ],
    },
    {
      id: 'geo-note-resources',
      title: 'Agriculture, Minerals and Industry',
      sections: [
        {
          heading: 'Agriculture',
          body: pts([
            'Cropping seasons: Kharif (June-October), Rabi (October-March) and Zaid (March-June).',
            'Rice and cotton are mainly Kharif crops; wheat, barley and mustard are Rabi crops.',
            'Assam leads in tea; West Bengal in jute; Uttar Pradesh in wheat and sugarcane; Gujarat and Maharashtra are leading cotton producers.',
            'Green Revolution (1960s): high-yielding seeds, fertilisers and irrigation in Punjab, Haryana and western Uttar Pradesh.',
            'White Revolution (Operation Flood) increased milk output; Verghese Kurien is called its architect.',
          ]),
        },
        {
          heading: 'Minerals and Energy',
          body: pts([
            'Coal: Jharkhand (Jharia), West Bengal (Raniganj), Odisha and Chhattisgarh.',
            'Iron ore: Odisha, Jharkhand, Chhattisgarh and Karnataka; bauxite: Odisha is the largest producer.',
            'Copper: Khetri (Rajasthan) and Malanjkhand (Madhya Pradesh); gold: Kolar and Hutti (Karnataka).',
            'Mica: Jharkhand, Andhra Pradesh and Rajasthan.',
            'Petroleum: Digboi in Assam is the oldest oilfield; Mumbai High is the major offshore field.',
          ]),
        },
        {
          heading: 'Industry and Transport',
          body: pts([
            'Steel plants: Bhilai (USSR), Rourkela (West Germany), Durgapur (UK), Bokaro (USSR); Jamshedpur (TISCO) is private.',
            'The Golden Quadrilateral highway connects Delhi, Mumbai, Chennai and Kolkata.',
            'NH 44 (Srinagar to Kanyakumari) is the longest national highway.',
            'Cotton textiles are concentrated in Gujarat and Maharashtra, and jute mills along the Hooghly in West Bengal.',
          ]),
        },
      ],
    },
  ],
};
