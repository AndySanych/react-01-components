import ReactDOM from 'react-dom';
import paintings from './paintings.json';

// const elem1 = <span>Привет</span>;

// const elem2 = <span>мир</span>;

// const element = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(element);
//=====================================================================

// const data = {
//     id: "id-1",
//     url:
//     "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//     title: "Feathers. Art abstract",
//     price: 500,
//     author: {
//       tag: "ractapopulous",
//       url: "https://pixabay.com/users/ractapopulous-24766/"
//     },
//     quantity: 10,
// };
//======================================================================

// const data = paintings[0];

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}> {data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );
//=====================================================================
function Painting({ url, title, profileUrl, author, price }) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}> {author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}
const painting = paintings[1];

ReactDOM.render(
  <Painting
    url={painting.url}
    title={painting.title}
    author={painting.author.tag}
    profileUrl={painting.author.url}
    price={painting.price}
  />,
  document.querySelector('#root'),
);
//=====================================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
