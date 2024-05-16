const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const articleAdminController = require('../controllers/admin/articles');

// GET routes
router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);

// POST route for creating a new article
router.post('/create', articleAdminController.createArticle);

module.exports = router;
