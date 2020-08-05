import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express ();

app.use(cors())
app.use(express.json());
app.use(routes);

// app.get('/users', (request, response) => {
//     console.log('Acessou a rota');

//     const users = [
//         { name: 'Diego', age: 25},
//         { name: 'Vini', age: 21}
//     ]

//     return response.json(users);
// });

// app.delete('/users/:id', (request, response) => {
//     console.log('Acessou a rota');

//     console.log(request.params);

//     const users = [
//         { name: 'Diego', age: 25},
//         { name: 'Vini', age: 21}
//     ]

//     return response.json(users);
// });

app.listen(3333);