import qs from 'querystring';
import { Matcher, Referrer } from '../../types';

const baidu: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('baidu.com') !== -1) {
    const description: Referrer = {
      type: 'search',
      engine: 'baidu'
    };
    const query = qs.parse(referrer.query).wd;
    if (query) description.query = query as string;
    return description;
  } else {
    return null;
  }
};

export default baidu;
