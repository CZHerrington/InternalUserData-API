import $ from "jquery";






var checkAndLog = function (data) {
  console.log("something messed up")
  console.log(data)
};

var userTemplate = function(users) {
  var name = users.name.first + " " + users.name.last;
  var nameCaps = name.toUpperCase()
  return `<div class="user-data">
  <img src="${users.picture.large}"></img>
   <span class="name"><p>${nameCaps}</p></span>
   <div class="email">${users.email.toUpperCase()}</div>
   <div class="address">${users.location.street}</div>
   <div class="address">${users.location.city}, ${users.location.state}, ${users.location.postcode} </div>
   <div class="phone">${users.phone}</div>
   <div class="ssn">${users.id.value}</div>
   </div>`
}

var addUserToPage = function(data) {
  console.log("'add to page' fxn ran")
  console.log(data)
  var users = data.results
  users.forEach(function(datum){
   $(".users").append(userTemplate(datum))
  });
}

function getUsers (id){
  var results = $.ajax({
    url: "https://randomuser.me/api/",
    data: {
      results: "12", nat: "US", inc: "name, location, email, id, picture, phone"
    },
    dataType: 'json',
    success: addUserToPage,
    error: checkAndLog
  });
  console.log("the data is being fetched...");
};

getUsers()
