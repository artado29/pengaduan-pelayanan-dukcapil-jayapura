// Fungsi untuk menangani pengiriman formulir pengaduan
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form dikirim secara langsung

    // Ambil data dari form
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const jenisPengaduan = document.getElementById('jenis-pengaduan').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const bukti = document.getElementById('bukti').files[0];

    // Validasi input
    if (!nama || !email || !jenisPengaduan || !deskripsi) {
        alert("Harap lengkapi semua kolom yang wajib diisi!");
        return;
    }

    // Tampilkan konfirmasi kepada pengguna
    alert(`Terima kasih, ${nama}. Pengaduan Anda telah kami terima.\nJenis Pengaduan: ${jenisPengaduan}\nDeskripsi: ${deskripsi}`);

    // Bersihkan form setelah pengiriman
    document.querySelector('form').reset();

    // (Opsional) Kirim data pengaduan ke server atau simpan dalam database
    // Untuk pengujian, Anda bisa menggunakan API seperti Fetch untuk mengirimkan data ke server
    // Contoh:
    // const formData = new FormData();
    // formData.append('nama', nama);
    // formData.append('email', email);
    // formData.append('jenis-pengaduan', jenisPengaduan);
    // formData.append('deskripsi', deskripsi);
    // if (bukti) {
    //     formData.append('bukti', bukti);
    // }
    //
    // fetch('url-untuk-mengirim-pengaduan', {
    //     method: 'POST',
    //     body: formData
    // }).then(response => response.json())
    //   .then(data => console.log('Pengaduan berhasil dikirim:', data))
    //   .catch(error => console.error('Terjadi kesalahan:', error));
});

// Animasi scroll smooth untuk link navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Mengambil bagian setelah # dari href
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Offset untuk menghindari header menutupi bagian atas
            behavior: 'smooth'
        });
    });
});

// Fungsi untuk validasi email (opsional)
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Jika ingin menambahkan validasi lebih lanjut, misalnya memvalidasi email saat input berubah:
document.getElementById('email').addEventListener('blur', function () {
    const email = this.value;
    if (email && !isValidEmail(email)) {
        alert('Email yang dimasukkan tidak valid.');
    }
});
