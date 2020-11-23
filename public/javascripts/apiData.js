
async function fetchData(){
    // get value of search field
    var searchData = document.getElementById("txtData").value;

    //store api
    var apiDetails1_main = `http://api.tvmaze.com/singlesearch/shows?q= ${searchData}`

    //AJAX string url
    apiDetails = await $.ajax(apiDetails1_main);
    console.log(apiDetails);

    //Season List URL
    var seasonList = await $.ajax(`http://api.tvmaze.com/shows/${apiDetails.id}/seasons`);
    console.log(seasonList);

    //Episode List URL
    var episodelist = await $.ajax(`http://api.tvmaze.com/shows/${apiDetails.id}/episodes`);
    console.log(episodelist);

    //Function to get and display season and Episode List
    var ep_function = function() {

        //Get Element from HTML div
        var season_li = document.getElementById("seasonList");
        var episode_div = document.getElementById("episodeList");

        // to string of array of object using stringify of season orderList api
        var sl = JSON.stringify(seasonList);
        var jsonSeason = JSON.parse(sl);

        // to string of array of object using stringify of episode orderList api
        var s = JSON.stringify(episodelist);
        const jsonObj = JSON.parse(s);

        //loop according length of season
           for (let j = 0; j < jsonSeason.length; j++) {

                //Create tags
                var breakLine = document.createElement('br');
                var div_dropDown = document.createElement("div");
                var dropDown_btn = document.createElement("button");
                var div_dropDownEps = document.createElement("div");

                // add Season List in HTML page
                dropDown_btn.innerHTML = 'Season : ' + (j+1);

                //Set div dropdown id
                div_dropDown.setAttribute('id','container');

                //Set attributes for drop down button
                dropDown_btn.setAttribute("class",'Season ' + (j+1));
                dropDown_btn.setAttribute("href",'#container'+(j+1));
                dropDown_btn.setAttribute("data-toggle",'collapse'); // create data toggle button

                // Attributes for episodes
                div_dropDownEps.setAttribute('id','container'+(j+1));
                div_dropDownEps.setAttribute("class",'collapse');

                // drop down btn styles
                dropDown_btn.style.backgroundColor = "#b7e4c7";
                dropDown_btn.style.width = "100%";
                dropDown_btn.style.border = "5px solid #B7E4C7";
                dropDown_btn.style.marginBottom = "20px";
                dropDown_btn.style.borderRadius = "40px 0px 40px 0px";
                dropDown_btn.style.fontFamily = "Impact, Charcoal, sans-serif";
                dropDown_btn.style.fontWeight = "500";
                dropDown_btn.style.fontSize = "32px";

                // styles for episode orderList
                div_dropDownEps.style.fontFamily = "Arial Black, Gadget, sans-serif";
                div_dropDownEps.style.fontSize = "24px";
                div_dropDownEps.style.fontWeight = 200;

                // add data to the HTML
                dropDown_btn.appendChild(div_dropDownEps);
                div_dropDown.appendChild(dropDown_btn);
                season_li.appendChild(dropDown_btn);
                season_li.appendChild(breakLine);

           }

           //Nested loops
            for (let j = 0; j < jsonSeason.length; j++) {           //rotate till the length of season

                for (let i = 0; i < jsonObj.length; i++)            // loop for break out episodes in seasons
                {
                    if (jsonObj[i].season === (j+1) ) {

                        //Create element
                        var orderList = document.createElement("ol");
                        var ep_img = document.createElement('img');
                        var ep_summary = document.createElement('div');

                        //Set attribute of episode image
                        ep_img.setAttribute('width',250);
                        ep_img.setAttribute('src',jsonObj[i].image.original);

                        //order list of episode list styles
                        orderList.style.flexDirection = "column";
                        orderList.style.textAlign = "left";
                        orderList.style.fontFamily = "Times New Roman, Times, serif";

                        // Add data
                        orderList.innerHTML = 'Episode '  +jsonObj[i].number+ ': ' + jsonObj[i].name ;
                        ep_summary.innerHTML = jsonObj[i].summary;
                        orderList.innerHTML +=  jsonObj[i].summary;

                        //Add data to html page
                        document.getElementById('container'+(j+1)).appendChild(orderList);
                        document.getElementById('container'+(j+1)).appendChild(ep_img);

                    }
                }
            }
    }

    showData(apiDetails.name, apiDetails.summary, apiDetails.image.original);
    ep_function();
}



function showData(name, summary, imgUrl){

    // get main
    main = document.getElementById('main');

    // create tags
    header1 = document.createElement('h1');
    img = document.createElement('img');
    summaryTag = document.createElement('div');

    // add data
    header1.appendChild(document.createTextNode(name));
    header1.setAttribute('fontFamily', '"Arial Black", Gadget, sans-serif');
    header1.style.fontSize = "80px";
    img.setAttribute('width', '340');
    img.setAttribute('src', imgUrl);
    img.style.marginBottom = "20px";
    img.style.marginTop = "20px";
    summaryTag.innerHTML = summary;

    // add to page

    main.appendChild(header1);
    main.appendChild(img);
    main.innerHTML += summary;

}





