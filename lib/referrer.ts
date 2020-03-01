import url, {UrlWithStringQuery} from 'url';
import qs from 'querystring';
import matchers from './matchers';
import { Campaign, Referrer, ParseResult } from './types';

/**
 * Parses a location href and document referrer
 * into semantic information about how that visitor
 * got to the page.
 * @param  href      Location href, equivalent to window.location.href
 * @param  referrer  Referrer url, equivalent to document.referrer
 */
export async function parse(href: string, referrer: string): Promise<ParseResult> {
  const parsedHref     = url.parse(href || '');
  const parsedReferrer = url.parse(referrer || '');

  const ref = await parseReferrer(parsedHref, parsedReferrer);
  const campaign = await parseCampaign(parsedHref, parsedReferrer);

  return {
    campaign,
    referrer: ref
  };
};

async function parseReferrer(href: UrlWithStringQuery, referrer: UrlWithStringQuery): Promise<Referrer> {
  for (const matcher of matchers) {
    try {
      const result = await matcher(href, referrer);
      if (result) {
        return result;
      }
    } catch {}
  }
  return {
    type: 'unknown'
  }
};

const CAMPAIGN_KEY_MAP = {
  utm_campaign : 'campaign',
  utm_source   : 'source',
  utm_term     : 'term',
  utm_medium   : 'medium',
  utm_count    : 'content'
};

async function parseCampaign(href: UrlWithStringQuery, referrer: UrlWithStringQuery): Promise<Partial<Campaign>> {
  const query = qs.parse(href.query ?? '');
  const campaign: Partial<Campaign> = {};
  
  return {
    campaign: (query['utm_campaign'] as string) ?? undefined,
    source: (query['utm_source'] as string) ?? undefined,
    term: (query['utm_term'] as string) ?? undefined,
    medium: (query['utm_medium'] as string) ?? undefined,
    content: (query['utm_count'] as string) ?? undefined,
  }
};