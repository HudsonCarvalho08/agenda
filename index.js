import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';


import servico from './servico.png';


export default function index(){
    return<>
    <Image source = {servico} style = {estilos.servico} />
    <Text style = {estilos.titulo}>Detalhe da Cesta</Text>
    

    </>
};

const estilos = StyleSheet.create({
    servico: {
        width: "100%",
        heigth: "50%",
    }

});
