import {UrlWithStringQuery} from 'url';

interface Ad {
  type: string;
  network: string;
  query?: string;
}

interface Direct {
  type: 'direct';
}

interface Link {
  type: 'link';
  from: string;
  link: string;
}

interface Internal {
  type: 'internal';
}

interface Email {
  type: 'email';
  client: string;
  from: string;
  link: string;
}

interface Search {
  type: 'search';
  engine: string;
  query?: string;
}

interface Social {
  type: 'social';
  network: string;
}

export type Referrer = Ad | Direct | Link | Internal | Email | Search;

export interface Campaign {
  campaign: string;
  source: string;
  term: string;
  medium: string;
  content: string;
}

export type Matcher = (href: UrlWithStringQuery, referrer: UrlWithStringQuery) => Promise<Referrer | null>;

export interface ParseResult {
  referrer: Referrer;
  campaign: Partial<Campaign>;
}