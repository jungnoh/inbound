import { Matcher } from '../../types';

const hotmail: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('mail.live.com') !== -1) {
    return {
      type: 'email',
      client: 'hotmail',
      from: referrer.href,
      link: href.href
    };
  } else {
    return null;
  }
};

export default hotmail;
