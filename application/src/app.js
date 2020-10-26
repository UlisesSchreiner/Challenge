/**
 * @title Full-Stack Challenge
 * 
 * This server runs a small web application with its api
 * read the README.md to test the application.
 * 
 * @author Ulises Schreiner
 * @date 25/10/2020
 */


// Utilitys
const path = require('path');
const hapi = require('@hapi/hapi');
const inert = require('@hapi/inert');

//  Rates router
const rateRoutes = require('./routes/ratesRoutes');
// Web interface router 
const interfaceRoutes = require('./routes/interfaceRoutes');
// Database
const database = require('./database');

database.connect();

const init = async () => {

    const server = new hapi.Server({
        port: 4000,
        routes: {
            cors: true,
            files: {
                relativeTo: path.join(__dirname, 'public')
            }
        }
    });

    await server.register(inert);
    await server.register(rateRoutes);
    await server.register(interfaceRoutes);


    await server.start();

    console.log('Server running at: ', server.info.uri);
};

// Init server
init();