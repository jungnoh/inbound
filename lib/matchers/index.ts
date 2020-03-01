import {Matcher} from '../types';

import AdBing from './ad/bing';
import AdGoogle from './ad/google';
import AdYahoo from './ad/yahoo';

import SocialFacebook from './social/facebook';
import SocialInstagram from './social/facebook';
import SocialLinkedin from './social/linkedin';
import SocialPinterest from './social/pinterest';
import SocialTwitter from './social/twitter';

import SearchAOL from './search/aol';
import SearchBaidu from './search/baidu';
import SearchGoogle from './search/google';
import SearchYahoo from './search/yahoo';
import SearchBing from './search/bing';
import SearchYandex from './search/yandex';
import SearchNaver from './search/naver';
import SearchDaum from './search/daum';
import SearchNate from './search/nate';

import EmailGoogle from './email/gmail';
import EmailHotmail from './email/hotmail';
import EmailYahoo from './email/yahoo';
import EmailNaver from './email/naver';
import EmailDaum from './email/daum';

import Internal from './internal/internal';

import Link from './link/link';

import Direct from './direct/direct';

export default [
  // Ads
  AdBing,
  AdGoogle,
  AdYahoo,
  // Social
  SocialFacebook,
  SocialInstagram,
  SocialLinkedin,
  SocialPinterest,
  SocialTwitter,
  // Search
  SearchGoogle,
  SearchAOL,
  SearchBaidu,
  SearchYahoo,
  SearchBing,
  SearchYandex,
  SearchNaver,
  SearchDaum,
  SearchNate,
  // Email
  EmailGoogle,
  EmailHotmail,
  EmailYahoo,
  EmailNaver,
  EmailDaum,
  // Others
  Internal,
  Link,
  Direct
];