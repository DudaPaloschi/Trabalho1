var leitor = require("readline-sync");
var Produto = /** @class */ (function () {
    function Produto(nome, preco, marca, valorCompra) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.valorCompra = valorCompra;
    }
    Produto.prototype.getProduto = function () {
        console.log("\n            Nome: ".concat(this.nome, "\n            Pre\u00E7o: ").concat(this.preco, "\n            Marca: ").concat(this.marca, "\n            Valor de Atacado: ").concat(this.valorCompra, "\n            "));
    };
    Produto.prototype.setProduto = function () {
        var nomeUp = leitor.question("Insira o nome do produto: ");
        var precoUp = leitor.questionInt("Insira o preço: ");
        var marcaUp = leitor.question("Insira a marca: ");
        var valorCompraUp = leitor.questionInt("Insira o valor de compra do produto: ");
        this.nome = nomeUp;
        this.preco = precoUp;
        this.marca = marcaUp;
        this.valorCompra = valorCompraUp;
    };
    Produto.prototype.calcularLucro = function () {
        var lucro = this.preco - this.valorCompra;
        return lucro;
    };
    Produto.prototype.aplicarDesconto = function () {
        var desconto = leitor.questionInt("Qual a porcentagem de desconto? ");
        var valorDescontado = (this.preco * (100 - desconto)) / 100;
        console.log("Valor do produto com desconto: ".concat(valorDescontado));
    };
    return Produto;
}());
var Venda = /** @class */ (function () {
    function Venda(produto, quantidade, data) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.valor_total = quantidade * this.produto.preco;
        this.data = data;
    }
    Venda.prototype.getVenda = function () {
        console.log("\n            Nome do Produto: ".concat(this.produto.nome, "\n            Quantidade: ").concat(this.quantidade, "\n            Data: ").concat(this.data, "\n            Valor Total: ").concat(this.calcularTotal(), "\n            "));
    };
    Venda.prototype.setVenda = function () {
        var produtoOuN = leitor.question("Você gostaria de modificar o produto? (s/n) ").toLowerCase();
        if (produtoOuN == "s") {
            this.produto.setProduto();
            var arrayInfos = modificarVenda();
            // Indice 0 = Valor da Quantidade
            // Indice 1 = Valor Data
            this.quantidade = arrayInfos[0];
            this.data = arrayInfos[1];
        }
        else {
            var arrayInfos = modificarVenda();
            this.quantidade = arrayInfos[0];
            this.data = arrayInfos[1];
        }
        function modificarVenda() {
            var quantidadeUp = leitor.questionInt("Qual a quantidade?: ");
            var dataUp = leitor.question("Qual a data da venda?: ");
            var arrayInfos = [quantidadeUp, dataUp];
            return arrayInfos;
        }
    };
    Venda.prototype.calcularTotal = function () {
        var total = this.quantidade * this.produto.preco;
        return total;
    };
    return Venda;
}());
var produto = new Produto("Teste", 3000, "Teste", 2000);
var venda = new Venda(produto, 3, "01/07/2024");
venda.getVenda();
venda.setVenda();
venda.getVenda();
venda.setVenda();
venda.getVenda();
console.log(venda.calcularTotal());
