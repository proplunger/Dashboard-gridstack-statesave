const gridBox = document.getElementById('display-grid');
const pageTitleEl = document.getElementById('page-title-display');

const numbRows = 16;

// initiating grid
const grid = GridStack.init(
  {
    acceptWidgets: true,
    alwaysShowResizeHandle:
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
    margin: '.5rem',
    oneColumnModeDomSort: false,
    row: numbRows,
    minWidth: 0,
    float: true,
  },
  '#display-grid'
);

function gridResize() {
  grid.cellHeight(gridBox.offsetHeight / numbRows);
}

async function getPageData(id) {
  const response = await fetch(`api/pages/${id}`);
  const pages = await response.json();
  return pages;
}

function setSettingsToTrue(widgetData) {
  const updatedWidgetData = widgetData.map((item) => {
    (item.noResize = true), (item.noMove = true), (item.locked = true);
    return item;
  });
  return updatedWidgetData;
}

async function init() {
  const page_id = new URLSearchParams(window.location.search).get('page_id');
  const pageData = await getPageData(page_id);
  const widgets = setSettingsToTrue(pageData.pageComponents);
  grid.load(widgets);
  pageTitleEl.textContent = pageData.title;
  gridResize();
}

init();

// resizes grid so that the height of the grid stays in view
window.addEventListener('resize', gridResize);
