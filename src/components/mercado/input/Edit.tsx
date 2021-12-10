import React, { useState } from "react";
import { Button, View } from "react-native";
import { Produto } from "../../../models/Produto";
import Form from "./Form";

function editar()
{
    console.log("Editar")
}


function Edit()
{
    const [produto, setProduto] = useState<Partial<Produto>>({
        nomeProduto: "Arroz",
        secao : "Alimentos não perecíveis",
        valor : '15.50'
    });
    return(
        <View>
            <Form produto = {produto as Produto} setProduto = {setProduto}/>
            <Button
            title = "Salvar alterações"
            onPress = { editar }
            />

        </View>

    );
}

export default Edit;