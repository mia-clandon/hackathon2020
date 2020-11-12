const {Router} = require('express')
const router = Router()
const UnderCategory = require("../../models/admin/UnderCategory");

router.get('/', async (req, res) => {
    try {
        await UnderCategory.find({}).limit(3).then(under_categories => {
            res.json(under_categories);
            console.log("Данные", under_categories)
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
});

module.exports = router;
