// script.js
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";
// Latihan 2 - Event click
const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});
// Latihan 3 - Mengubah kelas dan gaya CSS
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});
// Latihan 4 - Event input dan penghitung karakter
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});
// Latihan 5 - Validasi form pendaftaran
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah halaman refresh saat tombol submit diklik
    
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.style.color = "red";
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (!polaEmail.test(email)) {
        pesanForm.style.color = "red";
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.style.color = "red";
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
    } else {
        pesanForm.style.color = "green";
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset(); // Mengosongkan form kembali setelah sukses
        document.getElementById("jumlahKarakter").textContent = "0"; // Reset counter latihan 4
    }
});
// Latihan 6 - Daftar tugas sederhana (To-do List)
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();
    
    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }
    
    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    
    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";
    
    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai" : "Tandai selesai";
    });
    
        // Membuat tombol hapus untuk Eksperimen Mandiri Poin 1
    const tombolHapus = document.createElement("button");
    tombolHapus.type = "button";
    tombolHapus.textContent = " ❌ Hapus ";
    tombolHapus.style.marginLeft = "5px";
    tombolHapus.style.color = "red";
    
    tombolHapus.addEventListener("click", function() {
        item.remove(); // Menghapus item dari daftar tugas
        pesanTugas.textContent = "Tugas berhasil dihapus.";
    });

    item.append(label, selesai, tombolHapus);

    daftarTugas.appendChild(item);
    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});
// ==========================================
// BAGIAN F: MINI PROJECT & EKSPERIMEN MANDIRI
// ==========================================

const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const charCountWorkshop = document.getElementById("charCountWorkshop");
const infoSesi = document.getElementById("infoSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const btnResetWorkshop = document.getElementById("btnResetWorkshop");

// 1. Live Penghitung Karakter Nama
namaWorkshop.addEventListener("input", function () {
    charCountWorkshop.textContent = namaWorkshop.value.length;
});

// 2. Live Info Dropdown Sesi (Eksperimen Mandiri Poin 3)
sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value !== "") {
        infoSesi.textContent = "Anda memilih sesi: " + sesiWorkshop.value;
    } else {
        infoSesi.textContent = "";
    }
});

// 3. Validasi Submit Form Workshop
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const namaVal = namaWorkshop.value.trim();
    const emailVal = emailWorkshop.value.trim();
    const sesiVal = sesiWorkshop.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validasi minimal 3 karakter untuk nama (Eksperimen Mandiri Poin 2)
    if (namaVal.length < 3) {
        pesanWorkshop.style.color = "red";
        pesanWorkshop.textContent = "Error: Nama wajib diisi dan minimal harus 3 karakter!";
    } else if (!polaEmail.test(emailVal)) {
        pesanWorkshop.style.color = "red";
        pesanWorkshop.textContent = "Error: Silakan masukkan format email yang valid!";
    } else if (sesiVal === "") {
        pesanWorkshop.style.color = "red";
        pesanWorkshop.textContent = "Error: Anda harus memilih salah satu sesi workshop!";
    } else {
        pesanWorkshop.style.color = "green";
        pesanWorkshop.textContent = "Sukses! Pendaftaran Workshop atas nama " + namaVal + " berhasil diproses.";
    }
});

// 4. Fitur Tombol Reset untuk Hapus Input
btnResetWorkshop.addEventListener("click", function () {
    formWorkshop.reset();
    charCountWorkshop.textContent = "0";
    infoSesi.textContent = "";
    pesanWorkshop.textContent = "";
});
// Eksperimen Mandiri 4 - Show/Hide Paragraf
const tombolTogelTeks = document.getElementById("tombolTogelTeks");
const teksSembunyi = document.getElementById("teksSembunyi");

tombolTogelTeks.addEventListener("click", function () {
    teksSembunyi.classList.toggle("tersembunyi");
    
    // Mengubah teks tombol secara interaktif
    if (teksSembunyi.classList.contains("tersembunyi")) {
        tombolTogelTeks.textContent = "Tampilkan Teks";
    } else {
        tombolTogelTeks.textContent = "Sembunyikan Teks";
    }
});
