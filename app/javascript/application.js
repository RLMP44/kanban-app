// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import 'sortablejs'
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"

import { initKanbanSortable } from './initSortable'

document.addEventListener('turbolinks:load', () => {
  const kanbanUls = document.querySelectorAll(".kanban .kanban-col");
  console.log(kanbanUls);
  if (kanbanUls) {
    initKanbanSortable(kanbanUls);
  }
});
