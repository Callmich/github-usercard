/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Callmich')
.then(response => {
  console.log(response.data)
  cardEntry.append(createGitHubCard(response.data))

  // let newcard = createGitHubCard(response.data)
  //   cardEntry.append(newcard);
})
.catch(error =>{
  console.log('the data was not returned, error')
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [  
  `tetondan`,
  `dustinmyers`,
  `justsml`,
  `luishrd`,
  `bigknell`
];

followersArray.map(name => {
 axios.get(`https://api.github.com/users/${name}`)
.then(response => {
    console.log(response.data)
    cardEntry.append(createGitHubCard(response.data))
  
  })
  .catch(error =>{
    console.log('the data was not returned, error')
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile: <a href={address to users github page}>{address to users github page}</a></p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createGitHubCard(userData){
  const newCard = document.createElement('div'),
        userImage = document.createElement('img'),
        userInfo = document.createElement('div'),
        userName = document.createElement('h3'),
        userHandle = document.createElement('p'),
        userLocation = document.createElement('p'),
        userEmail = document.createElement('a'),
        userProfile = document.createElement('p'),
        userFollowers = document.createElement('p'),
        userFollowing = document.createElement('p'),
        userBio = document.createElement('p');




  newCard.classList.add('card');
  userInfo.classList.add('card-info');
  userName.classList.add('name');
  userHandle.classList.add('username');

  userImage.src = userData.avatar_url;
  userName.textContent = userData.name;
  userHandle.textContent = userData.login;
  userLocation.textContent = `Location: ${userData.location}`;
  
  userEmail.setAttribute('href', userData.html_url);
  userEmail.innerText = userData.html_url;
  userProfile.textContent = `Profile: `;
  userFollowers.textContent = `Followers: ${userData.followers}`;
  userFollowing.textContent = `Following: ${userData.following}`;
  userBio.textContent = `Bio: ${userData.bio}`;

  newCard.append(userImage);
  newCard.append(userInfo);
  userInfo.append(userName);
  userInfo.append(userHandle);
  userInfo.append(userLocation);
  userInfo.append(userProfile);
  userProfile.append(userEmail);
  userInfo.append(userFollowers);
  userInfo.append(userFollowing);
  userInfo.append(userBio);

  return newCard

}

const cardEntry = document.querySelector('.cards')


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
