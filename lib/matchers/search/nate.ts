import qs from 'querystring';
import { Matcher, Referrer } from '../../types';

const nate: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('search.nate.com') !== -1) {
    const description: Referrer = {
      type: 'search',
      engine: 'nate'
    };
    const query = qs.parse(referrer.query ?? '').q;
    if (query) {
      description.query = query as string;
    }
    return description;
  } else {
    return null;
  }
};

export default nate;
