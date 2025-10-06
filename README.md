Aplikasi To-Do List berbasis API yang dibangun menggunakan Hono sebagai framework web utama dan Drizzle ORM untuk interaksi database PostgreSQL. Proyek ini juga menggunakan TypeScript untuk pengembangan yang lebih terstruktur dan aman.

🛠️ Teknologi yang Digunakan
Proyek ini menggunakan stack teknologi modern berikut:

Runtime: Node.js

Web Framework: Hono

Database: PostgreSQL

ORM: Drizzle ORM

Language: TypeScript

Authentication: bcrypt (untuk hashing sandi) dan jsonwebtoken (untuk otentikasi berbasis token).

🏁 Mulai Cepat (Getting Started)
Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal.

1. Kloning Repositori
`Bash`
`git clone https://github.com/4hmad27/my-STS-Tasks.git`
cd my-STS-Tasks
2. Instalasi Dependensi
Instal semua package Node.js yang diperlukan:

`Bash`
`npm install`
3. Konfigurasi Lingkungan
Buat file .env di root proyek Anda berdasarkan env.example dan isi detail koneksi database Anda.

# .env file
`DATABASE_URL="postgres://user:password@host:port/database_name"`
`JWT_SECRET="ganti_dengan_kunci_rahasia_yang_kuat"`
4. Setup Database
Pastikan server PostgreSQL Anda berjalan. Kemudian, lakukan migrasi dan seeding database:

Bash

# Jalankan migrasi Drizzle untuk membuat tabel (misal: users, todos)
`npm run db:migrate`

# Jalankan seeding data awal (opsional)
`npm run db:seed`
5. Menjalankan Server
Jalankan server pengembangan:

Bash

`npm run dev`
Server akan berjalan di http://localhost:3000 (atau port yang Anda tentukan di .env).

Dokumentasi API (Endpoints)
Berikut adalah daftar endpoint utama yang digunakan untuk mengelola pengguna dan tugas.

Metode	Endpoint	Deskripsi	Status Otentikasi
POST	/api/register	Mendaftarkan pengguna baru.	Publik
POST	/api/login	Login pengguna dan mengembalikan JWT.	Publik
GET	/api/me	Mengambil detail pengguna yang sedang login.	Wajib Token
GET	/api/todos	Mengambil daftar semua tugas pengguna.	Wajib Token
POST	/api/todos	Membuat tugas baru.	Wajib Token
DELETE	/api/todos/:id	Menghapus tugas berdasarkan ID.	Wajib Token

Export to Sheets
⚙️ Skema Database (Drizzle ORM)
Struktur tabel utama diwakili oleh skema Drizzle:

Tabel	Kolom Utama	Keterangan
users	id, username, password	Menyimpan data pengguna. username harus unik.
todos	id, note, user_id	Menyimpan tugas. user_id adalah Foreign Key ke tabel users.

Export to Sheets
 Kontributor
Proyek ini dikembangkan oleh:

Ahmad Afan Shoabari (@4hmad27)

Terima kasih telah melihat repositori ini!
