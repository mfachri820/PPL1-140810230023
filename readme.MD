# Mini Project: API Manajemen Inventori

## Deskripsi
Proyek ini adalah RESTful API minimalis untuk sistem manajemen inventori barang. Kode ditulis menggunakan Node.js dan Express dengan penyimpanan data sementara (in-memory array). Proyek ini sudah dikemas menggunakan Docker dan memiliki alur kerja CI/CD terintegrasi.

## Dokumentasi API
Aplikasi berjalan di port host 8080 dan mengembalikan respons dalam format JSON standar.

Daftar Endpoint:
* GET /api/v1/items - Menampilkan semua barang
* GET /api/v1/items/:id - Menampilkan detail satu barang
* POST /api/v1/items - Menambahkan barang baru
* PUT /api/v1/items/:id - Memperbarui data barang
* DELETE /api/v1/items/:id - Menghapus barang

Contoh format respons sukses:
```json
{
  "status": "success",
  "message": "Barang berhasil ditambahkan",
  "data": {
    "id": "item-123456",
    "name": "Laptop",
    "quantity": 10,
    "price": 5000000
  }
}