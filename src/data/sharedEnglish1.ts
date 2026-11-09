import type { ContentPack } from './contentPacks';
import { pts } from './packHelpers';

export const englishPack1: ContentPack = {
  topicByExam: {
    'ssc-cgl': 'english',
    'ibps-po': 'english',
    'sbi-po': 'english',
    cds: 'english',
    nda: 'gat',
  },

  questions: [
    // Grammar
    { id: 'en-1', text: 'Neither of the two answers ___ correct.', options: ['are', 'is', 'were', 'have been'], correctIndex: 1 },
    { id: 'en-2', text: 'He has been working here ___ 2019.', options: ['for', 'from', 'by', 'since'], correctIndex: 3 },
    { id: 'en-3', text: 'She is the ___ of the two sisters.', options: ['taller', 'tallest', 'more tall', 'most tall'], correctIndex: 0 },
    { id: 'en-4', text: 'Each of the students ___ given a certificate.', options: ['were', 'are', 'was', 'have been'], correctIndex: 2 },
    { id: 'en-5', text: 'I look forward to ___ you.', options: ['meet', 'met', 'have met', 'meeting'], correctIndex: 3 },
    { id: 'en-6', text: 'Choose the active voice of: "The letter was written by Ravi."', options: ['Ravi writes the letter.', 'Ravi wrote the letter.', 'Ravi has written the letter.', 'Ravi had written the letter.'], correctIndex: 1 },
    { id: 'en-7', text: 'Choose the correct indirect speech: She said, "I am tired."', options: ['She said that she is tired.', 'She told that she was tired.', 'She said that she was tired.', 'She said she were tired.'], correctIndex: 2 },
    { id: 'en-8', text: 'He is good ___ mathematics.', options: ['in', 'on', 'with', 'at'], correctIndex: 3 },
    { id: 'en-9', text: 'She is ___ honest woman.', options: ['an', 'a', 'the', 'no article'], correctIndex: 0 },
    { id: 'en-10', text: 'If I ___ you, I would accept the offer.', options: ['am', 'was', 'will be', 'were'], correctIndex: 3 },
    { id: 'en-11', text: 'By the time we reached the station, the train ___.', options: ['left', 'has left', 'had left', 'leaves'], correctIndex: 2 },
    { id: 'en-12', text: 'One of my friends ___ a doctor.', options: ['are', 'is', 'were', 'have been'], correctIndex: 1 },

    // Error spotting and sentence improvement
    { id: 'en-13', text: "Find the part with the error: He don't know | the answer to | this question.", options: ["He don't know", 'the answer to', 'this question', 'No error'], correctIndex: 0 },
    { id: 'en-14', text: 'Find the part with the error: "The news are very encouraging for investors."', options: ['The news', 'very encouraging', 'are', 'for investors'], correctIndex: 2 },
    { id: 'en-15', text: 'Find the part with the error: "Each of the boys have finished his work."', options: ['Each of the boys', 'have finished', 'his work', 'No error'], correctIndex: 1 },
    { id: 'en-16', text: 'Improve the underlined part: "She prefers tea than coffee."', options: ['from coffee', 'over of coffee', 'to coffee', 'No improvement'], correctIndex: 2 },

    // Vocabulary, idioms and spelling
    { id: 'en-17', text: 'Synonym of "Candid":', options: ['Secretive', 'Frank', 'Rude', 'Shy'], correctIndex: 1 },
    { id: 'en-18', text: 'Antonym of "Benevolent":', options: ['Kind', 'Generous', 'Gentle', 'Malevolent'], correctIndex: 3 },
    { id: 'en-19', text: 'Synonym of "Ephemeral":', options: ['Eternal', 'Heavy', 'Short-lived', 'Ancient'], correctIndex: 2 },
    { id: 'en-20', text: 'Antonym of "Scarce":', options: ['Plentiful', 'Rare', 'Costly', 'Limited'], correctIndex: 0 },
    { id: 'en-21', text: 'One word for "a person who loves books":', options: ['Philanthropist', 'Bibliophile', 'Misanthrope', 'Bibliographer'], correctIndex: 1 },
    { id: 'en-22', text: 'One word for "one who knows everything":', options: ['Omnipotent', 'Omnipresent', 'Omniscient', 'Optimist'], correctIndex: 2 },
    { id: 'en-23', text: 'One word for "a person who cannot be corrected":', options: ['Invincible', 'Infallible', 'Inaudible', 'Incorrigible'], correctIndex: 3 },
    { id: 'en-24', text: 'The idiom "to bite the bullet" means:', options: ['To face a painful situation bravely', 'To eat quickly', 'To shoot someone', 'To avoid trouble'], correctIndex: 0 },
    { id: 'en-25', text: 'The idiom "a blessing in disguise" means:', options: ['A disguised person', 'Something good that first seemed bad', 'A religious ritual', 'A false promise'], correctIndex: 1 },
    { id: 'en-26', text: 'The idiom "once in a blue moon" means:', options: ['Every month', 'Very often', 'Very rarely', 'At night'], correctIndex: 2 },
    { id: 'en-27', text: 'Choose the correctly spelled word:', options: ['Accomodation', 'Acommodation', 'Acomodation', 'Accommodation'], correctIndex: 3 },
    { id: 'en-28', text: 'Choose the correctly spelled word:', options: ['Occurrence', 'Occurence', 'Ocurrence', 'Occurance'], correctIndex: 0 },
    { id: 'en-29', text: 'The medicine had a positive ___ on his health.', options: ['affect', 'effect', 'affects', 'effected'], correctIndex: 1 },
    { id: 'en-30', text: 'He worked hard ___ he could pass the exam.', options: ['but', 'although', 'so that', 'unless'], correctIndex: 2 },
  ],

  flashcards: [
    { id: 'en-fc-1', front: 'Subject-verb agreement: quick rules', back: 'Each, every, either, neither and one of take a singular verb. With either...or and neither...nor, the verb agrees with the nearer subject. "A number of" takes a plural verb; "the number of" takes a singular verb.' },
    { id: 'en-fc-2', front: 'Since vs for', back: 'Since is used with a point in time (since 2019, since Monday). For is used with a period of time (for five years, for two hours). Both go with the present perfect.' },
    { id: 'en-fc-3', front: 'A or an?', back: 'The choice depends on the sound, not the spelling. An hour, an honest man, an umbrella (vowel sounds). A university, a European, a one-rupee note (consonant sounds).' },
    { id: 'en-fc-4', front: 'Active to passive: verb forms', back: 'Simple present: is/am/are + V3. Simple past: was/were + V3. Present perfect: has/have been + V3. Future: will be + V3. Present continuous: is/am/are being + V3.' },
    { id: 'en-fc-5', front: 'Direct to indirect speech: changes', back: 'Tense moves back one step when the reporting verb is in the past (present becomes past, past becomes past perfect). Now becomes then, today becomes that day, tomorrow becomes the next day, here becomes there, this becomes that.' },
    { id: 'en-fc-6', front: 'Conditionals', back: 'Type 1: If + present, will + verb. Type 2: If + past, would + verb ("If I were you..."). Type 3: If + past perfect, would have + V3.' },
    { id: 'en-fc-7', front: 'Fixed prepositions', back: 'Good at, interested in, afraid of, different from, capable of, fond of, depend on, prefer X to Y, congratulate on, accuse of, angry with (a person) and angry at (a thing).' },
    { id: 'en-fc-8', front: 'Commonly confused words', back: 'Affect (verb) vs effect (noun). Principal (head, main) vs principle (rule). Stationary (not moving) vs stationery (writing material). Compliment (praise) vs complement (completes). Accept (receive) vs except (leave out).' },
    { id: 'en-fc-9', front: 'Often misspelled words', back: 'Accommodation, occurrence, necessary, separate, definitely, receive, embarrass, privilege, committee, maintenance.' },
    { id: 'en-fc-10', front: 'One-word substitutes', back: 'Bibliophile: lover of books. Polyglot: one who knows many languages. Posthumous: after death. Anonymous: nameless. Insolvent: unable to pay debts. Pedestrian: one who walks.' },
    { id: 'en-fc-11', front: 'Idioms and meanings', back: 'Break the ice: start a conversation. Burn the midnight oil: study late. A piece of cake: very easy. Spill the beans: reveal a secret. Under the weather: slightly ill. Call it a day: stop working.' },
    { id: 'en-fc-12', front: 'Para jumble and cloze strategy', back: 'Para jumbles: find the opening sentence (introduces the topic, no unexplained pronoun), then link pairs through connectors and pronouns, and check the conclusion. Cloze: read the whole passage first, then fill each gap using grammar first and meaning second.' },
  ],

  notes: [
    {
      id: 'en-note-grammar',
      title: 'English Grammar: Core Rules',
      sections: [
        {
          heading: 'Subject-Verb Agreement',
          body: pts([
            'A singular subject takes a singular verb and a plural subject takes a plural verb: "The boy plays" and "The boys play".',
            'Each, every, either, neither and one of take a singular verb: "Each of the students was given a certificate."',
            'Two subjects joined by "and" take a plural verb, unless they name one idea: "Bread and butter is my usual breakfast."',
            'With either...or and neither...nor, the verb agrees with the nearer subject: "Neither the teacher nor the students were present."',
            'Collective nouns (committee, jury, team) take a singular verb when seen as one unit and a plural verb when members act separately.',
            'News, mathematics, physics, economics and politics take a singular verb: "The news is good."',
            '"A number of" takes a plural verb; "the number of" takes a singular verb.',
            'Nouns that always appear in pairs, such as scissors, trousers and spectacles, take a plural verb.',
          ]),
        },
        {
          heading: 'Tenses and Articles',
          body: pts([
            'The present perfect (has/have + V3) links the past to the present. Use for with a period and since with a point in time.',
            'The past perfect (had + V3) shows the earlier of two past actions: "The train had left before we reached."',
            'After if or when in a time or condition clause, use the present tense, not will: "If it rains, I will stay."',
            'Conditionals: if + past gives would; if + past perfect gives would have. Use "were" for all subjects in unreal conditions: "If I were you".',
            'Use a before a consonant sound and an before a vowel sound: an hour, an honest man, a university, a European.',
            'Use the for specific or unique things, superlatives, rivers, oceans and mountain ranges; leave it out before most names of people and abstract nouns used in general.',
            'Few means hardly any and a few means some; little means hardly any and a little means some.',
          ]),
        },
        {
          heading: 'Prepositions and Conjunctions',
          body: pts([
            'At is for a point (at 5 pm, at the door), in is for a period or enclosed space (in July, in the room) and on is for days, dates and surfaces (on Monday, on the table).',
            'Fixed pairs: good at, interested in, afraid of, different from, capable of, fond of, depend on, prefer X to Y, congratulate on, accuse of.',
            'Hardly or scarcely goes with when, and no sooner goes with than: "No sooner had he left than it rained."',
            'Between is for two and among is for more than two.',
            'In correlatives (either...or, neither...nor, both...and, not only...but also) keep the same structure on both sides.',
            'Do not use but with although or though in the same sentence, and do not use because together with so.',
            'Unless already means "if not", so the clause after it should not contain another negative.',
          ]),
        },
      ],
    },
    {
      id: 'en-note-errors',
      title: 'Error Spotting, Voice and Speech',
      sections: [
        {
          heading: 'Common Error Patterns',
          body: pts([
            'Subject-verb disagreement is the most common error: check the verb against its true subject, not the nearest noun.',
            'Wrong tense markers: words such as yesterday, since, already and ago decide the tense.',
            'Pronoun case: "between you and me", not "between you and I".',
            'Double comparatives and superlatives are wrong: "more taller" and "most best".',
            'Use fewer with countable nouns and less with uncountable nouns: fewer books, less water.',
            'Use each other for two and one another for more than two.',
            'Redundancy: "return back", "repeat again" and "reason is because" repeat the same idea.',
            'Prefer takes to, not than: "She prefers tea to coffee."',
            'One of the, each of the and none of the are followed by a plural noun but a singular verb (for one of and each of).',
          ]),
        },
        {
          heading: 'Active and Passive Voice, Direct and Indirect Speech',
          body: pts([
            'Active to passive: the object becomes the subject and the verb becomes be + V3: "Ravi writes a letter" becomes "A letter is written by Ravi."',
            'Passive forms by tense: is/am/are + V3 (present), was/were + V3 (past), has/have been + V3 (present perfect), will be + V3 (future).',
            'Direct to indirect: say/said to becomes tell/told, a connector such as that is added, and pronouns change to fit the reporter.',
            'When the reporting verb is in the past, the tense moves back one step: present becomes past and past becomes past perfect.',
            'Time and place words change: now becomes then, today becomes that day, tomorrow becomes the next day, yesterday becomes the previous day, here becomes there.',
            'Questions are reported with asked and if or whether (for yes/no questions), in statement word order and without a question mark.',
            'Universal truths usually keep their tense: "He said that the sun rises in the east."',
          ]),
        },
        {
          heading: 'Exam Strategy',
          body: pts([
            'In error spotting, find the main verb and its subject first, then check tense, articles and prepositions in that order.',
            'Choose "No error" only after checking every part. Choose "No improvement" only when the sentence is already correct.',
            'For sentence improvement, test each option by reading the full sentence with it.',
            'In para jumbles, find the opening sentence first, then pairs joined by pronouns and connectors, and finally the conclusion.',
            'In cloze tests, read the whole passage first, then decide the part of speech of each gap, then the meaning.',
            'In reading comprehension, read the questions first, answer only from the passage, and treat tone and theme questions after the detail questions.',
          ]),
        },
      ],
    },
    {
      id: 'en-note-vocab',
      title: 'Vocabulary: Words, Idioms and Spellings',
      sections: [
        {
          heading: 'Synonym and Antonym Pairs for Revision',
          body: pts([
            'Candid: frank (opposite: secretive).',
            'Benevolent: kind (opposite: malevolent).',
            'Ephemeral: short-lived (opposite: permanent).',
            'Scarce: rare (opposite: plentiful).',
            'Abundant: plentiful (opposite: scarce).',
            'Diligent: hardworking (opposite: lazy).',
            'Frugal: thrifty (opposite: extravagant).',
            'Obstinate: stubborn (opposite: flexible).',
            'Vague: unclear (opposite: precise).',
            'Reluctant: unwilling (opposite: eager).',
            'Learn words in pairs and by roots: bene means good, mal means bad, omni means all, phil means love, bibl means book.',
          ]),
        },
        {
          heading: 'One-Word Substitutes and Idioms',
          body: pts([
            'Bibliophile: a lover of books. Philanthropist: one who loves mankind and helps others. Misanthrope: one who hates mankind.',
            'Omniscient: all-knowing. Omnipotent: all-powerful. Omnipresent: present everywhere.',
            'Incorrigible: cannot be corrected. Infallible: cannot make a mistake. Invincible: cannot be defeated. Inaudible: cannot be heard. Illegible: cannot be read.',
            'Polyglot: one who knows many languages. Posthumous: happening after death. Anonymous: without a name. Insolvent: unable to pay debts.',
            'Bite the bullet: face a painful situation bravely. A blessing in disguise: something good that first seemed bad. Once in a blue moon: very rarely.',
            'Break the ice: start a conversation. Burn the midnight oil: study or work late at night. Spill the beans: reveal a secret.',
            'Hit the nail on the head: say exactly the right thing. Under the weather: slightly ill. Call it a day: stop working. On cloud nine: extremely happy.',
          ]),
        },
        {
          heading: 'Confused Words and Spellings',
          body: pts([
            'Affect is a verb (to influence) and effect is usually a noun (a result): "The medicine had a good effect."',
            'Principal means head or main and principle means a rule: "the principal of the school", "a moral principle".',
            'Stationary means not moving and stationery means writing material.',
            'Compliment means praise and complement means something that completes.',
            'Accept means to receive and except means to leave out. Lose is a verb and loose means not tight.',
            'Commonly misspelled words: accommodation, occurrence, necessary, separate, definitely, receive, embarrass, privilege, committee, maintenance.',
            'Tip: double letters are the usual trap, as in accommodation (two c, two m) and occurrence (two c, two r).',
          ]),
        },
      ],
    },
  ],
};
