export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
    }

    // usando a ideia de observable para observar a fonte de dados

    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }
}