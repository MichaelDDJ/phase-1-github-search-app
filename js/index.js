//make the submit button work
const form = document.getElementById('github-form');



form.addEventListener('submit', function(e) {
    e.preventDefault();
    const search = document.getElementById('search').value;
    
    fetch('https://api.github.com/search/users?q='+search)
    .then(result => result.json())
    .then(data => {
        console.log(data)
    })
}) 













//make a fetch request using the endpoint.

//pull info from the response to display