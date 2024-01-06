url = "https://www.google.com/search?q=%EB%82%A0%EC%94%A8&oq=%EB%82%A0%EC%94%A8&gs_lcrp=EgZjaHJvbWUyEQgAEEUYJxg5GJ0CGIAEGIoFMg0IARAAGIMBGLEDGIAEMgoIAhAuGLEDGIAEMgoIAxAAGLEDGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgYIBhAAGAMyBggHEEUYPNIBCDE3NjFqMWoxqAIAsAIA&sourceid=chrome&ie=UTF-8"
/*async function testFetch(site){
    return await(await fetch(site,{mode: "no-cors",})).text();
}



const fetchTest = testFetch(url);*/

const request = new XMLHttpRequest();

request.open('GET', url, true);
request.onload = function (){
    var htmlText = request.responseText;
    return htmlText;
}
