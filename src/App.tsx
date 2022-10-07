import React, { useState } from 'react';
import './App.css';

function App() {
    const [valor1, setValor1] = useState(0);
    const [operador, setOperador] = useState("");
    const [resultado, setResultado] = useState("0");

    function handleClick({valor}: { valor: any }) {
        switch (valor){
            case "C":
                setValor1(0);
                setOperador("");
                setResultado("0");
                break;
            case "R":
                let nval = resultado?.substring(0, resultado.length-1)
                if (nval == "") { nval = "0" }
                setResultado(nval)
                break;
            default:
                setResultado(resultado === "0" ? valor : resultado + valor);
                break;
        }
    }

    function llenarOperacion ({valor}: { valor: any }) {
        setOperador(valor);
        setValor1(parseInt(resultado));
        setResultado(resultado === "0" ? valor : resultado + valor);
    }

    function calcular({valor}: { valor: any }) {
        if (valor1 !== 0  && operador !== ""){
            let result = 0;
            let arr = [];
            switch (operador) {
                case "/":
                    arr = resultado.split( "/");
                    result = valor1 / parseInt(arr[1]);
                    setResultado(result.toString());
                    break;
                case "x":
                    arr = resultado.split( "x");
                    result = valor1 * parseInt(arr[1]);
                    setResultado(result.toString());
                    break;
                case "-":
                    arr = resultado.split( "-");
                    result = valor1 - parseInt(arr[1]);
                    setResultado(result.toString());
                    break;
                case "+":
                    arr = resultado.split( "+");
                    result = valor1 + parseInt(arr[1]);
                    setResultado(result.toString());
                    break;
                default:
                    setResultado("Se esta trabajando en la opcion")
                    break;
            }
        }else{
            setResultado("Debe de llenar dos valores y una operacion")
        }
    }

    function AppDOM() {
        return (
            <div className="App">
                <header className="App-header">
                    <table className="calculadora">
                        <tr>
                            <td colSpan={6}>
                                <span id="resultado">{resultado}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => handleClick({valor: "7"})}>7</button>
                            </td>
                            <td>
                                <button onClick={() => handleClick({valor: "8"})}>8</button>
                            </td>
                            <td>
                                <button onClick={() => handleClick({valor: "9"})}>9</button>
                            </td>
                            <td>
                                <button onClick={() => handleClick({valor: "R"})}>←</button>
                            </td>
                            <td>
                                <button onClick={() => handleClick({valor: "C"})}>C</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => handleClick({valor: "4"})}>4</button>
                            </td>
                            <td>
                                <button onClick={() => handleClick({valor: "5"})}>5</button>
                            </td>
                            <td>
                                <button onClick={() => handleClick({valor: "6"})}>6</button>
                            </td>
                            <td>
                                <button onClick={() => llenarOperacion({valor: "x"})}>x</button>
                            </td>
                            <td>
                                <button onClick={() => llenarOperacion({valor: "/"})}>/</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => handleClick({valor: "1"})}>1</button>
                            </td>
                            <td>
                                <button onClick={() => handleClick({valor: "2"})}>2</button>
                            </td>
                            <td>
                                <button onClick={() => handleClick({valor: "3"})}>3</button>
                            </td>
                            <td>
                                <button onClick={() => llenarOperacion({valor: "-"})}>-</button>
                            </td>
                            <td>
                                <button onClick={() => llenarOperacion({valor: "+"})}>+</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => handleClick({valor: "0"})}>0</button>
                            </td>
                            <td>
                                <button onClick={() => handleClick({valor: "."})}>.</button>
                            </td>
                            <td>
                                
                            </td>
                            <td colSpan={2}>
                                <button id="igual" onClick={() => calcular({valor: "resultado"})}>=</button>
                            </td>
                        </tr>
                    </table>
                </header>
            </div>
        );
    }
    return (
        <>
            { AppDOM() }
        </>
    );
}

export default App;