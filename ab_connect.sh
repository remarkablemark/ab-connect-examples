##
# AB Connect
#
# Documentation: https://abconnect.docs.apiary.io/
# Demo: https://widgets.academicbenchmarks.com/ABConnect/v4/topicsBrowser/topicsBrowser.html
##

# credentials
PARTNER_ID=demo4
PARTNER_KEY=exMSobPnS7F0s/u/aKtakg

# authentication expiration in seconds
if [[ $OSTYPE == "linux-gnu"* ]]; then
  AUTH_EXPIRES=$(date -d 'today 24 hours' +%s) 
elif [[ $OSTYPE == "darwin"* ]]; then
  AUTH_EXPIRES=$(date -j -v +24H -f "%Y-%m-%d" $(date +%Y-%m-%d) +%s) 
fi

# authentication signature
MESSAGE=$(echo -e "$AUTH_EXPIRES\n")
AUTH_SIGNATURE=$(echo -n $MESSAGE | openssl sha256 -hmac $PARTNER_KEY -binary | base64)

STANDARDS_URL="https://api.abconnect.certicaconnect.com/rest/v4.1/standards/"

curl --get --silent \
  --data-urlencode "partner.id=$PARTNER_ID" \
  --data-urlencode "auth.signature=$AUTH_SIGNATURE" \
  --data-urlencode "auth.expires=$AUTH_EXPIRES" \
  $STANDARDS_URL \
  | jq
