export type StateId =
  | 'jk' | 'la' | 'pb' | 'hp' | 'uk' | 'sk' | 'ar' | 'ch' | 'hr' | 'dl' | 'up' | 'br' | 'wb' | 'as' | 'nl'
  | 'rj' | 'mp' | 'cg' | 'jh' | 'ml' | 'mn' | 'gj' | 'dn' | 'mh' | 'tg' | 'od' | 'tr' | 'mz' | 'ga' | 'ka'
  | 'ap' | 'ld' | 'kl' | 'tn' | 'py' | 'an';

export type StateTile = {
  id: StateId;
  name: string;
  code: string;
  kind: 'state' | 'ut';
  col: number;
  row: number;
  capital: string;
  capitalNote?: string;
};

// Schematic layout: each tile sits roughly where its state sits, but size and borders are not shown.
export const stateTiles: StateTile[] = [
  { id: 'jk', name: 'Jammu and Kashmir', code: 'JK', kind: 'ut', col: 2, row: 0, capital: 'Srinagar and Jammu', capitalNote: 'Srinagar in summer, Jammu in winter' },
  { id: 'la', name: 'Ladakh', code: 'LA', kind: 'ut', col: 3, row: 0, capital: 'Leh' },
  { id: 'pb', name: 'Punjab', code: 'PB', kind: 'state', col: 1, row: 1, capital: 'Chandigarh', capitalNote: 'Shared with Haryana' },
  { id: 'hp', name: 'Himachal Pradesh', code: 'HP', kind: 'state', col: 2, row: 1, capital: 'Shimla', capitalNote: 'Dharamshala is a second capital' },
  { id: 'uk', name: 'Uttarakhand', code: 'UK', kind: 'state', col: 3, row: 1, capital: 'Dehradun', capitalNote: 'Gairsain was declared the summer capital in 2020' },
  { id: 'sk', name: 'Sikkim', code: 'SK', kind: 'state', col: 6, row: 1, capital: 'Gangtok' },
  { id: 'ar', name: 'Arunachal Pradesh', code: 'AR', kind: 'state', col: 8, row: 1, capital: 'Itanagar' },
  { id: 'ch', name: 'Chandigarh', code: 'CH', kind: 'ut', col: 1, row: 2, capital: 'Chandigarh', capitalNote: 'Capital of both Punjab and Haryana' },
  { id: 'hr', name: 'Haryana', code: 'HR', kind: 'state', col: 2, row: 2, capital: 'Chandigarh', capitalNote: 'Shared with Punjab' },
  { id: 'dl', name: 'Delhi (NCT)', code: 'DL', kind: 'ut', col: 3, row: 2, capital: 'New Delhi', capitalNote: 'Capital of India' },
  { id: 'up', name: 'Uttar Pradesh', code: 'UP', kind: 'state', col: 4, row: 2, capital: 'Lucknow' },
  { id: 'br', name: 'Bihar', code: 'BR', kind: 'state', col: 5, row: 2, capital: 'Patna' },
  { id: 'wb', name: 'West Bengal', code: 'WB', kind: 'state', col: 6, row: 2, capital: 'Kolkata' },
  { id: 'as', name: 'Assam', code: 'AS', kind: 'state', col: 7, row: 2, capital: 'Dispur' },
  { id: 'nl', name: 'Nagaland', code: 'NL', kind: 'state', col: 8, row: 2, capital: 'Kohima' },
  { id: 'rj', name: 'Rajasthan', code: 'RJ', kind: 'state', col: 2, row: 3, capital: 'Jaipur' },
  { id: 'mp', name: 'Madhya Pradesh', code: 'MP', kind: 'state', col: 3, row: 3, capital: 'Bhopal' },
  { id: 'cg', name: 'Chhattisgarh', code: 'CG', kind: 'state', col: 4, row: 3, capital: 'Raipur' },
  { id: 'jh', name: 'Jharkhand', code: 'JH', kind: 'state', col: 5, row: 3, capital: 'Ranchi' },
  { id: 'ml', name: 'Meghalaya', code: 'ML', kind: 'state', col: 7, row: 3, capital: 'Shillong' },
  { id: 'mn', name: 'Manipur', code: 'MN', kind: 'state', col: 8, row: 3, capital: 'Imphal' },
  { id: 'gj', name: 'Gujarat', code: 'GJ', kind: 'state', col: 1, row: 4, capital: 'Gandhinagar' },
  { id: 'dn', name: 'Dadra and Nagar Haveli and Daman and Diu', code: 'DN', kind: 'ut', col: 2, row: 4, capital: 'Daman' },
  { id: 'mh', name: 'Maharashtra', code: 'MH', kind: 'state', col: 3, row: 4, capital: 'Mumbai', capitalNote: 'The winter legislature session is held at Nagpur' },
  { id: 'tg', name: 'Telangana', code: 'TG', kind: 'state', col: 4, row: 4, capital: 'Hyderabad', capitalNote: 'Sole capital of Telangana since 2 June 2024' },
  { id: 'od', name: 'Odisha', code: 'OD', kind: 'state', col: 5, row: 4, capital: 'Bhubaneswar' },
  { id: 'tr', name: 'Tripura', code: 'TR', kind: 'state', col: 7, row: 4, capital: 'Agartala' },
  { id: 'mz', name: 'Mizoram', code: 'MZ', kind: 'state', col: 8, row: 4, capital: 'Aizawl' },
  { id: 'ga', name: 'Goa', code: 'GA', kind: 'state', col: 2, row: 5, capital: 'Panaji' },
  { id: 'ka', name: 'Karnataka', code: 'KA', kind: 'state', col: 3, row: 5, capital: 'Bengaluru' },
  { id: 'ap', name: 'Andhra Pradesh', code: 'AP', kind: 'state', col: 4, row: 5, capital: 'Amaravati', capitalNote: 'Declared the capital by the 2026 amendment, effective from 2 June 2024' },
  { id: 'ld', name: 'Lakshadweep', code: 'LD', kind: 'ut', col: 2, row: 6, capital: 'Kavaratti' },
  { id: 'kl', name: 'Kerala', code: 'KL', kind: 'state', col: 3, row: 6, capital: 'Thiruvananthapuram' },
  { id: 'tn', name: 'Tamil Nadu', code: 'TN', kind: 'state', col: 4, row: 6, capital: 'Chennai' },
  { id: 'py', name: 'Puducherry', code: 'PY', kind: 'ut', col: 5, row: 6, capital: 'Puducherry' },
  { id: 'an', name: 'Andaman and Nicobar Islands', code: 'AN', kind: 'ut', col: 7, row: 6, capital: 'Sri Vijaya Puram', capitalNote: 'Renamed from Port Blair in September 2024' },
];
