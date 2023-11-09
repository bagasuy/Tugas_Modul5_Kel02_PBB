import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./book.css";

const Book = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Atomic Habits",
      id: 1,
      rate: 4,
      genre: "Self-Development",
      desc: "Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa adalah buku kategori self improvement karya James Clear. Pada umumnya, perubahan-perubahan kecil seringkali terkesan tak bermakna karena tidak langsung membawa perubahan nyata pada hidup suatu manusia.",
      img: "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/11/25135505/atomic-habits-1.jpg",
    },
    {
      title: "Same as ever",
      id: 2,
      rate: 4,
      genre: "Self-Development",
      desc: "Want to understand the changing world? Start with what stays the same. That's the amazing conclusion of Morgan Housel's fascinating, useful",
      img: "https://m.media-amazon.com/images/I/41K-g3IvEPL._SY445_SX342_.jpg",
    },
    {
      title: "The Pragmatic Programmer",
      id: 3,
      rate: 3,
      genre: "Study, Science",
      desc: "The Pragmatic Programmer: From Journeyman to Master adalah sebuah buku tentang pemrograman komputer dan rekayasa perangkat lunak, yang ditulis oleh Andrew Hunt dan David Thomas dan diterbitkan pada bulan Oktober 1999. Buku ini digunakan sebagai buku teks dalam mata kuliah universitas terkait.",
      img: "https://books.google.co.id/books/content?id=5wBQEp6ruIAC&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1571Ssmd_XMXP7jp8SQA5id0GAMw&w=1280",
    },
    {
      title: "The Hunger Games",
      id: 4,
      rate: 4,
      genre: "Thriller, Drama, Battle Royale",
      desc: "The Hunger Games adalah novel fiksi ilmiah tahun 2008 karangan penulis Amerika Serikat Suzanne Collins. Novel ini dikisahkan dalam sudut pandang seorang gadis umur 16 tahun bernama Katniss Everdeen, yang tinggal di sebuah negara distopia pascaapokalips bernama Panem di Amerika Utara. Capitol, ibu kota metropolis yang sangat maju, memegang kendali politik atas keseluruhan negara. ",
      img: "https://books.google.co.id/books/publisher/content?id=805FDwAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1jKOZcx6e9cWtsdzq48Oeu8e0wyg&w=1280",
    },
    {
      title: "Bumi",
      id: 5,
      rate: 4,
      genre: "Mystery, Fantasy",
      desc: "Bumi adalah sebuah novel karya Tere Liye. Novel ini merupakan buku pertama dari serial Bumi atau Dunia Paralel dan diterbitkan pertama kali oleh Gramedia Pustaka Utama tahun 2014.",
      img: "https://upload.wikimedia.org/wikipedia/id/4/49/Bumi_%28sampul%29.jpg",
    },
  ];

  const navigateToDetail = (item) => {
    navigate(`/book/detail/${item.id}`, { state: { movieData: item } });
  };

  return (
    <>
      <p id="books">Top Books</p>
      <div className="containerTop">
        {data.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              onClick={() => navigateToDetail(item)}
            />
            {data.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="books">All Books</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                onClick={() => navigateToDetail(item)}
              />
              {data.length === index + 1 ? (
                <div style={{ marginRight: 40 }} />
              ) : null}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="books">All Books</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                onClick={() => navigateToDetail(item)}
              />
              {data.length === index + 1 ? (
                <div style={{ marginRight: 40 }} />
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Book;
