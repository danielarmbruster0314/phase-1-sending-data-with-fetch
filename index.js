// Add your code here
//construct a POST request using fetch()

// fetch('http://localhost:3000/dogs', {
//     method: 'POST',
//     headers: {
//         'Content-Type' : 'application/json',
//         Accept: 'application/json',
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }) 
//     .then((resp) => resp.json())
//     .then((obj) => console.log(obj))
// });


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });


function submitData(username, useremail){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name : username,
            email : useremail
        })
    })
    .then((resp) => resp.json() )
    .then((obj) => {
        document.body.innerHTML = obj.id })
    .catch( (error) => {
        document.body.innerHTML = error.message
    })    
}