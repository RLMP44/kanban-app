# Reset
Card.destroy_all
KanbanColumn.destroy_all
Kanban.destroy_all

puts('Creating seeds...')

kanban = Kanban.create(
  name: "Kotlin Project",
  description: "Study plan to learn Kotlin from scratch."
)

backlog = KanbanColumn.create(
  name: "Backlog",
  kanban:
)

Card.create(content: "Initial research", position: 0, kanban_column: backlog)
Card.create(content: "Find a simple project", position: 1, kanban_column: backlog)
Card.create(content: "Create project with notes", position: 2, kanban_column: backlog)

todo = KanbanColumn.create(
  name: "To-do",
  kanban:
)

Card.create(content: "Create study plan", position: 0, kanban_column: todo)
completed = KanbanColumn.create(
  name: "Completed",
  kanban:
)

Card.create(content: "Decide new coding language", position: 0, kanban_column: completed)
Card.create(content: "Set timeline", position: 1, kanban_column: completed)

puts('Seeds created')
