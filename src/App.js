import { useEffect, useReducer, useState } from 'react';
import './App.css';
import ButtonGroup from './ButtonGroup';
import products from './data/data.js';
import dataInf from "./data/data.js";
import ProductRender from './ProductRender';

function productTypeFunc(setFunc, product) {
  setFunc(products.filter((arg) => {
    return arg.product === product
  }))
}

function App() {
  const [products, setProducts] = useState(dataInf)

  return (
    <div className="App">
      <div className="homeDiv">
        <input className='homeInput' type="text" />
        <ButtonGroup
          typeFunc={(type) => {
            if (type === "clock") {
              productTypeFunc(setProducts, "Ժամացույց")
            }
            else if (type === "phone") {
              productTypeFunc(setProducts, "Հեռախոս")
            }
            else if (type === "computer") {
              productTypeFunc(setProducts, "Համակարգիչ")
            }
            else if (type === "car") {
              productTypeFunc(setProducts, "Մեքենա")
            }
            else if (type === "dinamic") {
              productTypeFunc(setProducts, "Բարձրախոս")
            }
            else if (type === "sport") {
              productTypeFunc(setProducts, "Սպորտ")
            }
            else if (type === "refresh") {
              setProducts(dataInf)
            }
          }}
          moneyFunc={(val1, val2) => {
            setProducts(dataInf.filter((elem) => {
              return elem.money >= parseInt(val1) && elem.money <= parseInt(val2)
            })
            )
          }}

        />
        <ProductRender products={products} />
      </div>
    </div>
  );
}


export default App;



