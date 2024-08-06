const defaultMarkdown = `# React Markdown Previewer

## Type your Markdown in the Editor!
<br><br>

### Main functionality

- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load
- BONUS: Use &lt;br&gt; for line breaks

<br>

\`Is the syntax highlighting even working?\`
\`\`\`javascript
let s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
<br>

> “The only limit to our realization of tomorrow is our doubts of today.”
― Franklin D. Roosevelt
<br>

![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)
<br>

Coded by **Lídia**, 2024 for [freeCodeCamp](https://www.freecodecamp.org) Front End Libraries Challenges
`;

// Line breaks allowed 
marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  state = {
    text: defaultMarkdown
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  
  render() {
    return (
      <div className="container">
        <h1 id="title">Markdown Previewer</h1>
        <div className="row">
          <div className="col-md-6">
            <textarea 
              id="editor" 
              className="form-control"
              value={ this.state.text } 
              onChange={ this.onChange } 
              placeholder="Enter Markdown...">
            </textarea>
          </div>
          <div className="col-md-6">
            <div 
              id="preview"
              dangerouslySetInnerHTML = {{ __html: marked(this.state.text) }}>
            </div> 
          </div>
        </div>
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('root'));
