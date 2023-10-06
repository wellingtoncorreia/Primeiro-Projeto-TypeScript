"use strict";
class Produto {
    id = 0;
    nomeProduto = "";
    valor = "";
    tbody;
    objProdutos = {};
    apiURL = "../src/db.json";
    constructor() {
        this.listar();
    }
    salvar() {
        this.lerDados();
        if (produto.nomeProduto == '') {
            alert('O campo nome está vazio');
        }
        if (produto.valor == '') {
            alert('O campo valor está vazio');
        }
        if (produto.nomeProduto != '' && produto.valor != '') {
            this.id++;
            this.objProdutos = this.lerDados();
            alert("Produto cadastrado com sucesso!!!");
            this.listar();
        }
        console.log(this.objProdutos);
    }
    listar() {
        this.tbody = document.querySelector('tbody');
        fetch(this.apiURL)
            .then(resposta => resposta.json())
            .then(dados => dados.usuarios.map((usuario) => {
            let tr = this.tbody.insertRow();
            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            td_id.innerText += usuario.id;
            td_produto.innerText += usuario.produto;
            td_valor.innerText += "R$ " + usuario.valor + ",00";
        }));
    }
    lerDados() {
        produto.nomeProduto = document.querySelector('#nome').value;
        produto.valor = document.querySelector('#valor').value;
        return produto;
    }
    limpar() {
        alert("testando");
    }
}
let produto = new Produto();
