import qs from 'querystring';
import { Matcher, Referrer } from '../../types';

const google: Matcher = async (href, referrer) => {
  if (referrer.host
    && referrer.href
    && referrer.host.indexOf('google') !== -1
    && (referrer.href.indexOf('/url?') !== -1 || referrer.href.indexOf('/search?') !== -1)
  ) {
    const description: Referrer = { type: 'search', engine: 'google' };
    const query = qs.parse(referrer.query).q;
    if (query) {
      description.query = query as string;
    }
    return description;
  } else {
    return null;
  }
};

export default google;
