import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Produto } from "../../../models/Produto";
import DateField from 'react-native-datefield';

interface Input{
    produto : Produto
    setProduto : any
}

const Form = ({produto, setProduto} : Input) =>{
   // let setNomeProduto;
    //[produto.nomeProduto, setNomeProduto] = useState('');
    return(
        <View>
            <TextInput 
            placeholder = "nome"
            value = {produto.nomeProduto}
            onChangeText = { text => setProduto ({
                ...produto,
                nomeProduto : text
            })}/>

            <TextInput 
            placeholder = "seção"
            value = {produto.secao}
            onChangeText = { text => setProduto ({
                ...produto,
                secao : text
            })}/>
            <TextInput 
            placeholder = "valor"
            value = {produto.valor?.toString()}
            onChangeText = { text => setProduto ({
                ...produto,
                valor : text
            })}/>
            <TextInput 
            placeholder = "Quantidade"
            value = {produto.quantidade?.toString()}
            onChangeText = { text => setProduto ({
                ...produto,
                quantidade : text
            })}/>
            <TextInput 
            placeholder = "Unidade"
            value = {produto.unidade?.toString()}
            onChangeText = { text => setProduto ({
                ...produto,
                unidade : text
            })}/>
            <TextInput 
            placeholder = "marca"
            value = {produto.marca}
            onChangeText = { text => setProduto ({
                ...produto,
                marca : text
            })}/>
           
            <DateField
            defaultValue = {produto.dataFabricacao}
            labelDate = 'Dia'
            labelMonth = 'Mês'
            labelYear = 'Ano'
            onSubmit = {data => setProduto ({
                ...produto,
                dataFabricacao : data
            })}/>
           
            <DateField
            defaultValue = {produto.dataValidade}
            labelDate = 'Dia'
            labelMonth = 'Mês'
            labelYear = 'Ano'
            onSubmit = {data => setProduto ({
                ...produto,
                dataValidade : data
            })}/>

        </View>
    );
}

export default Form;