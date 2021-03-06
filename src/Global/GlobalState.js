import React from 'react'
import GlobalStateContext from "../Global/GlobalStateContext";
import {useState} from 'react'


export default function GlobalState(props) {
   
    const [carrinho, setCarrinho] = useState({})
    const [perfil, setPerfil] = useState({})
    const [restaurante, setRestaurante] = useState({})
    const [listaRestaurantes, setListaRestaurantes] = useState([])
    // const [token, setToken] = useState("")
    const [searchInput, setSearchInput] = useState("") /* Controla input da barra de pesquisa */
    const [filter, setFilter] = useState("") /* Controla o filtro do menu do feed */
    const [popUp, setPopUp] = useState(false)
    const [quantidade, setQuantidade] = useState(0)
    const [idPedido, setIdPedido] = useState("")

   
    const states = {carrinho, perfil, restaurante, listaRestaurantes, searchInput, filter, popUp, quantidade, idPedido}
    const setters = {setCarrinho, setPerfil, setRestaurante, setListaRestaurantes, setSearchInput, setFilter, setPopUp, setQuantidade, setIdPedido}
    const requests = {}

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}




