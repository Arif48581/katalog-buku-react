import KartuBuku from './components/KartuBuku';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Katalog Buku Digital</h1>
      <KartuBuku judul="Laskar Pelangi" penulis="Andrea Hirata" status="Sudah Dibaca" />
      <KartuBuku judul="Bumi" penulis="Tere Liye" status="Sedang Dibaca" />
      <KartuBuku judul="Filosofi Teras" penulis="Henry Manampiring" status="Belum Dibaca" />
    </div>
  );
}

export default App;