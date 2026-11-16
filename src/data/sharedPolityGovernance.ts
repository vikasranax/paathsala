import type { ContentPack } from './contentPacks';
import { expand } from './contentTags';
import { pts } from './packHelpers';

export const polityGovernancePack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'polity',
    'ssc-cgl': 'ga',
    'rrb-ntpc': 'ga-railway',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    // State government
    { id: 'pg-1', text: 'The Governor of a state is appointed by the:', options: ['Chief Minister', 'President', 'Prime Minister', 'Chief Justice of India'], correctIndex: 1 },
    { id: 'pg-2', text: 'The minimum age required to be appointed Governor is:', options: ['25 years', '30 years', '35 years', '40 years'], correctIndex: 2 },
    { id: 'pg-3', text: 'The Chief Minister of a state is appointed by the:', options: ['President', 'Speaker', 'Prime Minister', 'Governor'], correctIndex: 3 },
    { id: 'pg-4', text: 'The council of ministers of a state is collectively responsible to the:', options: ['Legislative Assembly', 'Governor', 'High Court', 'Legislative Council'], correctIndex: 0 },
    { id: 'pg-5', text: 'The Governor can issue ordinances when the legislature is not in session under Article:', options: ['Article 123', 'Article 213', 'Article 200', 'Article 356'], correctIndex: 1 },
    { id: 'pg-6', text: 'Which of these states has a Legislative Council?', options: ['Gujarat', 'Punjab', 'Kerala', 'Karnataka'], correctIndex: 3 },
    { id: 'pg-7', text: 'A Legislative Council can be created or abolished through:', options: ['A simple majority in Parliament only', 'A referendum in the state', 'An Assembly resolution by special majority followed by an Act of Parliament', 'A Presidential order alone'], correctIndex: 2 },
    { id: 'pg-8', text: 'The Advocate General of a state is appointed by the:', options: ['Chief Minister', 'Governor', 'President', 'Chief Justice of the High Court'], correctIndex: 1 },
    { id: 'pg-9', text: 'A High Court judge retires at the age of:', options: ['60 years', '62 years', '65 years', '70 years'], correctIndex: 1 },
    { id: 'pg-10', text: 'The power of High Courts to issue writs comes from Article:', options: ['Article 32', 'Article 136', 'Article 226', 'Article 300A'], correctIndex: 2 },

    // Statutory and regulatory bodies
    { id: 'pg-11', text: 'The National Human Rights Commission was set up under the Protection of Human Rights Act of:', options: ['1986', '1993', '2005', '2013'], correctIndex: 1 },
    { id: 'pg-12', text: 'The Lokpal and Lokayuktas Act was passed in:', options: ['2005', '2011', '2013', '2019'], correctIndex: 2 },
    { id: 'pg-13', text: 'Which of the following is a constitutional body?', options: ['National Human Rights Commission', 'Central Vigilance Commission', 'Central Information Commission', 'Finance Commission'], correctIndex: 3 },
    { id: 'pg-14', text: 'NITI Aayog was set up in 2015 through:', options: ['An Act of Parliament', 'A Cabinet resolution', 'A constitutional amendment', 'A Supreme Court order'], correctIndex: 1 },
    { id: 'pg-15', text: 'The Competition Commission of India was established under the:', options: ['Companies Act, 2013', 'SEBI Act, 1992', 'Competition Act, 2002', 'MRTP Act, 1969'], correctIndex: 2 },
    { id: 'pg-16', text: 'The National Commission for Backward Classes received constitutional status through the:', options: ['89th Amendment', '101st Amendment', '103rd Amendment', '102nd Amendment'], correctIndex: 3 },

    // Elections
    { id: 'pg-17', text: 'The Election Commission of India derives its authority from Article:', options: ['Article 324', 'Article 280', 'Article 315', 'Article 148'], correctIndex: 0 },
    { id: 'pg-18', text: 'The voting age was reduced from 21 to 18 by the:', options: ['42nd Amendment', '52nd Amendment', '61st Amendment', '73rd Amendment'], correctIndex: 2 },
    { id: 'pg-19', text: 'The NOTA option was introduced after a Supreme Court judgment in:', options: ['2013', '2004', '1996', '2019'], correctIndex: 0 },
    { id: 'pg-20', text: 'The anti-defection law is contained in the:', options: ['Eighth Schedule', 'Ninth Schedule', 'Eleventh Schedule', 'Tenth Schedule'], correctIndex: 3 },
    { id: 'pg-21', text: 'Elections to Panchayats and Municipalities are conducted by:', options: ['The Election Commission of India', 'State Election Commissions', 'The Finance Commission', 'District Collectors'], correctIndex: 1 },
    { id: 'pg-22', text: 'The Representation of the People Act, 1951 mainly deals with:', options: ['Preparation of electoral rolls', 'Conduct of elections and disqualification of members', 'Delimitation of constituencies', 'Registration of political parties only'], correctIndex: 1 },
    { id: 'pg-23', text: 'The Nari Shakti Vandan Adhiniyam (2023) reserves what share of seats for women?', options: ['One-fourth', 'One-third', 'One-half', 'One-fifth'], correctIndex: 1 },

    // Public policy and rights
    { id: 'pg-24', text: 'The Right to Information Act was enacted in:', options: ['2005', '2002', '2008', '2013'], correctIndex: 0 },
    { id: 'pg-25', text: 'Under the RTI Act, a Public Information Officer should normally reply within:', options: ['15 days', '60 days', '30 days', '90 days'], correctIndex: 2 },
    { id: 'pg-26', text: 'The Right to Education Act, 2009 covers children aged:', options: ['3 to 6 years', '6 to 18 years', '14 to 18 years', '6 to 14 years'], correctIndex: 3 },
    { id: 'pg-27', text: 'The Supreme Court held the right to privacy to be a fundamental right in:', options: ['Kesavananda Bharati', 'Maneka Gandhi', 'K. S. Puttaswamy', 'Minerva Mills'], correctIndex: 2 },

    // Transparency and e-governance
    { id: 'pg-28', text: 'The Citizens\' Charter initiative in India began in:', options: ['1991', '2005', '1997', '2014'], correctIndex: 2 },
    { id: 'pg-29', text: 'The Government e-Marketplace (GeM) was launched in:', options: ['2010', '2013', '2019', '2016'], correctIndex: 3 },
    { id: 'pg-30', text: 'The JAM trinity stands for Jan Dhan, Aadhaar and:', options: ['Mobile', 'Marketplace', 'Medical cover', 'Money transfer'], correctIndex: 0 },
    { id: 'pg-31', text: 'The Whistle Blowers Protection Act was passed in:', options: ['2005', '2014', '2011', '2019'], correctIndex: 1 },

    // Welfare schemes
    { id: 'pg-32', text: 'The VB-G RAM G Act, 2025, which replaced MGNREGA, promises guaranteed wage employment of up to how many days a year?', options: ['100 days', '150 days', '125 days', '200 days'], correctIndex: 2 },
    { id: 'pg-33', text: 'The National Food Security Act was passed in:', options: ['2013', '2005', '2009', '2017'], correctIndex: 0 },
    { id: 'pg-34', text: 'Under Ayushman Bharat PM-JAY, health cover per eligible family per year is:', options: ['Rs 1 lakh', 'Rs 3 lakh', 'Rs 10 lakh', 'Rs 5 lakh'], correctIndex: 3 },
    { id: 'pg-35', text: 'The Pradhan Mantri Ujjwala Yojana provides:', options: ['Free LPG connections to women from poor households', 'Free electricity connections', 'Free housing loans', 'Free bank accounts'], correctIndex: 0 },
    { id: 'pg-36', text: 'PM-KISAN gives income support to eligible farmer families of how much per year?', options: ['Rs 3,000', 'Rs 12,000', 'Rs 6,000', 'Rs 24,000'], correctIndex: 2 },
  ],

  flashcards: [
    { id: 'pg-fc-1', front: 'The Governor', back: 'Appointed by the President (Article 155) for five years, holding office at the pleasure of the President; minimum age 35. Appoints the Chief Minister, gives assent to bills (Article 200), issues ordinances (Article 213) and reports on failure of the constitutional machinery (Article 356).' },
    { id: 'pg-fc-2', front: 'Chief Minister and council of ministers', back: 'The CM is appointed by the Governor (Article 164). The council is collectively responsible to the Legislative Assembly. Its size is at most 15% of the Assembly strength and at least 12 (91st Amendment).' },
    { id: 'pg-fc-3', front: 'State legislature', back: 'Vidhan Sabha: 60 to 500 members, five-year term. Vidhan Parishad: a permanent house, one-third retire every two years, at most one-third of the Assembly size and at least 40. Six states have a council at present: Andhra Pradesh, Telangana, Karnataka, Maharashtra, Bihar and Uttar Pradesh.' },
    { id: 'pg-fc-4', front: 'Article 169', back: 'Parliament can create or abolish a Legislative Council by ordinary law if the Assembly passes a resolution by a special majority. This is not treated as a constitutional amendment under Article 368.' },
    { id: 'pg-fc-5', front: 'High Courts', back: 'Judges are appointed by the President after consulting the Chief Justice of India, the Governor and the Chief Justice of the High Court. They retire at 62. Article 226: writs. Article 227: superintendence over subordinate courts.' },
    { id: 'pg-fc-6', front: 'Constitutional, statutory and executive bodies', back: 'Constitutional: Election Commission, UPSC, Finance Commission, CAG, NCSC, NCST, NCBC. Statutory: NHRC, CVC, CIC, Lokpal, CCI, SEBI, TRAI. Executive: NITI Aayog, Law Commission.' },
    { id: 'pg-fc-7', front: 'Key statutes and years', back: 'NHRC: Protection of Human Rights Act 1993. Competition Act 2002. RTI Act 2005. NGT Act 2010. Lokpal and Lokayuktas Act 2013. SEBI got statutory status in 1992. NCBC became constitutional through the 102nd Amendment in 2018.' },
    { id: 'pg-fc-8', front: 'Election Commission of India', back: 'Article 324. A Chief Election Commissioner and other Election Commissioners, with a tenure of six years or up to age 65, whichever is earlier. It conducts elections to Parliament, state legislatures, the President and the Vice-President. Local body elections are held by State Election Commissions.' },
    { id: 'pg-fc-9', front: 'Election laws', back: 'Representation of the People Act 1950: electoral rolls, allocation of seats, qualifications of voters. Act of 1951: conduct of elections, disqualifications, corrupt practices and disputes. The Model Code of Conduct is a set of guidelines, not a law.' },
    { id: 'pg-fc-10', front: 'Electoral milestones', back: 'Voting age 18: 61st Amendment (1988). Anti-defection (Tenth Schedule): 52nd Amendment (1985). NOTA: Supreme Court, 2013. Women reservation: 106th Amendment (2023), to apply after the census and delimitation. Electoral bonds scheme struck down: February 2024.' },
    { id: 'pg-fc-11', front: 'Right to Information', back: 'RTI Act 2005: a reply within 30 days (48 hours if life or liberty is involved). First appeal to the First Appellate Authority, second appeal to the Central or State Information Commission. Section 8 lists exemptions.' },
    { id: 'pg-fc-12', front: 'Rights and landmark laws', back: 'Right to Education Act 2009: ages 6 to 14, with 25% seats for disadvantaged children in private schools. Puttaswamy (2017): privacy is a fundamental right. Digital Personal Data Protection Act 2023. Whistle Blowers Protection Act 2014. Consumer Protection Act 2019.' },
    { id: 'pg-fc-13', front: 'E-governance milestones', back: 'National e-Governance Plan 2006, Direct Benefit Transfer 2013, Digital India 2015, DigiLocker 2015, PRAGATI 2015, GeM 2016, Mission Karmayogi 2020. JAM is Jan Dhan, Aadhaar and Mobile. Citizens\' Charters began in 1997.' },
    { id: 'pg-fc-14', front: 'Welfare schemes and years', back: 'PMJDY 2014. Swachh Bharat 2014. Beti Bachao Beti Padhao 2015. PMAY urban 2015 and rural 2016. PM Ujjwala 2016. PM-JAY 2018. PM-KISAN 2019. Jal Jeevan Mission 2019. NFSA 2013. The VB-G RAM G Act 2025 replaced MGNREGA (2005). Check current amounts before the exam.' },
  ],

  notes: [
    {
      id: 'pg-note-state',
      title: 'State Government: Governor, Legislature and Courts',
      sections: [
        {
          heading: 'Governor and Chief Minister',
          body: pts([
            'Each state has a Governor (Article 153), appointed by the President (Article 155) for five years, but holding office at the pleasure of the President (Article 156). He or she must be a citizen, at least 35 years old, and must not hold an office of profit. One person can serve as Governor of more than one state.',
            'Article 163: a council of ministers headed by the Chief Minister aids and advises the Governor, except in matters where the Governor acts in discretion.',
            'The Governor appoints the Chief Minister (Article 164) and the Advocate General (Article 165), summons and prorogues the Assembly, and can dissolve it.',
            'Bills: under Article 200 the Governor can give assent, withhold assent, return a bill (other than a money bill) or reserve it for the President.',
            'Ordinances: under Article 213 the Governor can issue an ordinance when the legislature is not in session. It lapses six weeks after the legislature reassembles unless approved earlier.',
            'Under Article 161 the Governor can suspend, remit or commute sentences. Unlike the President, the Governor cannot pardon a death sentence or a court-martial sentence.',
            'The council of ministers is collectively responsible to the Legislative Assembly (Article 164). Its size is capped at 15% of the Assembly strength, with a minimum of 12 (91st Amendment, 2003).',
            'The Governor reports to the President on failure of the constitutional machinery in the state (Article 356).',
          ]),
        },
        {
          heading: 'State Legislature',
          body: pts([
            'The Legislative Assembly (Vidhan Sabha) is directly elected, with between 60 and 500 members (Article 170), though smaller states such as Goa, Sikkim and Mizoram have fewer than 60. The term is five years unless dissolved earlier, and the house chooses a Speaker.',
            'The Legislative Council (Vidhan Parishad) is a permanent house in states that have one. One-third of its members retire every two years. It has at most one-third of the Assembly strength and at least 40 members.',
            'Council composition: one-third elected by MLAs, one-third by local bodies, one-twelfth by graduates, one-twelfth by teachers and one-sixth nominated by the Governor for literature, science, art, the cooperative movement or social service.',
            'Six states currently have a council: Andhra Pradesh, Telangana, Karnataka, Maharashtra, Bihar and Uttar Pradesh. Check for any change before the exam.',
            'Article 169: Parliament can create or abolish a council by ordinary law if the Assembly passes a resolution by a special majority. This is not treated as a constitutional amendment.',
            'A money bill can be introduced only in the Assembly. The Council can only make recommendations, within 14 days, and the Assembly can reject them.',
          ]),
        },
        {
          heading: 'High Courts and Subordinate Courts',
          body: pts([
            'Every state has a High Court (Articles 214-231), though some courts serve more than one state or Union Territory, such as Punjab and Haryana, Bombay and Guwahati.',
            'Judges are appointed by the President after consulting the Chief Justice of India, the Governor and the Chief Justice of the High Court. They retire at 62 and can be removed in the same way as Supreme Court judges.',
            'Article 226 gives High Courts power to issue writs for fundamental rights and for other legal rights. Article 227 gives them superintendence over all subordinate courts in the state.',
            'District judges are appointed by the Governor in consultation with the High Court (Article 233). The Gram Nyayalayas Act (2008) provides for village courts, and Lok Adalats settle disputes by agreement.',
          ]),
        },
      ],
    },
    {
      id: 'pg-note-bodies',
      title: 'Constitutional, Statutory and Regulatory Bodies',
      sections: [
        {
          heading: 'Three Kinds of Bodies',
          body: pts([
            'Constitutional bodies are set up directly by the Constitution: the Election Commission (Article 324), UPSC (315), the Finance Commission (280), the CAG (148), the Attorney General (76), the National Commissions for Scheduled Castes (338), Scheduled Tribes (338A) and Backward Classes (338B, from the 102nd Amendment in 2018) and the GST Council (279A).',
            'Statutory bodies are created by an Act of Parliament: the NHRC (Protection of Human Rights Act, 1993), the Central Vigilance Commission (statutory since 2003), the Central Information Commission (RTI Act, 2005), the Lokpal (2013), the Competition Commission (2002) and the National Green Tribunal (2010).',
            'Executive or non-statutory bodies come from a government resolution: NITI Aayog (Cabinet resolution, January 2015, replacing the Planning Commission) and the Law Commission. The CBI was set up by a 1963 resolution and draws its powers from the Delhi Special Police Establishment Act, 1946.',
            'A quick test for an exam question: if the body appears in the Constitution it is constitutional; if an Act created it, it is statutory; if only a resolution created it, it is executive.',
          ]),
        },
        {
          heading: 'Accountability Bodies',
          body: pts([
            'NHRC: protects human rights and can inquire into violations, but its recommendations are not binding. Its chairperson is a former Chief Justice of India or a former judge of the Supreme Court.',
            'Lokpal and Lokayuktas Act, 2013: Lokpal at the Centre to inquire into corruption complaints against public servants, and Lokayuktas in the states under state laws. The first Lokpal began work in 2019.',
            'Central Vigilance Commission: oversees vigilance and anti-corruption work in central departments; the Santhanam Committee (1964) recommended it.',
            'Central and State Information Commissions: hear second appeals under the RTI Act.',
            'CAG: audits government accounts and reports to the President and Governors, and is described as the guardian of the public purse.',
          ]),
        },
        {
          heading: 'Regulators',
          body: pts([
            'SEBI regulates securities markets, with statutory powers since 1992. RBI regulates banking. IRDAI regulates insurance. PFRDA regulates pensions.',
            'TRAI regulates telecommunications (1997). CERC regulates electricity tariffs. FSSAI sets food safety standards under the Food Safety and Standards Act, 2006.',
            'The Competition Commission of India prevents anti-competitive practices and abuse of dominance.',
            'The National Green Tribunal (2010) hears environmental cases quickly.',
          ]),
        },
      ],
    },
    {
      id: 'pg-note-elections',
      title: 'Elections and the Election Commission',
      sections: [
        {
          heading: 'The Election Commission',
          body: pts([
            'Article 324 gives the Election Commission of India control over the preparation of electoral rolls and the conduct of elections to Parliament, state legislatures and the offices of President and Vice-President.',
            'The Commission has a Chief Election Commissioner and other Election Commissioners (two at present), who have equal powers and decide by majority. The tenure is six years or until the age of 65, whichever is earlier.',
            'Since the 2023 Act, appointments are made on the recommendation of a committee of the Prime Minister, the Leader of the Opposition in the Lok Sabha and a Union Cabinet minister nominated by the Prime Minister.',
            'Elections to Panchayats and Municipalities are conducted by State Election Commissions (Articles 243K and 243ZA).',
            'Delimitation of constituencies is done by the Delimitation Commission. Seat allocation to states has been frozen on 1971 Census numbers until the first Census after 2026 (84th Amendment).',
            'The 106th Amendment (the Nari Shakti Vandan Adhiniyam, 2023) reserves one-third of seats in the Lok Sabha and state Assemblies for women, to apply after the next census and delimitation.',
          ]),
        },
        {
          heading: 'Election Laws and Procedure',
          body: pts([
            'Representation of the People Act, 1950: allocation of seats, qualifications of voters and preparation of electoral rolls.',
            'Representation of the People Act, 1951: conduct of elections, qualifications and disqualifications of candidates, corrupt practices and election disputes. Disputes about Parliament and state legislature elections go to the High Court by an election petition.',
            'The 61st Amendment (1988) lowered the voting age from 21 to 18.',
            'The Model Code of Conduct is a set of guidelines followed by parties and candidates from the announcement of elections. It is not a law.',
            'Voting uses Electronic Voting Machines, with VVPAT slips introduced in stages and used in every constituency in 2019. The first-past-the-post system decides the winner in each constituency.',
            'NOTA (None of the Above) was introduced after the Supreme Court judgment of 2013 in the PUCL case.',
            'In 2002 the Supreme Court required candidates to disclose their criminal record, assets and education. In February 2024 it struck down the electoral bonds scheme.',
          ]),
        },
        {
          heading: 'Anti-Defection Law',
          body: pts([
            'The Tenth Schedule was added by the 52nd Amendment (1985). A member is disqualified for voluntarily giving up party membership or for voting against the party whip.',
            'The 91st Amendment (2003) removed the exemption for splits of one-third of a party and kept the exemption only for a merger of two-thirds of the party members.',
            'The Presiding Officer decides disqualification, and the Supreme Court in Kihoto Hollohan (1992) upheld the law while allowing judicial review of such decisions.',
            'Independent members who join a party after election, and nominated members who join a party after six months, can be disqualified.',
          ]),
        },
      ],
    },
    {
      id: 'pg-note-governance',
      title: 'Governance, Rights and Welfare Schemes',
      sections: [
        {
          heading: 'Transparency and Rights',
          body: pts([
            'The Right to Information Act, 2005: any citizen can request information from a public authority. The Public Information Officer should reply within 30 days (48 hours if life or liberty is involved).',
            'Appeals: first to the First Appellate Authority in the department, then to the Central or State Information Commission. Section 8 lists exemptions such as national security and cabinet papers.',
            'Citizens\' Charters began in 1997, when the Centre and states agreed to adopt them. The Sevottam model is a framework for improving service delivery.',
            'The Whistle Blowers Protection Act (2014) protects people who report corruption. The Lokpal and Lokayuktas Act (2013) created anti-corruption bodies.',
            'The Right to Education Act, 2009 makes education a right for children aged 6 to 14 and reserves 25% of seats in private schools for disadvantaged children.',
            'In K. S. Puttaswamy (2017) a nine-judge bench held that privacy is a fundamental right. The Digital Personal Data Protection Act, 2023 regulates the handling of personal data.',
            'Public interest litigation allows people to approach the courts for the benefit of others, and it widened access to justice from the 1980s.',
          ]),
        },
        {
          heading: 'E-Governance',
          body: pts([
            'National e-Governance Plan (2006) was followed by Digital India (2015), which aims at online services, digital infrastructure and digital literacy.',
            'DigiLocker (2015) stores documents digitally. UMANG offers many government services in one app. The Government e-Marketplace, GeM (2016), handles public procurement online.',
            'Direct Benefit Transfer (2013) sends subsidies straight to bank accounts. The JAM trinity links Jan Dhan accounts, Aadhaar and mobile numbers.',
            'PRAGATI (2015) is a platform for the Prime Minister to review projects and grievances. MyGov invites citizens to take part in policy discussions.',
            'Mission Karmayogi (2020) is a national programme for capacity building of civil servants.',
          ]),
        },
        {
          heading: 'Major Welfare Schemes',
          body: pts([
            'Jobs: the Mahatma Gandhi National Rural Employment Guarantee Act (2005) was replaced by the Viksit Bharat guarantee for rural employment law (VB-G RAM G Act, 2025), which promises 125 days of wage employment. Check the effective date and the details in the Act.',
            'Food: the National Food Security Act (2013) covers up to 75% of the rural and 50% of the urban population, with 5 kg of grain per person per month; poorest households under Antyodaya get 35 kg per household. ICDS (1975) supports child nutrition and PM POSHAN (2021) replaced the mid-day meal scheme.',
            'Finance: Pradhan Mantri Jan Dhan Yojana (2014) for bank accounts; Atal Pension Yojana (2015); PM-KISAN (2019) gives eligible farmer families Rs 6,000 a year in three instalments.',
            'Health and cooking fuel: Ayushman Bharat PM-JAY (2018) offers health cover of Rs 5 lakh per eligible family per year; PM Ujjwala (2016) gives LPG connections to women from poor households.',
            'Housing, water and sanitation: PMAY urban (2015) and rural (2016); Swachh Bharat Mission (2014); Jal Jeevan Mission (2019) for tap water.',
            'Girls and education: Beti Bachao Beti Padhao (2015); Samagra Shiksha (2018). Check current amounts and eligibility before the exam, as schemes are revised often.',
          ]),
        },
      ],
    },
  ],

  tags: {
    questions: expand([
      ['pg', 1, 10, 'polity.state-government'],
      ['pg', 11, 12, 'polity.statutory-bodies'],
      ['pg', 13, 13, 'polity.constitutional-bodies', 'polity.statutory-bodies'],
      ['pg', 14, 16, 'polity.statutory-bodies'],
      ['pg', 17, 23, 'polity.elections'],
      ['pg', 24, 27, 'polity.public-policy-rights'],
      ['pg', 28, 31, 'gov.transparency-egov'],
      ['pg', 32, 36, 'gov.welfare-schemes'],
    ]),
    flashcards: expand([
      ['pg-fc', 1, 5, 'polity.state-government'],
      ['pg-fc', 6, 7, 'polity.statutory-bodies'],
      ['pg-fc', 8, 10, 'polity.elections'],
      ['pg-fc', 11, 11, 'polity.public-policy-rights', 'gov.transparency-egov'],
      ['pg-fc', 12, 12, 'polity.public-policy-rights'],
      ['pg-fc', 13, 13, 'gov.transparency-egov'],
      ['pg-fc', 14, 14, 'gov.welfare-schemes'],
    ]),
    notes: {
      'pg-note-state': ['polity.state-government'],
      'pg-note-bodies': ['polity.statutory-bodies', 'polity.constitutional-bodies'],
      'pg-note-elections': ['polity.elections'],
      'pg-note-governance': ['polity.public-policy-rights', 'gov.transparency-egov', 'gov.welfare-schemes'],
    },
  },
};
