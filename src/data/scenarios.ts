export interface Scenario {
  id: string;
  title: string;
  stateLines: string[];
  question: string;
  answer: string;
  note: string;
}

export const scenarios: Scenario[] = [
  {
    id: 'state-progress',
    title: 'Reads your live state',
    stateLines: [
      'quest:    "The Sunken Vault"',
      'stage:    "find the 3rd seal"',
      'location: "Ashfen Marsh — east causeway"',
      'level:    24',
    ],
    question: "Where's the third seal? I've been stuck for an hour.",
    answer: "You've already cleared the north and west seals. The third sits under the broken watchtower on the east causeway — drain the marsh at the Tinker's valve first.",
    note: 'Nothing past this point spoiled.',
  },
  {
    id: 'lore-explanation',
    title: 'Understands the world',
    stateLines: [
      'scene:  "cutscene — a back-alley deal"',
      'heard:  "corpo" · "netrunner" · "braindance"',
    ],
    question: 'Wait — what does "corpo" mean?',
    answer: 'A "corpo" is a corporate insider — elite on paper, company property in practice. Getting fired is closer to social death than a layoff.',
    note: 'Just the term — no story beats ahead.',
  },
  {
    id: 'emotional-support',
    title: 'There when it\'s tough',
    stateLines: [
      'boss:     "the Scarlet Knight"',
      'attempts: 31',
      'status:   "stuck"',
    ],
    question: '...I\'ve been at this for two hours.',
    answer: 'Thirty-one tries on one of the hardest fights in the game — that\'s not you being bad, that\'s the fight. Take a breath; you\'ll catch the next window.',
    note: 'No walkthrough — just a word of support.',
  },
];
