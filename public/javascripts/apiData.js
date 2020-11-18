
async function fetchData(){
    var searchData = document.getElementById("txtData").value;
    var apiDetails1_main = `http://api.tvmaze.com/singlesearch/shows?q= ${searchData}`

    apiDetails = await $.ajax(apiDetails1_main);
    console.log(apiDetails);
   // var showId  = `http://api.tvmaze.com/shows/${apiDetails.id}`;

    var seasonList = await $.ajax(`http://api.tvmaze.com/shows/${apiDetails.id}/seasons`);
    console.log(seasonList);

    var episodelist = await $.ajax(`http://api.tvmaze.com/shows/${apiDetails.id}/episodes`);
    console.log(episodelist);
    var ep_function = function() {
        var season_li = document.getElementById("seasonList");
        var episode_div = document.getElementById("episodeList");
       // header2 = document.createElement('h2');

        var sl = JSON.stringify(seasonList);
        var jsonSeason = JSON.parse(sl);

        var s = JSON.stringify(episodelist);

        const jsonObj = JSON.parse(s);




           for (let j = 0; j < jsonSeason.length; j++) {
                var list = document.createElement("li");
                list.innerHTML = 'Season ' + [(j+1)];
                list.setAttribute("id",'Season ' + (j+1));
                season_li.appendChild(list);
           }
            for (let j = 0; j < jsonSeason.length; j++) {

                for (let i = 0; i < jsonObj.length; i++)
                {
                    if (jsonObj[i].season === (j+1)  ) {
                        var list = document.createElement("li");
                        list.innerHTML = 'Episode '  +jsonObj[i].number+ ': ' + jsonObj[i].name;
                        document.getElementById('Season ' + (j+1)).appendChild(list);
                    }
                }
            }
    }

    // if (searchData === apiDetails.name.toLowerCase() || searchData === apiDetails.name.toUpperCase()) {
    //     showData(apiDetails.name , apiDetails.summary, apiDetails.image.original);
    //     ep_function();
    // }
    // else {
    //     alert('The show which are you looking for either not available or check your spelling ');
    // }

    showData(apiDetails.name , apiDetails.summary, apiDetails.image.original);
    ep_function();

}



function showData(name, summary, imgUrl){

    // get main
    main = document.getElementById('main');

    // create tags
    header1 = document.createElement('h1');
    //header2 = document.createElement('h2');
    img = document.createElement('img');
    summaryTag = document.createElement('div');



    // add data

    header1.appendChild(document.createTextNode(name));
    header1.setAttribute('fontFamily', 'Arial, Helvetica, sans-serif')
    img.setAttribute('width', '340');
    //img.setAttribute('height', '800');
    img.setAttribute('src', imgUrl);
    summaryTag.innerHTML = summary;
    //header2.appendChild(document.createTextNode("Episode List"));
    // add to page

    main.appendChild(header1);
    main.appendChild(img);
    main.innerHTML += summary;
    //main.appendChild(header2)
}





