
async function fetchData(){
    var searchData = document.getElementById("txtData").value;
    var apiDetails1_main = `http://api.tvmaze.com/singlesearch/shows?q= ${searchData}`

    apiDetails = await $.ajax(apiDetails1_main);
    console.log(apiDetails);
   // var showId  = `http://api.tvmaze.com/shows/${apiDetails.id}`;
    var episodelist = await $.ajax(`http://api.tvmaze.com/shows/${apiDetails.id}/episodes`);
    console.log(episodelist);
    var ep_function = function() {
        var episode_div = document.getElementById("episodeList");
        var s = JSON.stringify(episodelist);
        const jsonObj = JSON.parse(s);
        for(let i = 1 ; i < jsonObj.length ; i++){
            var list = document.createElement("li");
            list.innerHTML = 'Episode '+[i] + ': '  + jsonObj[i].name;
            episode_div.appendChild(list);
        }
    }
       /* var s = JSON.stringify(episodelist);
        const jsonObj = JSON.parse(s);
        for(let i = 0 ; i < jsonObj.length; i++){
            jsonObj[i].name;
        }*/


    console.log(`http://api.tvmaze.com/shows/${apiDetails.id}&embed=episodes`);
    if (searchData === apiDetails.name.toLowerCase() || searchData === apiDetails.name.toUpperCase()) {
        showData(apiDetails.name , apiDetails.summary, apiDetails.image.original);
        ep_function();
    } else {
        alert('The show which are you looking for either not available or check your spelling ');
    }
    /*this.renderResult(showDetails.name);*/
    document.getElementById("btn").addEventListener("click",clearImmediate);

}



function showData(name, summary, imgUrl){

    // get main
    main = document.getElementById('main');

    // create tags
    header1 = document.createElement('h1');
    header2 = document.createElement('h2');
    img = document.createElement('img');
    summaryTag = document.createElement('div');



    // add data

    header1.appendChild(document.createTextNode(name));
    header1.setAttribute('fontFamily', 'Arial, Helvetica, sans-serif')
    img.setAttribute('width', '1500');
    img.setAttribute('height', '800');
    img.setAttribute('src', imgUrl);
    summaryTag.innerHTML = summary;
    header2.appendChild(document.createTextNode("Episode List"));
    // add to page

    main.appendChild(header1);
    main.appendChild(img);
    main.innerHTML += summary;
    main.appendChild(header2)
}





