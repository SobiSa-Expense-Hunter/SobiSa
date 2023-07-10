import { useReducer } from 'react';
/**
 * @info Onboarding의 상태를 관리하는 hook
 */

export default function useOnboarding() {
  const [onboardingState, dispatchOnboardingState] = useReducer(OnboardingReducer, initialState);
  return { onboardingState, dispatchOnboardingState };
}

export const initialState = {
  initial: true,
  firstClick: false,
  secondClick: false,
};

export type OnboardingState = typeof initialState;

const OnboardingReducer = (
  state: OnboardingState,
  action: { click: 'FIRST' | 'SECOND' },
): OnboardingState => {
  switch (action.click) {
    case 'FIRST':
      return {
        initial: false,
        firstClick: true,
        secondClick: false,
      };
    case 'SECOND':
      return {
        initial: false,
        firstClick: false,
        secondClick: true,
      };
    default:
      return state;
  }
};
