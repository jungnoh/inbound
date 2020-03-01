import { Matcher } from '../../types';

const gmail: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('mail.google.com') !== -1) {
    return {
      type: 'email',
      client: 'gmail',
      from: referrer.href,
      link: href.href
    };
  } else {
    return null;
  }
};

export default gmail;
