import {SimpleInput} from "./components/Example1/SimpleInput";
import {SimpleCounter} from "./components/Example3/SimpleCounter";
import {ProductList} from "./components/Example2/ProductList";
import {SimpleDataFetch} from "./components/Example4/SimpleDataFetch";
import {MyProducts} from "./components/Example5/MyProducts";

function App() {

  sessionStorage.setItem("userId", "123456789")
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: "flex", flexDirection: "row", gap: "5em"}}>
          <div>
            <b>Example 1 - Buttons and input fields querying</b>
            <SimpleInput/>
          </div>
          <div>
            <b>Example 2 - Mocking props</b>
            <ProductList products={[{id: 1, title: "Product 1"}, {id: 2, title: "Product 2"}, {id: 3, title: "Product 3"}]} showProducts={true} />
          </div>
          <div>
            <b>Example 3 - State updates and user interaction</b>
            <SimpleCounter/>
          </div>
          <div>
            <b>Example 4 - Data fetching</b>
            <SimpleDataFetch/>
          </div>
          {/*<div>*/}
          {/*  <b>Example 5 - Test</b>*/}
          {/*  <MyProducts/>*/}
          {/*</div>*/}

        </div>
      </header>
    </div>
  )
}

export default App
