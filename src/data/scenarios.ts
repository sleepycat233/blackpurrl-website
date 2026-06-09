export interface Scenario {
  id: string;
  title: string;
  stateLines: string[];
  storyLine: string;   // in-game story subtitle, shown over the picture
  question: string;
  toolCall: string;    // AI tool-call subtitle, shown briefly before the answer
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
    storyLine: 'The marsh wind carries a low, broken hum...',
    question: "Where's the third seal? I've been stuck for an hour.",
    toolCall: 'searching your quest log + Ashfen Marsh guide',
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
    storyLine: '"...the corpo wants the netrunner gone by dawn."',
    question: 'Wait — what does "corpo" mean?',
    toolCall: 'looking up world terminology · no story beats',
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
    storyLine: 'The Scarlet Knight raises his blade once more.',
    question: '...I\'ve been at this for two hours.',
    toolCall: 'reading the room · no walkthrough',
    answer: 'Thirty-one tries on one of the hardest fights in the game — that\'s not you being bad, that\'s the fight. Take a breath; you\'ll catch the next window.',
    note: 'No walkthrough — just a word of support.',
  },
];
