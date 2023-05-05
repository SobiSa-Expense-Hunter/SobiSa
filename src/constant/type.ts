import { IMG_FILTER, SORT } from '@/constant/list';

import type { CreateArrayWithLengthX, NumericRange } from '@/constant/rangeTypeGenerater';

export interface NaverProductItemResponse {
  brand: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  image: string;
  link: string;
  lprice: string;
  maker: string;
  mallName: string;
  productId: string;
  productType: string;
  title: string;
}

export interface NaverProductResponse {
  items: NaverProductItemResponse[];
  display: string;
  lastBuildDate: string;
  start: string;
  total: string;
}

export interface Product {
  title: string;
  image: string;
  price: string;
  productId: string;
}

export interface UserSelected {
  product: Product;
  savingAmount: number;
}

export interface Alternatives {
  title: string;
  image?: string;
  price: number;
  unit: string;
}

export interface ShareData {
  files?: File[];
  text?: string;
  title?: string;
  url?: string;
}

export interface KakaoSDK {
  cleanup: () => void;
  init: (appKey: string) => void;
  isInitialized: () => boolean;
  Share: {
    cleanup: () => void;
    sendDefault: (settings: DefaultFeedSettings) => void;
  };
}

interface ItemObject {
  item: string; // 아이템 이름
  itemOp: string; // 아이템 가격
}

interface LinkObject {
  webUrl?: string; // PC 버전 카카오톡에서 사용하는 웹 링크 URL
  mobileWebUrl?: string; // 모바일 카카오톡에서 사용하는 웹 링크 URL
  androidExecutionParams?: string; // 안드로이드 카카오톡에서 사용하는 앱 링크 URL에 사용될 파라미터
  iosExecutionParams?: string; // iOS 카카오톡에서 사용하는 앱 링크 URL에 사용될 파라미터
}

interface DefaultFeedSettings {
  objectType: 'feed';
  content: {
    // 메시지의 메인 콘텐츠 정보
    title: string;
    imageUrl: string;
    link: LinkObject;
    imageWidth?: number;
    imageHeight?: number;
    description?: string;
  };
  itemContent?: {
    profileText: string;
    profileImageUrl: string;
    titleImageText: string;
    titleImageUrl: string;
    titleImageCategory: string;
    items: Array<ItemObject>;
    sum: string;
    sumOp: string;
  };
  social?: {
    likeCount?: number; // 콘텐츠의 좋아요 수
    commentCount?: number; // 콘텐츠의 댓글 수
    sharedCount?: number; // 콘텐츠의 공유 수
    viewCount?: number; // 콘텐츠의 조회 수
    subscriberCount?: number; // 콘텐츠의 구독 수
  };
  buttons?: { title: string; link: LinkObject }[];
  callback?: () => void; // 데스크톱 환경에서 카카오톡 공유를 완료했을 때 호출되는 콜백 함수 (IE 미지원)
  serverCallbackArgs?: string; // 카카오톡 공유 시 전송되는 알림에 포함되는 파라미터 (전송 성공 알림 설정하기)
}

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
