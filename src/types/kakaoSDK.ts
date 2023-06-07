export interface KakaoSDK {
  cleanup: () => void;
  init: (appKey: string) => void;
  isInitialized: () => boolean;
  Share: {
    cleanup: () => void;
    sendDefault: (settings: DefaultFeedSettings) => void;
    sendScrap: (settings: DefaultScrapSettings) => void;
  };
}
interface DefaultScrapSettings {
  requestUrl: string; // 스크랩할 사이트 URL, 해당 사이트의 메타 정보를 토대로 메시지 생성
  templateId?: number; // 메시지 템플릿 아이디, [내 애플리케이션 > 메시지 > 메시지 템플릿]에서 확인
  templateArgs?: object; // 메시지 템플릿에서 활용할 arguments
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
  buttons?: { title: string; link: LinkObject }[];
  callback?: () => void; // 데스크톱 환경에서 카카오톡 공유를 완료했을 때 호출되는 콜백 함수 (IE 미지원)
  serverCallbackArgs?: string; // 카카오톡 공유 시 전송되는 알림에 포함되는 파라미터 (전송 성공 알림 설정하기)
}
