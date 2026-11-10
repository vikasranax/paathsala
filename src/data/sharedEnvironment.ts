import type { ContentPack } from './contentPacks';
import { pts } from './packHelpers';

export const environmentPack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'environment',
    'ssc-cgl': 'ga',
    'rrb-ntpc': 'ga-railway',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    { id: 'env-1', text: 'The Ramsar Convention is concerned with the conservation of:', options: ['Forests', 'Deserts', 'Wetlands', 'Coral reefs'], correctIndex: 2 },
    { id: 'env-2', text: 'The Montreal Protocol deals with:', options: ['Climate change', 'Ozone-depleting substances', 'Hazardous waste', 'Biodiversity'], correctIndex: 1 },
    { id: 'env-3', text: 'Which of the following is a greenhouse gas?', options: ['Methane', 'Argon', 'Oxygen', 'Nitrogen'], correctIndex: 0 },
    { id: 'env-4', text: 'According to the 10 per cent law, the energy passed on from one trophic level to the next is about:', options: ['1%', '50%', '90%', '10%'], correctIndex: 3 },
    { id: 'env-5', text: 'The Wildlife (Protection) Act was enacted in:', options: ['1980', '1972', '1986', '2002'], correctIndex: 1 },
    { id: 'env-6', text: 'Project Tiger was launched in:', options: ['1980', '1992', '1973', '2002'], correctIndex: 2 },
    { id: 'env-7', text: 'Which was the first national park established in India?', options: ['Jim Corbett National Park', 'Kaziranga', 'Gir', 'Bandipur'], correctIndex: 0 },
    { id: 'env-8', text: 'The Kyoto Protocol set binding emission reduction targets for:', options: ['All countries equally', 'Only developing countries', 'Only island nations', 'Developed countries'], correctIndex: 3 },
    { id: 'env-9', text: 'The Paris Agreement (2015) aims to keep the rise in global average temperature well below:', options: ['1°C', '2°C', '3°C', '4°C'], correctIndex: 1 },
    { id: 'env-10', text: 'Kaziranga National Park is famous for the:', options: ['Asiatic lion', 'Snow leopard', 'One-horned rhinoceros', 'Red panda'], correctIndex: 2 },
    { id: 'env-11', text: 'The Asiatic lion is found in the wild in India only in:', options: ['Gir forest, Gujarat', 'Kaziranga, Assam', 'Sundarbans, West Bengal', 'Bandipur, Karnataka'], correctIndex: 0 },
    { id: 'env-12', text: 'India has four biodiversity hotspots: the Himalaya, Indo-Burma, Sundaland and the:', options: ['Eastern Ghats', 'Deccan Plateau', 'Thar Desert', 'Western Ghats and Sri Lanka'], correctIndex: 3 },
    { id: 'env-13', text: 'Biomagnification refers to:', options: ['An increase in the population of a species', 'An increase in the concentration of toxic substances at successive trophic levels', 'The growth of algae in water', 'The loss of soil nutrients'], correctIndex: 1 },
    { id: 'env-14', text: 'Eutrophication of a water body is mainly caused by excess:', options: ['Oxygen', 'Salt', 'Nutrients such as nitrates and phosphates', 'Heat'], correctIndex: 2 },
    { id: 'env-15', text: 'Acid rain is mainly caused by emissions of:', options: ['SO2 and NOx', 'CO2 and CH4', 'CO and O3', 'CFCs and halons'], correctIndex: 0 },
    { id: 'env-16', text: 'Lichens are widely used as indicators of:', options: ['Soil fertility', 'Water hardness', 'Noise pollution', 'Air pollution'], correctIndex: 3 },
    { id: 'env-17', text: 'The Environment (Protection) Act was passed in:', options: ['1974', '1986', '1981', '2010'], correctIndex: 1 },
    { id: 'env-18', text: 'The National Green Tribunal was established in:', options: ['2002', '2006', '2010', '2014'], correctIndex: 2 },
    { id: 'env-19', text: 'The Convention on Biological Diversity was opened for signature at the:', options: ['Rio Earth Summit, 1992', 'Stockholm Conference, 1972', 'Kyoto Conference, 1997', 'Paris Conference, 2015'], correctIndex: 0 },
    { id: 'env-20', text: 'Which of the following is an ex-situ conservation method?', options: ['National park', 'Biosphere reserve', 'Sacred grove', 'Seed bank'], correctIndex: 3 },
    { id: 'env-21', text: 'The United Nations Environment Programme (UNEP) was set up after the:', options: ['Rio Summit, 1992', 'Stockholm Conference, 1972', 'Paris Agreement, 2015', 'Montreal Protocol, 1987'], correctIndex: 1 },
    { id: 'env-22', text: 'In the IUCN Red List, which of these categories signals the highest risk of extinction in the wild?', options: ['Vulnerable', 'Endangered', 'Critically Endangered', 'Near Threatened'], correctIndex: 2 },
    { id: 'env-23', text: 'Which of the following is mainly responsible for depletion of the ozone layer?', options: ['Chlorofluorocarbons', 'Carbon dioxide', 'Methane', 'Argon'], correctIndex: 0 },
    { id: 'env-24', text: 'A keystone species is one that:', options: ['Is the largest animal in its ecosystem', 'Has been introduced from outside', 'Lives only in forests', 'Has a disproportionately large effect on its ecosystem'], correctIndex: 3 },
    { id: 'env-25', text: 'Which was the first Biosphere Reserve of India?', options: ['Sundarbans', 'Nilgiri', 'Nanda Devi', 'Manas'], correctIndex: 1 },
    { id: 'env-26', text: 'The Brundtland Commission report Our Common Future (1987) popularised the idea of:', options: ['The green revolution', 'Carbon trading', 'Sustainable development', 'Ecotourism'], correctIndex: 2 },
    { id: 'env-27', text: 'BOD stands for:', options: ['Biochemical Oxygen Demand', 'Basic Organic Decay', 'Biological Ozone Depletion', 'Bio-Oxygen Density'], correctIndex: 0 },
    { id: 'env-28', text: 'Which of these is a large coastal lagoon in India and a Ramsar site?', options: ['Wular Lake', 'Loktak Lake', 'Sambhar Lake', 'Chilika Lake'], correctIndex: 3 },
    { id: 'env-29', text: 'The Basel Convention regulates:', options: ['Trade in endangered species', 'The transboundary movement of hazardous wastes', 'The protection of wetlands', 'The use of mercury'], correctIndex: 1 },
    { id: 'env-30', text: 'Which of these is a primary producer in an aquatic ecosystem?', options: ['Zooplankton', 'Fish', 'Phytoplankton', 'Crab'], correctIndex: 2 },
  ],

  flashcards: [
    { id: 'env-fc-1', front: 'Trophic levels and the 10 per cent law', back: 'Producers, primary consumers, secondary consumers, tertiary consumers. Only about 10% of the energy passes to the next level; most is lost as heat.' },
    { id: 'env-fc-2', front: 'Ecological pyramids', back: 'The pyramid of energy is always upright. Pyramids of numbers and biomass can be inverted, for example one tree supporting many insects, or phytoplankton supporting zooplankton.' },
    { id: 'env-fc-3', front: 'Biogeochemical cycles', back: 'Carbon: photosynthesis and respiration. Nitrogen: fixation by Rhizobium and Azotobacter, then nitrification and denitrification. Phosphorus: sedimentary, with no gaseous phase.' },
    { id: 'env-fc-4', front: 'Biodiversity hotspot criteria', back: 'At least 1,500 endemic vascular plant species and at least 70% of the original habitat lost. India has four: Himalaya, Indo-Burma, Western Ghats and Sri Lanka, and Sundaland (Nicobar).' },
    { id: 'env-fc-5', front: 'IUCN Red List categories', back: 'Extinct, Extinct in the Wild, Critically Endangered, Endangered, Vulnerable, Near Threatened, Least Concern, Data Deficient, Not Evaluated.' },
    { id: 'env-fc-6', front: 'In-situ vs ex-situ conservation', back: 'In-situ protects species in their natural habitat: national parks, sanctuaries, biosphere reserves, sacred groves. Ex-situ protects them outside: zoos, botanical gardens, seed banks, gene banks.' },
    { id: 'env-fc-7', front: 'Indian environmental laws and years', back: 'Wildlife Protection Act 1972, Water Act 1974, Forest Conservation Act 1980, Air Act 1981, Environment Protection Act 1986, Biological Diversity Act 2002, National Green Tribunal Act 2010.' },
    { id: 'env-fc-8', front: 'International agreements and years', back: 'Ramsar 1971 (wetlands), CITES 1973 (endangered species trade), Vienna 1985 and Montreal 1987 (ozone), Basel 1989 (hazardous waste), CBD and UNFCCC 1992, Kyoto 1997, Paris 2015.' },
    { id: 'env-fc-9', front: 'Greenhouse gases', back: 'Carbon dioxide, methane, nitrous oxide, water vapour and fluorinated gases including CFCs.' },
    { id: 'env-fc-10', front: 'Pollution terms', back: 'BOD: oxygen microbes need to break down organic matter. Eutrophication: excess nutrients causing algal blooms. Acid rain: SO2 and NOx. Smog: smoke plus fog. Lichens: indicators of air pollution.' },
    { id: 'env-fc-11', front: 'Ecological terms', back: 'Keystone species: outsized effect on the ecosystem. Indicator species: show environmental health. Flagship species: draw conservation support, such as the tiger. Endemic: found only in one region. Invasive: water hyacinth, Lantana.' },
    { id: 'env-fc-12', front: 'Species interactions', back: 'Mutualism (both gain), commensalism (one gains, other unaffected), parasitism (one gains, other harmed), predation, competition, amensalism (one harmed, other unaffected).' },
  ],

  notes: [
    {
      id: 'env-note-ecology',
      title: 'Ecology and Ecosystems',
      sections: [
        {
          heading: 'Basics of Ecology',
          body: pts([
            'Ecology studies the relationship between organisms and their environment. Levels run from organism to population, community, ecosystem, biome and biosphere.',
            'An ecosystem has biotic parts (producers, consumers, decomposers) and abiotic parts (light, temperature, water, soil, nutrients).',
            'Producers such as green plants and algae make food by photosynthesis. Consumers are herbivores, carnivores and omnivores. Decomposers such as bacteria and fungi recycle nutrients.',
            'A habitat is where an organism lives; a niche is its role, including food, space and interactions.',
            'Major biomes: tundra, taiga, temperate forest, grassland, desert and tropical rainforest.',
            'Species interactions include mutualism, commensalism, parasitism, predation, competition and amensalism.',
            'Lichens are a partnership of an alga and a fungus, and they are sensitive to air pollution.',
          ]),
        },
        {
          heading: 'Energy Flow and Food Chains',
          body: pts([
            'Energy enters an ecosystem as sunlight and flows in one direction, while nutrients are recycled.',
            'Under the 10 per cent law only about a tenth of the energy passes to the next trophic level; the rest is lost mainly as heat.',
            'The grazing food chain starts with green plants and the detritus food chain starts with dead organic matter. Food webs connect many chains.',
            'The pyramid of energy is always upright; pyramids of numbers and biomass can be inverted.',
            'Gross primary productivity is the total organic matter produced. Net primary productivity is what is left after the producers use some for their own respiration.',
            'Bioaccumulation and biomagnification: toxins such as DDT and mercury become more concentrated at each step up the food chain.',
          ]),
        },
        {
          heading: 'Nutrient Cycles and Succession',
          body: pts([
            'Carbon cycle: carbon dioxide is fixed in photosynthesis and returned by respiration, decomposition and the burning of fossil fuels.',
            'Nitrogen cycle: bacteria such as Rhizobium and Azotobacter and lightning fix nitrogen; nitrification produces nitrates; denitrification returns nitrogen to the air.',
            'The phosphorus cycle is sedimentary: it has no gaseous phase and phosphorus comes from rocks.',
            'Ecological succession is the gradual replacement of one community by another until a stable climax community forms.',
            'Primary succession starts on bare rock with pioneer species such as lichens. Secondary succession starts where soil already exists, as after a forest fire.',
            'Hydrarch succession starts in water and xerarch succession starts on dry land.',
          ]),
        },
      ],
    },
    {
      id: 'env-note-biodiversity',
      title: 'Biodiversity and Conservation',
      sections: [
        {
          heading: 'Biodiversity and Threats',
          body: pts([
            'Biodiversity has three levels: genetic diversity, species diversity and ecosystem diversity.',
            'India is recognised as a megadiverse country with a very wide range of habitats.',
            'Main threats: habitat loss and fragmentation, poaching and illegal trade, invasive alien species, pollution, climate change and over-exploitation.',
            'Invasive species in India include water hyacinth, Lantana and Parthenium, which crowd out native plants.',
            'Keystone species have an outsized effect on an ecosystem, indicator species show its health, flagship species such as the tiger attract conservation support and endemic species are found in only one region.',
            'IUCN Red List categories: Extinct, Extinct in the Wild, Critically Endangered, Endangered, Vulnerable, Near Threatened, Least Concern, Data Deficient and Not Evaluated.',
          ]),
        },
        {
          heading: 'Hotspots and Protected Areas in India',
          body: pts([
            'A biodiversity hotspot (a concept from Norman Myers) has at least 1,500 endemic vascular plant species and has lost at least 70 per cent of its original habitat.',
            'India has four hotspots: the Himalaya, Indo-Burma, the Western Ghats and Sri Lanka, and Sundaland (the Nicobar Islands).',
            'Protected area categories: national parks, wildlife sanctuaries, conservation reserves, community reserves, biosphere reserves and tiger reserves.',
            'Jim Corbett (1936) was the first national park. Kaziranga protects the one-horned rhinoceros, Gir the Asiatic lion, the Sundarbans its mangroves and Royal Bengal tigers, and Keoladeo (Bharatpur) its birds. Hemis in Ladakh is the largest national park by area.',
            'The Nilgiri Biosphere Reserve (1986) was the first in India. Biosphere reserves follow UNESCO programme with core, buffer and transition zones.',
            'Chilika Lake in Odisha and Keoladeo in Rajasthan were among the first Indian wetlands listed under the Ramsar Convention (1981).',
          ]),
        },
        {
          heading: 'Conservation Approaches and Programmes',
          body: pts([
            'In-situ conservation protects species in their natural habitat: national parks, sanctuaries, biosphere reserves and sacred groves.',
            'Ex-situ conservation protects species outside their habitat: zoos, botanical gardens, seed banks and gene banks.',
            'Project Tiger began in 1973 and is overseen by the National Tiger Conservation Authority. Project Elephant (1992) protects elephants and their corridors.',
            'The Wildlife Protection Act 1972 groups species in Schedules; Schedule I gives the highest protection.',
            'Community conservation: the Bishnoi community of Rajasthan, the Chipko movement in Uttarakhand and the Appiko movement in Karnataka.',
            'CITES regulates international trade in endangered species and the Bonn Convention protects migratory species.',
          ]),
        },
      ],
    },
    {
      id: 'env-note-pollution',
      title: 'Pollution, Climate Change and Environmental Law',
      sections: [
        {
          heading: 'Types of Pollution',
          body: pts([
            'Major air pollutants: particulate matter (PM2.5 and PM10 are particles up to 2.5 and 10 micrometres), sulphur dioxide, nitrogen oxides, carbon monoxide and ground-level ozone.',
            'The Air Quality Index bands used in India are Good, Satisfactory, Moderate, Poor, Very Poor and Severe.',
            'BOD is the oxygen microbes need to break down organic matter; a high BOD means polluted water. COD measures the oxygen needed to chemically oxidise all pollutants.',
            'Eutrophication is excess nutrients such as nitrates and phosphates causing algal blooms and loss of oxygen in water.',
            'Acid rain comes mainly from sulphur dioxide and nitrogen oxides.',
            'Heavy metals: mercury caused Minamata disease and cadmium caused Itai-itai disease.',
            'Plastics persist for a very long time, microplastics enter food chains and e-waste contains toxic metals.',
          ]),
        },
        {
          heading: 'Climate Change and the Ozone Layer',
          body: pts([
            'Greenhouse gases include carbon dioxide, methane, nitrous oxide, water vapour and fluorinated gases such as CFCs.',
            'Global warming is the rise in the average temperature of the Earth caused by more greenhouse gases. Effects include melting glaciers, rising seas, extreme weather and shifting monsoon patterns.',
            'Ozone depletion is a different problem: CFCs and halons destroy stratospheric ozone, which absorbs harmful ultraviolet radiation.',
            'The Vienna Convention (1985) and the Montreal Protocol (1987) phase out ozone-depleting substances.',
            'Carbon sinks such as forests, oceans and soils absorb more carbon than they release.',
            'The Jawaharlal Nehru National Solar Mission began in 2010. India and France launched the International Solar Alliance in 2015 at the Paris climate conference.',
          ]),
        },
        {
          heading: 'Laws and International Agreements',
          body: pts([
            'Indian laws: Wildlife Protection Act 1972, Water Act 1974, Forest Conservation Act 1980, Air Act 1981, Environment Protection Act 1986, Biological Diversity Act 2002 and National Green Tribunal Act 2010.',
            'Environmental impact assessment is notified under the Environment Protection Act (notification of 2006).',
            'Article 48A directs the State to protect the environment and Article 51A(g) makes it a duty of every citizen.',
            'The Stockholm Conference (1972) led to UNEP. The Rio Earth Summit (1992) produced the Convention on Biological Diversity, the UN Framework Convention on Climate Change and Agenda 21.',
            'The Kyoto Protocol (1997) set binding targets for developed countries; the Paris Agreement (2015) asks every country to set its own national climate targets and aims to hold warming well below 2 degrees Celsius.',
            'India announced a net-zero target for 2070 at COP26 in Glasgow (2021).',
            'The 17 Sustainable Development Goals were adopted in 2015 for 2030.',
          ]),
        },
      ],
    },
  ],
};
