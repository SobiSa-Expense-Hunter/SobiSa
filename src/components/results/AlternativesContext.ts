import { createContext } from 'react';

import { Alternatives } from '@/types/result';

const AlternativesContext = createContext<{
  alternatives: Alternatives[];
  isLessThanAlternatives: boolean;
}>({
  alternatives: [],
  isLessThanAlternatives: false,
});

export default AlternativesContext;
