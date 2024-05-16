const models = require('../models');

const getByAuthorId = (req, res) => {
    models.Author.findOne({
        where: { id: req.params.authorId },
        include: [{
            model: models.Article
        }]
    })
        .then(author => {
            console.log(author)
            return res.status(200).json({ author })
        })
        .catch(error => {
            return res.status(500).send(error.message)
        })
}

module.exports = {
    getByAuthorId
}
