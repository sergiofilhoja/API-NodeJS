const express = require('express');

const app = express();
const port = 3000;

// API agora está usando o formato JSON (IMPORTANTE!) -> Para buscar informações no body
app.use(express.json());

app.get('/', (req, res) => {
    console.log('Requisição GET feita');
    res.json({ msg: 'Oi' });
})

app.post('/users', (req, res) => {

    // Desconstruindo o JSON
    const {nome, idade} = req.body;

    // Chamando requisições do body (nome, idade... do Insomnia)
    console.log(idade);

    // Alterando o Status Code da requisiçao
    res.status(201).json({ msg: 'Dados recebidos' });
})

app.post('/login', (req, res) => {

    // Validando login com formato JSON
    const {nome, senha} = req.body

    
    if (nome == "Sérgio" && senha == '123') {
        res.status(201).json({msg: "Autorizado"})
        console.log("Usuário Autorizado")
        return
    }

    // Caso o usuário não seja autorizado retornar mensagem em JSON
    res.status(201).json({ msg: 'Não autorizado' });
})

// Localhost na porta 3000 online! -> http://localhost:3000/
app.listen(port, () => console.log(`Servidor Online!`));