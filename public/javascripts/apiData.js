
async function fetchData(){

    var searchData = document.getElementById("txtData").value;
    apiDetails = await $.ajax(`http://api.tvmaze.com/singlesearch/shows?q= ${searchData}`);
    console.log(apiDetails);
    var showId  = `http://api.tvmaze.com/shows/${apiDetails.id}`;
    var episodelist = await $.ajax(`http://api.tvmaze.com/shows/${apiDetails.id}/episodes`);
    console.log(episodelist);
    var s = JSON.stringify(episodelist);
    const jsonObj = JSON.parse(s);
    for(let i = 0 ; i < jsonObj.length; i++){
        console.log(jsonObj[i].name);
    }
    console.log(`http://api.tvmaze.com/shows/${apiDetails.id}&embed=episodes`);
    if (searchData === apiDetails.name.toLowerCase() || searchData === apiDetails.name.toUpperCase()) {
        showData(apiDetails.name , apiDetails.summary, apiDetails.image.original);
    } else {
        alert('The show which are you looking for either not available or check your spelling ');
    }
    /*this.renderResult(showDetails.name);*/
    var btnC = document.getElementById("btn");
    if(btnC.onclick === true) this.onclick = null;
}



function showData(name, summary, imgUrl){

    // get main
    main = document.getElementById('main');

    // create tags
    header1 = document.createElement('h1');
    img = document.createElement('img');
    summaryTag = document.createElement('div');

    li = document.createElement('li');


    // add data

    header1.appendChild(document.createTextNode(name));


    img.setAttribute('width', '258');

    img.setAttribute('src', imgUrl);

    summaryTag.innerHTML = summary;

    // add to page
    main.appendChild(header1);

    main.appendChild(img);

    main.innerHTML += summary;

}





