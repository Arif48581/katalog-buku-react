function KartuBuku({ judul, penulis, status }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '10px 0' }}>
      <h3>Judul Buku: {judul}</h3>
      <p>Penulis: {penulis}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default KartuBuku;