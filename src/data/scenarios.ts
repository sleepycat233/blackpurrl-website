export interface Scenario {
  id: string;
  title: string;
  storyLine: string;
  question: string;
  toolCall: string;
  stateLabel: string;  // label for the second phase (game state / lore lookup / memory)
  statePills: string[];
  answer: string;
  note: string;
}

export const scenarios: Scenario[] = [
  {
    id: 'state-progress',
    title: 'Reads your live state',
    storyLine: 'The marsh wind carries a low, broken hum...',
    question: "Where's the third seal? I've been stuck for an hour.",
    toolCall: 'checking your position···',
    stateLabel: 'game state',
    statePills: ['The Sunken Vault', 'find 3rd seal', 'Ashfen Marsh', 'lv 24'],
    answer: "You've already cleared the north and west seals. The third sits under the broken watchtower on the east causeway — drain the marsh at the Tinker's valve first.",
    note: 'Nothing past this point spoiled.',
  },
  {
    id: 'lore-explanation',
    title: 'Understands the world',
    storyLine: '"...the corpo wants the netrunner gone by dawn."',
    question: 'Wait — what does "corpo" mean?',
    toolCall: 'searching the lore···',
    stateLabel: 'lore lookup',
    statePills: ['Night City', 'corpo', 'NUSA hierarchy', 'social death'],
    answer: 'A "corpo" is a corporate insider — elite on paper, company property in practice. Getting fired is closer to social death than a layoff.',
    note: 'Just the term — no story beats ahead.',
  },
  {
    id: 'emotional-support',
    title: "There when it's tough",
    storyLine: 'The Scarlet Knight raises his blade once more.',
    question: "...I've been at this for two hours.",
    toolCall: 'looking back···',
    stateLabel: 'memory',
    statePills: ['the Scarlet Knight', 'attempt 31', '2h today', 'stuck'],
    answer: "Thirty-one tries on one of the hardest fights in the game — that's not you being bad, that's the fight. Take a breath; you'll catch the next window.",
    note: 'No walkthrough — just a word of support.',
  },
];
