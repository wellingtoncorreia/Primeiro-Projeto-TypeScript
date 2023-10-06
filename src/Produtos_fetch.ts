class Produto {
  private id:number = 0;
  private nomeProduto:string = "";
  private valor:string = "";
  private tbody: any;
  private objProdutos: Object = {};
  private apiURL:string = "../src/db.json";
  
  constructor() { 
    this.listar();
  }
  
  salvar(){
    this.lerDados();    
    if(produto.nomeProduto == ''){
      alert('O campo nome está vazio');      
    }

    if(produto.valor == ''){
      alert('O campo valor está vazio');
    }

    if(produto.nomeProduto != '' && produto.valor != ''){
      this.id++;
      this.objProdutos = this.lerDados();
      alert("Produto cadastrado com sucesso!!!");
      this.listar();
    }
    console.log(this.objProdutos);
    
  }

  listar(){
    this.tbody = document.querySelector('tbody');
    
    fetch(this.apiURL)
    .then(resposta => resposta.json())
    .then(dados =>
      dados.usuarios.map((usuario: { id: number; produto: string; valor: string; })=>{
        let tr = this.tbody.insertRow();

        let td_id: HTMLElement = tr.insertCell();
        let td_produto: HTMLElement = tr.insertCell();
        let td_valor: HTMLElement = tr.insertCell();

        td_id.innerText += usuario.id;
        td_produto.innerText += usuario.produto;
        td_valor.innerText += "R$ " + usuario.valor + ",00";
      })
    )
  }

  lerDados(){
    produto.nomeProduto = (document.querySelector('#nome') as any).value;
    produto.valor = (document.querySelector('#valor')as any).value;

    return produto;

  }

  limpar(){
    alert("testando");
  }
  

}

let produto = new Produto();


