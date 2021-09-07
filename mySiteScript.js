
function httpGame(gameURL, id){
    var req = new XMLHttpRequest();
    var url = gameURL
    req.open("GET", url, true);
    req.addEventListener('load', function(){
        if(req.status>=200 & req.status<=400){
            var response = JSON.parse(req.responseText);
            let ratingid = 'rating'+id
            let priceid = 'price'+id
            let hrefid = 'href'+id
            document.getElementById(ratingid).textContent = response[0].steamRatingPercent+'%';
            document.getElementById(priceid).textContent = '$'+response[0].salePrice;
            document.getElementById(hrefid).setAttribute('href', 'https://www.cheapshark.com/redirect?dealID='+response[0].dealID);
            document.getElementById(hrefid).setAttribute('title', 'https://www.cheapshark.com/redirect?dealID='+response[0].dealID);
            console.log(response[0].steamRatingPercent)
        }else{
            console.log("Status Error: "+ req.responseText);
        };
    });
    req.send(null);
};


document.addEventListener('DOMContentLoaded', function(){

    const DS3 = "https://www.cheapshark.com/api/1.0/deals?title=DARKSOULSIII&exact=1"
    const kidCham = "https://www.cheapshark.com/api/1.0/deals?title=KIDCHAMELEON&exact=1"
    const borderlands = "https://www.cheapshark.com/api/1.0/deals?title=BORDERLANDSGAMEOFTHEYEARENHANCED&exact=1"
    const unrealT = "https://www.cheapshark.com/api/1.0/deals?title=UNREALTOURNAMENTGAMEOFTHEYEAREDITION&exact=1"
    const elderScrolls = "https://www.cheapshark.com/api/1.0/deals?title=THEELDERSCROLLSVSKYRIM&exact=1"
    const deadSpace = "https://www.cheapshark.com/api/1.0/deals?title=DEADSPACE2"
    const nierAutomata = "https://www.cheapshark.com/api/1.0/deals?title=nierautomata&exact=1"
    const sonic2 = "https://www.cheapshark.com/api/1.0/deals?title=SonictheHedgehog2&exact=1"
    const DS2 = "https://www.cheapshark.com/api/1.0/deals?title=DARKSOULSII"
    const borderlands2 = "https://www.cheapshark.com/api/1.0/deals?title=BORDERLANDS2"


    try {
        httpGame(DS3, 1);
        httpGame(DS2, 9)
        httpGame(elderScrolls, 2);
        httpGame(kidCham, 3);
        httpGame(sonic2, 8)
        httpGame(borderlands, 6);
        httpGame(borderlands2, 10)
        httpGame(unrealT, 4);
        httpGame(deadSpace, 5);
        httpGame(nierAutomata, 7);
    } catch (error) {
        document.getElementById("tableError").style.display = "table-cell";
    }

});

/*
{'internalName': 'DARKSOULSIII', 
'title': 'Dark Souls III', 
'metacriticLink': '/game/pc/dark-souls-iii', 
'dealID': 'gvKLyMOBW2we1CabK%2BD4A3hMSEjXsg%2FMbz%2Ff9rvWu68%3D', 
'storeID': '23', 
'gameID': '144565', 
'salePrice': '47.90', 
'normalPrice': '59.99', 
'isOnSale': '1', 
'savings': '20.153359', 
'metacriticScore': '89', 
'steamRatingText': 'Very Positive', 
'steamRatingPercent': '94', 
'steamRatingCount': '182803', 
'steamAppID': '374320', 
'releaseDate': 1460332800, 
'lastChange': 1628382891, 
'dealRating': '2.5', 
'thumb': 'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/capsule_sm_120.jpg?t=1628263692'}
*/
