import type { ContentPack } from './contentPacks';
import { pts } from './packHelpers';

export const mathsPack1: ContentPack = {
  topicByExam: {
    'ssc-cgl': 'quant',
    'ibps-po': 'quant',
    'sbi-po': 'quant',
    'rrb-ntpc': 'maths',
    nda: 'maths',
    cds: 'maths',
  },

  questions: [
    // Percentage
    { id: 'mp-1', text: 'What is 35% of 240?', options: ['84', '74', '94', '96'], correctIndex: 0 },
    { id: 'mp-2', text: 'A number increased by 20% becomes 360. What is the number?', options: ['280', '288', '320', '300'], correctIndex: 3 },
    { id: 'mp-3', text: 'If the price of sugar rises by 25%, by what percent must a household cut its consumption to keep spending unchanged?', options: ['15%', '20%', '25%', '30%'], correctIndex: 1 },
    { id: 'mp-4', text: 'In an election between two candidates, the winner got 60% of the valid votes and won by 1,200 votes. How many valid votes were cast?', options: ['4,800', '5,400', '6,000', '7,200'], correctIndex: 2 },
    { id: 'mp-5', text: "A's salary is 25% more than B's. B's salary is what percent less than A's?", options: ['20%', '25%', '15%', '30%'], correctIndex: 0 },
    { id: 'mp-6', text: 'The population of a town grows by 10% every year. If it is 20,000 now, what will it be after 2 years?', options: ['24,000', '24,400', '22,000', '24,200'], correctIndex: 3 },
    { id: 'mp-7', text: 'Express 0.045 as a percentage.', options: ['0.45%', '45%', '4.5%', '0.045%'], correctIndex: 2 },
    { id: 'mp-8', text: 'A student scoring 40% fails by 20 marks. Another scoring 50% gets 30 marks more than the pass mark. What is the pass mark?', options: ['200', '220', '210', '240'], correctIndex: 1 },

    // Profit, loss and discount
    { id: 'mp-9', text: 'An article bought for ₹800 is sold for ₹920. What is the profit percent?', options: ['15%', '12%', '18%', '20%'], correctIndex: 0 },
    { id: 'mp-10', text: 'A shopkeeper sells an article at a 10% loss for ₹720. What was its cost price?', options: ['₹780', '₹790', '₹810', '₹800'], correctIndex: 3 },
    { id: 'mp-11', text: 'The marked price of an article is ₹500 and a 20% discount is given. What is the selling price?', options: ['₹380', '₹420', '₹400', '₹450'], correctIndex: 2 },
    { id: 'mp-12', text: 'By selling an article for ₹1,260 a trader gains 5%. What selling price would give a 20% gain?', options: ['₹1,380', '₹1,440', '₹1,500', '₹1,520'], correctIndex: 1 },
    { id: 'mp-13', text: 'Successive discounts of 20% and 10% are equal to a single discount of:', options: ['28%', '30%', '25%', '27%'], correctIndex: 0 },
    { id: 'mp-14', text: 'A vendor buys 6 apples for ₹60 and sells 5 apples for ₹60. His profit percent is:', options: ['15%', '12%', '25%', '20%'], correctIndex: 3 },
    { id: 'mp-15', text: 'If the cost price of 20 articles equals the selling price of 16 articles, the profit percent is:', options: ['20%', '16⅔%', '25%', '30%'], correctIndex: 2 },
    { id: 'mp-16', text: 'After a 15% discount an article sells for ₹680. What was its marked price?', options: ['₹750', '₹800', '₹780', '₹850'], correctIndex: 1 },

    // Ratio, proportion and averages
    { id: 'mp-17', text: 'Divide ₹720 in the ratio 5:4:3. What is the largest share?', options: ['₹300', '₹240', '₹280', '₹360'], correctIndex: 0 },
    { id: 'mp-18', text: 'Two numbers are in the ratio 3:5 and their sum is 160. The larger number is:', options: ['60', '80', '120', '100'], correctIndex: 3 },
    { id: 'mp-19', text: 'If A:B = 2:3 and B:C = 4:5, then A:C is:', options: ['2:5', '3:4', '8:15', '4:5'], correctIndex: 2 },
    { id: 'mp-20', text: 'The fourth proportional to 4, 9 and 12 is:', options: ['24', '27', '30', '36'], correctIndex: 1 },
    { id: 'mp-21', text: 'The average of five numbers is 24. When one number is removed the average becomes 22. The removed number is:', options: ['32', '28', '30', '34'], correctIndex: 0 },
    { id: 'mp-22', text: 'A 40-litre mixture has milk and water in the ratio 3:1. How much water must be added to make the ratio 2:1?', options: ['4 litres', '6 litres', '8 litres', '5 litres'], correctIndex: 3 },
    { id: 'mp-23', text: "The ages of A and B are in the ratio 4:5. After 6 years the ratio will be 5:6. A's present age is:", options: ['20', '28', '24', '30'], correctIndex: 2 },

    // Time and work
    { id: 'mp-24', text: 'A can finish a job in 12 days and B in 18 days. Working together they finish it in:', options: ['6 days', '7.2 days', '8 days', '9 days'], correctIndex: 1 },
    { id: 'mp-25', text: 'A can finish a job in 10 days and B in 15 days. They work together for 4 days and then A leaves. How many more days does B need to finish?', options: ['5 days', '4 days', '6 days', '7 days'], correctIndex: 0 },
    { id: 'mp-26', text: '12 men can complete a work in 18 days. How many days will 9 men take?', options: ['20 days', '22 days', '27 days', '24 days'], correctIndex: 3 },
    { id: 'mp-27', text: 'A and B together finish a job in 6 days, and A alone takes 10 days. B alone would take:', options: ['12 days', '16 days', '15 days', '18 days'], correctIndex: 2 },
    { id: 'mp-28', text: 'A pipe fills a tank in 6 hours and another empties it in 12 hours. With both open, the tank fills in:', options: ['8 hours', '12 hours', '10 hours', '18 hours'], correctIndex: 1 },
    { id: 'mp-29', text: '8 workers build a wall in 15 days working 6 hours a day. How many days will 10 workers take working 8 hours a day?', options: ['9 days', '8 days', '10 days', '12 days'], correctIndex: 0 },
    { id: 'mp-30', text: 'A is twice as efficient as B, and together they finish a job in 12 days. A alone would take:', options: ['16 days', '20 days', '24 days', '18 days'], correctIndex: 3 },
  ],

  flashcards: [
    { id: 'mp-fc-1', front: 'Fractions and their percentages', back: '1/2 = 50%, 1/3 = 33⅓%, 1/4 = 25%, 1/5 = 20%, 1/6 = 16⅔%, 1/8 = 12.5%, 1/10 = 10%, 1/12 = 8⅓%. Learn these and many percentage questions become one-step.' },
    { id: 'mp-fc-2', front: 'Percentage change formula', back: 'Percentage change = (change ÷ original value) × 100. Always divide by the original value, not the new one.' },
    { id: 'mp-fc-3', front: 'Successive percentage changes', back: 'Changes of a% and b% give a net change of a + b + ab/100 (increase positive, decrease negative). Two 10% increases make 21%.' },
    { id: 'mp-fc-4', front: 'Price rise and consumption cut', back: 'If price rises by r%, consumption must fall by r/(100 + r) × 100 % to keep expenditure unchanged. A 25% rise needs a 20% cut.' },
    { id: 'mp-fc-5', front: 'More than / less than conversion', back: 'If A is r% more than B, then B is r/(100 + r) × 100 % less than A. Example: 25% more becomes 20% less.' },
    { id: 'mp-fc-6', front: 'Profit and loss formulas', back: 'Profit % = profit/CP × 100 and loss % = loss/CP × 100. SP = CP × (100 + P)/100 for a profit, CP × (100 − L)/100 for a loss. Both percentages use cost price.' },
    { id: 'mp-fc-7', front: 'Equal SP, equal percent profit and loss', back: 'If two articles are sold at the same price, one at x% profit and the other at x% loss, the seller always makes a net loss of x²/100 %.' },
    { id: 'mp-fc-8', front: 'Discount formulas', back: 'Discount is on marked price: discount % = discount/MP × 100 and SP = MP × (100 − d)/100. Successive discounts d1 and d2 equal d1 + d2 − d1·d2/100.' },
    { id: 'mp-fc-9', front: 'Cost of x articles = selling price of y articles', back: 'Profit % = (x − y)/y × 100 when x > y. Example: 20 and 16 give 25%.' },
    { id: 'mp-fc-10', front: 'Proportion rules', back: 'If a:b = c:d then ad = bc. Fourth proportional to a, b, c is bc/a. Third proportional to a, b is b²/a. Mean proportional is √(ab).' },
    { id: 'mp-fc-11', front: 'Time and work basics', back: 'One day of work = 1/days. A and B together take ab/(a + b) days. Efficiency is inversely proportional to time. Men × days × hours/day ÷ work stays constant.' },
    { id: 'mp-fc-12', front: 'Pipes and cisterns', back: 'An inlet adds work, an outlet subtracts it: net rate = sum of the rates. Inlet 6 h and outlet 12 h together fill the tank in ab/(b − a) = 12 hours.' },
  ],

  notes: [
    {
      id: 'mp-note-percentage',
      title: 'Percentage: Concepts and Shortcuts',
      sections: [
        {
          heading: 'Basics and Quick Conversions',
          body: pts([
            'Percent means per hundred: x% = x/100.',
            'x% of y = (x × y)/100, and "a is what percent of b" = (a/b) × 100.',
            'Learn the key fractions: 1/2 = 50%, 1/3 = 33⅓%, 1/4 = 25%, 1/5 = 20%, 1/6 = 16⅔%, 1/8 = 12.5%, 1/9 = 11.11%, 1/10 = 10%, 1/12 = 8.33%.',
            '10% of a number: move the decimal point one place left; 5% is half of that; 1% is two places left.',
            'x% of y equals y% of x. For example, 8% of 50 = 50% of 8 = 4. Swap them whenever one form is easier.',
            'To increase a number by r%, multiply by (100 + r)/100; to decrease it by r%, multiply by (100 − r)/100.',
          ]),
        },
        {
          heading: 'Percentage Change',
          body: pts([
            'Percentage change = (change ÷ original value) × 100. The base is always the original value.',
            'If A is r% more than B, then B is r/(100 + r) × 100 % less than A. Example: 25% more gives 20% less.',
            'If A is r% less than B, then B is r/(100 − r) × 100 % more than A. Example: 20% less gives 25% more.',
            'Successive changes of a% and b% give a net change of a + b + ab/100, with decreases written as negatives.',
            'An increase of x% followed by a decrease of x% leaves a net fall of x²/100 %. Example: +10% then −10% gives −1%.',
            'Two successive increases of 10% make 21%, not 20%.',
          ]),
        },
        {
          heading: 'Common Applications',
          body: pts([
            'Price and consumption: if the price rises by r%, consumption must fall by r/(100 + r) × 100 % to keep expenditure the same.',
            'If the price falls by r%, consumption can rise by r/(100 − r) × 100 % for the same expenditure.',
            'Population growth at r% a year for n years is P × (1 + r/100)ⁿ; 10% for 2 years is a 21% total rise.',
            'Elections: winning margin = difference in vote shares × total valid votes. A 60%–40% result means a margin of 20% of the valid votes.',
            'Marks problems: pass mark = marks scored + marks short (or − marks extra), so two students give two equations.',
            'Read carefully whether the question says total votes or valid votes; invalid votes are excluded from the percentages.',
          ]),
        },
      ],
    },
    {
      id: 'mp-note-profit',
      title: 'Profit, Loss and Discount',
      sections: [
        {
          heading: 'Core Formulas',
          body: pts([
            'Profit = SP − CP and loss = CP − SP.',
            'Profit % = profit/CP × 100 and loss % = loss/CP × 100. Unless the question says otherwise, both use the cost price.',
            'SP = CP × (100 + profit %)/100 for a profit, and SP = CP × (100 − loss %)/100 for a loss.',
            'CP = SP × 100/(100 + profit %), or SP × 100/(100 − loss %) for a loss.',
            'If the CP of x articles equals the SP of y articles, profit % = (x − y)/y × 100 when x > y.',
            'Two articles sold at the same price, one at x% profit and one at x% loss, always give a net loss of x²/100 %.',
            'A dishonest dealer using a false weight: profit % = (true weight − false weight)/false weight × 100. Charging for 1 kg but giving 900 g gives 100/900 × 100 ≈ 11.11%.',
          ]),
        },
        {
          heading: 'Marked Price and Discount',
          body: pts([
            'The marked price (MP) is the listed price. Discount is always calculated on the MP, and SP = MP − discount.',
            'Discount % = discount/MP × 100, and SP = MP × (100 − d)/100.',
            'Successive discounts d1% and d2% equal a single discount of d1 + d2 − d1·d2/100 %. Example: 20% and 10% give 28%, not 30%.',
            'A trader marks an article x% above cost and allows y% discount: net profit % = x − y − xy/100. Marking 30% above and giving 10% off gives 30 − 10 − 3 = 17%.',
            '"Buy one get one free" is a 50% discount; "buy 3 get 1 free" is a 25% discount.',
            'Working backwards: MP = SP × 100/(100 − d).',
          ]),
        },
        {
          heading: 'Shortcuts for Exams',
          body: pts([
            'Assume CP = 100 (or an easy number such as the LCM of the figures given) and work in whole numbers.',
            'For a mixed sale, find total CP and total SP separately and compare them. Never average the percentages.',
            'With equal cost prices, a P% profit on one item and an L% loss on the other give a net result of (P − L)/2 %.',
            'To change the target profit: new SP = old SP × (100 + new gain)/(100 + old gain). Example: ₹1,260 at 5% becomes ₹1,260 × 120/105 = ₹1,440 at 20%.',
            'When the question gives a profit and a loss on different items, write one equation for each and solve together.',
            'Check the answer by testing it: take the CP you found and run the sale forward.',
          ]),
        },
      ],
    },
    {
      id: 'mp-note-ratio-work',
      title: 'Ratio, Averages, Mixtures and Time-Work',
      sections: [
        {
          heading: 'Ratio and Proportion',
          body: pts([
            'A ratio a:b compares two quantities of the same kind. It has no unit and a:b = ka:kb.',
            'To divide an amount T in the ratio a:b:c, the first share is a/(a + b + c) × T, and so on.',
            'To join ratios A:B and B:C, make the common term equal. Example: 2:3 and 4:5 become 8:12 and 12:15, so A:C = 8:15.',
            'Proportion: a:b = c:d if ad = bc. Fourth proportional to a, b, c is bc/a; third proportional to a, b is b²/a; mean proportional is √(ab).',
            'Age problems: write ages as 4x and 5x, add or subtract the years, and solve the equation.',
            'Compounded ratio of a:b and c:d is ac:bd; duplicate ratio of a:b is a²:b².',
          ]),
        },
        {
          heading: 'Averages and Mixtures',
          body: pts([
            'Average = sum ÷ number of items, so sum = average × number of items.',
            'When an item is removed or added, find the old and new totals and subtract to find the changed item.',
            'Average of consecutive numbers is the middle value; the average of the first n natural numbers is (n + 1)/2.',
            'Average speed over equal distances at speeds a and b is 2ab/(a + b), not the simple mean.',
            'Alligation rule: cheaper quantity : dearer quantity = (d − m) : (m − c), where c and d are the prices of the cheaper and dearer items and m is the price of the mixture.',
            'To change a mixture ratio by adding one liquid, find the fixed quantity of the other liquid and rebuild the ratio around it.',
          ]),
        },
        {
          heading: 'Time and Work',
          body: pts([
            'If a person finishes a job in n days, one day of work is 1/n.',
            'A and B together do 1/a + 1/b per day, so they finish in ab/(a + b) days.',
            'Efficiency is inversely proportional to time: if A is twice as efficient as B, A takes half the time.',
            'Take the total work as the LCM of the days (for example 36 units for 12 and 18 days) to avoid fractions.',
            'M1 × D1 × H1 ÷ W1 = M2 × D2 × H2 ÷ W2 relates men, days, hours per day and work.',
            'More men means fewer days (inverse); more work means more days (direct).',
            'Pipes and cisterns: an inlet is positive work and an outlet is negative. An inlet of 6 hours and an outlet of 12 hours give 1/6 − 1/12 = 1/12 per hour, so 12 hours.',
            'For alternate-day work, find the work done in one two-day cycle and handle the remainder separately.',
          ]),
        },
      ],
    },
  ],
};
