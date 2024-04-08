import React from "react"
//ESTADOS
//o estado de um aplicação representa as caracteristicas dela naquele momento 

// const App = ()=>{

//     const ativo = true

//     return (<>
//     <button>{ativo ? "BOTAO ATIVO" : "BOTAO INATIVO"}</button>
//     </>)

// }
// export default App

//HOOKS 
// Os hooks sao funcoes especiais do react que permitem controlarmos o estado e o ciclo de vida de componentes funcionais.
// O useState é uma função que retorna um array com 2 valores o primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, array, bolean, null, undefined e objetos. o segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

const App = ()=>{

const [ativo, setAtivo] = React.useState(true)
const [count, setCount] = React.useState(0)

return(
<>
<button onClick={()=> setCount(count + 1)}>{count}</button>
<button onClick={()=> setAtivo(!ativo)} >{ativo ? 'ativo':'inativo'}</button>
</>
)

}

export default App