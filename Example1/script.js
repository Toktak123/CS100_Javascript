// Fetch the content of the file data.txt 
fetch("data.txt")
.then(response => response.text())
.then(data => {
    // Display the content to the console
    console.log(data);
    // Display content on the page in the HTML element with id output
    // Display content on the page
    document.getElementById("output").textContent = data; 
    
})
.catch(error => console.error('Error reading file:', error));
