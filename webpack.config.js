const path = require('path');

module.exports = {
    entry: './src/index.js', // Punto de entrada de nuestra aplicación
    output: {
        filename: 'bundle.js', // Nombre de arhivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex (expresión regular) identifica archivos CSS
                use: ['style.loader','css-loader'], // Loaders ayudan a procesar archivos CSS
            },
            {
                test: /\.js$/, // Regex para identificar archivos JS
                exclude: /node_modules/, // Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', // Loader para pasar JS moderno a JS más antiguo para todos los navegadores
                    Options: {
                        presents: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', // Generar source maps para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__sirname, 'dist'), // Carpeta principal del servidor
        compress: true, // Habilitar la comprensión gzip
        port: 9000, // Puerto del servidor de desarrollo
    },
}; // Empieza a empaquetar 

