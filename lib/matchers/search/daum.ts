import qs from 'querystring';
import { Matcher, Referrer } from '../../types';

const daum: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('search.daum.net') !== -1) {
    const description: Referrer = {
      type: 'search',
      engine: 'daum'
    };
    const query = qs.parse(referrer.query).q;
    if (query) {
      description.query = query as string;
    }
    return description;
  } else {
    return null;
  }
};

export default daum;
