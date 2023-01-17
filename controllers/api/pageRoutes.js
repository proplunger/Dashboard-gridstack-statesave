const router = require('express').Router();
const { Page, PageComponent } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const pageData = await Page.findByPk(req.params.id, {
      include: [
        {
          model: PageComponent,
        },
      ],
    });
    res.status(200).json(pageData.get({ plain: true }));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const pageData = await Page.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log(pageData);
    res.status(200).json(pageData); //.get({ plain: true })
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
