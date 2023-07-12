import { createContext } from 'react';

import { AlternativeContextSelector } from '@/components/results/alternatives/useAlternatives';

const AlternativesContext = createContext<{
  data: AlternativeContextSelector;
  isLessThanAlternatives: boolean;
}>({
  data: { necessary: [], funny: [], stable: [] },
  isLessThanAlternatives: false,
});

export default AlternativesContext;
