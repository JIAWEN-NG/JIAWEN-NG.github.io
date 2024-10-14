function get_all() {

    console.log("[START] get_all()");

    // YOUR CODE GOES HERE
    // 1. Create a new api endpoint 

    let api_endpoint_url = 'http://krazywoman.com/krazystars/api/star/read.php';
   
   // Axios calling API endpoint asynchrously
    axios.get(api_endpoint_url).
    then(response =>{
        //inspect the response in jS console
        console.log(response.data.records); //get a array of (Star) Objects
        console.log(response.data.records[0].fullname); //get the first object's name


        // JS DOM
        // Create and insert an un-ordered list of stars fullnames
        //<div id="stars"></div>
        let stars = document.getElementById("stars");
        let ul = document.createElement("ul");
        response.data.records.forEach(star =>{
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(star.fullname));
            ul.appendChild(li);
        });

        stars.appendChild(ul);
        console.log(stars);

        //step by step 
        //let array_stars = document.getElementById("stars");
        //create <ul>
        //let ul = document.createElement("ul");
        //for (star of array_stars) { 
            // console.log(star.fullname);
            // let li = document.createElement("li");
            // let li_text = document.createTextNode(star.fullname);
            // li.appendChild(li_text);
            //ul.appendChild(li);
         //}

       //DOM 
       //document.getElementById("stars").appendChild(ul);


    }).
    catch((error) =>{
        console.log(error.message);
    })
    

    //i will have moved on to this alr after axios went off 
    console.log("[END] get_all()");
}

// this is the wrong way to do it. using template literal

function get_all_template() {

    console.log("[START] get_all()");

    // YOUR CODE GOES HERE
    // 1. Create a new api endpoint 

    let api_endpoint_url = 'http://krazywoman.com/krazystars/api/star/read.php';
   
   // Axios calling API endpoint asynchrously
    axios.get(api_endpoint_url).
    then(response =>{
        //inspect the response in jS console
        console.log(response.data.records); //get a array of (Star) Objects
        console.log(response.data.records[0].fullname); //get the first object's name


        let array_stars = response.data.records;
        let results_str = `
        <ul>`;

        for ( star of array_stars) {
            results_str += `<li>${star.fullname}</li>`;
        }


        document.getElementById("stars").innerHTML = results_str;

    }).
    catch((error) =>{
        console.log(error.message);
    })
    

    //i will have moved on to this alr after axios went off 
    console.log("[END] get_all()");
}

