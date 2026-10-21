import TaskList from './components/TaskList.jsx';

const dummy = [
  { id: 1, judul: 'Baca materi', selesai: true },
  { id: 2, judul: 'Kerjakan latihan', selesai: false },
  { id: 3, judul: 'Kumpulkan jurnal', selesai: false },
];

export default function App() {
  return (
    <main>
      <h1>TaskMate</h1>
      <TaskList tasks={dummy} />
    </main>
  );
}