const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// read model data for table representation
const models = require('../../models')

const createArticle = (req, res) => {
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body
    let author_id = req.body.author_id


    const newArticle = models.Article.create({
        name:name,
        slug:slug,
        image:image,
        body:body,
        published: new Date().toISOString().slice(0,19).replace('T', ' '),
        author_id:author_id,
    })
        .then(article=> {
            console.log(article)
            return res.status(200).json({message: 'New article is added'})
        })
        .catch(error =>{
            return res.status(500).send(error.message)
        })
}

const updateArticle = (req, res) => {
    if (req.method === 'POST') {
        let id = req.params.id
        let name = req.body.name
        let slug = req.body.slug
        let image = req.body.image
        let body = req.body.body

        models.Article.update({
                name: name,
                slug: slug,
                image: image,
                body: body,
            },
            {
                where: {
                    id: id
                }
            })
            .then(article => {
                console.log(article)
                return res.status(200).json({message: 'Article updated'});
            })
            .catch(error => {
                return res.status(500).send(error.message);
            })
    }
}

const deleteArticle = (req, res) => {
    if (req.method === 'POST') {
        let id = req.params.id

        models.Article.destroy({
            where: {
                id: id
            }
        })
            .then(article => {
                console.log(article)
                return res.status(200).json({message: 'Article updated'});
            })
            .catch(error => {
                return res.status(500).send(error.message);
            })
    }
}

module.exports = {
    createArticle,
    updateArticle,
    deleteArticle
}