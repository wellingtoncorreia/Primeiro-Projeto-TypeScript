class Produtos {
  private id:number = 0;
  private nomeProduto:string = "";
  private valor:string = "";
  private objProdutos: Object = {};
  

  public salvar(){
    this.lerDados();
        
    if(this.nomeProduto == ''){
      alert('O campo nome está vazio');      
    }

    if(this.valor == ''){
      alert('O campo valor está vazio');
    }

    if(this.nomeProduto != '' && this.valor != ''){
      this.id++;
      this.objProdutos = this.lerDados();
      alert("Produto cadastrado com sucesso!!!");
      this.limpar();
      this.listar();
    }
    
  }

  public listar(){
    const tbody = (document.querySelector('tbody') as any);

  
      let tr = tbody.insertRow();

      let td_id: HTMLElement = tr.insertCell();
      let td_produto: HTMLElement = tr.insertCell();
      let td_valor: HTMLElement = tr.insertCell();

      td_id.innerText = (this.objProdutos as any).id;
      td_produto.innerText = (this.objProdutos as any).nomeProduto;
      td_valor.innerText = "R$ " + (this.objProdutos as any).valor + ",00";

  }

  private lerDados(){
    produtos.nomeProduto = (document.querySelector('#nome') as any).value;
    produtos.valor = (document.querySelector('#valor')as any).value;

    return produtos;

  }

  limpar(){
    const nomeProduto = (document.querySelector('#nome') as any).value = "";
    const valor = (document.querySelector('#valor')as any).value = "";
  }
  

}
var produtos = new Produtos();
