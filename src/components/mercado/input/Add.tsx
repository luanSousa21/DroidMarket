import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Produto } from "../../../models/Produto";
import Form from "./Form";
import { database } from "../../Home";
import firestore from '@react-native-firebase/firestore';

function salvar(produto : Produto){
    firestore().
    collection('produto_supermercado').
    add(produto)
    .then((data) => {
        console.log(data)
        console.log('Novo produto cadastrado')
    })
}

interface Input{
    navigation : any
}

const Add = ({navigation} : Input) => 
{
    const [produto, setProduto] = useState<Partial<Produto>>({});
    return(
        <View>
            <Form produto = {produto  as unknown as Produto}  setProduto = {setProduto}></Form>
            <Button title ="Salvar"
            onPress = { () => {
                salvar(produto as Produto)
                navigation.navigate("Home");
                }}></Button>
           
        </View>
    );
}

export default Add;