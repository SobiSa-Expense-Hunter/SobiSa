/**
 * ! DESCRIPTION
 * 로컬 스토리지의 KEY - VALUE 관리
 * @LocalStorageStatusMap 의 양식에 맞추어 해당 속성이 가질 있는 상태를 작성
 * 이후, 하단에 해당 값 구현체 작성
 */

type LocalStorageStatusMap = {
  onboarding: {
    INITIAL: 'initial';
    NOT_WATCHED: 'notWatched';
    WATCHED: 'watched';
  };
  visited: {
    TRUE: 'true';
    FALSE: 'false';
    DATE: string;
  };
};

export type LocalStorageKeys = keyof LocalStorageStatusMap;

type LocalStorageImpl<K extends LocalStorageKeys> = {
  key: K;
  status: LocalStorageStatusMap[K];
};

export const ONBOARDING: LocalStorageImpl<'onboarding'> = {
  key: 'onboarding',
  status: {
    INITIAL: 'initial',
    NOT_WATCHED: 'notWatched',
    WATCHED: 'watched',
  },
};

export const VISITED: LocalStorageImpl<'visited'> = {
  key: 'visited',
  status: {
    TRUE: 'true',
    FALSE: 'false',
    DATE: new Date().toDateString(),
  },
};
