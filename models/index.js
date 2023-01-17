const User = require('./User');
const Page = require('./Page');
// const Component = require('./Component');
const PageComponent = require('./pageComponent');

User.hasMany(Page, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Page.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Page.hasMany(PageComponent, {
  foreignKey: 'page_id',
  onDelete: 'CASCADE',
});

PageComponent.belongsTo(Page, {
  foreignKey: 'page_id',
  onDelete: 'CASCADE',
});

// Component.belongsToMany(Page, { through: PageComponent });
// Page.belongsToMany(Component, { through: PageComponent });

module.exports = { User, Page, PageComponent };
