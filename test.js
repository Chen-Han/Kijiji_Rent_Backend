var http = require('http');
var kijiji_scraper = require('kijiji-scraper');

var searchPref = {
	"locationId":"kitchener-waterloo",
	"categoryId":"c36l1700212"
};
var params={
    "minPrice": 200,
    "maxPrice": 800,
    "keywords": "",
    "adType": "OFFER"
};

http.createServer(function(request,response){
	/*response.writeHead(200);
	response.write('Hello node');*/
	var kijiji_callback = function(err,ads){
		if(err){
			response.writeHead(200,{
				'Content-Type':'application/json',
				'Access-Control-Allow-Origin':'*'
			});
			response.write(JSON.stringify(err));
			console.log(JSON.stringify(err));
			response.end();
		}else{
			response.writeHead(200,
			{
				'Content-Type':'application/json',
				'Access-Control-Allow-Origin':'*'
			});
			response.write(JSON.stringify(ads));
			//console.log(JSON.stringify(ads));
			response.end();
		}
	};
	kijiji_scraper.query(searchPref,params,kijiji_callback)
}).listen(8080);