import type { ContentPack } from './contentPacks';

export const polityPack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'polity',
    'ssc-cgl': 'ga',
    'rrb-ntpc': 'ga-railway',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    // Making of the Constitution and the Preamble
    { id: 'pol-1', text: 'The Constituent Assembly held its first meeting on:', options: ['26 November 1946', '9 December 1946', '15 August 1947', '26 January 1950'], correctIndex: 1 },
    { id: 'pol-2', text: 'Who was the Chairman of the Drafting Committee of the Constituent Assembly?', options: ['Rajendra Prasad', 'B. R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Patel'], correctIndex: 1 },
    { id: 'pol-3', text: 'The Constitution of India came into force on:', options: ['15 August 1947', '26 November 1949', '26 January 1950', '30 January 1948'], correctIndex: 2 },
    { id: 'pol-4', text: 'Who was elected the permanent President of the Constituent Assembly?', options: ['Sachchidananda Sinha', 'Rajendra Prasad', 'B. R. Ambedkar', 'H. C. Mukherjee'], correctIndex: 1 },
    { id: 'pol-5', text: 'How many Schedules did the Constitution have at its commencement?', options: ['8', '9', '10', '12'], correctIndex: 0 },
    { id: 'pol-6', text: "Which Amendment added the words 'Socialist', 'Secular' and 'Integrity' to the Preamble?", options: ['24th', '42nd', '44th', '73rd'], correctIndex: 1 },
    { id: 'pol-7', text: "The Preamble of the Constitution is based on Nehru's:", options: ['Objectives Resolution', 'Nehru Report', 'Cabinet Mission Plan', 'August Offer'], correctIndex: 0 },
    { id: 'pol-8', text: 'In which case did the Supreme Court hold that the Preamble is a part of the Constitution?', options: ['Berubari Union case', 'Kesavananda Bharati case', 'Golaknath case', 'Shankari Prasad case'], correctIndex: 1 },

    // Fundamental Rights
    { id: 'pol-9', text: 'Which Article abolishes untouchability?', options: ['Article 15', 'Article 16', 'Article 17', 'Article 18'], correctIndex: 2 },
    { id: 'pol-10', text: 'Equality before law is guaranteed by:', options: ['Article 14', 'Article 15', 'Article 19', 'Article 21'], correctIndex: 0 },
    { id: 'pol-11', text: 'The right to education for children aged 6 to 14 was added as Article 21A by the:', options: ['42nd Amendment', '73rd Amendment', '86th Amendment', '101st Amendment'], correctIndex: 2 },
    { id: 'pol-12', text: 'Which Article did Dr. Ambedkar describe as the heart and soul of the Constitution?', options: ['Article 19', 'Article 21', 'Article 32', 'Article 226'], correctIndex: 2 },
    { id: 'pol-13', text: 'Which writ is issued to produce a detained person before the court?', options: ['Mandamus', 'Certiorari', 'Habeas Corpus', 'Quo Warranto'], correctIndex: 2 },
    { id: 'pol-14', text: 'The right to property was removed from the list of Fundamental Rights by the:', options: ['42nd Amendment', '44th Amendment', '52nd Amendment', '61st Amendment'], correctIndex: 1 },
    { id: 'pol-15', text: 'Which of the following rights is available only to citizens and not to foreigners?', options: ['Article 14', 'Article 19', 'Article 20', 'Article 21'], correctIndex: 1 },

    // Directive Principles and Fundamental Duties
    { id: 'pol-16', text: 'The idea of Directive Principles of State Policy was borrowed from the Constitution of:', options: ['USA', 'Ireland', 'Canada', 'Australia'], correctIndex: 1 },
    { id: 'pol-17', text: 'Directive Principles of State Policy are contained in:', options: ['Part III', 'Part IV', 'Part IV-A', 'Part V'], correctIndex: 1 },
    { id: 'pol-18', text: 'How many Fundamental Duties are currently listed in Article 51A?', options: ['8', '10', '11', '12'], correctIndex: 2 },
    { id: 'pol-19', text: 'Article 40 directs the State to organise:', options: ['A uniform civil code', 'Village panchayats', 'Free legal aid', 'Separation of judiciary from executive'], correctIndex: 1 },
    { id: 'pol-20', text: 'Article 44 of the Constitution deals with:', options: ['Uniform Civil Code', 'Right to work', 'Protection of monuments', 'International peace'], correctIndex: 0 },

    // Union Government, Parliament and Judiciary
    { id: 'pol-21', text: 'The minimum age to be elected President of India is:', options: ['25 years', '30 years', '35 years', '40 years'], correctIndex: 2 },
    { id: 'pol-22', text: 'Which of the following is NOT part of the electoral college that elects the President?', options: ['Elected members of Lok Sabha', 'Elected members of Rajya Sabha', 'Elected members of State Legislative Assemblies', 'Nominated members of Rajya Sabha'], correctIndex: 3 },
    { id: 'pol-23', text: 'The ex-officio Chairman of the Rajya Sabha is the:', options: ['President', 'Vice-President', 'Prime Minister', 'Speaker of Lok Sabha'], correctIndex: 1 },
    { id: 'pol-24', text: 'The maximum strength of the Rajya Sabha prescribed by the Constitution is:', options: ['238', '245', '250', '260'], correctIndex: 2 },
    { id: 'pol-25', text: 'A Money Bill can be introduced only in the:', options: ['Rajya Sabha', 'Lok Sabha', 'Either House', 'Joint sitting'], correctIndex: 1 },
    { id: 'pol-26', text: 'Who presides over a joint sitting of the two Houses of Parliament?', options: ['The President', 'The Vice-President', 'The Speaker of Lok Sabha', 'The Chairman of Rajya Sabha'], correctIndex: 2 },
    { id: 'pol-27', text: "Article 356 deals with:", options: ['National Emergency', 'Financial Emergency', "President's Rule in a State", "Governor's power to issue ordinances"], correctIndex: 2 },
    { id: 'pol-28', text: 'Article 76 provides for the office of the:', options: ['Comptroller and Auditor General', 'Attorney General of India', 'Solicitor General', 'Advocate General'], correctIndex: 1 },
    { id: 'pol-29', text: 'Judges of the Supreme Court retire at the age of:', options: ['60 years', '62 years', '65 years', '70 years'], correctIndex: 2 },

    // Local government and constitutional bodies
    { id: 'pol-30', text: 'Which Amendment gave constitutional status to Panchayati Raj institutions?', options: ['61st', '73rd', '74th', '86th'], correctIndex: 1 },
    { id: 'pol-31', text: 'Article 324 deals with the:', options: ['Finance Commission', 'Public Service Commission', 'Election Commission', 'Comptroller and Auditor General'], correctIndex: 2 },
    { id: 'pol-32', text: 'The Finance Commission is constituted by the President after every:', options: ['3 years', '4 years', '5 years', '6 years'], correctIndex: 2 },
  ],

  flashcards: [
    { id: 'pol-fc-1', front: 'Key words of the Preamble', back: 'Sovereign, Socialist, Secular, Democratic, Republic. Objectives: Justice (social, economic, political), Liberty, Equality and Fraternity.' },
    { id: 'pol-fc-2', front: 'Six Fundamental Rights', back: 'Equality (Arts 14-18), Freedom (19-22), Against Exploitation (23-24), Freedom of Religion (25-28), Cultural and Educational Rights (29-30), Constitutional Remedies (32). Property is no longer a Fundamental Right.' },
    { id: 'pol-fc-3', front: 'The five writs', back: 'Habeas Corpus (produce the detained person), Mandamus (a command to perform a public duty), Prohibition (stops a lower court exceeding its jurisdiction), Certiorari (quashes a lower court order), Quo Warranto (by what authority do you hold this office).' },
    { id: 'pol-fc-4', front: 'Article 21 and Article 21A', back: 'Article 21 protects life and personal liberty. Article 21A (86th Amendment, 2002) makes education a Fundamental Right for children aged 6 to 14.' },
    { id: 'pol-fc-5', front: 'Basic structure doctrine', back: 'Laid down in Kesavananda Bharati v. State of Kerala (1973): Parliament can amend the Constitution but cannot alter its basic structure.' },
    { id: 'pol-fc-6', front: 'Three types of Emergency', back: 'National Emergency (Article 352), State Emergency or Presidents Rule (Article 356), Financial Emergency (Article 360).' },
    { id: 'pol-fc-7', front: 'Article 368', back: 'Procedure for amending the Constitution: some provisions need a simple majority, most need a special majority, and federal provisions also need ratification by half of the States.' },
    { id: 'pol-fc-8', front: 'Parliament of India', back: 'Consists of the President, the Lok Sabha (House of the People) and the Rajya Sabha (Council of States).' },
    { id: 'pol-fc-9', front: 'Lok Sabha vs Rajya Sabha', back: 'Lok Sabha has a five-year term unless dissolved earlier. Rajya Sabha is a permanent House: members serve six years and one-third retire every two years.' },
    { id: 'pol-fc-10', front: 'Types of Directive Principles', back: 'Commonly grouped as socialistic, Gandhian and liberal-intellectual. They are non-justiciable but fundamental to governance (Part IV, Articles 36-51).' },
    { id: 'pol-fc-11', front: 'Fundamental Duties', back: 'Added by the 42nd Amendment (1976) on the Swaran Singh Committee recommendation, in Part IV-A (Article 51A). There are 11 duties and they are non-justiciable.' },
    { id: 'pol-fc-12', front: 'Constitutional bodies and Articles', back: 'Election Commission (324), UPSC (315), Finance Commission (280), CAG (148), Attorney General (76).' },
    { id: 'pol-fc-13', front: 'Money Bill (Article 110)', back: 'Introduced only in the Lok Sabha. The Rajya Sabha can only recommend changes, within 14 days, and the Lok Sabha may accept or reject them.' },
    { id: 'pol-fc-14', front: '73rd and 74th Amendments (1992)', back: '73rd: Panchayats (Part IX, Eleventh Schedule). 74th: Municipalities (Part IX-A, Twelfth Schedule).' },
  ],

  notes: [
    {
      id: 'pol-note-making',
      title: 'Making of the Constitution and the Preamble',
      sections: [
        {
          heading: 'The Constituent Assembly',
          body: 'The Constituent Assembly was formed in 1946 under the Cabinet Mission Plan, with 389 members at the start. After Partition its strength fell to 299. It first met on 9 December 1946, with Sachchidananda Sinha as the temporary president, and Rajendra Prasad was elected its permanent president soon after. On 13 December 1946 Jawaharlal Nehru moved the Objectives Resolution, which the Assembly adopted on 22 January 1947 and which shaped the Preamble. The Drafting Committee was set up on 29 August 1947 with B. R. Ambedkar as chairman. The Constitution was adopted on 26 November 1949 and came into force on 26 January 1950, a date chosen because of Purna Swaraj Day in 1930. At commencement it had 395 Articles, 22 Parts and 8 Schedules.',
        },
        {
          heading: 'The Preamble',
          body: "The Preamble begins with 'We, the people of India' and declares India a sovereign, socialist, secular, democratic republic. It secures justice (social, economic and political), liberty of thought, expression, belief, faith and worship, equality of status and opportunity, and fraternity assuring the dignity of the individual and the unity and integrity of the nation. The Preamble has been amended once, by the 42nd Amendment in 1976, which added 'socialist', 'secular' and 'integrity'. In the Berubari Union case (1960) the Supreme Court held that the Preamble is not a part of the Constitution, but in Kesavananda Bharati (1973) it held that it is.",
        },
        {
          heading: 'Sources of the Constitution',
          body: 'The Government of India Act 1935 supplied much of the administrative framework, including the federal scheme, the office of Governor and emergency provisions. From Britain came the parliamentary system, the rule of law and single citizenship. The United States contributed Fundamental Rights, judicial review and the independence of the judiciary. Ireland gave the Directive Principles and the method of electing the President. Canada gave a federation with a strong Centre and residuary powers vested in the Centre. Australia gave the Concurrent List and the joint sitting of Parliament. Weimar Germany gave the suspension of rights during an Emergency, the USSR the Fundamental Duties, France the ideals of liberty, equality and fraternity, South Africa the amendment procedure, and Japan the phrase procedure established by law.',
        },
      ],
    },
    {
      id: 'pol-note-rights',
      title: 'Fundamental Rights, Directive Principles and Duties',
      sections: [
        {
          heading: 'Fundamental Rights (Part III, Articles 12-35)',
          body: 'Article 12 defines the State and Article 13 declares laws that violate Fundamental Rights void, which is the basis of judicial review. The Right to Equality covers equality before law (Article 14), no discrimination on grounds such as religion, race, caste, sex or place of birth (15), equal opportunity in public employment (16), abolition of untouchability (17) and abolition of titles (18). The Right to Freedom covers the six freedoms of Article 19, which only citizens enjoy: speech and expression, peaceful assembly, forming associations or unions, free movement, residence, and any profession or trade. It also covers protection in respect of conviction (Article 20), life and personal liberty (21), education for children aged 6 to 14 (21A) and protection against arbitrary arrest (22). Articles 23 and 24 prohibit trafficking, forced labour and child labour in hazardous work. Articles 25 to 28 protect freedom of religion, and Articles 29 and 30 protect cultural and educational rights. The right to property was removed by the 44th Amendment (1978) and is now a legal right under Article 300A.',
        },
        {
          heading: 'Constitutional Remedies and Writs',
          body: 'Article 32 gives the right to move the Supreme Court to enforce Fundamental Rights, and Dr. Ambedkar called it the heart and soul of the Constitution. High Courts have a wider power under Article 226, which also allows writs for other legal rights. The five writs are Habeas Corpus (to produce a detained person before the court), Mandamus (to command an official to perform a public duty), Prohibition (to stop a lower court from exceeding its jurisdiction), Certiorari (to quash an order of a lower court) and Quo Warranto (to ask by what authority a person holds a public office).',
        },
        {
          heading: 'Directive Principles and Fundamental Duties',
          body: 'The Directive Principles in Part IV (Articles 36 to 51) were borrowed from Ireland and aim at social and economic democracy. Unlike Fundamental Rights they cannot be enforced in court, but they guide lawmaking. Examples include Article 40 (village panchayats), Article 44 (uniform civil code), Article 48A (protection of the environment, added in 1976) and Article 50 (separation of the judiciary from the executive). In Minerva Mills (1980) the Supreme Court held that harmony between Fundamental Rights and Directive Principles is part of the basic structure. Fundamental Duties sit in Part IV-A (Article 51A), were added by the 42nd Amendment on the Swaran Singh Committee recommendation, and number eleven, the last of which (the duty of parents to educate children aged 6 to 14) was added by the 86th Amendment in 2002.',
        },
      ],
    },
    {
      id: 'pol-note-union',
      title: 'The Union: President, Parliament and Judiciary',
      sections: [
        {
          heading: 'President and Vice-President',
          body: 'The President is the head of the Union executive. The candidate must be a citizen, at least 35 years old, qualified to be a member of the Lok Sabha and not holding an office of profit. The President is elected by an electoral college of the elected members of both Houses of Parliament and the elected members of the State Legislative Assemblies (including Delhi and Puducherry), using proportional representation by single transferable vote. Nominated members do not vote. The term is five years, and the President can be impeached under Article 61 for violating the Constitution, by a two-thirds majority in each House. The Vice-President is elected by the members of both Houses, serves as ex-officio Chairman of the Rajya Sabha, and can be removed by a Rajya Sabha resolution that the Lok Sabha agrees to.',
        },
        {
          heading: 'Parliament and Lawmaking',
          body: 'Parliament consists of the President, the Lok Sabha and the Rajya Sabha. The Lok Sabha has 543 elected members at present and a five-year term unless dissolved, and it is presided over by the Speaker. The Rajya Sabha has a maximum strength of 250, of whom 12 are nominated by the President for expertise in literature, science, art and social service. It is a permanent House, with members serving six years and one-third retiring every two years. An ordinary bill must pass both Houses. A Money Bill (Article 110) can be introduced only in the Lok Sabha, and the Rajya Sabha may only recommend changes within 14 days. If the Houses deadlock on an ordinary bill, the President can call a joint sitting under Article 108, presided over by the Speaker. A joint sitting cannot be used for Money Bills or Constitution Amendment Bills.',
        },
        {
          heading: 'Judiciary and Constitutional Bodies',
          body: 'The Supreme Court (Article 124) consists of the Chief Justice and other judges, who retire at 65. High Court judges retire at 62. A judge can be removed only by Parliament, on proven misbehaviour or incapacity, by a special majority in both Houses. The Supreme Court has original jurisdiction in disputes between the Centre and States (Article 131), appellate jurisdiction, advisory jurisdiction (Article 143) and writ jurisdiction (Article 32). Independent constitutional bodies include the Election Commission (Article 324), the Union Public Service Commission (Article 315), the Finance Commission (Article 280, constituted every five years), the Comptroller and Auditor General (Article 148) and the Attorney General of India (Article 76).',
        },
      ],
    },
  ],
};
