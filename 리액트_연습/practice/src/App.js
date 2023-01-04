import logo from './logo.svg';
import './App.css';

function Header(props) {
  return <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
}
function Nav(props) {
  const lis =[
  ]
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={(event) => {
        event.preventDefault(); // 이벤트 이전 이벤트 삭제
        props.onChangeMode(event.target.id); // target=> 이벤트를 일으킨 요소를 가리킴.
      }}>{t.title}</a></li>)
  }
  return       <nav>
        <ol>
          {lis}
        </ol>
      </nav>
}
function Article(props) {
  return       <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
}
function App() {
  const topics = [
    {id:1,title:'html', body:'html is ...'},
    {id:2,title:'css', body:'css is ...'},
    {id:3,title:'javascript', body:'javascript is ...'},
  ]
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>


    </div>
  );
}

export default App;
