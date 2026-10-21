import TaskItem from './TaskItem.jsx';

export default function TaskList({ tasks }) {
  if (tasks.length === 0) return <p>Belum ada tugas.</p>;
  return (
    <ul>
      {
        tasks.map((task, index) => (
          <TaskItem key={index} tugas={task} />
        ))
      }
    </ul>
  );
}
