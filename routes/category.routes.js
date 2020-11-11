const {Router} = require('express')
const router = Router()
const Category = require("../models/Category");

router.get('/', async (req, res) => {
    try{
    await Category.find({}).then(category => {
        res.json(category)
        console.log("Данные", category)
    })}
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});
router.post(
    '/add-category',
    async (req, res) => {
        try {

            const {category} = req.body

            const candidate = await Category.findOne({ category })

            if (candidate) {
                return res.status(400).json({ message: 'Такая категория уже существует' })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const item = new Category({ category })

            await item.save()

            res.status(201).json({ message: 'Категория создана' })

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    })
module.exports = router;
