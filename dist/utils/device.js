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
function detectDevice() {
  const ua = navigator.userAgent || navigator.vendor;
  // Android (phone or tablet)
  if (/android/i.test(ua)) {
    return { isMobile: true, mobileOS: 'android' };
  }
  // iOS devices (iPhone, iPad, iPod)
  if (/iPad|iPhone|iPod/.test(ua)) {
    return { isMobile: true, mobileOS: 'ios' };
  }
  // iPadOS 13+ masquerades as Mac
  if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {
    return { isMobile: true, mobileOS: 'ios' };
  }
  return { isMobile: false, mobileOS: null };
}

export { detectDevice };
//# sourceMappingURL=device.js.map
