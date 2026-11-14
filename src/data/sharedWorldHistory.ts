import type { ContentPack } from './contentPacks';
import { expand } from './contentTags';
import { pts } from './packHelpers';

export const worldHistoryPack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'history',
    'ssc-cgl': 'ga',
    'rrb-ntpc': 'ga-railway',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    { id: 'wh-1', text: 'The American Declaration of Independence was adopted in:', options: ['1773', '1776', '1783', '1789'], correctIndex: 1 },
    { id: 'wh-2', text: 'The slogan "No taxation without representation" was raised by the American colonists against:', options: ['British taxes such as the Stamp Act', 'The Louisiana Purchase', 'The Emancipation Proclamation', 'The Monroe Doctrine'], correctIndex: 0 },
    { id: 'wh-3', text: 'The American War of Independence formally ended with the Treaty of Paris in:', options: ['1776', '1781', '1783', '1812'], correctIndex: 2 },
    { id: 'wh-4', text: 'The French Revolution began in 1789 with the storming of the:', options: ['Louvre', 'Bastille', 'Tuileries', 'Versailles'], correctIndex: 1 },
    { id: 'wh-5', text: 'The motto of the French Revolution was:', options: ['Liberty, Equality, Fraternity', 'Peace, Land, Bread', 'Unity, Faith, Discipline', 'Order and Progress'], correctIndex: 0 },
    { id: 'wh-6', text: 'The Reign of Terror in France was led by the:', options: ['Girondins', 'Jacobins under Robespierre', 'Bourbons', 'Directory'], correctIndex: 1 },
    { id: 'wh-7', text: 'Napoleon Bonaparte was finally defeated at the Battle of:', options: ['Waterloo', 'Austerlitz', 'Trafalgar', 'Leipzig'], correctIndex: 0 },
    { id: 'wh-8', text: 'The Industrial Revolution began first in:', options: ['France', 'Germany', 'The United States', 'Britain'], correctIndex: 3 },
    { id: 'wh-9', text: 'The steam engine was improved for industrial use by:', options: ['James Watt', 'Richard Arkwright', 'Edmund Cartwright', 'Eli Whitney'], correctIndex: 0 },
    { id: 'wh-10', text: 'The spinning jenny, which spun several threads at once, was invented by:', options: ['Samuel Crompton', 'Richard Arkwright', 'John Kay', 'James Hargreaves'], correctIndex: 3 },
    { id: 'wh-11', text: 'The Stockton and Darlington railway, the first public steam railway, opened in:', options: ['1825', '1769', '1851', '1900'], correctIndex: 0 },
    { id: 'wh-12', text: 'Which Italian leader led the Red Shirts in the unification of Italy?', options: ['Mazzini', 'Cavour', 'Victor Emmanuel II', 'Garibaldi'], correctIndex: 3 },
    { id: 'wh-13', text: 'German unification was completed in 1871 under the leadership of:', options: ['Kaiser Wilhelm II', 'Metternich', 'Frederick the Great', 'Otto von Bismarck'], correctIndex: 3 },
    { id: 'wh-14', text: 'The October (Bolshevik) Revolution in Russia took place in:', options: ['1905', '1917', '1914', '1921'], correctIndex: 1 },
    { id: 'wh-15', text: 'The slogan "Peace, Land and Bread" is associated with:', options: ['Lenin', 'Kerensky', 'Tsar Nicholas II', 'Rasputin'], correctIndex: 0 },
    { id: 'wh-16', text: 'The assassination of Archduke Franz Ferdinand at Sarajevo took place in:', options: ['1908', '1917', '1919', '1914'], correctIndex: 3 },
    { id: 'wh-17', text: 'The Central Powers in World War I included Germany, Austria-Hungary and:', options: ['Italy', 'The Ottoman Empire', 'Russia', 'Japan'], correctIndex: 1 },
    { id: 'wh-18', text: 'The Treaty of Versailles (1919) was signed with:', options: ['Austria', 'Germany', 'Turkey', 'Hungary'], correctIndex: 1 },
    { id: 'wh-19', text: 'The League of Nations was founded in:', options: ['1914', '1936', '1945', '1920'], correctIndex: 3 },
    { id: 'wh-20', text: 'Mussolini came to power in Italy through the March on Rome in:', options: ['1922', '1933', '1939', '1919'], correctIndex: 0 },
    { id: 'wh-21', text: 'World War II in Europe began with the German invasion of:', options: ['France', 'Belgium', 'Czechoslovakia', 'Poland'], correctIndex: 3 },
    { id: 'wh-22', text: 'The attack on Pearl Harbor, which brought the United States into the war, took place in:', options: ['1939', '1941', '1940', '1942'], correctIndex: 1 },
    { id: 'wh-23', text: 'The United Nations was founded in:', options: ['1945', '1919', '1939', '1955'], correctIndex: 0 },
    { id: 'wh-24', text: 'NATO was formed in:', options: ['1945', '1955', '1949', '1961'], correctIndex: 2 },
    { id: 'wh-25', text: 'The Cuban Missile Crisis took place in:', options: ['1956', '1971', '1979', '1962'], correctIndex: 3 },
    { id: 'wh-26', text: 'The Berlin Wall was built in 1961 and fell in:', options: ['1985', '1991', '1989', '1999'], correctIndex: 2 },
    { id: 'wh-27', text: 'The Bandung Conference of Asian and African nations was held in:', options: ['1947', '1961', '1955', '1971'], correctIndex: 2 },
    { id: 'wh-28', text: 'The Non-Aligned Movement held its first summit in 1961 at:', options: ['Bandung', 'Cairo', 'Colombo', 'Belgrade'], correctIndex: 3 },
    { id: 'wh-29', text: 'The Communist Manifesto (1848) was written by:', options: ['Lenin and Stalin', 'Mao and Zhou Enlai', 'Marx and Engels', 'Adam Smith and Ricardo'], correctIndex: 2 },
    { id: 'wh-30', text: "Adam Smith's The Wealth of Nations (1776) is a foundational text of:", options: ['Classical capitalism (free-market economics)', 'Communism', 'Fascism', 'Anarchism'], correctIndex: 0 },
  ],

  flashcards: [
    { id: 'wh-fc-1', front: 'Inventions of the Industrial Revolution', back: 'Flying shuttle (John Kay, 1733), spinning jenny (James Hargreaves, c. 1764), water frame (Richard Arkwright), spinning mule (Samuel Crompton), steam engine (James Watt, 1769), power loom (Edmund Cartwright), railways (Stephenson Rocket, 1829).' },
    { id: 'wh-fc-2', front: 'Why Britain industrialised first', back: 'Coal and iron close together, capital from trade and colonies, an agricultural revolution that freed labour, overseas markets, a stable government and a strong navy.' },
    { id: 'wh-fc-3', front: 'American Revolution timeline', back: 'Stamp Act 1765. Boston Tea Party 1773. War begins 1775. Declaration of Independence 4 July 1776 (drafted by Thomas Jefferson). Yorktown 1781. Treaty of Paris 1783. Constitution 1787. Bill of Rights 1791.' },
    { id: 'wh-fc-4', front: 'French Revolution timeline', back: '1789: Estates-General, Tennis Court Oath, Bastille (14 July), Declaration of the Rights of Man. 1792: republic. 1793: Louis XVI executed and the Reign of Terror (to 1794). 1799: Napoleon takes power. 1815: Waterloo.' },
    { id: 'wh-fc-5', front: 'Unification of Italy and Germany', back: 'Italy: Mazzini (inspiration), Cavour (diplomacy), Garibaldi (Red Shirts); kingdom 1861, Venice 1866, Rome 1870. Germany: Bismarck wars against Denmark (1864), Austria (1866) and France (1870-71); empire proclaimed at Versailles in 1871.' },
    { id: 'wh-fc-6', front: 'Russian Revolution', back: 'February 1917: the Tsar abdicates. October 1917: Bolsheviks under Lenin take power. Civil war followed. USSR formed 1922. Stalin launched five-year plans from 1928.' },
    { id: 'wh-fc-7', front: 'World War I at a glance', back: 'Causes: alliances, militarism, imperial rivalry, Balkan nationalism. Trigger: Sarajevo, 28 June 1914. Allies against Central Powers. USA joined 1917. Armistice 11 November 1918. Treaty of Versailles 1919. League of Nations 1920.' },
    { id: 'wh-fc-8', front: 'Rise of dictators', back: 'Mussolini in Italy (March on Rome 1922), Hitler in Germany (chancellor 1933), Stalin in the USSR. The Great Depression after 1929 helped extremist parties grow. Japan invaded Manchuria in 1931.' },
    { id: 'wh-fc-9', front: 'World War II at a glance', back: 'Germany invades Poland 1 September 1939. Axis (Germany, Italy, Japan) against the Allies. Germany attacks the USSR 1941. Pearl Harbor 7 December 1941. D-Day June 1944. Germany surrenders May 1945. Atomic bombs August 1945. UN founded 1945.' },
    { id: 'wh-fc-10', front: 'The Cold War', back: 'USA against USSR after 1945. Truman Doctrine and Marshall Plan 1947. NATO 1949. Warsaw Pact 1955. Berlin Wall 1961. Cuban Missile Crisis 1962. Berlin Wall falls 1989. USSR dissolves December 1991.' },
    { id: 'wh-fc-11', front: 'Decolonisation milestones', back: 'India and Pakistan 1947. Indonesia 1949. Communist China 1949. Suez Crisis 1956. Ghana 1957. Bandung Conference 1955. Non-Aligned Movement, Belgrade 1961. Algeria 1962.' },
    { id: 'wh-fc-12', front: 'Political philosophies', back: 'Capitalism: private property and free markets (Adam Smith). Liberalism: individual rights. Socialism: collective ownership to reduce inequality. Communism: Marx and Engels, class struggle. Fascism: extreme nationalism and a one-party dictatorship.' },
  ],

  notes: [
    {
      id: 'wh-note-revolutions',
      title: 'Revolutions and the Making of the Modern World',
      sections: [
        {
          heading: 'The Industrial Revolution',
          body: pts([
            'It began in Britain in the second half of the 18th century. Causes: coal and iron, capital from trade and colonies, an agricultural revolution that freed labour, and overseas markets.',
            'Textiles led the way: the flying shuttle (Kay, 1733), the spinning jenny (Hargreaves), the water frame (Arkwright), the mule (Crompton) and the power loom (Cartwright).',
            'Power and transport: James Watt improved the steam engine (1769); railways followed (Stockton and Darlington, 1825; Stephenson Rocket, 1829).',
            'Effects: factories, fast growth of towns, a new working class, child labour, and later Factory Acts and trade unions. Capitalism and socialism both grew out of this change.',
            'Impact on India: machine-made British cloth hurt Indian handicrafts, and India became a supplier of raw materials and a market for British goods.',
          ]),
        },
        {
          heading: 'The American and French Revolutions',
          body: pts([
            'American Revolution: colonists opposed British taxes such as the Stamp Act (1765) and the Tea Act (1773) under the slogan of no taxation without representation. The Boston Tea Party was in 1773.',
            'War began in 1775; the Declaration of Independence (4 July 1776) was drafted by Thomas Jefferson. France helped; the British surrendered at Yorktown (1781) and the Treaty of Paris was signed in 1783. The Constitution came in 1787 and the Bill of Rights in 1791.',
            'French Revolution causes: debt, inequality among the three estates, bad harvests and Enlightenment ideas of Rousseau, Voltaire and Montesquieu.',
            '1789: the Estates-General met, the Tennis Court Oath was taken, the Bastille fell on 14 July and the Declaration of the Rights of Man was issued. A republic followed in 1792 and Louis XVI was executed in 1793.',
            'The Reign of Terror (1793-94) was led by Robespierre and the Committee of Public Safety.',
            'Napoleon took power in 1799, crowned himself emperor in 1804 and issued the Napoleonic Code. He was defeated at Waterloo in 1815, and the Congress of Vienna (Metternich) tried to restore the old order.',
          ]),
        },
        {
          heading: 'Unification of Italy and Germany',
          body: pts([
            'Italy: Mazzini inspired the movement, Cavour (prime minister of Piedmont) used diplomacy and alliances, and Garibaldi led the Red Shirts to take Sicily and Naples. The kingdom under Victor Emmanuel II was proclaimed in 1861; Venice joined in 1866 and Rome in 1870.',
            'Germany: Bismarck, minister of Prussia, followed a policy of blood and iron. He fought Denmark (1864), Austria (1866) and France (1870-71).',
            'The German Empire was proclaimed at Versailles in January 1871 under Wilhelm I.',
          ]),
        },
      ],
    },
    {
      id: 'wh-note-wars',
      title: 'The World Wars and the Interwar Years',
      sections: [
        {
          heading: 'World War I (1914-1918)',
          body: pts([
            'Causes: the alliance systems (Triple Alliance against Triple Entente), militarism, imperial rivalry and nationalism in the Balkans.',
            'The trigger was the assassination of Archduke Franz Ferdinand at Sarajevo on 28 June 1914 by Gavrilo Princip.',
            'The Allied Powers (Britain, France, Russia and later Italy, Japan and the USA) fought the Central Powers (Germany, Austria-Hungary, the Ottoman Empire and Bulgaria).',
            'The USA joined in 1917. Russia left after its revolution (Treaty of Brest-Litovsk, 1918). The armistice came on 11 November 1918.',
            'The Treaty of Versailles (1919) made Germany accept war guilt, lose territory and pay reparations. The Austro-Hungarian and Ottoman empires broke up, and the League of Nations was set up in 1920.',
          ]),
        },
        {
          heading: 'The Interwar Years',
          body: pts([
            'Russian Revolution: in February 1917 the Tsar abdicated; in October the Bolsheviks under Lenin took power. The USSR was formed in 1922 and Stalin began five-year plans in 1928.',
            'The Great Depression followed the Wall Street crash of 1929 and caused mass unemployment.',
            'Fascism came to power in Italy under Mussolini (March on Rome, 1922) and Nazism in Germany under Hitler (chancellor in 1933).',
            'Japan invaded Manchuria in 1931. The League of Nations failed to stop aggression.',
            'The policy of appeasement, as at the Munich Agreement (1938), allowed Germany to take Austria and Czechoslovakian territory.',
          ]),
        },
        {
          heading: 'World War II (1939-1945)',
          body: pts([
            'Germany invaded Poland on 1 September 1939, and Britain and France declared war. The Axis (Germany, Italy, Japan) fought the Allies (Britain, the USSR, the USA, China and others).',
            'Germany attacked the USSR in 1941. Japan attacked Pearl Harbor on 7 December 1941, bringing in the USA.',
            'D-Day landings in Normandy were in June 1944. Germany surrendered in May 1945.',
            'The USA dropped atomic bombs on Hiroshima (6 August) and Nagasaki (9 August) in 1945, and Japan surrendered.',
            'Aftermath: the United Nations was founded in 1945, the Nuremberg trials were held, and the IMF and World Bank were set up at Bretton Woods.',
          ]),
        },
      ],
    },
    {
      id: 'wh-note-coldwar-decolonisation',
      title: 'The Cold War, Decolonisation and Political Ideas',
      sections: [
        {
          heading: 'The Cold War',
          body: pts([
            'After 1945 the USA (capitalist) and the USSR (communist) competed for influence without fighting each other directly.',
            'Truman Doctrine and the Marshall Plan (1947) aimed to contain communism in Europe. NATO was formed in 1949 and the Warsaw Pact in 1955.',
            'Crises: the Berlin blockade (1948-49), the Korean War (1950-53), the Berlin Wall (1961), the Cuban Missile Crisis (1962) and the Vietnam War.',
            'Détente eased tensions in the 1970s. Under Gorbachev, glasnost and perestroika brought reform; the Berlin Wall fell in 1989 and the USSR dissolved in December 1991.',
          ]),
        },
        {
          heading: 'Decolonisation',
          body: pts([
            'After World War II the European empires were weakened. India and Pakistan became independent in 1947, Indonesia in 1949, Ghana in 1957 and Algeria in 1962 after a long war. The Communist revolution in China succeeded in 1949.',
            'The Bandung Conference (1955) brought Asian and African leaders together. The Non-Aligned Movement was founded at Belgrade in 1961 with Nehru, Nasser and Tito among its leaders.',
            'The Suez Crisis (1956) showed the decline of British and French power.',
            'New problems: borders drawn by colonial powers, as with the Berlin Conference of 1884-85 in Africa and the Partition of India, and economic dependence on former rulers.',
          ]),
        },
        {
          heading: 'Political Ideas and Their Effects',
          body: pts([
            'Capitalism rests on private property and free markets (Adam Smith, The Wealth of Nations, 1776). Liberalism stresses individual rights.',
            'Socialism calls for collective ownership to reduce inequality. Communism, set out by Karl Marx and Friedrich Engels in the Communist Manifesto (1848), is based on class struggle; Lenin and Mao adapted it to Russia and China.',
            'Fascism and Nazism combined extreme nationalism, one-party dictatorship and rejection of democracy.',
            'Effects on society: welfare states in Europe, planned economies in communist states, and the wars and revolutions of the 20th century.',
          ]),
        },
      ],
    },
  ],

  tags: {
    questions: expand([['wh', 1, 30, 'hist.world-history']]),
    flashcards: expand([['wh-fc', 1, 12, 'hist.world-history']]),
    notes: {
      'wh-note-revolutions': ['hist.world-history'],
      'wh-note-wars': ['hist.world-history'],
      'wh-note-coldwar-decolonisation': ['hist.world-history'],
    },
  },
};
