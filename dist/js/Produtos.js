"use strict";
class Produtos {
    id = 0;
    nomeProduto = "";
    valor = "";
    objProdutos = {};
    salvar() {
        this.lerDados();
        if (this.nomeProduto == '') {
            alert('O campo nome está vazio');
        }
        if (this.valor == '') {
            alert('O campo valor está vazio');
        }
        if (this.nomeProduto != '' && this.valor != '') {
            this.id++;
            this.objProdutos = this.lerDados();
            alert("Produto cadastrado com sucesso!!!");
            this.limpar();
            this.listar();
        }
    }
    listar() {
        const tbody = document.querySelector('tbody');
        let tr = tbody.insertRow();
        let td_id = tr.insertCell();
        let td_produto = tr.insertCell();
        let td_valor = tr.insertCell();
        td_id.innerText = this.objProdutos.id;
        td_produto.innerText = this.objProdutos.nomeProduto;
        td_valor.innerText = "R$ " + this.objProdutos.valor + ",00";
    }
    lerDados() {
        produtos.nomeProduto = document.querySelector('#nome').value;
        produtos.valor = document.querySelector('#valor').value;
        return produtos;
    }
    limpar() {
        const nomeProduto = document.querySelector('#nome').value = "";
        const valor = document.querySelector('#valor').value = "";
    }
}
var produtos = new Produtos();
