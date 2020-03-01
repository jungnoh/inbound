import qs from 'querystring';
import { Matcher, Referrer } from '../../types';

const google: Matcher = async (href, referrer) => {
  if (referrer.host &&
      referrer.path &&
      referrer.path.indexOf("/aclk") !== -1 &&
      (referrer.host.indexOf('google') !== -1 ||
       referrer.host.indexOf('googleadservices.com') !== -1)) {
         
    const description: Referrer = {
      type: 'ad',
      network: 'google'
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

export default google;
