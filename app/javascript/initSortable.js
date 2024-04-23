import Sortable from 'sortablejs';

const initKanbanSortable = (ulElements) => {
  ulElements.forEach((ul) => {
    new Sortable(ul, {
      group: 'kanban',
      animation: 300
    });
  });
};

export { initKanbanSortable }
