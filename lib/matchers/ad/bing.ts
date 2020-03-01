import qs from 'querystring';
import { Matcher, Referrer } from '../../types';

const bing: Matcher = async (href, referrer) => {
  if (referrer.host
    && referrer.host.indexOf('bing.com') !== -1
    && href.href.indexOf("utm_medium=cpc") !== -1
  ) {
    const description: Referrer = {
      type: 'ad',
      network: 'bing'
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

export default bing;

