export declare const useDeviceInfo: () =>
  | {
      isMobile: boolean;
      mobileOS: 'android';
    }
  | {
      isMobile: boolean;
      mobileOS: 'ios';
    }
  | {
      isMobile: boolean;
      mobileOS: null;
    };
