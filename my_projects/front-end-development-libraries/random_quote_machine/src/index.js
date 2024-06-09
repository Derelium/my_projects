import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const quote = [
  "❞Невозможно быть свободным от того, от чего убегаешь.",
  "❞У победителя много друзей, и лишь у побежденного они настоящие.",
  "❞Куда ни пойди, везде люди как люди, небо как небо.", 
  "❞Что не убивает, то делает нас сильнее."
  
];

const author = ["― Фридрих Вильгельм Ницше","-Никколо Макиавелли ","― Манускрипт Ниндзя", "― Фридрих Вильгельм Ницше"];
let random = Math.floor(Math.random() * quote.length);
const root =ReactDOM.createRoot(document.getElementById('quote-box'));

function Random(props) {
  return (
    <div>
      <h1 id="text">{props.quote}</h1>
      <h5 id="author">{props.author}</h5>
      <div id="A">
        <a className="icon-link" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${props.quote}`}>
          <i className="fa-brands fa-square-twitter"></i>
        </a>   
        <button
          id="new-quote"
          onClick={() => {
            let random2 = Math.floor(Math.random() * 3);
            while (random==random2){
              random2 = Math.floor(Math.random() * 3);
            }
            random=random2;
            root.render(
              <Random quote={quote[random]} author={author[random]} />
            );

          }}
        >
          Новая цитата
        </button>
      </div>
    </div>
  );
}



function App() {
  return (
<>
<Random quote={quote[random]} author={author[random]} />

</>
);
}

export default App;


root.render(<App />)
