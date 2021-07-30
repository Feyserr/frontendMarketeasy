import React,{useEffect, useState} from "react";
import axios from "axios";
import {Button} from "../../components/Button/index";
import { useHistory } from "react-router";
import { FlexWrapper } from "./style";


function Home(){
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    function getProducts(){
        axios.get("https://backendmarketeasy.herokuapp.com/products").then((response)=>{
            setProducts(response.data.rows);
            console.log(response.data.rows);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    }

    function deleteProducts(id){
        axios.delete(`https://backendmarketeasy.herokuapp.com/products?id=${id}`).then(()=>{
            alert("Produto deletado com sucesso !!");
        })
    }

    const history = useHistory();

    function editProducts(id){
        history.push((`/products/${id}`));
    }

    useEffect(()=>{
        getProducts();
    },[]);

    if(loading){
        return(
            <div>Carregando produtos...</div>
        );
    }

    if(!products.length){
        return (
            <div>
            <p>Erro inesperado</p>
            <Button label={"Tentar Novamente"} onClick={getProducts}/>
            </div>
        )}

    return (
        <div>
            {products.map((val,index)=>{
                return(
                    <div key={index}>
                        <FlexWrapper>
                            <div className="separacao">
                                <p className="styleCampo">Nome</p>
                                <p>{val.name}</p>
                            </div>

                            <div className="separacao">
                                <p className="styleCampo">Preço</p>
                                <p>{val.preço}</p>
                            </div>

                            <div className="separacao">
                                <p className="styleCampo">Categoria</p>
                                <p>{val.categoria}</p>
                            </div>
                        </FlexWrapper>

                        <div className="ButtonStyle">
                            <Button label={"Editar"} onClick={()=> editProducts(val.id)}/>
                            <Button label={"Deletar"} onClick={()=> deleteProducts(val.id)}/>
                        </div>
                    </div>
                )
            })}

        </div>
    )

}
export default Home();