const express = require('express');
const router = express.Router();
const {Spot, Image} = require('../../db/models');
const asyncHandler = require('express-async-handler');

router.get('/',
  asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({include: {model:Image, attributes:["image_url"]}});
    res.json({ spots });
  })
)


router.get('/:id',
  asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id);
    res.json({ spot });
  })
);

router.post('/create', asyncHandler(async(req,res, next)=>{
    const {id} = req.params
    const spot = await spot.create({})
    return res.json({spot})
}))



module.exports = router;