const fs = require('fs');
const path = require('path');

const collectibles = {
    importar : function importarMarca(marca){
        let dato = '';
        switch(marca){
            case 'Hot Toys':
                dato = fs.readFileSync('./datos/figuras1.json');
                break;
            case 'Bandai':
                dato = fs.readFileSync('datos/figuras2.json');
                break;
            case 'Star Wars':
                dato = fs.readFileSync('datos/figuras3.json');
                break;
            default:
                return 'No se encontró la marca solicitada'
        }
        return JSON.parse(dato);
    }
}

module.exports = collectibles;