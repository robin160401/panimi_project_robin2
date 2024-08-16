import Friend from "./classes/Friend";

const form = document.getElementById("friendsForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const lastNameInput = document.getElementById("lastname") as HTMLInputElement;
const birthdayInput = document.getElementById("birthday") as HTMLInputElement;
const birthplaceInput = document.getElementById("birthplace") as HTMLInputElement;
const nicknameInput = document.getElementById("nickname") as HTMLInputElement;
const locatedInput = document.getElementById("located") as HTMLInputElement;
const musicInput = document.getElementById("music") as HTMLInputElement;
const seriesInput = document.getElementById("series") as HTMLInputElement;
const movieInput = document.getElementById("movie") as HTMLInputElement;
const imgInput = document.getElementById("img") as HTMLInputElement;
const cardContainer = document.getElementById("cardContainer") as HTMLDivElement;

const friendsArray: Friend[] = [];

function printFriend(friend: Friend){
  const card = document.createElement("div");
  const name = document.createElement("h2");
  const lastName = document.createElement("h2");
  const birthday = document.createElement("p")
  const birthPlace = document.createElement("p")
  const nickname = document.createElement("p")
  const locatedIn = document.createElement("p")
  const favoriteMusic = document.createElement("p")
  const favoriteSeries = document.createElement("p")
  const favoriteMovie = document.createElement("p")
  const img = document.createElement("img")
  
  name.textContent = friend._firstName;
  lastName.textContent = friend._lastName;
  birthday.textContent = friend._birthday;
  birthPlace.textContent = friend._birthPlace;
  nickname.textContent = friend._nickname;
  locatedIn.textContent = friend._locatedIn;
  favoriteMusic.textContent = friend._favoriteMusic;
  favoriteSeries.textContent = friend._favoriteSeries;
  favoriteMovie.textContent = friend._favoriteMovie;
  img.src = friend._img;

  cardContainer?.appendChild(card);
  card.appendChild(name);
  card.appendChild(lastName);
  card.appendChild(birthday);
  card.appendChild(birthPlace);
  card.appendChild(nickname);
  card.appendChild(locatedIn);
  card.appendChild(favoriteMusic);
  card.appendChild(favoriteSeries);
  card.appendChild(favoriteMovie);
  card.appendChild(img);
}

function addFriend(event: Event){
  event.preventDefault();
  const newFriend = new Friend(
    nameInput.value,
    lastNameInput.value,
    birthdayInput.value,
    birthplaceInput.value,
    nicknameInput.value,
    locatedInput.value,
    musicInput.value,
    seriesInput.value,
    movieInput.value,
    imgInput.value
  )
  friendsArray.push(newFriend);
  printFriend(newFriend); 
}


form.addEventListener("submit", addFriend);
