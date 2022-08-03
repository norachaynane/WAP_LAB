const express = require("express")
const router = express.Router();

router.get('/:operation', (req, res, next) => {
        const para = req.params.operation;

        if (para === 'add') {

        } else if (para === 'sub') {

        } else if (para === 'div') {

        } else if (para === "mult") {

        }
    }
)

module.exports = router
