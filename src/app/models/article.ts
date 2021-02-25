export interface KeyValuePair {
  id: number;
  name: string;
}

export interface Bunk {

  title: string;
  subTitle: string;
  body: string;
  dateOfEvent: string;
  duration: string;

}

export interface Article {

  id: number;
  newsCategory: KeyValuePair;
  newsEvent: KeyValuePair;
  locations: KeyValuePair[];
  isInvited: boolean;
  bunk: Bunk;
  lastUpdate: string;
 



}



export interface SaveArticle {
  id: number;
  newsEventId: number;
  newsCategoryId: number;
 
  isInvited: boolean;
  locations: number[];

  bunk: Bunk;
 

}
