import axios from "axios";

const Card = ({ authorName, headline, authorPhoto }) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement("div");
  const headLine = document.createElement("div");
  const authorContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorPic = document.createElement("img");
  const authorNameb = document.createElement("span");

  cardDiv.appendChild(headLine);
  cardDiv.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(authorPic);
  authorContainer.appendChild(authorNameb);

  cardDiv.classList.add("card");
  headLine.classList.add("headline");
  authorContainer.classList.add("author");
  imgContainer.classList.add("img-container");

  //headline, authorPhoto, authorName
  headLine.textContent = headline;
  authorPic.src = authorPhoto;
  authorNameb.textContent = authorName;

  return cardDiv;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  const entryPoint = document.querySelector(selector);
  axios
    .get("http://localhost:5000/api/articles")
    .then((res) => {
      console.log(res.data);
      const newCard = Card(res.data.articles);
      entryPoint.appendChild(newCard);
    })
    .catch((err) => {
      console.log(err);
    });

  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
