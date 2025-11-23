/**
 * Detects whether the current device is a mobile device and identifies the mobile OS.
 *
 * This function inspects the user agent string to determine if the device is an Android
 * phone/tablet, an iOS device (iPhone, iPad, iPod), or if it's an iPad running iPadOS 13+
 * (which sometimes reports as Mac).
 *
 * @returns An object with two properties: `isMobile` indicating whether the device is mobile,
 * and `mobileOS` indicating the type of mobile OS (either "android" or "ios"), or null if not mobile.
 */
export declare function detectDevice():
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
