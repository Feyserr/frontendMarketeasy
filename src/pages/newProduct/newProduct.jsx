import React,{useState} from "react";
import axios from "axios";
import {Button} from "../../components/Button/index";
import { InputText, StyleForm, Title } from "../../style";
import { useHistory } from "react-router";
import { Container } from "../Home/style";

function NewProduct(){

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const history = useHistory();

    const handleSubmit = (event) =>{
        event.preventDefault();
        submitProduct();
    }

    function listProduct(){
        history.push(("/products"));
    }

    const submitProduct = async() =>{
        try{
            await axios.post("https://backendmarketeasy.herokuapp.com/newProducts",
                {name, price, category});
            alert('Produto adicionado com sucesso !!');
       }catch(error){
            console.log(error);
        }
    }

    return (

        <Container>
            <Title>Cadastro de Produtos</Title>

            <StyleForm onSubmit = {handleSubmit}>
                <InputText type="text" placeholder="Digite o nome do produto" name="name" onChange={(e)=>{
                    setName(e.target.value);
                }}/>
                <InputText type="text" placeholder="Digite o preço do produto" name="price" onChange={(e)=>{
                    setPrice(e.target.value);
                }}/>
                <InputText type="text" placeholder="Digite a categoria do produto" name="category" onChange={(e)=>{
                    setCategory(e.target.value);
                }}/>
                <div className={"buttons"}>
                    <Button label={"Cadastrar"} type="submit"></Button>
                    <Button label={"Lista"} onClick={()=> listProduct()}></Button>
                </div>
            </StyleForm>
        </Container>
    );
}

export default NewProduct;