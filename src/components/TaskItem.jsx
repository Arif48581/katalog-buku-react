export default function TaskItem({ tugas }) {
  return (
    <li style={{ textDecoration: tugas.selesai ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={tugas.selesai} readOnly />
      <span>{tugas.judul}</span>
    </li>
  );
}