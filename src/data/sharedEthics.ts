import type { ContentPack } from './contentPacks';
import { expand } from './contentTags';
import { pts } from './packHelpers';

export const ethicsPack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'ethics',
  },

  questions: [
    // Ethics and human interface
    { id: 'eth-1', text: 'Which of the following best describes ethics?', options: ['A system of moral principles that guides human conduct', 'Only the laws made by the state', 'A set of religious rituals', 'Personal taste and preference'], correctIndex: 0 },
    { id: 'eth-2', text: 'The branch of ethics that studies the meaning and nature of moral terms such as "good" and "right" is:', options: ['Applied ethics', 'Meta-ethics', 'Normative ethics', 'Descriptive ethics'], correctIndex: 1 },
    { id: 'eth-3', text: 'Normative ethics is mainly concerned with:', options: ['The history of moral customs', 'The grammar of moral language', 'What we ought to do and the principles for deciding it', 'How people actually behave'], correctIndex: 2 },
    { id: 'eth-4', text: 'Bioethics and business ethics are examples of:', options: ['Meta-ethics', 'Descriptive ethics', 'Normative ethics', 'Applied ethics'], correctIndex: 3 },
    { id: 'eth-5', text: 'The first school of values for a child is usually considered to be the:', options: ['Family', 'Peer group', 'Mass media', 'Workplace'], correctIndex: 0 },

    // Attitude
    { id: 'eth-6', text: 'The three components of an attitude in the ABC model are:', options: ['Affective, behavioural and cognitive', 'Aptitude, belief and conduct', 'Action, bias and choice', 'Ability, behaviour and character'], correctIndex: 0 },
    { id: 'eth-7', text: 'The discomfort felt when beliefs and actions conflict is explained by cognitive dissonance, a theory of:', options: ['Daniel Goleman', 'Sigmund Freud', 'Leon Festinger', 'B. F. Skinner'], correctIndex: 2 },
    { id: 'eth-8', text: "Explaining a person's behaviour by their personality while ignoring the situation is called:", options: ['The halo effect', 'The fundamental attribution error', 'Confirmation bias', 'Cognitive dissonance'], correctIndex: 1 },
    { id: 'eth-9', text: 'A message is generally more persuasive when its source is seen as:', options: ['Anonymous', 'Aggressive', 'Credible and trustworthy', 'Unrelated to the topic'], correctIndex: 2 },

    // Aptitude, foundational values and emotional intelligence
    { id: 'eth-10', text: "Daniel Goleman's model of emotional intelligence has how many components?", options: ['Three', 'Four', 'Five', 'Seven'], correctIndex: 2 },
    { id: 'eth-11', text: "Which of these is a component of emotional intelligence in Goleman's model?", options: ['Empathy', 'Nepotism', 'Fatalism', 'Cynicism'], correctIndex: 0 },
    { id: 'eth-12', text: 'Emotional intelligence was popularised in 1995 by:', options: ['Abraham Maslow', 'Daniel Goleman', 'Ivan Pavlov', 'Carl Jung'], correctIndex: 1 },
    { id: 'eth-13', text: 'Impartiality in a civil servant means:', options: ['Favouring the ruling party', 'Deciding without bias towards any person or group', 'Avoiding all decisions', 'Following popular opinion'], correctIndex: 1 },
    { id: 'eth-14', text: 'Non-partisanship means a civil servant:', options: ['Joins a political party openly', 'Serves only one government', 'Stays politically neutral and serves any elected government', 'Refuses to work with ministers'], correctIndex: 2 },
    { id: 'eth-15', text: 'Empathy differs from sympathy because empathy involves:', options: ['Feeling pity from a distance', 'Understanding and sharing how another person feels', 'Giving money to the needy', 'Avoiding emotional involvement'], correctIndex: 1 },

    // Moral thinkers and philosophers
    { id: 'eth-16', text: 'The categorical imperative is associated with:', options: ['John Stuart Mill', 'Aristotle', 'Immanuel Kant', 'Jeremy Bentham'], correctIndex: 2 },
    { id: 'eth-17', text: 'Utilitarianism judges an action right if it produces:', options: ['The greatest good for the greatest number', 'The most benefit to the person acting', 'Obedience to duty alone', 'The approval of elders'], correctIndex: 0 },
    { id: 'eth-18', text: 'Virtue ethics, which stresses character, is chiefly associated with:', options: ['Kant', 'Aristotle', 'Rawls', 'Machiavelli'], correctIndex: 1 },
    { id: 'eth-19', text: 'The "veil of ignorance" is a concept of:', options: ['Plato', 'Gandhi', 'John Rawls', 'Confucius'], correctIndex: 2 },
    { id: 'eth-20', text: 'The Noble Eightfold Path is a teaching of:', options: ['Mahavira', 'Shankaracharya', 'Guru Nanak', 'Gautama Buddha'], correctIndex: 3 },
    { id: 'eth-21', text: "Which of these is among Gandhi's seven social sins?", options: ['Politics without principles', 'Wealth with hard work', 'Knowledge with character', 'Commerce with morality'], correctIndex: 0 },
    { id: 'eth-22', text: "Gandhi's concept of Sarvodaya stands for:", options: ['Rule by the majority', 'Welfare of all', 'Self-defence', 'Industrial growth'], correctIndex: 1 },

    // Public service values
    { id: 'eth-23', text: "The Second Administrative Reforms Commission's report on Ethics in Governance is its:", options: ['First report', 'Second report', 'Fourth report', 'Ninth report'], correctIndex: 2 },
    { id: 'eth-24', text: 'The seven Nolan principles of public life include selflessness, integrity, objectivity, accountability, openness, honesty and:', options: ['Profit', 'Leadership', 'Loyalty to a party', 'Secrecy'], correctIndex: 1 },
    { id: 'eth-25', text: 'The conduct of central government civil servants is governed by the:', options: ['Central Civil Services (Conduct) Rules', 'Indian Penal Code alone', 'Companies Act', 'Right to Information Act'], correctIndex: 0 },
    { id: 'eth-26', text: 'A conflict of interest arises when:', options: ['Two departments disagree', 'A file is delayed', "A public servant's private interest can influence official duties", 'A minister is transferred'], correctIndex: 2 },

    // Probity in governance
    { id: 'eth-27', text: 'The Prevention of Corruption Act was enacted in:', options: ['1947', '1988', '2005', '2013'], correctIndex: 1 },
    { id: 'eth-28', text: 'Complaints of corruption against public servants at the Centre can be inquired into by the:', options: ['Lokpal', 'Finance Commission', 'Law Commission', 'Planning Commission'], correctIndex: 0 },
    { id: 'eth-29', text: 'The Santhanam Committee (1964) recommended setting up the:', options: ['National Human Rights Commission', 'Central Vigilance Commission', 'Election Commission', 'Competition Commission'], correctIndex: 1 },
    { id: 'eth-30', text: 'A social audit of a government scheme is carried out with the involvement of:', options: ['Only the Auditor General', 'Only the minister', 'The people the scheme is meant to serve', 'Foreign experts'], correctIndex: 2 },

    // Case studies
    { id: 'eth-31', text: 'In an ethics case study, the best first step is usually to:', options: ['Name the culprit', 'Identify the facts, stakeholders and ethical issues', 'Quote a long definition', 'Suggest a punishment'], correctIndex: 1 },
    { id: 'eth-32', text: 'When a rule seems to clash with conscience, a civil servant should first:', options: ['Break the rule quietly', 'Check the rule and facts, consult superiors, and choose the lawful and ethical course', 'Ignore the matter', 'Follow popular opinion'], correctIndex: 1 },
    { id: 'eth-33', text: 'A good case-study answer ends with:', options: ['A long list of options only', 'A clear recommended decision with reasons and steps to prevent a repeat', 'An emotional appeal', 'A summary of the question'], correctIndex: 1 },
  ],

  flashcards: [
    { id: 'eth-fc-1', front: 'Dimensions of ethics', back: 'Meta-ethics: the meaning of moral terms. Normative ethics: principles of right and wrong (deontology, utilitarianism, virtue ethics). Applied ethics: specific issues such as bioethics, business ethics and ethics in administration.' },
    { id: 'eth-fc-2', front: 'Determinants and consequences of ethics', back: 'Determinants: family, society, education, religion, law, culture, conscience and the situation. Consequences: ethical conduct builds trust and order; unethical conduct harms others, the person and public trust in institutions.' },
    { id: 'eth-fc-3', front: 'Attitude: components and functions', back: 'Components: cognitive (beliefs), affective (feelings), behavioural (tendency to act). Katz functions: utilitarian (adjustment), knowledge, ego-defensive and value-expressive.' },
    { id: 'eth-fc-4', front: 'Cognitive dissonance and persuasion', back: 'Festinger: tension when beliefs and actions clash, reduced by changing the belief, changing the action or rationalising. Persuasion depends on the credibility of the source, the message and the audience.' },
    { id: 'eth-fc-5', front: 'Goleman: five components of emotional intelligence', back: 'Self-awareness, self-regulation, motivation, empathy and social skills. Salovey and Mayer first described the idea (1990); Goleman popularised it (1995).' },
    { id: 'eth-fc-6', front: 'Foundational values for civil service', back: 'Integrity, impartiality, non-partisanship, objectivity, dedication to public service, empathy, tolerance and compassion towards the weaker sections.' },
    { id: 'eth-fc-7', front: 'Kant and Bentham/Mill', back: 'Kant (deontology): act only on rules you could will to be universal law, and treat people as ends, never merely as means. Bentham and Mill (utilitarianism): the right act gives the greatest happiness to the greatest number; critics say it can overlook minority rights.' },
    { id: 'eth-fc-8', front: 'Aristotle and Rawls', back: 'Aristotle: virtue ethics, the golden mean, character built by habit. Rawls (A Theory of Justice, 1971): justice as fairness, the veil of ignorance and the difference principle.' },
    { id: 'eth-fc-9', front: 'Indian moral thinkers', back: 'Buddha: Eightfold Path and the middle way. Mahavira: ahimsa and anekantavada. Kautilya: statecraft and the welfare of subjects. Gandhi: truth, non-violence, trusteeship and Sarvodaya. Vivekananda: service of humanity. Ambedkar: liberty, equality, fraternity. Tagore: humanism.' },
    { id: 'eth-fc-10', front: "Gandhi's seven social sins", back: 'Wealth without work, pleasure without conscience, knowledge without character, commerce without morality, science without humanity, religion without sacrifice, politics without principles.' },
    { id: 'eth-fc-11', front: 'Nolan principles of public life', back: 'Selflessness, integrity, objectivity, accountability, openness, honesty and leadership (UK Committee on Standards in Public Life, 1995).' },
    { id: 'eth-fc-12', front: 'Second ARC on ethics', back: 'Fourth Report, Ethics in Governance (2007). It deals with codes of ethics and conduct, conflict of interest, ethical infrastructure and strengthening anti-corruption bodies.' },
    { id: 'eth-fc-13', front: 'Probity tools in India', back: 'RTI Act 2005, Citizens Charters, Prevention of Corruption Act 1988 (amended 2018), Lokpal and Lokayuktas Act 2013, Whistle Blowers Protection Act 2014, social audit, CVC, e-governance and GeM.' },
    { id: 'eth-fc-14', front: 'Case study answer framework', back: '1 Facts and stakeholders. 2 Ethical issues and values in conflict. 3 Options with pros and cons. 4 Best option with reasons (law, ethics, consequences). 5 Long-term steps. Write "I would", and stay lawful and practical.' },
  ],

  notes: [
    {
      id: 'eth-note-foundations',
      title: 'Ethics, Attitude, Aptitude and Emotional Intelligence',
      sections: [
        {
          heading: 'Ethics, Values and Their Sources',
          body: pts([
            'Ethics is the study of what is right and wrong and how people should act. Morals are the beliefs and practices that guide a person or a society.',
            'Three dimensions: meta-ethics (the meaning of moral terms), normative ethics (the principles for deciding what to do) and applied ethics (specific issues such as bioethics and ethics in administration).',
            'Determinants of ethical conduct: family, society, school, religion, law, culture, the media, peers, personal conscience and the situation a person faces.',
            'Consequences: ethical conduct builds trust and an orderly society. Unethical conduct harms others, brings guilt or penalties to the person, and weakens trust in institutions.',
            'Human values such as truth, non-violence, compassion, justice, honesty, tolerance and courage are first learned in the family and reinforced by schools, society and role models.',
            'Law and ethics are not the same: something can be legal but unethical, and the law cannot cover every situation.',
          ]),
        },
        {
          heading: 'Attitude',
          body: pts([
            'An attitude is a settled way of thinking, feeling and acting towards a person, object or idea. It has a cognitive part (beliefs), an affective part (feelings) and a behavioural part (the tendency to act).',
            'Katz described four functions: utilitarian (helping a person adjust), knowledge (making sense of the world), ego-defensive (protecting self-image) and value-expressive (showing what a person believes in).',
            'Attitudes are formed by family, peers, media, personal experience and culture. They can change with new information, experience or persuasion.',
            'Cognitive dissonance (Festinger): when beliefs and actions clash, people feel tension and reduce it by changing the belief, changing the action or rationalising.',
            'Persuasion works best when the source is credible and trustworthy, the message is clear and the audience is receptive. Repetition and two-sided arguments can also help.',
            'Prejudice is a prejudged, usually negative, attitude; a stereotype is a fixed belief about a group; discrimination is unfair behaviour. A civil servant must guard against all three.',
            'Moral attitudes concern right and wrong; political attitudes concern governance and parties. A civil servant should keep personal political attitudes out of official decisions.',
          ]),
        },
        {
          heading: 'Aptitude, Foundational Values and Emotional Intelligence',
          body: pts([
            'Foundational values for civil service: integrity, impartiality, non-partisanship, objectivity, dedication to public service, empathy, tolerance and compassion towards the weaker sections.',
            'Integrity means consistency between thought, word and deed, and honesty even when no one is watching. Objectivity means deciding on facts and rules, not on feelings or pressure.',
            'Emotional intelligence is the ability to recognise and manage your own emotions and those of others. Goleman gave five components: self-awareness, self-regulation, motivation, empathy and social skills.',
            'Salovey and Mayer first described emotional intelligence in 1990; Daniel Goleman popularised it in 1995.',
            'In administration it helps officers handle stress, deal with citizens, settle conflicts, lead teams and avoid reacting in anger.',
            'Sympathy is feeling for someone; empathy is understanding and sharing their view; compassion adds action to help.',
          ]),
        },
      ],
    },
    {
      id: 'eth-note-thinkers',
      title: 'Moral Thinkers and Philosophers',
      sections: [
        {
          heading: 'Western Thinkers',
          body: pts([
            'Socrates held that the unexamined life is not worth living and that knowledge of the good leads to right action. Plato linked justice in the person with justice in the state.',
            'Aristotle: virtue ethics. Good character is built by habit, and virtue lies in the golden mean between excess and deficiency (courage between rashness and cowardice).',
            'Kant: deontology. Right actions follow duty. The categorical imperative says to act only on a rule you could will to be a universal law, and to treat people as ends, never merely as means.',
            'Bentham and Mill: utilitarianism. The right act produces the greatest happiness for the greatest number. Mill distinguished higher from lower pleasures. A common criticism is that it can overlook the rights of minorities.',
            'Rawls (A Theory of Justice, 1971): justice as fairness. Rules should be chosen behind a veil of ignorance, not knowing your own position in society, and inequalities are justified only if they help the worst-off (the difference principle).',
            'Machiavelli (The Prince) separated politics from conventional morality and stressed results. Compare this with Kautilya, who tied the success of the ruler to the welfare of the people.',
            'Confucius stressed ren (humaneness), respect for family and virtuous rulers.',
          ]),
        },
        {
          heading: 'Indian Thinkers',
          body: pts([
            'Buddha: the Four Noble Truths and the Eightfold Path, the middle way between indulgence and severe self-denial, and compassion for all beings.',
            'Mahavira: ahimsa (non-violence), anekantavada (many-sidedness of truth) and the five vows.',
            'Kautilya (Arthashastra): statecraft with ethics. In the happiness of the subjects lies the happiness of the king. A ruler must be disciplined, just and vigilant.',
            'Thiruvalluvar (Tirukkural): practical ethics for everyday life, including honesty, self-control and good governance.',
            'Gandhi: truth (satya), non-violence (ahimsa), satyagraha, trusteeship and Sarvodaya (welfare of all). He held that means and ends must both be pure. His seven social sins: wealth without work, pleasure without conscience, knowledge without character, commerce without morality, science without humanity, religion without sacrifice and politics without principles.',
            'Vivekananda: service of humanity is service of God, and strength of character through education.',
            'Tagore: humanism, universal values and an education that frees the mind.',
            'Ambedkar: social democracy built on liberty, equality and fraternity; constitutional morality, meaning respect for the spirit of the Constitution; and the removal of caste discrimination.',
          ]),
        },
        {
          heading: 'Lessons from Leaders and Administrators',
          body: pts([
            'Lal Bahadur Shastri showed accountability and simplicity: he resigned as Railway Minister in 1956 taking moral responsibility for a railway accident.',
            'A. P. J. Abdul Kalam combined scientific excellence with simple living, service and a concern for the young.',
            'Sardar Patel showed firm but fair leadership in integrating the princely states and is regarded as the patron of the all-India civil services.',
            'Mother Teresa: compassion put into daily service for the poor and the dying.',
            'E. Sreedharan: integrity, discipline and time-bound delivery of the Konkan Railway and the Delhi Metro.',
            'Family, schools, society, the media and role models all shape values. Parents lead by example; schools teach values through the curriculum and practice; communities reinforce them.',
          ]),
        },
      ],
    },
    {
      id: 'eth-note-public-service',
      title: 'Public Service Values and Probity in Governance',
      sections: [
        {
          heading: 'Values and Ethical Governance',
          body: pts([
            'Public service means holding power as a trust for citizens. The officer is accountable to the people, the law and the Constitution.',
            'Common ethical concerns in government: conflict of interest, misuse of office, nepotism and favouritism, breach of confidentiality, political pressure and the careless use of public funds.',
            'Sources of ethical guidance: laws, rules and regulations, codes of conduct (the Central Civil Services (Conduct) Rules and the All India Services (Conduct) Rules), conscience, precedent and the advice of seniors.',
            'An ethical dilemma is a choice between two goods or two duties, for example confidentiality against transparency. A conflict of interest arises when a private interest can influence official duty.',
            'Accountability can be political (to the legislature and voters), administrative (to superiors), legal (to the courts) and social (to citizens).',
            'The Nolan principles of public life: selflessness, integrity, objectivity, accountability, openness, honesty and leadership.',
            'Strengthening ethics: training, leadership by example, clear codes, citizen charters, e-governance, fair appraisal and protection for whistle-blowers. The Second ARC dealt with this in its fourth report, Ethics in Governance (2007).',
          ]),
        },
        {
          heading: 'Probity: Laws and Tools',
          body: pts([
            'Probity means uprightness and honesty in public life. Its philosophical basis is that governance exists for the common good, not for the private gain of those in power.',
            'Transparency: the Right to Information Act (2005), proactive disclosure of information, Citizens Charters (from 1997), the Sevottam framework for service delivery and e-governance.',
            'Anti-corruption laws: the Prevention of Corruption Act 1988 (amended in 2018 to make giving a bribe an offence), the Lokpal and Lokayuktas Act 2013, the Whistle Blowers Protection Act 2014, the Prevention of Money Laundering Act 2002, the Benami Transactions law (amended 2016) and the Fugitive Economic Offenders Act 2018.',
            'Institutions: the Central Vigilance Commission (recommended by the Santhanam Committee in 1964), the CBI, the Lokpal, and the CAG and the Public Accounts Committee for audit of spending.',
            'Use of public funds: the General Financial Rules 2017, e-procurement and the Government e-Marketplace (GeM), and Direct Benefit Transfer to reduce leakage.',
            'Social audits, first made a legal requirement for MGNREGA, let the people a scheme serves check its records. The CPGRAMS portal handles public grievances.',
          ]),
        },
        {
          heading: 'Corruption: Causes and Remedies',
          body: pts([
            'Causes: discretion without transparency, weak accountability, complex rules, slow justice, weak enforcement, political funding and social tolerance of small bribes.',
            'Effects: leakage of welfare funds, poor roads and buildings, loss of trust in the state, higher costs for business and greater inequality.',
            'Remedies: transparency (RTI, e-procurement), simpler rules and digital services, strong independent institutions, protection for whistle-blowers, social audits and fast trials.',
            'Ethics in the individual: refuse to take part, keep a record, report through the proper channel and build habits of honesty.',
            'Corporate governance: boards are responsible for disclosure, fair treatment of shareholders and risk control. Ethical issues in international relations and funding include aid with conditions, the arms trade, climate responsibility and human rights set against strategic interests.',
          ]),
        },
      ],
    },
    {
      id: 'eth-note-case-studies',
      title: 'Case Studies: Method and Worked Examples',
      sections: [
        {
          heading: 'A Five-Step Method',
          body: pts([
            'Step 1: read the case twice and list the facts. Name the stakeholders: you, the citizens, your seniors, juniors, the person in the dispute and the department.',
            'Step 2: name the ethical issues and the values in conflict, such as integrity against loyalty, or public interest against political pressure.',
            'Step 3: list two or three realistic options with the pros and cons of each, including the legal position.',
            'Step 4: choose the best option and explain why. Test it against the law, ethical principles and the consequences for all stakeholders.',
            'Step 5: add the longer-term steps that prevent a repeat, such as a transparent process, training or a better system.',
            'Write in the first person ("I would"), stay lawful and practical, avoid dramatic moves such as resigning at once, and keep the answer within the word limit.',
          ]),
        },
        {
          heading: 'Worked Example: Pressure to Favour a Relative Firm',
          body: pts([
            'Case: you are a District Collector. A local MLA asks you to award a road contract to a firm owned by his relative. The firm bid higher than others. Refusing may cause political friction.',
            'Stakeholders: citizens who pay for the road, the MLA, other bidders, your department and you. Values in conflict: integrity, impartiality and the careful use of public funds against political pressure.',
            'Options: (a) comply, which breaks the rules and wastes public money; (b) refuse without explanation, which is lawful but leaves the pressure in place; (c) follow the tender rules in the open, record the decision, tell the MLA politely that the process is binding, and report the pressure to the Chief Secretary if it continues.',
            'Best option: (c). It protects the public interest and keeps a written record. It also keeps the relationship with the MLA courteous.',
            'Long term: use e-tendering, publish the results, and rely on the Citizens Charter and the RTI Act so that decisions are open to scrutiny.',
          ]),
        },
        {
          heading: 'Worked Example: A Colleague Inflating Bills',
          body: pts([
            'Case: a junior engineer finds that a senior colleague is approving inflated bills for a bridge. Reporting may harm the engineer career, and the bridge may be unsafe if materials were cheapened.',
            'Stakeholders: the public who will use the bridge, the senior, the engineer, the department and the taxpayer. Values in conflict: integrity and public safety against loyalty and fear for the career.',
            'Options: (a) ignore it, which makes the engineer part of the wrong; (b) confront the senior privately, which may be safe but may also lead to the evidence being destroyed; (c) collect the facts and documents, and report to the vigilance officer or a higher authority, using the protection available to whistle-blowers.',
            'Best option: (c), and ask for a check of the bridge quality at once if safety is at risk. Acting on facts, not rumours, protects the engineer and the public.',
            'Long term: independent measurement of work, third-party quality checks and a clear whistle-blower channel.',
          ]),
        },
      ],
    },
  ],

  tags: {
    questions: expand([
      ['eth', 1, 5, 'eth.human-interface'],
      ['eth', 6, 9, 'eth.attitude'],
      ['eth', 10, 15, 'eth.aptitude-ei'],
      ['eth', 16, 22, 'eth.thinkers'],
      ['eth', 23, 26, 'eth.public-service-values'],
      ['eth', 27, 30, 'eth.probity'],
      ['eth', 31, 33, 'eth.case-studies'],
    ]),
    flashcards: expand([
      ['eth-fc', 1, 2, 'eth.human-interface'],
      ['eth-fc', 3, 4, 'eth.attitude'],
      ['eth-fc', 5, 6, 'eth.aptitude-ei'],
      ['eth-fc', 7, 10, 'eth.thinkers'],
      ['eth-fc', 11, 12, 'eth.public-service-values'],
      ['eth-fc', 13, 13, 'eth.probity'],
      ['eth-fc', 14, 14, 'eth.case-studies'],
    ]),
    notes: {
      'eth-note-foundations': ['eth.human-interface', 'eth.attitude', 'eth.aptitude-ei'],
      'eth-note-thinkers': ['eth.thinkers'],
      'eth-note-public-service': ['eth.public-service-values', 'eth.probity'],
      'eth-note-case-studies': ['eth.case-studies'],
    },
  },
};
