import { IMG_FILTER, SORT } from '@/constant/list';
import { CreateArrayWithLengthX, NumericRange } from '@/constant/rangeTypeGenerater';

/**
 * @interface APIParams
 * @ `query` : 유저 검색 키워드
 * @ `display?` : 검색결과 출력건수 1~100 사이
 * @ `start?` : 검색 시작 위치 1~1000 사이
 * @ `sort?` : 검색 정렬 옵션. sim(유사도순) | date(날짜순)
 * @ `filter?` : 이미지 필터 옵션 (이미지 검색만 해당)
 */
export interface APIParams {
  query: string;
  display?: DisplayRange;
  start?: number;
  sort?: (typeof SORT)[keyof typeof SORT];
  filter?: (typeof IMG_FILTER)[keyof typeof IMG_FILTER];
}

type DisplayRange = NumericRange<CreateArrayWithLengthX<10>, 100>;
