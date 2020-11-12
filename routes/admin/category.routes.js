const {Router} = require('express')
const router = Router()
const Category = require("../../models/admin/Category");
const UnderCategory = require("../../models/admin/UnderCategory");

router.get('/', async (req, res) => {
    try {
        await Category.find({}).then(categories => {
            res.json(categories)
            console.log("Данные", categories)
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
});
router.post(
    '/add-category',
    async (req, res) => {
        try {
            const {category} = req.body;

            const candidate = await Category.findOne({category})

            if (candidate) {
                return res.status(400).json({message: 'Такая категория уже существует'})
            }
            const item = new Category({category})

            await item.save()

            res.status(201).json({message: 'Категория создана'})

        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    });

router.post(
    '/add-under_category',
    async (req, res) => {
        try {
            const {category, under_category, lesson} = req.body;

            const underCategory = await UnderCategory.findOne({under_category})

            if (underCategory) {
                return res.status(400).json({message: 'Такая категория уже существует'})
            }
            const item = new UnderCategory({category, under_category, lesson});

            await item.save()

            res.status(201).json({message: 'Урок создан  '})

        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
            console.log(e.message)
        }
    });

module.exports = router;
