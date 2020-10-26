
// Web interface route
module.exports = {
    name: 'InterfaceRoutes',
    register: async (server, options) => {
        server.route({
            method: 'GET',
            path: '/{param*}',
            handler: {
                directory: {
                    path: '.',
                    redirectToSlash: true
                }
            }
        });
    }
}