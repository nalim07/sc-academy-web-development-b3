import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    fullname: "Nur Alim",
    nickname: "Alim",
  });
});

router.get("/book", (req, res) => {
  res.status(200).json({
    "Daftar Buku": [
      {
        "status": 200,
        "Judul Buku": "Harry Potter",
        "Pengarang": "J.K. Rowling",

        "Tahun": 1997,
      },
    ],
  });

});

router.get("/operasi-matematika", (req, res) => {

  const angka1 = 10;
  const angka2 = 5;

  const operasiMatematika = {
    "tambah": angka1 + angka2,
    "kurang": angka1 - angka2,
    "kali": angka1 * angka2,
    "bagi": angka1 / angka2,
  };

  const { tambah, kurang, kali, bagi } = operasiMatematika;

  res.status(200).json({
    "Operasi Matematika": [
      {
        "Tambahan": "10 + 5 = " + tambah,
      },
      {
        "Pengurangan": "10 - 5 = " + kurang
      },
      {
        "Perkalian": "10 * 5 = " + kali
      },
      {
        "Pembagian": "10 / 5 = " + bagi
      },
    ],
  });

});


  export default router;
