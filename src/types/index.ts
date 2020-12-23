export interface LocationProps {
  ip?: string;
  top?: boolean;
  location: {
    ip: string;
    lat: string;
    lng: string;
  };
}

export interface FormProps {
  submit: Function;
  setSearchUserIp: Function;
  searchUserIp: string;
}

export interface SearchDataProps {
  setHistory: Function;
  landedUserIP: string;
}

export interface PopupProps {
  open: boolean;
  close: Function;
  errorMsg: string;
}

export interface MapProps {
  lat: string;
  lng: string;
}

export interface HistoryProps {
  lat: string;
  lng: string;
}
