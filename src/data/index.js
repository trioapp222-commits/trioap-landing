export const APPS = [
  {
    id: 'futzone',
    name: 'FutZone',
    tagline: 'Ultimate Football Trivia',
    description:
      'Test your football knowledge with 600+ levels of trivia, compete on the global leaderboard, and prove youre the ultimate football fan.',
    icon: '⚽',
    color: '#43e97b',
    colorDim: 'rgba(67, 233, 123, 0.12)',
    platforms: ['android', 'ios'],
    playStoreUrl: '#',
    appStoreUrl: '#',
    features: [
      { icon: '🏆', title: '600+ Levels', desc: 'Campaign mode with increasing difficulty' },
      { icon: '🌍', title: 'Leaderboard', desc: 'Compete with players worldwide via Firebase' },
      { icon: '⚡', title: 'Daily Challenges', desc: 'New trivia every day to keep you sharp' },
      { icon: '🔐', title: 'Google & Apple Sign-In', desc: 'Secure authentication, your progress saved' },
    ],
    screenshots: ['⚽', '🏆', '📊', '🎮'],
    category: 'Sports & Games',
  },
  {
    id: 'sigarsiz',
    name: 'Sigarsız Yaşa',
    tagline: 'Quit Smoking. Live Better.',
    description:
      'Your personal quit-smoking companion. Track your progress, calculate money saved, and stay motivated every day with smart notifications.',
    icon: '🚭',
    color: '#6c63ff',
    colorDim: 'rgba(108, 99, 255, 0.12)',
    platforms: ['android'],
    playStoreUrl: '#',
    appStoreUrl: null,
    features: [
      { icon: '📅', title: 'Daily Tracker', desc: 'See every smoke-free day youve achieved' },
      { icon: '💰', title: 'Money Saved', desc: 'Watch your savings grow in real time' },
      { icon: '🔔', title: 'Smart Notifications', desc: 'Timely reminders to keep you on track' },
      { icon: '💪', title: 'Motivation Hub', desc: 'Health milestones and achievements' },
    ],
    screenshots: ['🚭', '📅', '💰', '🏅'],
    category: 'Health & Lifestyle',
  },
]

export const FAQS = [
  {
    q: 'Are your apps free to download?',
    a: 'Yes! All TrioApp applications are free to download on Google Play and App Store. Some apps may offer optional in-app purchases for premium features.',
  },
  {
    q: 'Which platforms do you support?',
    a: 'Our apps are available on Android (Google Play). FutZone is also available on iOS (App Store). We are expanding iOS support for all apps.',
  },
  {
    q: 'How do I report a bug or suggest a feature?',
    a: 'We love feedback! You can reach us via the contact form on this page or email us directly at hello@trioapp.az. We usually respond within 24 hours.',
  },
  {
    q: 'Is my data safe?',
    a: 'Absolutely. We take privacy seriously. We only collect data necessary for app functionality. You can read our full Privacy Policy for detailed information.',
  },
  {
    q: 'Do your apps work offline?',
    a: 'FutZone works partially offline — you can play cached levels without internet. Sigarsız Yaşa works fully offline for tracking; leaderboards require connection.',
  },
  {
    q: 'How often do you update your apps?',
    a: 'We ship updates regularly — usually every 2–4 weeks. Updates include bug fixes, new content, and feature improvements based on user feedback.',
  },
]

export const TEAM = [
  {
    name: 'TrioApp Team',
    role: 'Mobile Development Studio',
    bio: 'We are a small but passionate team of developers and designers based in Baku, Azerbaijan. We build mobile apps that people actually love to use — focused, functional, and beautifully crafted.',
    avatar: '🚀',
  },
]

export const NAV_LINKS = [
  { label: 'Apps', href: '#apps' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
