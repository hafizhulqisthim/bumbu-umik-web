## Tugas Praktik : Bumbu Umik Product Landing Page

Landing Page Bumbu Umik adalah sebuah website yang berisi informasi mengenai produk bumbu masakan yang dijual oleh Bumbu Umik. Website ini dibuat menggunakan HTML, CSS, dan Bootstrap dengan menerapkan beberapa Library Javascript.

---

### **🙇 Anggota Kelompok:**
- Andika Tulus Pangestu 
- Yulianti Putri
- Eka Prasetya Nugraha
- Hafizhul Qisti Muhammad
- Anhar Mukhlis

### **📚 Panduan Kolaborasi dengan Git & GitHub**
---

#### **Langkah 1:** Fork Repository
1. Buka Repository Utama di GitHub
2. Klik tombol "Fork" di sudut kanan atas halaman
3. Anda akan diarahkan ke halaman forked repository
4. Salin URL Repository
5. Buka terminal di komputer lokal Anda, dan ikuti langkah ke-2

#### **Langkah 2:** Clone Repository ke Komputer Lokal

```bash
git clone url-hasil-fork
```

#### **Langkah 3:** Buka folder Projects

```bash
cd nama-folder
```

#### **Langkah 4:** Membuat Upstream Repository

```bash
git remote add upstream https://github.com/andikatuluspangestu/bumbu-umik.git
```

```bash
git branch --set-upstream-to=upstream/main main
```

#### **Langkah 5:** Membuat Perubahan dan Mengunggah Perubahan

1. Lakukan perubahan pada proyek menggunakan Visual Studio Code  
2. Setelah selesai maka simpan  atau tekan ```CTRL + S```  
3. Kembali ke terminal VS Code dan periksa status perubahan:

    ```bash
    git status
    ```

4. Tambahkan perubahan:

    ```bash
    git add .
    ```

5. Buat commit:

    ```bash
    git commit -m "Nama Perubahan"
    ```

6. Unggah perubahan ke GitHub:

    ```bash
    git push origin main
    ```

#### **Langkah 6:** Membuat Pull Request
1. Buka Repository Utama di GitHub
2. Klik tombol "Compare & pull request".
3. Pastikan Anda memilih branch yang telah dibuat.
4. Berikan judul dan deskripsi yang baik untuk pull request Anda.

#### **Langkah 7:** Sinkronkan dengan Repository Utama

```bash
git pull origin main
```

### **🗒 Catatan :**
---
- Jika ada perubahan pada repository utama, maka lakukan langkah 7 untuk mengambil perubahan tersebut.
- Jika ada konflik pada langkah 7, maka selesaikan konflik (Diskusikan di Grup)
