// Run this function when user clicks on the search button
function checkWord() {
    // Assign keyword to the user submitted input value
    const keyword = document.getElementById("input").value;
    // Assign url to the data page, that holds an array of all the keys within our dictionary
    const url = `https://second-marcusgalvin.c9users.io/data`;
    // Use Axios to fetch the url data and bring it into our promise
    axios.get(url)
        .then(res => {
            // Reassign the data we pulled in to a variable
            const rtnData = res.data;
            // The indexOf method will return the index of an element in the array,
            //   or -1 if it's not in the array:
            // Then run the condition of if the keyword is greater than -1, which means found, run the following:
            if (rtnData.indexOf(keyword) > -1) {
                // Assign the ID results to variable showResult
                var showResult = document.getElementById("result");
                // If user had a previous search that resulted in "not found", remove its styling class
                // Apply the "found" styling
                // Output the following elements to the DOM in the result ID
                showResult.classList.remove("noResult");
                showResult.classList.add("yesResult");
                document.getElementById("result").innerHTML =
                    `<h2>Match Found!</h2>
                    <div class="text-copy">Yay...We have found <strong>${keyword}</strong> within our dictionary.</div>
                    <div class="link">Click 'Learn More' to see the definition of ${keyword} - <a href="https://en.wikipedia.org/wiki/${keyword}" target="_blank">Learn More</a>
                    `;
            }
            // If the keyword is equal to -1, which means not found, run the following:
            else {
                // If user had a previous search that resulted in "found", remove its styling class
                // Apply the "not found" styling
                // Output the following elements to the DOM in the result ID
                var showResult = document.getElementById("result");
                showResult.classList.remove("yesResult");
                showResult.classList.add("noResult");
                document.getElementById("result").innerHTML =
                    `<h2>Oops! Match Not Found</h2>
                    <div class="text-copy">Sorry we could not find a match for <strong>${keyword}</strong> within our dictionary.</div>
                    <p>Please try your search again. </p>
                    `;
            }
        })
}
