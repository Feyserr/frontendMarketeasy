import React, {useEffect, useState} from "react";
import axios from "axios";
import { StyleForm, InputText, Title } from "../../style";
import {Button} from '../../components/Button/index';
import { useHistory, useParams } from "react-router-dom";
import { Container } from "../Home/style";


function EditProducts(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const history = useHistory();
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        editProducts();
    }

    const editProducts = async()=>{
        try{
            await axios.put(`https://backendmarketeasy.herokuapp.com/products/${id}`,
                {name, price, category},
                {headers:{
                    "Access-Control-Allow-Origin": "*"}},);
                    alert('Produto Editado com sucesso !!');
        } catch(error){
            console.log(error);
        }
    }

    function getProductsId(){
        axios.get(`https://backendmarketeasy.herokuapp.com/products/${id}`,{headers:{"Access-Control-Allow-Origin": "*"}}).then((response)=>{

            if(response.data.rows.length){
                setName(response.data.rows[0].name);
                setPrice(response.data.rows[0].price);
                setCategory(response.data.rows[0].category);
            }

            setLoading(false);
        })
            .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    }

    useEffect(()=>{
        getProductsId();
    },[]);

    return (
        <Container>
            <Title>Edição de Produtos</Title>
            <StyleForm onSubmit={handleSubmit}>
                
                <InputText value={name} type="text" placeholder="Digite o nome do produto" name="name" onChange={(e)=>{
                    setName(e.target.value);
                }}/>
                
                <InputText value={price} type="text" placeholder="Digite o preço do produto" name="price" onChange={(e)=>{
                    setPrice(e.target.value);
                }}/>

                <InputText value={category} type="text" placeholder="Digite a categoria do produto" name="category" onChange={(e)=>{
                    setCategory(e.target.value);
                }}/>
                <div className={"buttons"}>
                    <Button label={"Editar"} type="submit"/>
                    <Button label={"Voltar"} onClick={()=> history.push("/")}/>
                </div>
            </StyleForm>
            
        </Container>
    )



}

export default EditProducts;