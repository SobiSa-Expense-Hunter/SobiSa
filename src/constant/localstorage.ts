/**
 * ! DESCRIPTION
 * 로컬 스토리지의 KEY - VALUE 관리
 * @interface LocalStorageImpl 의 양식에 맞추어 해당 key가 가질 수 있는 값을 status에 작성
 */
export interface LocalStorageImpl {
  key: 'onboarding' | 'visited' | 'test';
  status: {
    [key in string]: string;
  };
}

export type LocalStorageKeys = LocalStorageImpl['key'];

export const ONBOARDING: LocalStorageImpl = {
  key: 'onboarding',
  status: {
    INITIAL: 'initial',
    NOT_WATCHED: 'notWatched',
    WATCHED: 'watched',
  },
};

export const VISITED: LocalStorageImpl = {
  key: 'visited',
  status: {
    TRUE: 'true',
    FALSE: 'false',
    DATE: new Date().toDateString(),
  },
};
