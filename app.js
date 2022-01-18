
const http= new EasyHttp();

//GET

http.get('https://jsonplaceholder.typicode.com/users')
.then( data => console.log(data))
.catch( console.log('Error'));


const user= [{
  "name": "Ram",
  "username" : "bnramkumar492",
  "email": "bnramkumar492@gmail.com"
}];

//
// // POST
//
http.post('https://jsonplaceholder.typicode.com/users',user)
.then( data => console.log(  data))
.catch( err => console.log(err));


// PUT

http.put('https://jsonplaceholder.typicode.com/users/1',user)
.then( data => console.log(  data))
.catch( err => console.log(err));

// delete
//
http.delete('https://jsonplaceholder.typicode.com/users/1')
.then( data => console.log(data))
.catch( err=> console.log(err));
