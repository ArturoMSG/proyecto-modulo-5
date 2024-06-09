const jsonServer = require ('json-server');
const server =jsonServer.create();
const router =jsonServer.router('db.json');
const middlewares =jsonServer.defaults();
const cors = jsonServer.cors();

const PORT = 9000 | 3000;

server.use('/api/v1', router);
server.use(middlewares);
server.cors(cors);


server.listen( PORT, () => {
    console.log ('Servidor Arriba en http://localhost:${PORT}')
})


