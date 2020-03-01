import qs from 'querystring';
import { Matcher, Referrer } from '../../types';

const naver: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('search.naver.com') !== -1) {
    const description: Referrer = {
      type: 'search',
      engine: 'naver'
    };
    const query = qs.parse(referrer.query).query;
    if (query) {
      description.query = query as string;
    }
    return description;
  } else {
    return null;
  }
};

export default naver;
