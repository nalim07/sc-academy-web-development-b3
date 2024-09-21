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

export default router;

