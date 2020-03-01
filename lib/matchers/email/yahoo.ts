import parseDomain from 'parse-domain';
import { Matcher } from '../../types';

const yahoo: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('mail.yahoo') === -1) {
    return null;
  }

  const domain = parseDomain(referrer.href);
  if (!domain) {
    return null;
  }
  if (domain.domain === "yahoo" && domain.subdomain.indexOf("mail") !== -1) {
    return {
      type: 'email',
      client: 'yahoo',
      from: referrer.href,
      link: href.href
    };
  }
};

export default yahoo;
