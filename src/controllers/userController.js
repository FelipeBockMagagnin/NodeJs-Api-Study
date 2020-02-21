exports.get = (req, res, next) => {
    const user = require('../models/User');
    user.sync();
    user.afterSync(() => {
        console.log('sincronizado os usuarios');
    })
    res.status(201).send('Get realizado');
};

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};