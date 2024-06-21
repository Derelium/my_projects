import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      markdown: `
# Заголовок h1 
## Заголовок h2
[Текстовая ссылка](https://markdown-previewer.freecodecamp.rocks)
Внутренний код: \`<div></div>\`

Блок кода:
\`\`\`
function helloWorld() {
  console.log("Hello, World!");
}
\`\`\`

- Часть списка 1
- Часть списка 2

> Цитата


![Изображение](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


**Жирный текст**
`    }
  
  this.renderMarkdownPreview=this.renderMarkdownPreview.bind(this);
  this.componentDidMount=this.componentDidMount.bind(this);
  this.updateMarkdown=this.updateMarkdown.bind(this);
  }

renderMarkdownPreview() {
    const preview = document.getElementById("preview");
    marked.setOptions({ breaks: true }); // перенос
   preview.innerHTML = marked.parse(this.state.markdown);
  }
  
componentDidMount() {this.renderMarkdownPreview();}



updateMarkdown = markdown => {
    this.setState({ markdown }, () => this.renderMarkdownPreview());
  };
  

render() {
    
return (
<div className="container">

<div className="markdownPreviewer"> 
  <div><h1>Предпросмотр Markdown</h1></div><div></div>
  <div><textarea className="temp" id="editor" value={this.state.markdown} onChange={(e) => {this.updateMarkdown (e.target.value);}}>
</textarea></div>
 <div id="preview" className="temp" dangerouslySetInnerHTML={{__html: marked.parse(this.state.markdown),}}></div> 
</div>



        </div>
  );
	}
};



export default App;
