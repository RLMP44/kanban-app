import Sortable from 'sortablejs';

const initKanbanSortable = (ulElements) => {
  ulElements.forEach((ul) => {
    new Sortable(ul, {
      group: 'kanban',
      animation: 300
    });
  });

  let column1 = document.getElementById('column1');
  let column2 = document.getElementById('column2');
  let aisle1 = document.getElementById('aisle1');

  new Sortable(column1, {
    animation: 150,
    group: 'kanban',
    // ghostClass: 'sortable-ghost',
  });

  new Sortable(column2, {
    animation: 150,
    group: 'kanban',
    // ghostClass: 'sortable-ghost',
    // sort: false
  });

  new Sortable(aisle1, {
    animation: 150,
    group: 'kanban',
    // ghostClass: 'sortable-ghost',
  });
};


export { initKanbanSortable }
