class Produto{

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }
    
    salvar() {
        
        let produto = this.lerDados();
        if(this.validaCampos(produto)) {
            if(this.editId == null){
            this.adicionar(produto);
        }else {
            this.atualizar(this.editId, produto);
        }
    }
        this.listaTabela();
        this.cancelar();
    }

    listaTabela(){

        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++ ){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell(); 
            let td_valor = tr.insertCell();
            let td_quantidade = tr.insertCell();
            let td_marca = tr.insertCell(); 
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valor;
            td_quantidade.innerText = this.arrayProdutos[i].quantidade;
            td_marca.innerText = this.arrayProdutos[i].marca;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png' ;
            imgEdit.setAttribute("onclick", "produto.editar("+JSON.stringify(this.arrayProdutos[i])+")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/botao-apagar.png' ;
            imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id+")");


            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    }

    adicionar(produto){
        produto.preco = parseFloat(produto.preco);
        produto.quantidade = parseInt(produto.quantidade);
        this.arrayProdutos.push(produto);
        this.id++;
        this.editId = null;
    }

    atualizar(id, produto){
        
        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].valor = produto.valor;
                this.arrayProdutos[i].quantidade = produto.quantidade;
                this.arrayProdutos[i].marca = produto.marca;
            }

        }
    }

    editar(dados){
        this.editId =dados.id;

       document.getElementById('produto').value = dados.nomeProduto;
       document.getElementById('valor').value = dados.valor;
       document.getElementById('quantidade').value = dados.quantidade;
       document.getElementById('marca').value = dados.marca;

        document.getElementById('btn1').innerText = 'Atualizar';
    }

    lerDados() {

        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;
        produto.quantidade = document.getElementById('quantidade').value;
        produto.marca = document.getElementById('marca').value;

        return produto;

    }

    validaCampos(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += '- Informe o nome do produto!\n';
        }

        if(produto.valor == ''){
            msg += '- Informe o Preço do produto!\n';
        }

        if(produto.quantidade == ''){
            msg += '- Informe a quantidade do produto!\n';
        }
        
        if(produto.marca == ''){
            msg += '- Informe a marca do produto!\n';
        }
        
        if(msg != ''){
            alert(msg);
            return false
        }

        return true;

    }

    cancelar() {

        document.getElementById('produto').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('quantidade').value = '';
        document.getElementById('marca').value = '';
        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;

    }

    deletar(id){
        if(confirm('Você deseja realmente deletar esse produto? ')){
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProdutos.length ; i++){
        if(this.arrayProdutos[i].id == id){
            this.arrayProdutos.splice(i , 1);
            tbody.deleteRow(i);
        }
    }
    }
    }
}
var produto = new Produto();
