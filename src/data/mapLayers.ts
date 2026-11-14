import type { StateId } from './stateTiles';

export type MapItem = {
  id: string;
  label: string;
  states: StateId[];
  leaders?: StateId[];
  note: string;
};

export type MapGroup = { id: string; label: string; blurb: string; items: MapItem[] };

export const mapGroups: MapGroup[] = [
  {
    id: 'political',
    label: 'Political',
    blurb: 'Coasts, borders and Union Territories. Tap any tile for its name and capital.',
    items: [
      { id: 'coastal', label: 'Coastal states', states: ['gj', 'mh', 'ga', 'ka', 'kl', 'tn', 'ap', 'od', 'wb'], note: 'Nine states touch the sea. Gujarat has the longest mainland coastline.' },
      { id: 'landlocked', label: 'Landlocked states', states: ['ar', 'as', 'br', 'cg', 'hr', 'hp', 'jh', 'mp', 'mn', 'ml', 'mz', 'nl', 'pb', 'rj', 'sk', 'tg', 'tr', 'up', 'uk'], note: 'Nineteen states have no coastline.' },
      { id: 'ut', label: 'Union Territories', states: ['an', 'ch', 'dn', 'dl', 'jk', 'la', 'ld', 'py'], note: 'Eight Union Territories. Jammu and Kashmir and Ladakh became Union Territories in 2019, and the two territories of Dadra and Nagar Haveli and Daman and Diu merged in 2020.' },
      { id: 'intl-border', label: 'International land borders', states: ['gj', 'rj', 'pb', 'hp', 'uk', 'up', 'br', 'sk', 'wb', 'as', 'ar', 'nl', 'mn', 'mz', 'ml', 'tr', 'jk', 'la'], note: 'Sixteen states and the two northern Union Territories share a land border with another country. Check an atlas for which country borders which.' },
      { id: 'second-seat', label: 'Second seats and shared capitals', states: ['hp', 'uk', 'mh', 'jk', 'pb', 'hr', 'ch'], note: 'Chandigarh is the capital of both Punjab and Haryana. Himachal Pradesh (Dharamshala), Uttarakhand (Gairsain), Maharashtra (Nagpur winter session) and Jammu and Kashmir (Srinagar and Jammu) use a second city.' },
    ],
  },
  {
    id: 'food',
    label: 'Crops and food',
    blurb: 'Leading producing states. A star marks the state that usually leads.',
    items: [
      { id: 'rice', label: 'Rice', states: ['wb', 'up', 'pb', 'ap', 'od', 'br', 'tg', 'cg', 'tn'], note: 'West Bengal and Uttar Pradesh are the two largest producers in most years. A Kharif crop.' },
      { id: 'wheat', label: 'Wheat', states: ['up', 'mp', 'pb', 'hr', 'rj', 'br', 'gj'], leaders: ['up'], note: 'Uttar Pradesh is the largest producer. A Rabi crop, strongest in the Ganga-Yamuna plains.' },
      { id: 'maize', label: 'Maize', states: ['ka', 'mp', 'mh', 'br', 'tg', 'tn'], note: 'Karnataka and Madhya Pradesh are among the largest producers.' },
      { id: 'millets', label: 'Millets', states: ['rj', 'mh', 'ka', 'up', 'hr', 'gj', 'tn'], note: 'Bajra: Rajasthan. Jowar: Maharashtra. Ragi: Karnataka.' },
      { id: 'pulses', label: 'Pulses', states: ['mp', 'rj', 'mh', 'up', 'ka'], leaders: ['mp'], note: 'Madhya Pradesh is the largest producer.' },
      { id: 'oilseeds', label: 'Oilseeds', states: ['gj', 'rj', 'mp', 'ka', 'mh', 'ap', 'tg', 'tn'], note: 'Groundnut: Gujarat. Mustard: Rajasthan. Soybean: Madhya Pradesh. Sunflower: Karnataka.' },
      { id: 'sugarcane', label: 'Sugarcane', states: ['up', 'mh', 'ka', 'tn', 'gj'], leaders: ['up'], note: 'Uttar Pradesh is the largest producer, followed by Maharashtra and Karnataka.' },
      { id: 'cotton', label: 'Cotton', states: ['gj', 'mh', 'tg', 'rj', 'hr', 'pb', 'mp', 'ka', 'ap', 'tn'], note: 'Gujarat and Maharashtra lead, with Telangana close behind. Black soil suits cotton.' },
      { id: 'jute', label: 'Jute', states: ['wb', 'br', 'as', 'od'], leaders: ['wb'], note: 'West Bengal grows most of the jute, mainly along the Hooghly.' },
      { id: 'tea', label: 'Tea', states: ['as', 'wb', 'tn', 'kl'], leaders: ['as'], note: 'Assam is the largest producer. Darjeeling is in West Bengal and the Nilgiris are in Tamil Nadu.' },
      { id: 'coffee', label: 'Coffee', states: ['ka', 'kl', 'tn'], leaders: ['ka'], note: 'Karnataka grows most of the coffee, especially around Kodagu and Chikmagalur.' },
      { id: 'rubber', label: 'Rubber', states: ['kl', 'tn', 'tr', 'ka', 'as'], leaders: ['kl'], note: 'Kerala is by far the largest producer.' },
      { id: 'spices', label: 'Spices', states: ['kl', 'ka', 'ap', 'gj', 'rj', 'tn'], leaders: ['kl'], note: 'Kerala: pepper and cardamom. Andhra Pradesh: chilli. Gujarat and Rajasthan: cumin and coriander.' },
      { id: 'coconut', label: 'Coconut', states: ['kl', 'ka', 'tn', 'ap'], note: 'Kerala, Karnataka, Tamil Nadu and Andhra Pradesh grow most of the coconut.' },
      { id: 'apples', label: 'Apples', states: ['jk', 'hp', 'uk'], leaders: ['jk'], note: 'Jammu and Kashmir is the largest producer, followed by Himachal Pradesh.' },
      { id: 'saffron', label: 'Saffron', states: ['jk'], leaders: ['jk'], note: 'Grown around Pampore in Kashmir.' },
    ],
  },
  {
    id: 'minerals',
    label: 'Minerals and energy',
    blurb: 'Where the main minerals, steel plants and nuclear power stations are.',
    items: [
      { id: 'iron-ore', label: 'Iron ore', states: ['od', 'cg', 'jh', 'ka', 'ga'], leaders: ['od'], note: 'Odisha is the largest producer. Keonjhar and Sundargarh (Odisha), Bailadila (Chhattisgarh), Singhbhum (Jharkhand), Bellary-Hospet (Karnataka).' },
      { id: 'coal', label: 'Coal', states: ['jh', 'od', 'cg', 'wb', 'mp', 'tg', 'mh'], note: 'Jharkhand, Odisha and Chhattisgarh hold the largest reserves. Raniganj (West Bengal) is the oldest coalfield, Jharia (Jharkhand) is the main coking coal field and Singareni is in Telangana.' },
      { id: 'bauxite', label: 'Bauxite', states: ['od', 'gj', 'jh', 'mh', 'cg', 'mp'], leaders: ['od'], note: 'Odisha leads, with deposits in Koraput and Kalahandi.' },
      { id: 'copper', label: 'Copper', states: ['mp', 'rj', 'jh'], leaders: ['mp'], note: 'Malanjkhand (Madhya Pradesh), Khetri (Rajasthan) and Singhbhum (Jharkhand).' },
      { id: 'manganese', label: 'Manganese', states: ['od', 'mp', 'mh', 'ka', 'ap'], note: 'Odisha and Madhya Pradesh are the main producers, followed by Maharashtra and Karnataka.' },
      { id: 'mica', label: 'Mica', states: ['jh', 'ap', 'rj'], note: 'The Koderma belt of Jharkhand is the best known.' },
      { id: 'gold', label: 'Gold', states: ['ka', 'ap', 'jh'], leaders: ['ka'], note: 'Hutti (Karnataka) is the main producing mine. The Kolar Gold Fields are closed.' },
      { id: 'limestone', label: 'Limestone', states: ['rj', 'mp', 'ap', 'gj', 'ka', 'cg', 'tn'], leaders: ['rj'], note: 'The raw material for cement. Rajasthan is the leading producer.' },
      { id: 'salt', label: 'Salt', states: ['gj', 'rj', 'tn'], leaders: ['gj'], note: 'Gujarat produces most of the salt, mainly in Kutch. Sambhar (Rajasthan) is the largest inland saline lake.' },
      { id: 'petroleum', label: 'Petroleum', states: ['as', 'gj', 'mh', 'rj', 'ap', 'tn'], note: 'Digboi (Assam) is the oldest oilfield, Mumbai High is the largest offshore field and Barmer (Rajasthan) is a major onshore field.' },
      { id: 'atomic', label: 'Atomic minerals', states: ['jh', 'kl', 'ap', 'od', 'tn'], note: 'Uranium at Jaduguda (Jharkhand) and Tummalapalle (Andhra Pradesh). Thorium-bearing monazite in the beach sands of Kerala, Tamil Nadu and Odisha.' },
      { id: 'steel', label: 'Steel plants', states: ['cg', 'od', 'wb', 'jh', 'ap', 'ka', 'tn'], note: 'Bhilai (Chhattisgarh), Rourkela (Odisha), Durgapur (West Bengal), Bokaro and Jamshedpur (Jharkhand), Visakhapatnam (Andhra Pradesh), Bhadravati (Karnataka), Salem (Tamil Nadu).' },
      { id: 'nuclear', label: 'Nuclear power stations', states: ['mh', 'rj', 'tn', 'up', 'gj', 'ka'], note: 'Tarapur (Maharashtra, India first), Rawatbhata (Rajasthan), Kalpakkam and Kudankulam (Tamil Nadu), Narora (Uttar Pradesh), Kakrapar (Gujarat), Kaiga (Karnataka).' },
    ],
  },
  {
    id: 'nature',
    label: 'Parks and wildlife',
    blurb: 'One famous protected area for each state, with what it is known for.',
    items: [
      { id: 'kaziranga', label: 'Kaziranga', states: ['as'], note: 'Home of the one-horned rhinoceros.' },
      { id: 'gir', label: 'Gir', states: ['gj'], note: 'The only wild home of the Asiatic lion.' },
      { id: 'corbett', label: 'Jim Corbett', states: ['uk'], note: 'India first national park (1936), known for tigers.' },
      { id: 'sundarbans', label: 'Sundarbans', states: ['wb'], note: 'The largest mangrove forest, home of the Royal Bengal tiger.' },
      { id: 'ranthambore', label: 'Ranthambore', states: ['rj'], note: 'A tiger reserve. Keoladeo (Bharatpur) in Rajasthan is famous for birds.' },
      { id: 'kanha', label: 'Kanha', states: ['mp'], note: 'Known for the barasingha. Bandhavgarh in Madhya Pradesh has many tigers.' },
      { id: 'periyar', label: 'Periyar', states: ['kl'], note: 'Known for elephants and tigers around a lake.' },
      { id: 'keibul', label: 'Keibul Lamjao', states: ['mn'], note: 'The only floating national park, home of the sangai deer.' },
      { id: 'hemis', label: 'Hemis', states: ['la'], note: 'A very large high-altitude park known for the snow leopard.' },
      { id: 'bhitarkanika', label: 'Bhitarkanika', states: ['od'], note: 'Mangroves and saltwater crocodiles.' },
      { id: 'namdapha', label: 'Namdapha', states: ['ar'], note: 'Four big cats live here: tiger, leopard, snow leopard and clouded leopard.' },
      { id: 'khangchendzonga', label: 'Khangchendzonga', states: ['sk'], note: 'A mixed World Heritage Site around the third highest peak in the world.' },
    ],
  },
  {
    id: 'culture',
    label: 'Art and culture',
    blurb: 'Classical dances and folk paintings by state.',
    items: [
      { id: 'bharatanatyam', label: 'Bharatanatyam', states: ['tn'], note: 'A classical dance of Tamil Nadu.' },
      { id: 'kuchipudi', label: 'Kuchipudi', states: ['ap'], note: 'A classical dance-drama from Andhra Pradesh.' },
      { id: 'kathakali', label: 'Kathakali', states: ['kl'], note: 'A Kerala dance-drama with elaborate make-up.' },
      { id: 'mohiniyattam', label: 'Mohiniyattam', states: ['kl'], note: 'A gentle classical dance of Kerala.' },
      { id: 'odissi', label: 'Odissi', states: ['od'], note: 'A classical dance of Odisha, known for the tribhanga posture.' },
      { id: 'manipuri', label: 'Manipuri', states: ['mn'], note: 'A soft, flowing dance often telling the Ras Lila.' },
      { id: 'sattriya', label: 'Sattriya', states: ['as'], note: 'Created in Vaishnava monasteries by Sankaradeva; recognised as classical in 2000.' },
      { id: 'kathak', label: 'Kathak', states: ['up', 'rj'], note: 'A North Indian storytelling dance. The Jaipur, Lucknow and Banaras gharanas are best known.' },
      { id: 'madhubani', label: 'Madhubani painting', states: ['br'], note: 'Bright line paintings from the Mithila region.' },
      { id: 'warli', label: 'Warli painting', states: ['mh'], note: 'White geometric figures on mud walls.' },
      { id: 'pattachitra', label: 'Pattachitra', states: ['od', 'wb'], note: 'Cloth-based scroll painting.' },
      { id: 'kalamkari', label: 'Kalamkari', states: ['ap'], note: 'Hand-painted or block-printed cloth, with centres at Srikalahasti and Machilipatnam.' },
      { id: 'phad', label: 'Phad painting', states: ['rj'], note: 'A long cloth scroll that tells the story of a local hero.' },
      { id: 'tanjore', label: 'Tanjore painting', states: ['tn'], note: 'Paintings that use gold foil.' },
      { id: 'gond', label: 'Gond painting', states: ['mp'], note: 'Colourful tribal art of Madhya Pradesh.' },
      { id: 'cheriyal', label: 'Cheriyal scrolls', states: ['tg'], note: 'Narrative cloth scrolls from Telangana.' },
      { id: 'kalighat', label: 'Kalighat painting', states: ['wb'], note: 'Bold paintings that began around the Kalighat temple in Kolkata.' },
    ],
  },
];
