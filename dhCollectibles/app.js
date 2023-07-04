let importación = require('./collectibles');

let hotToys = importación.importar('Hot Toys');
let bandai = importación.importar('Bandai');
let starWars = importación.importar('Star Wars');
//console.log(hotToys);
//console.log(bandai);
//console.log(starWars);
let todasLasMarcas = [...hotToys,...bandai,...starWars];
//console.log(todasLasMarcas);
let collectibles = {
    figuras : todasLasMarcas,
    listFigures : function(){
        this.figuras.forEach(function(item){
            console.log(item);
        });
        },
    figuresMyBrand : function(marca){
        let laMarca = this.figuras.filter(function(item){
            return item.marca == marca
        });
        return laMarca.length > 0 ? laMarca : 'Lo sentimos, la marca ingresada no ha sido encontrada';
    },
    }
//Activar la función que muestra por consola la lista de figuras
    console.log(collectibles.figuras);
    console.log('----------------------------------------------');
//Activar la función de mostrar al usuario los datos de las figuras enlistadas
    collectibles.listFigures()
    console.log('----------------------------------------------');
//Activar la función de mostrar al usuario solo los datos de las figuras de la marca solicitada
    console.log(collectibles.figuresMyBrand('Bandai'));
