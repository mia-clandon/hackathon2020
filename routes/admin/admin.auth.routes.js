const {Router} = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const Admin = require('../../models/admin/Admin');
const router = Router();


// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('specialKey', 'Минимальная длина специального ключа 6 символов')
            .isLength({ min: 6 }),
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при регистрации'
                })
            }

            const {email, specialKey, password} = req.body;

            const candidate = await Admin.findOne({ email });

            if (candidate) {
                return res.status(400).json({ message: 'Администратор с такими данными уже есть в базе' })
            }

            const hashedSpecialKey = await bcrypt.hash(specialKey, 12);
            const hashedPassword = await bcrypt.hash(password, 12);
            const admin = new Admin({ email, specialKey: hashedSpecialKey ,password: hashedPassword });

            await admin.save();

            res.status(201).json({ message: 'Администратор создан' });

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
        }
    })

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('specialKey', 'Введите специальный ключ').exists(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при входе в систему'
                })
            }

            const {email, specialKey ,password} = req.body;

            const admin = await Admin.findOne({ email });

            if (!admin) {
                return res.status(400).json({ message: 'Администратор не найден' })
            }

            const isMatch = await bcrypt.compare(password, admin.password);
            const isMatchSpecialKey = await bcrypt.compare(specialKey, admin.specialKey);

            if (!isMatch && !isMatchSpecialKey || !isMatch || !isMatchSpecialKey) {
                return res.status(400).json({ message: 'Неверный пароль или специальный ключ, попробуйте снова' })
            }

            const token = jwt.sign(
                { adminId: admin.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            );

            res.json({ token, adminId: admin.id });

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    });


module.exports = router;
