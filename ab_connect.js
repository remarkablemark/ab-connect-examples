/**
 * AB Connect
 *
 * @link https://abconnect.docs.apiary.io/#introduction/authentication/node.js
 * @link https://widgets.academicbenchmarks.com/ABConnect/v4/standards-browser-min/StandardsBrowser.htm
 */

const getJSON = require('bent')('json');
const { createHmac } = require('crypto');
const { stringify } = require('querystring');

// credentials
const partnerId = 'demo4';
const partnerKey = 'exMSobPnS7F0s/u/aKtakg';

// access expiration in seconds since epoch
const authExpires = Math.floor(Date.now() / 1000) + 3600; // 60 seconds * 60 minutes = 1 hour

// authentication signature
const message = `${authExpires}\n`;
const authSignature = createHmac('SHA256', partnerKey)
  .update(message)
  .digest('base64');

/*
// AB v4.1
(async function() {
  const standardsUrl =
    'https://api.abconnect.certicaconnect.com/rest/v4.1/standards';
  const querystring = stringify({
    'partner.id': partnerId,
    'auth.signature': authSignature,
    'auth.expires': authExpires,
  });
  const url = `${standardsUrl}?${querystring}`;

  try {
    const data = await getJSON(url);
    console.log('---\nAB 4.1:', url);
    console.dir(data, { depth: null });
  } catch (error) {
    console.error(error);
  }
})();

// AB v4
(async function() {
  const standardsUrl = 'https://api.academicbenchmarks.com/rest/v4/standards';
  const querystring = stringify({
    'partner.id': partnerId,
    'auth.signature': authSignature,
    'auth.expires': authExpires,
  });
  const url = `${standardsUrl}?${querystring}`;

  try {
    const data = await getJSON(url);
    console.log('---\nAB 4:', url);
    console.dir(data, { depth: null });
  } catch (error) {
    console.error(error);
  }
})();
*/

// AB v3
(async function() {
  const standardsUrl = 'https://api.academicbenchmarks.com/rest/v3/standards';
  const querystring = stringify({
    'partner.id': partnerId,
    'auth.signature': authSignature,
    'auth.expires': authExpires,
  });
  const url = `${standardsUrl}?${querystring}`;

  try {
    const data = await getJSON(url);
    console.log('---\nAB 3:', url);
    console.dir(data, { depth: null });
  } catch (error) {
    console.error(error);
  }
})();
