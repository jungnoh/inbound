import { Matcher } from '../../types';

const daum: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.match(/mail[0-9]*.daum.net/) !== null) {
    return {
      type: 'email',
      client: 'daum',
      from: referrer.href,
      link: href.href
    };
  } else {
    return null;
  }
};

export default daum;
