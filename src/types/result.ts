import type { Product } from './product';

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
