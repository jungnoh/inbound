import { Matcher } from '../../types';

const naver: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('mail.naver.com') !== -1) {
    return {
      type: 'email',
      client: 'naver',
      from: referrer.href,
      link: href.href
    };
  } else {
    return null;
  }
};

export default naver;
