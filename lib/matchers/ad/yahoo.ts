import qs from 'querystring';
import { Matcher, Referrer } from '../../types';

const yahoo: Matcher = async (href, referrer) => {
  if (referrer.host
    && referrer.host.indexOf('search.yahoo.com') !== -1
    && href.href.indexOf("utm_medium=cpc") !== -1
  ) {
    const description: Referrer = {
      type: 'ad',
      network: 'yahoo'
    };
    const query = qs.parse(referrer.query ?? '').p;
    if (query) {
      description.query = query as string;
    }
    return description;
  } else {
    return null;
  }
};

export default yahoo;
