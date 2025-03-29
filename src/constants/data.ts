import { NavItem } from '@/type';

export const footerData = [
  {
    _id: 2221,
    title: 'Get to Know Us',
    listItem: [
      {
        _id: '001',
        listData: [
          'Careers',
          'Blog',
          'About Cumbia',
          'Investor Relations',
          'Cumbia Devices',
          'Cumbia Science',
        ],
      },
    ],
  },
  {
    _id: 2222,
    title: 'Make Money with Us',
    listItem: [
      {
        _id: '002',
        listData: [
          'Sell products on Cumbia',
          'Sell on Cumbia Business',
          'Sell apps on Cumbia',
          'Become an Affiliate',
          'Advertise Your Products',
          'Sell Product with Us',
          'Host an Cumbia Hub',
          'See More Make Money with Us',
        ],
      },
    ],
  },
  {
    _id: 2223,
    title: 'Cumbia Payment Products',
    listItem: [
      {
        _id: '003',
        listData: [
          'Cumbia Business Card',
          'Shop with Points',
          'Reload Your Balance',
          'Cumbia Currency Converter',
        ],
      },
    ],
  },
  {
    _id: 2224,
    title: 'Let Us Help You',
    listItem: [
      {
        _id: '004',
        listData: [
          'Cumbia and COVID-19',
          'Your Account',
          'Your Orders',
          'Shipping Rates & Policies',
          'Returns & Replacements',
          'Manage Your Content and Devices',
          'Cumbia Assistant',
          'FAQ & Help',
        ],
      },
    ],
  },
];

export const sidebarItems: NavItem[] = [
  {
    title: 'Digital Content & Devices',
    items: ['Cumbia Music', 'Kindle E-readers & Books', 'Cumbia Appstore'],
    subItems: [
      ['Stream Music', 'Free Music', 'Podcasts', 'Open Web Player'],
      [
        'All Kindle E-Readers',
        'Kindle Books',
        'Kindle Unlimited',
        'Prime Reading',
      ],
      ['All Apps & Games', 'Games', 'Cumbia Coins', 'Download Cumbia Appstore'],
    ],
  },
  {
    title: 'Shop By Department',
    items: ['Electronics', 'Computers', 'Smart Home', 'Arts & Crafts'],
    subItems: [
      ['TV & Video', 'Audio & Home Theater', 'Wearable Technology', 'Cameras'],
      ['Desktops', 'Laptops', 'Tablets', 'Computer Accessories'],
      [
        'Smart Home Lighting',
        'Smart Locks and Entry',
        'Security Cameras and Systems',
        'Plugs and Outlets',
      ],
      [
        'Painting, Drawing & Art Supplies',
        'Beading & Jewelry Making',
        'Sewing',
        'Knitting & Crochet',
      ],
    ],
  },
  {
    title: 'Programs & Features',
    items: ['Gift Cards', 'Cumbia Live', 'International Shopping'],
    subItems: [
      [
        'All Gift Cards',
        'eGift Cards',
        'Gift Card Balance',
        'Corporate Gift Cards',
      ],
      ['Live Streams', 'Live Deals', 'Live Beauty', 'Live Talk Shows'],
      [
        'Visit Cumbia Global',
        'International Shipping',
        'Translation Settings',
        'Currency Settings',
      ],
    ],
  },
  {
    title: 'Help & Settings',
    items: ['Your Account', 'Customer Service', 'Sign Out'],
    subItems: [
      ['Your Orders', 'Your Addresses', 'Your Lists', 'Your Recommendations'],
      [
        'Help Center',
        'Contact Us',
        'Returns & Refunds',
        'Shipping Rates & Policies',
      ],
      ['', '', '', ''],
    ],
  },
];
