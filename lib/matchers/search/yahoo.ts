import { Matcher, Referrer } from '../../types';
import parseDomain from 'parse-domain';
import qs from 'querystring';

const yahoo: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('search.yahoo') === -1) {
    return null;
  }
  
  const domain = parseDomain(referrer.href);
  if (!domain) {
    return null;
  }
  if (domain.domain === "yahoo" && domain.subdomain.indexOf("search") !== -1) {
    const description: Referrer = {
      type: 'search',
      engine: 'yahoo'
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
