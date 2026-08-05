// Contenido extraído del sitio original invest.wearealllost.com
// Textos "tal cual". Cambia estos datos para re-marcar el sitio.

export const CDN = 'https://cdn.prod.website-files.com/6a0b0c73c2c4740bc5436175/';

// Imágenes reales del sitio original (URLs confirmadas).
export const IMAGES = {
  hero: CDN + '6a26ec47c5c47b9d3672b74a_Group%2021.webp',
  carousel: [
    CDN + '6a1d8a4238d9b14514a139f1_image%2028.webp',
    CDN + '6a1d8a428aad01de1ce65806_image%2029.webp',
    CDN + '6a1d8a4294de6cf2e777e636_image%2030.webp',
    CDN + '6a1d8a426df41c1d38261d5a_image%2032.webp',
    CDN + '6a1d8a421aacab0a34c8165b_image%2033.webp',
  ],
  opportunity: CDN + '6a202af88370f9bc0d43b8a8_Group%203.webp',
  businessModel: CDN + '6a26ec97470e1c98cee29c23_Group%2022.webp',
  gallery: [
    CDN + '6a20434f517d28f7fb6e87da_1.webp',
    CDN + '6a20434f7248f79927267fd2_2.webp',
    CDN + '6a20434fb10a0081d16fed60_3.webp',
    CDN + '6a20435042c7166b6c75eec3_4.webp',
  ],
  founders: [
    CDN + '6a2042f7edec7d0a2a656815_image%2050.webp',
    CDN + '6a2042f70443016925a074a3_image%2051.webp',
  ],
  og: CDN + '6a203dc5fcf624bfe1baa7de_2_LostBoy_OGI_051426_008.webp',
};

// Enlaces del menú. Usan "/#seccion" para que funcionen desde cualquier página
// (incluido /checkout): redirigen a la home y anclan a la sección.
export const NAV_LINKS = [
  { label: 'Opportunity', href: '/#opportunity' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Roadmap', href: '/#roadmap' },
  { label: 'Perks', href: '/#perks' },
  { label: 'Team', href: '/#team' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Discussion', href: '/#discussion' },
];

export const HERO = {
  title: "Back the Hospitality Group Behind Downtown Miami's Neighborhood Bar",
  lead:
    "With 8 years of continuous operation in Florida's most competitive market, Lost Boy Dry Goods has served the Miami community with grit and purpose. Now, we're scaling this model across the $87B Florida restaurant market. By investing in Lost Boy Hospitality Ventures, you become an owner in the next locations we open.",
  metrics: [
    { k: 'Share Price', v: '$2.50' },
    { k: 'Minimum Investment', v: '$1,000*' },
  ],
};

export const HIGHLIGHT_STATS = [
  { num: '$87B', lbl: 'South Florida Restaurant Market' },
  { num: '4', lbl: 'Successful Locations' },
  { num: 'New Markets', lbl: 'Miami-Dade, Broward, Palm Beach' },
];

export const CAROUSEL_ALTS = [
  'Cocktails con piña sobre libros con luces de bar',
  'Pizzas cuadradas estilo Detroit sobre tablas de madera con cerveza',
  'DJ tocando en tornamesas Pioneer con paredes de ladrillo',
  'Multitud con brazos en alto viendo deportes en La Época Warehouse',
  'Coupe cocktail con rueda de lima junto a máquina de escribir vintage',
];

export const INVESTING = {
  title: 'New Bar Locations, A Growing Pipeline Behind Them',
  body:
    "We're opening ownership of our expansion entity, Lost Boy Hospitality Ventures, as we scale our neighborhood concept across South Florida. That means you're accessing our first investment opportunity and biggest growth phase yet, without owning a franchise or running your own venue.",
  cards: [
    {
      img: CDN + '6a1da52f1ee4831e711538f1_cadillac-storefront%201.webp',
      title: 'High Margin Model',
      body:
        'Community-driven venues with low overhead and high guest retention are among the most resilient businesses in hospitality.',
    },
    {
      img: CDN + '6a1da5302126688834da7d78_Untitled_Artwork%2052%20(1)%202.webp',
      title: 'Multi-Daypart Revenue Engines',
      body: 'Lunch, sports, happy hour, DJs, celebrations, private events, holidays.',
    },
    {
      img: CDN + '6a1da52f73cf323031f9dd17_pizza-cowboy%201.webp',
      title: 'Second-Generation Spaces with Character',
      body:
        'We build in existing spaces with architectural bones, not expensive new construction.',
    },
  ],
};

export const OPPORTUNITY = {
  title: "One of America's Strongest Restaurant Markets",
  body:
    'Florida has the country\'s fastest-growing population. It\'s also one of the strongest restaurant markets, favoring neighborhood gathering spaces with quality drinks, affordable pricing, and the ability to hear each other talk.',
  stats: [
    { num: '$87B', lbl: 'in Florida restaurant sales (2024)' },
    { num: '23M+', lbl: 'residents, up 8% since 2020 (largest state population gain)' },
    { num: '<5%', lbl: 'retail availability across tri-county South Florida' },
    { num: '$1.5T', lbl: 'projected U.S. food service sales in 2026' },
  ],
};

export const WHY_US = {
  title: '8 Years of Growth While 300+ Competitors Closed',
  body:
    "Our flagship Lost Boy Dry Goods location has served as Downtown Miami's staple gathering place since first opening in June 2018. We've built a portfolio that survived and thrived through the pandemic, historic inflation, and the most competitive market in Miami's history. Named Miami New Times Best New Bar upon opening and inducted into the Star Chefs Rising Stars class of 2021, the only bar owners in a field of top restaurateurs. These four locations prove the model works.",
  locations: [
    {
      name: 'Lost Boy Dry Goods',
      year: '2018',
      meta: 'Downtown Miami · 2,000 sf',
      desc:
        "An English pub meets Captain's tavern meets Colorado miner's saloon. Draft beer, classic cocktails, and pizza in a room that was built to feel like it's been there for decades.",
    },
    {
      name: 'Tropezón',
      year: '2021',
      meta: 'Miami Beach · 1,800 sf',
      desc:
        'A gin and tapas restaurant inspired by Spanish village saloons where old men play cards and women sip Sherry. Cold pours, cured things, and all the moments between.',
    },
    {
      name: "Fox's Lounge",
      year: '2022',
      meta: 'South Miami · 2,500 sf · Historic Institution Resurrection',
      desc:
        'Opened in 1946 by Hank and Betty Fox, a classic legacy of what makes old-fashioned hospitality special: family, friends, and stiff drinks. Proudly the darkest bar in Miami.',
    },
    {
      name: "Brother's Keeper",
      year: '2024',
      meta: 'Miami Beach · 1,300 sf',
      desc:
        'Inspired by NYC and its connection to Miami in the 1980s, a cocktail bar serving fine foods with good company, most of the time.',
    },
  ],
};

export const BUSINESS_MODEL = {
  title: 'The Neighborhood Bar That Works From Open to Close',
  body:
    "Lost Boy Dry Goods is a neighborhood bar serving draft beer, classic cocktails, and pizza in a room inspired by a love of English pubs, Western saloons, and old captain's taverns. A community-driven bar model built for high margins and long-term scalability. We've built multiple revenue engines across the full day, ideal for both the solo bar stool pint and large group celebrations.",
};

export const ROADMAP = {
  title: 'Scaling What Works Across South Florida',
  body:
    'Our expansion replicates the Lost Boy Dry Goods model in new neighborhoods across South Florida. The quality approach to drinks, service, and atmosphere remains the same. What changes is how each location reflects its specific community.',
  phases: [
    { yr: '2026', title: 'Site Selection', desc: 'Capital Raise. Due diligence for new target locations.' },
    {
      yr: '2027',
      title: 'Lease Execution & Development',
      desc:
        'Site selection and execute leases on target locations; begin simultaneous development, maximizing economies of scale across construction and operations.',
    },
    {
      yr: '2027–2028',
      title: 'Buildout & Opening',
      desc: 'A well-suited second-generation space can be operational within 6 to 18 months of lease execution.',
    },
    {
      yr: '2029+',
      title: 'Stabilize & Scale',
      desc: 'Identify expansion opportunities across dozens of neighborhoods already identified in the tri-county corridor.',
    },
  ],
  disclaimer:
    'Forward-looking statements about our future plans and roadmap are based on current expectations and assumptions that involve risks and uncertainties. Actual results may differ materially from those expressed or implied, and we encourage potential investors to carefully consider the risks outlined in our offering documents before making an investment decision.',
};

// Tiers de inversión (Perks). bonus = Amount-Based Bonus Shares.
export const TIERS = [
  {
    n: 1,
    name: 'Prospector',
    min: '$1,000+',
    minValue: 1000,
    bonus: '0%',
    perks: [
      {
        title: "Lost Boy Owner's Club — Standard Membership",
        bullets: [
          'Digital membership card',
          'Access to all Lost Boy & Co. properties (current and future)',
          'Member designation in POS system',
          'Welcome drink on investment anniversary (annual)',
          'Dedicated Standard Owner hotline',
          'Starts 60 days after acceptance',
        ],
      },
    ],
  },
  {
    n: 2,
    name: 'Wrangler',
    min: '$2,500+',
    minValue: 2500,
    bonus: '2.5%',
    perks: [
      {
        title: "Lost Boy Owner's Club — VIP Membership",
        bullets: [
          'Digital VIP membership card + VIP designation in POS',
          'Priority reservations',
          'Welcome drink (anniversary) + birthday drink',
          'Owner-only opening events for new locations',
          'VIP invitation list & special event pricing',
          'Dedicated VIP Owner hotline · Starts 60 days after acceptance',
        ],
      },
    ],
  },
  {
    n: 3,
    name: 'Captain',
    min: '$5,000+',
    minValue: 5000,
    bonus: '5%',
    perks: [
      {
        title: 'Annual Shareholder Party',
        bullets: [
          'Hosted by founders Chris and Randy',
          'At least three consecutive years · Investor plus one guest',
        ],
      },
      {
        title: 'Lost Boy Investor Hat',
        bullets: [
          'Limited edition cap customized with investor’s last name',
          'Unavailable for public purchase · Domestic shipping covered',
        ],
      },
    ],
  },
  {
    n: 4,
    name: 'Trailblazer',
    min: '$10,000+',
    minValue: 10000,
    bonus: '7.5%',
    perks: [
      {
        title: '$12 Cocktails For Life',
        bullets: [
          '$12 cocktails for life at all Lost Boy & Co. properties (current and future)',
          'Starts 60 days after acceptance',
        ],
      },
    ],
  },
  {
    n: 5,
    name: 'Pioneer',
    min: '$25,000+',
    minValue: 25000,
    bonus: '10%',
    perks: [
      {
        title: 'Exclusive Whiskey Tasting Experience',
        bullets: [
          'Annual rare whiskey experience hosted by Chris & Randy',
          'Allocated rare bourbons (Pappy Van Winkle, E.H. Taylor, George Stagg…)',
          'At least three consecutive years · Investor only',
        ],
      },
      {
        title: "Lost Boy Special Edition Blanton's Bottle",
        bullets: [
          'One private-label single barrel bottle, unique each year',
          'Received at the Annual Whiskey Experience',
        ],
      },
    ],
  },
  {
    n: 6,
    name: 'Maverick',
    min: '$50,000+',
    minValue: 50000,
    bonus: '12.5%',
    perks: [
      {
        title: 'Happy Hour For Life',
        bullets: ['Happy hour pricing for life at all Lost Boy & Co. properties'],
      },
      {
        title: 'Private Event Buyout Room Fee Waived',
        bullets: [
          'One complimentary room-fee waiver (typically $7,500–$30,000)',
          'Food, beverage and staffing remain investor responsibility',
        ],
      },
      {
        title: "Blanton's Bottle Selection Experience",
        bullets: ['Participate in the annual single-barrel selection process (3 years)'],
      },
    ],
  },
  {
    n: 7,
    name: 'Cowboy',
    min: '$100,000+',
    minValue: 100000,
    bonus: '15%',
    perks: [
      {
        title: 'Beer Named After Investor On Tap',
        bullets: [
          'Lost Boy micro-brew named after the investor, on tap and menu',
          'At any one Lost Boy Dry Goods location · Three consecutive years',
          'Investor participates in the full beer selection process',
        ],
      },
      {
        title: 'Annual Private Dinner With Founders',
        bullets: [
          'Annual dinner hosted by founders Chris and Randy',
          'Investor plus one guest · Three consecutive years',
        ],
      },
    ],
  },
];

export const EMPLOYEE_PERK = {
  title: 'Lost Boy & Co. Employees — All Campaign Levels',
  bonus: '+10%',
  note: 'Additional Bonus Shares at Any Level',
};

export const PERKS_NOTE =
  'Investors qualifying for a higher Tier receive all Commercial Perks available at lower Tiers, except as otherwise stated herein, plus the additional Perks described herein. Time-Based Bonus Shares may be combined with Amount-Based Bonus Shares and are subject to a 25% Bonus Cap.';

export const TEAM = {
  title: 'Our Founders Are in the Neighborhood Business',
  body:
    "From running bars across Soho House's North American portfolio to building a generational institution in downtown Miami, our founding team has a proven track record.",
  founders: [
    {
      role: 'Co-Founder & CEO',
      name: 'Randy Alonso',
      bio:
        'Randy has operated on Flagler Street for over two decades, first managing La Época, his family’s three-generation department store originally founded in Havana in 1885. A Civil & Architectural Engineering graduate from Duke University, he brings a design-driven approach to every venue with a focus on historic preservation and placemaking. Randy launched Lost Boy Dry Goods at 157 E Flagler Street in 2014, partnering with Chris Hudnall in 2018 to pivot into hospitality and build Lost Boy & Co. He leads strategy, design, and project management across the portfolio.',
    },
    {
      role: 'Co-Founder & COO',
      name: 'Chris Hudnall',
      bio:
        'Chris has 20+ years in hospitality spanning operations, concept development, and beverage program leadership. His career includes Mondrian South Beach and a decade at Soho House, where he opened Soho Beach House in 2010 and rose to North American Director of Bars by 2014, overseeing seven private clubs and five public restaurants. He partnered with Randy in 2018 to launch Lost Boy Dry Goods and has led operations and concept execution across every location since. He leads operational execution, concept development, strategic partnerships, and brand experience for the group.',
    },
  ],
};

export const FAQS = [
  { q: 'Why invest in startups?', a: 'Regulation CF allows investment in startups and early-growth companies. Unlike Kickstarter, you’re buying equity ownership, not products.' },
  { q: 'How much can I invest?', a: 'Accredited investors can invest an unlimited amount. Non-accredited investors: if annual income or net worth is under $124,000, you may invest a maximum of 5%; if both are over $124,000, a maximum of 10%.' },
  { q: 'How do I calculate my net worth?', a: 'Add all your assets and subtract all your liabilities (excluding the value of your primary residence).' },
  { q: 'What are the tax implications of an equity crowdfunding investment?', a: 'This is not tax advice. Consult your accountant or tax advisor before investing.' },
  { q: 'Who can invest in a Regulation CF Offering?', a: 'Any individual over 18 years old.' },
  { q: 'What do I need to know about early-stage investing? Are these investments risky?', a: 'A high risk is present. Company failure means a total loss of ownership value. You may have limited voting power due to dilution. Exit typically requires 5–7 years via acquisition or IPO. Nothing is guaranteed.' },
  { q: 'When will I get my investment back?', a: 'Common Stock of Lost Boy Hospitality Ventures Inc. is not publicly traded and cannot be easily traded or sold. Returns would occur via (a) a company acquisition or (b) an IPO — both long-term exits (5–10+ years). There is no guarantee of a return.' },
  { q: 'Can I sell my shares?', a: 'There is a one-year lockup before shares can be sold under certain conditions.' },
  { q: 'Exceptions to selling during the one-year lockup period?', a: 'In the case of death, divorce, or similar circumstance: transfer to the company, an accredited investor, or a family member (child, stepchild, grandchild, parent, stepparent, grandparent, spouse or equivalent, sibling, in-laws, including adoptive relationships).' },
  { q: 'What happens if a company does not reach their funding target?', a: 'All funds are returned to investors after the offering closes.' },
  { q: 'How can I learn more about a company’s offering?', a: 'All disclosure information is on the offering pages for the Regulation Crowdfunding offering.' },
  { q: 'What if I change my mind about investing?', a: 'You may cancel any time until 48 hours prior to closing. Funds in escrow are returned upon cancellation. Email: info@dealmakersecurities.com.' },
  { q: 'How do I keep up with how the company is doing?', a: 'The company files an annual report plus certified financials with the SEC and on its website (at least 120 days after fiscal year-end). Reporting may end under certain exceptions; continuous financial information is not guaranteed.' },
  { q: 'What relationship does the company have with DealMaker Securities?', a: 'After the offering ends, the company may continue the relationship for future offerings. DealMaker affiliates may provide ongoing services. Continuation is not guaranteed.' },
  { q: 'What is the company’s implied pre-money valuation?', a: 'Pre-Offering valuation: $40,000,000.00 (total shares outstanding multiplied by price per share). Pre-money is the value before new funds are added in this offering.' },
];

export const FOOTER = {
  broker:
    'DealMaker Securities LLC, a registered broker-dealer, and member of FINRA | SIPC, located at 30 East 23rd Street, 2nd Floor, NY, NY 10010, is the Intermediary for this offering and is not an affiliate of or connected with the Issuer. Please check our background on FINRA’s BrokerCheck. DealMaker Securities LLC does not make investment recommendations. DealMaker Securities LLC is NOT placing or selling these securities on behalf of the Issuer. DealMaker Securities LLC is NOT soliciting this investment or making any recommendations by collecting, reviewing, and processing an Investor’s documentation for this investment.',
  forward:
    'This website may contain forward-looking statements and information relating to, among other things, the company, its business plan and strategy, and its industry. These forward-looking statements are based on the beliefs of, assumptions made by, and information currently available to the company’s management. Investors are cautioned not to place undue reliance on these forward-looking statements, which speak only as of the date on which they are made.',
  risk:
    'Equity crowdfunding investments in private placements, and start-up investments in particular, are speculative and involve a high degree of risk and those investors who cannot afford to lose their entire investment should not invest in start-ups. Companies seeking startup investment through equity crowdfunding tend to be in earlier stages of development and their business model, products and services may not yet be fully developed, operational or tested in the public marketplace.',
  copyright: '© All Rights Reserved',
};
