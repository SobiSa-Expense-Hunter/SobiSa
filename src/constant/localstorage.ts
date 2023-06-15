export const ONBOARDING = {
  key: 'onboarding',
  status: {
    INITIAL: 'initial',
    NOT_WATCHED: 'notWatched',
    WATCHED: 'watched',
  },
} as const;

export const VISITED = {
  key: 'visited',
  status: {
    INITIAL: 'initial',
    TRUE: 'true',
    FLASE: 'flase',
  },
} as const;
