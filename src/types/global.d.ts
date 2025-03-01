interface Window {
  openLandbotChat?: () => void;
  myLandbot?: {
    open: () => void;
    [key: string]: unknown;
  };
}
