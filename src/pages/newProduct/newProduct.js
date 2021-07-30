import React,{useState} from "react";
import axios from "axios";
import {Button} from "../../components/Button/index";
import { InputText, StyleForm, Title } from "../../style";

function NewProduct(){

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");


    const handleSubmit = (event) =>{
        event.preventDefault();
        submitProduct();
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

        <div>
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

                <Button label={"Cadastrar"} type="submit"></Button>
            </StyleForm>

        </div>
    );
}

export default NewProduct;