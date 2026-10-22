(function(){try{if(navigator.doNotTrack==="1"||/[?&]nostats/.test(location.search))return;
var w=innerWidth,d=/Mobi|Android/i.test(navigator.userAgent)?(w<768?"mobile":"tablet"):"desktop";
var r="";try{r=document.referrer?new URL(document.referrer).hostname:""}catch(e){}
var t=/[?&]statstest/.test(location.search)?"TEST":null;
fetch("https://rvreusugrtiubqtafgbk.supabase.co/rest/v1/visits",{method:"POST",keepalive:true,
headers:{"apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2cmV1c3VncnRpdWJxdGFmZ2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5OTc1NzUsImV4cCI6MjEwNzU3MzU3NX0.9BZkV7hDotkjH9rTi1LkU3t0yCB2qhv1GEOoO511V-8","Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2cmV1c3VncnRpdWJxdGFmZ2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5OTc1NzUsImV4cCI6MjEwNzU3MzU3NX0.9BZkV7hDotkjH9rTi1LkU3t0yCB2qhv1GEOoO511V-8","Content-Type":"application/json","Content-Profile":"sitestats","Prefer":"return=minimal"},
body:JSON.stringify({site:"altinmakas",path:location.pathname,referrer:t||r,user_agent:navigator.userAgent.slice(0,300),device:d,lang:navigator.language,screen:screen.width+"x"+screen.height})}).catch(function(){})}catch(e){}})();
