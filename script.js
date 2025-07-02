function tambahKeKeranjang(nama, harga) {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  keranjang.push({ nama: nama, harga: harga });
  localStorage.setItem('keranjang', JSON.stringify(keranjang));
  alert(`${nama} berhasil ditambahkan ke keranjang!`);
}

function tampilkanKeranjang() {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  let list = document.getElementById('daftar-keranjang');

  if (keranjang.length === 0) {
    list.innerHTML = "<li>Keranjang kosong</li>";
  } else {
    keranjang.forEach(item => {
      let li = document.createElement('li');
      li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
      list.appendChild(li);
    });
  }
}
 