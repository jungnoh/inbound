import qs from 'querystring';
import { Matcher, Referrer } from '../../types';

const yandex: Matcher = async (href, referrer) => {
  if (referrer.host && referrer.host.indexOf('yandex.com') !== -1) {
    const description: Referrer = {
      type: 'search',
      engine: 'yandex'
    };
    const query = qs.parse(referrer.query ?? '').text;
    if (query) {
      description.query = query as string;
    }
    return null;
  } else {
    return null;
  }
};

export default yandex;
