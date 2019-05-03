
// Boormarklet to take the current url (aka window.location) and send it in the query string to Logic App

javascript:(function(f,s,n,o){window.open(f+encodeURIComponent(s),n,o)}('_URL_OF_YOUR_LOGICAPP_&postUrl=',window.location,'yourform','width=300,height=200'));

