function TombolCounter() {
  const [jumlah, setjumlah] = React.useState(0);
  const [Like, setLike] = React.useState(0);

  return (
    <div>
      <h1>Tombol Counter</h1>
      <h2>jumlah: {jumlah}</h2>
      <button className="btn btn-primary" onClick={() => setjumlah(jumlah + 1)}>Tambah</button>
      <button className="btn btn-secondary" onClick={() => setjumlah(jumlah - 1)}>Kurang</button>
      <br />
      <button className="btn btn-danger mt-4 d-block" onClick={() => setLike(Like + 1)}>Like 💌 {Like}</button>
    </div>
  );
}