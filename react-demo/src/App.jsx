import UniqueId from "./components/UniqueId";
import useFetch from "./components/useFetch"

const App = () => { 

  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
  

  return <div>
    {data <0 && data.map(item => {
      return <p id={item.id}>{item.title}</p>
    })}
    <UniqueId />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores nihil earum hic nobis reprehenderit sint placeat eligendi officiis, ex dolore voluptas, magni natus qui iusto adipisci expedita vitae esse?</p>
    <UniqueId />
  </div>
}

export default App