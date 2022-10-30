export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }

    // usando a ideia de observable para observar a fonte de dados

    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }
}