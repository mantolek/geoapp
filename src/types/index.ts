export interface ILocationProps {
  ip?: string;
  top?: boolean;
  location: {
    ip: string;
    lat: string;
    lng: string;
  };
}

export interface IFormProps {
  submit: Function;
  setSearchUserIp: Function;
  searchUserIp: string;
}

export interface ISearchDataProps {
  setHistory: Function;
  landedUserIP: string;
}

export interface IPopupProps {
  open: boolean;
  close: Function;
  errorMsg: string;
}

export interface IMapProps {
  lat: string;
  lng: string;
}

export interface IHistoryProps {
  lat: string;
  lng: string;
}
