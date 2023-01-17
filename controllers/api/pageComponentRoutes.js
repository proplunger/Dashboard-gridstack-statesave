const router = require('express').Router();
const { User, Page, PageComponent } = require('../../models');

router.post('/save', async (req, res) => {
  try {
    const newPage = req.body;
    // console.log(newPage);

    const pageData = await Page.create(
      {
        title: newPage.title,
        user_id: req.session.user_id,
        pageComponents: newPage.components,
      },
      { include: [{ model: PageComponent }] }
    );

    // req.body.page_id = pageData.getId();

    // const compoen

    // const saveData = await PageComponent.bulkCreate(newPage.components);

    // const saveDataObj = pageData.map((data) => data.get({ plain: true }));
    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    // const page

    const saveData = await PageComponent.bulkCreate(req.body);

    const saveDataObj = saveData.map((data) => data.get({ plain: true }));
    res.status(200).json(saveDataObj);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/page-display', async (req, res) => {
  try {
    const saveData = await PageComponent.bulkCreate(newWidgetData);

    const saveDataObj = saveData.map((data) => data.get({ plain: true }));
    res.status(200).json(saveDataObj);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
