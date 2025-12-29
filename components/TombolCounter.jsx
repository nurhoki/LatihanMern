function TombolCounter() {
  const [jumlah, setjumlah] = useState(0);
  const [Like, setLike] = useState(0);

  return (
    <div>
      <h1>Tombol Counter</h1>
      <h2>jumlah: {jumlah}</h2>
      <button onClick={() => setjumlah(jumlah + 1)}>Tambah</button>
      <button onClick={() => setjumlah(jumlah - 1)}>Kurang</button>
      <br />
      <button onClick={() => setLike(Like + 1)}>Like</button>
    </div>
  );
}
