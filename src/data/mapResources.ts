export type AtlasSource = { title: string; url: string; note: string };

export const atlasSources: AtlasSource[] = [
  { title: 'NATMO (National Atlas and Thematic Mapping Organisation)', url: 'https://natmo.gov.in', note: 'Official thematic maps and atlases of India.' },
  { title: 'Survey of India', url: 'https://surveyofindia.gov.in', note: 'The national mapping agency and the source of official boundaries.' },
  { title: 'Bhuvan (ISRO)', url: 'https://bhuvan.nrsc.gov.in', note: 'Satellite imagery and maps from ISRO.' },
  { title: 'Geological Survey of India', url: 'https://www.gsi.gov.in', note: 'Geology and mineral maps.' },
  { title: 'India Meteorological Department', url: 'https://mausam.imd.gov.in', note: 'Climate and monsoon maps.' },
];

export type ChecklistGroup = { id: string; title: string; items: string[] };

// Things to find in an atlas. Tick them off as you locate each one.
export const mapChecklist: ChecklistGroup[] = [
  { id: 'mountains', title: 'Mountains and plateaus', items: ['Greater Himalaya (Himadri)', 'Lesser Himalaya (Himachal)', 'Shiwalik range', 'Karakoram range', 'Pir Panjal range', 'Aravalli range', 'Vindhya range', 'Satpura range', 'Western Ghats', 'Eastern Ghats', 'Nilgiri hills', 'Purvanchal hills', 'Deccan Plateau', 'Malwa Plateau', 'Chota Nagpur Plateau', 'Meghalaya Plateau'] },
  { id: 'rivers', title: 'Rivers', items: ['Indus', 'Jhelum', 'Chenab', 'Ravi', 'Beas', 'Sutlej', 'Ganga', 'Yamuna', 'Ghaghara', 'Gandak', 'Kosi', 'Brahmaputra', 'Narmada', 'Tapi', 'Mahanadi', 'Godavari', 'Krishna', 'Kaveri'] },
  { id: 'lakes', title: 'Lakes and lagoons', items: ['Dal Lake', 'Wular Lake', 'Sambhar Lake', 'Chilika Lake', 'Pulicat Lake', 'Loktak Lake', 'Vembanad Lake'] },
  { id: 'passes', title: 'Mountain passes', items: ['Zoji La', 'Banihal Pass', 'Rohtang Pass', 'Shipki La', 'Nathu La', 'Bomdi La'] },
  { id: 'coast', title: 'Coasts, straits and extreme points', items: ['Palk Strait', 'Gulf of Khambhat', 'Gulf of Kutch', 'Gulf of Mannar', 'Ten Degree Channel', 'Kanyakumari (southern tip of the mainland)', 'Indira Point (southernmost point of India)'] },
];
