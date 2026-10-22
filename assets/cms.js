window.AM_SB={url:"https://rvreusugrtiubqtafgbk.supabase.co",key:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2cmV1c3VncnRpdWJxdGFmZ2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5OTc1NzUsImV4cCI6MjEwNzU3MzU3NX0.9BZkV7hDotkjH9rTi1LkU3t0yCB2qhv1GEOoO511V-8",schema:"altinmakas"};
window.AM_LOAD=async function(){var S=window.AM_SB;try{var c=new AbortController();setTimeout(function(){c.abort()},4000);
var r=await fetch(S.url+"/rest/v1/site_content?id=eq.1&select=data",{signal:c.signal,headers:{apikey:S.key,Authorization:"Bearer "+S.key,"Accept-Profile":S.schema}});
if(r.ok){var j=await r.json();if(j[0]&&j[0].data)return j[0].data}}catch(e){}
return (await fetch("data/content.json?v="+Date.now())).json()};
