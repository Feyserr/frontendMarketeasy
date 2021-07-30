import React,{useEffect, useState} from "react";
import axios from "axios";
import {Button} from "../../components/Button/index";
import { useHistory } from "react-router";
import { FlexWrapper, ButtonContainer, ProductContainer, AbsoluteContainer, Container } from "./style";
import NewProduct from "../newProduct/newProduct";
import {BsTrashFill} from "react-icons/bs"
import {GoPencil} from "react-icons/go"
import {MdAddBox} from "react-icons/md"
import { Title } from "../../style";

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

    function addProduct(){
        history.push(("/new/products"));
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
        <Container>
            <Title>Lista de Produtos</Title>
            {products.map((val,index)=>{
                console.log(val);
                return(
                    
                    <ProductContainer key={index}>
                        <FlexWrapper>
                            <div className="separacao">
                                <p className="styleCampo">Nome</p>
                                <p>{val.name}</p>
                            </div>

                            <div className="separacao">
                                <p className="styleCampo">Preço</p>
                                <p>{val.price}</p>
                            </div>

                            <div className="separacao">
                                <p className="styleCampo">Categoria</p>
                                <p>{val.category}</p>
                            </div>
                        </FlexWrapper>

                        <ButtonContainer>
                            <BsTrashFill onClick={()=> deleteProducts(val.id)}/>
                            <GoPencil onClick={()=> editProducts(val.id)}/>
                        </ButtonContainer>
                    </ProductContainer>
                )
            })}
                    <AbsoluteContainer onClick={()=> addProduct()}>
                        <p>Adicionar Produto</p>
                        <MdAddBox />
                    </AbsoluteContainer>
        </Container>
    )

}
export default Home;