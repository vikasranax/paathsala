import type { ContentPack } from './contentPacks';
import { pts } from './packHelpers';

export const economyPack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'economy',
    'ssc-cgl': 'ga',
    'ibps-po': 'ga-banking',
    'sbi-po': 'ga-banking',
    'rrb-ntpc': 'ga-railway',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    { id: 'eco-1', text: 'The Reserve Bank of India was nationalised in:', options: ['1935', '1947', '1949', '1969'], correctIndex: 2 },
    { id: 'eco-2', text: 'The rate at which the RBI lends short-term funds to commercial banks against securities is the:', options: ['Repo rate', 'Reverse repo rate', 'CRR', 'SLR'], correctIndex: 0 },
    { id: 'eco-3', text: 'The fraction of deposits that banks must keep as cash with the RBI is called:', options: ['SLR', 'CRR', 'Repo rate', 'MSF'], correctIndex: 1 },
    { id: 'eco-4', text: 'The Statutory Liquidity Ratio (SLR) must be maintained by banks in:', options: ['Cash with the RBI', 'Their own liquid assets such as gold, cash and government securities', 'Shares of private companies', 'Foreign currency deposits'], correctIndex: 1 },
    { id: 'eco-5', text: "India's flexible inflation targeting framework is based on which index?", options: ['WPI', 'CPI', 'IIP', 'GDP deflator'], correctIndex: 1 },
    { id: 'eco-6', text: 'The Monetary Policy Committee of the RBI has how many members?', options: ['4', '5', '6', '7'], correctIndex: 2 },
    { id: 'eco-7', text: 'GST was implemented in India from:', options: ['1 April 2016', '1 July 2017', '1 April 2018', '26 January 2017'], correctIndex: 1 },
    { id: 'eco-8', text: 'The GST Council is chaired by the:', options: ['Prime Minister', 'Union Finance Minister', 'RBI Governor', 'Chief Economic Adviser'], correctIndex: 1 },
    { id: 'eco-9', text: 'NITI Aayog replaced the Planning Commission in:', options: ['2013', '2014', '2015', '2016'], correctIndex: 2 },
    { id: 'eco-10', text: 'The First Five-Year Plan (1951-56) gave the highest priority to:', options: ['Heavy industry', 'Agriculture', 'Foreign trade', 'Services'], correctIndex: 1 },
    { id: 'eco-11', text: 'The Mahalanobis model formed the basis of the:', options: ['First Five-Year Plan', 'Second Five-Year Plan', 'Third Five-Year Plan', 'Eighth Five-Year Plan'], correctIndex: 1 },
    { id: 'eco-12', text: 'Fiscal deficit equals total expenditure minus:', options: ['Revenue receipts only', 'Total receipts excluding borrowings', 'Tax revenue only', 'Capital receipts only'], correctIndex: 1 },
    { id: 'eco-13', text: 'The Annual Financial Statement (Union Budget) is mentioned in Article:', options: ['110', '112', '266', '280'], correctIndex: 1 },
    { id: 'eco-14', text: 'Which of the following is a direct tax?', options: ['GST', 'Customs duty', 'Income tax', 'Excise duty'], correctIndex: 2 },
    { id: 'eco-15', text: 'The first nationalisation of 14 major commercial banks took place in:', options: ['1955', '1969', '1980', '1991'], correctIndex: 1 },
    { id: 'eco-16', text: 'The State Bank of India was formed in 1955 by taking over the:', options: ['Imperial Bank of India', 'Punjab National Bank', 'Bank of Baroda', 'Central Bank of India'], correctIndex: 0 },
    { id: 'eco-17', text: 'NABARD was established in:', options: ['1969', '1975', '1982', '1991'], correctIndex: 2 },
    { id: 'eco-18', text: 'The securities market in India is regulated by:', options: ['RBI', 'SEBI', 'IRDAI', 'NABARD'], correctIndex: 1 },
    { id: 'eco-19', text: 'The insurance sector in India is regulated by:', options: ['SEBI', 'IRDAI', 'PFRDA', 'NABARD'], correctIndex: 1 },
    { id: 'eco-20', text: 'The New Economic Policy of 1991 was introduced while the Finance Minister was:', options: ['Manmohan Singh', 'P. Chidambaram', 'Yashwant Sinha', 'Pranab Mukherjee'], correctIndex: 0 },
    { id: 'eco-21', text: 'The Pradhan Mantri Jan Dhan Yojana was launched in:', options: ['2012', '2014', '2016', '2018'], correctIndex: 1 },
    { id: 'eco-22', text: 'The Unified Payments Interface (UPI) was developed by:', options: ['RBI', 'NPCI', 'SEBI', 'NABARD'], correctIndex: 1 },
    { id: 'eco-23', text: 'Coins and one-rupee notes in India are issued by the:', options: ['RBI', 'Ministry of Finance (Government of India)', 'SBI', 'NPCI'], correctIndex: 1 },
    { id: 'eco-24', text: "Which sector contributes the largest share to India's GDP?", options: ['Agriculture', 'Industry', 'Services', 'Mining'], correctIndex: 2 },
    { id: 'eco-25', text: "Which institution is called the banker's bank?", options: ['SBI', 'RBI', 'NABARD', 'SIDBI'], correctIndex: 1 },
    { id: 'eco-26', text: 'The headquarters of the RBI is in:', options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'], correctIndex: 1 },
    { id: 'eco-27', text: 'The FRBM Act, aimed at fiscal discipline, was enacted in:', options: ['1991', '2003', '2008', '2017'], correctIndex: 1 },
    { id: 'eco-28', text: 'Stagflation refers to a situation of:', options: ['High inflation with slow growth and high unemployment', 'Falling prices with fast growth', 'Low inflation with full employment', 'Rising exports with falling imports'], correctIndex: 0 },
    { id: 'eco-29', text: 'Disinvestment means:', options: ['Selling government stake in public sector enterprises', 'Increasing taxes', 'Printing more currency', 'Raising interest rates'], correctIndex: 0 },
    { id: 'eco-30', text: 'Regional Rural Banks (RRBs) were set up in:', options: ['1955', '1969', '1975', '1991'], correctIndex: 2 },
  ],

  flashcards: [
    { id: 'eco-fc-1', front: 'Monetary policy tools of the RBI', back: 'Repo rate, reverse repo rate, Marginal Standing Facility (MSF), bank rate, Cash Reserve Ratio (CRR), Statutory Liquidity Ratio (SLR) and open market operations.' },
    { id: 'eco-fc-2', front: 'Repo vs reverse repo', back: 'Repo: the rate at which the RBI lends to banks (injects liquidity). Reverse repo: the rate at which the RBI borrows from banks (absorbs liquidity). MSF is an emergency overnight borrowing rate above the repo rate.' },
    { id: 'eco-fc-3', front: 'Deficit measures', back: 'Revenue deficit = revenue expenditure minus revenue receipts. Fiscal deficit = total expenditure minus total receipts excluding borrowings. Primary deficit = fiscal deficit minus interest payments.' },
    { id: 'eco-fc-4', front: 'Inflation basics', back: 'Demand-pull inflation comes from excess demand; cost-push from higher input costs. CPI measures retail prices and is the RBI target index (4% with a 2% band either way). WPI measures wholesale prices.' },
    { id: 'eco-fc-5', front: 'Structure of GST', back: 'Dual system: CGST (Centre), SGST (State) and IGST (inter-state trade). Introduced on 1 July 2017 by the 101st Amendment; the GST Council (Article 279A) is chaired by the Union Finance Minister. Rate slabs have been revised, so check the latest rates.' },
    { id: 'eco-fc-6', front: 'Banking structure of India', back: 'RBI at the top; scheduled commercial banks (public, private, foreign); Regional Rural Banks (1975); cooperative banks; Small Finance Banks and Payments Banks (licensed from 2015).' },
    { id: 'eco-fc-7', front: 'Development finance institutions', back: 'NABARD (1982, agriculture and rural), SIDBI (1990, small industries), EXIM Bank (1982, foreign trade) and NHB (1988, housing).' },
    { id: 'eco-fc-8', front: 'Money market vs capital market', back: 'Money market deals in short-term funds of up to one year (call money, treasury bills, commercial paper). Capital market deals in long-term funds (shares and bonds).' },
    { id: 'eco-fc-9', front: 'Five-Year Plans snapshot', back: 'First Plan (1951-56): agriculture. Second (1956-61): heavy industry (Mahalanobis). Twelve plans ran until 2017; NITI Aayog replaced the Planning Commission in 2015.' },
    { id: 'eco-fc-10', front: 'Budget terms', back: 'Article 112: Annual Financial Statement. Consolidated Fund (Article 266), Contingency Fund (Article 267). Receipts are revenue or capital. The Finance Bill carries tax proposals; the Appropriation Bill authorises spending.' },
    { id: 'eco-fc-11', front: 'Key banking dates', back: 'RBI Act 1934; RBI started 1935 and was nationalised 1949; Banking Regulation Act 1949; 14 banks nationalised 1969 and 6 more in 1980.' },
    { id: 'eco-fc-12', front: 'Digital payment systems', back: 'RTGS handles large transfers (minimum 2 lakh rupees). NEFT works in batches and has been available 24x7 since December 2019. IMPS and UPI (run by NPCI) are instant.' },
  ],

  notes: [
    {
      id: 'eco-note-planning',
      title: 'Indian Economy: Planning, Reforms and Sectors',
      sections: [
        {
          heading: 'The Planning Era',
          body: pts([
            'The Planning Commission was set up in 1950; twelve Five-Year Plans ran from 1951 to 2017.',
            'First Plan (1951-56) used the Harrod-Domar model and stressed agriculture.',
            'Second Plan (1956-61) used the Mahalanobis model and stressed heavy industry and the public sector.',
            'Three annual plans (1966-69) followed, often called the plan holiday.',
            'Fourteen major banks were nationalised in 1969, and six more in 1980.',
            'The Green Revolution of the 1960s raised foodgrain output, especially wheat.',
            'NITI Aayog replaced the Planning Commission in 2015 as a policy think tank.',
          ]),
        },
        {
          heading: 'The Reforms of 1991',
          body: pts([
            'A balance of payments crisis in 1991 led to economic reforms under Prime Minister P. V. Narasimha Rao and Finance Minister Manmohan Singh.',
            'The rupee was devalued in July 1991.',
            'The three pillars are Liberalisation (delicensing and lower tariffs), Privatisation (disinvestment of public enterprises) and Globalisation (opening to trade and foreign investment).',
            'The 1991 industrial policy abolished licensing for most industries.',
            'Foreign direct investment was permitted in more sectors.',
          ]),
        },
        {
          heading: 'Sectors of the Economy',
          body: pts([
            'Primary sector: agriculture and mining. Secondary: manufacturing, construction and utilities. Tertiary: services.',
            'The services sector contributes the largest share of GDP.',
            'Agriculture still employs the largest share of the workforce even though its share in GDP is smaller.',
            'GDP measures the value of goods and services produced within the country; GNP adds net income from abroad.',
            'Per capita income is national income divided by population.',
          ]),
        },
      ],
    },
    {
      id: 'eco-note-banking',
      title: 'Banking and Monetary Policy',
      sections: [
        {
          heading: 'Structure of Banking',
          body: pts([
            'The RBI is the central bank and banker to banks; it was established in 1935, nationalised in 1949 and is headquartered in Mumbai.',
            'Scheduled commercial banks include public sector, private sector and foreign banks.',
            'Regional Rural Banks were started in 1975; cooperative banks serve rural and urban areas.',
            'Small Finance Banks and Payments Banks are newer categories licensed from 2015.',
            'Development institutions: NABARD (1982), SIDBI (1990), EXIM Bank (1982) and NHB (1988).',
            'Regulators: RBI for banks, SEBI for securities, IRDAI for insurance and PFRDA for pensions.',
          ]),
        },
        {
          heading: 'Monetary Policy Tools',
          body: pts([
            'Repo rate: the rate at which the RBI lends to banks; a cut makes loans cheaper and increases liquidity.',
            'Reverse repo rate: the rate at which the RBI absorbs liquidity from banks.',
            'MSF (Marginal Standing Facility): emergency overnight borrowing at a rate above repo.',
            'CRR: share of deposits kept as cash with the RBI. SLR: share kept in liquid assets with the banks themselves.',
            'Open market operations: the RBI buys or sells government securities to manage liquidity.',
            'The Monetary Policy Committee has six members (three from the RBI and three external) and works to an inflation target of 4% with a band of 2% on either side.',
          ]),
        },
        {
          heading: 'Digital Payments and Stressed Assets',
          body: pts([
            'PMJDY (2014) aimed at a bank account for every household.',
            'UPI (2016), run by NPCI, allows instant bank-to-bank transfers.',
            'RTGS is for large-value transfers (minimum 2 lakh rupees); NEFT settles in batches (24x7 since December 2019); IMPS is instant.',
            'A loan becomes a non-performing asset (NPA) when it is overdue for more than 90 days.',
            'SARFAESI Act (2002) lets lenders recover secured loans without going to court; the Insolvency and Bankruptcy Code (2016) sets a time-bound resolution process.',
          ]),
        },
      ],
    },
    {
      id: 'eco-note-fiscal',
      title: 'Budget, Taxation and Fiscal Policy',
      sections: [
        {
          heading: 'Budget Basics',
          body: pts([
            'Article 112 requires an Annual Financial Statement (the Budget) to be placed before Parliament each year.',
            'The financial year runs from 1 April to 31 March; since 2017 the Budget is presented on 1 February and the Railway Budget has been merged into it.',
            'Consolidated Fund of India (Article 266) holds government receipts and loans; the Contingency Fund (Article 267) meets unforeseen expenses.',
            'Revenue receipts are tax and non-tax revenue; capital receipts include borrowings, loan recoveries and disinvestment.',
            'The Finance Bill carries tax proposals and the Appropriation Bill authorises spending from the Consolidated Fund.',
          ]),
        },
        {
          heading: 'Deficits and Fiscal Discipline',
          body: pts([
            'Revenue deficit: revenue expenditure minus revenue receipts.',
            'Fiscal deficit: total expenditure minus total receipts excluding borrowings; it shows how much the government must borrow.',
            'Primary deficit: fiscal deficit minus interest payments.',
            'The FRBM Act (2003) sets targets to reduce deficits and improve transparency.',
          ]),
        },
        {
          heading: 'Taxes and the Finance Commission',
          body: pts([
            'Direct taxes (income tax, corporate tax) are paid by the person on whom they are levied; indirect taxes (GST, customs duty) are passed on to consumers.',
            'GST was introduced by the 101st Amendment (2016) and came into force on 1 July 2017, replacing many Central and State indirect taxes.',
            'GST has three parts: CGST, SGST and IGST on inter-state supply; the GST Council (Article 279A) is chaired by the Union Finance Minister.',
            'Some items, such as alcohol for human consumption, remain outside GST.',
            'The Finance Commission (Article 280) is set up every five years to recommend how taxes are shared between the Centre and States; the 15th Commission, headed by N. K. Singh, recommended a 41% share for States for 2021-26.',
          ]),
        },
      ],
    },
  ],
};
