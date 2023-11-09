import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const navigate = useNavigate();

  const poster = [
    {
      title: "John Wick 4",
      id: 1,
      rate: 4,
      genre: "Action, Crime, Thriller",
      desc: "John Wick: Chapter 4 Ini adalah film thriller aksi Amerika 2023 yang disutradarai dan diproduksi oleh Chad Stahelski dan ditulis oleh Shay Hatten dan Michael Finch. Film ini adalah sekuel dari John Wick: Chapter 3 – Parabellum (2019) dan instalasi keempat dalam franchise John Wick. Film ini dibintangi oleh Keanu Reeves sebagai karakter utama, bersama Donnie Yen, Bill Skarsgård, Laurence Fishburne, Hiroyuki Sanada, Shamier Anderson, Lance Reddick, Rina Sawayama, Scott Adkins, Clancy Brown, dan Ian McShane. Dalam film ini, John Wick berusaha membalas dendam pada High Table dan mereka yang meninggalkannya mati.",
      img: "https://www.thesouthafrican.com/wp-content/uploads/2020/11/a7645d89-john.jpg",
    },
    {
      title: "John Wick 3",
      id: 2,
      rate: 5,
      genre: "Action, Crime, Thriller",
      desc: "Seri ketiga John Wick ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pembunuh bayaran hebat, John akan dibantu oleh karakter baru yang misterius bernama Sofia (Halle Berry).",
      img: "https://web3.21cineplex.com/movie-images/18JWK3.jpg",
    },
    {
      title: "John Wick 2",
      id: 3,
      rate: 4,
      genre: "Action, Crime, Thriller",
      desc: "Setelah memutuskan kembali terjun ke dunia kejahatan bawah tanah, John Wick mendapati musuhnya telah menjanjikan sejumlah hadiah besar bagi yang bisa menghabisi nyawanya. Para pembunuh pun memburunya.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnLAhGAc6zZC3hPaeLjKmHvvdgCFFdEZWHu7lePW0&s",
    },
    {
      title: "John Wick 1",
      id: 3,
      rate: 5,
      genre: "Crime, Drama",
      desc: "John Wick, mantan pembunuh bayaran, berduka atas kematian istrinya. Tapi, ia terpaksa kembali ke dunia hitam setelah kelompok gangster Rusia mencuri mobil dan membunuh anak anjing warisan istrinya.",
      img: "https://upload.wikimedia.org/wikipedia/id/9/98/John_Wick_TeaserPoster.jpg",
    },
    {
      title: "Oppenheimer",
      id: 5,
      rate: 4,
      genre: "Biography, Drama, History",
      desc: "Oppenheimer Ini adalah film thriller biografi epik 2023 yang ditulis dan disutradarai oleh Christopher Nolan. Film ini dibintangi oleh Cillian Murphy sebagai J. Robert Oppenheimer, fisikawan teoretis Amerika yang dikreditkan sebagai “bapak bom atom” karena perannya dalam Proyek Manhattan — upaya Perang Dunia II yang mengembangkan senjata nuklir pertama. Berdasarkan biografi American Prometheus tahun 2005 oleh Kai Bird dan Martin J. Sherwin, film ini menceritakan karier Oppenheimer, dengan cerita terutama berfokus pada studinya, arahnya dalam Proyek Manhattan selama Perang Dunia II, dan jatuhnya dari anugerah karena sidang keamanannya pada tahun 1954.",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
  ];
  const data = [
    {
      title: "John Wick 4",
      id: 1,
      rate: 5,
      genre: "Action, Crime, Thriller",
      desc: "John Wick: Chapter 4 Ini adalah film thriller aksi Amerika 2023 yang disutradarai dan diproduksi oleh Chad Stahelski dan ditulis oleh Shay Hatten dan Michael Finch. Film ini adalah sekuel dari John Wick: Chapter 3 – Parabellum (2019) dan instalasi keempat dalam franchise John Wick. Film ini dibintangi oleh Keanu Reeves sebagai karakter utama, bersama Donnie Yen, Bill Skarsgård, Laurence Fishburne, Hiroyuki Sanada, Shamier Anderson, Lance Reddick, Rina Sawayama, Scott Adkins, Clancy Brown, dan Ian McShane. Dalam film ini, John Wick berusaha membalas dendam pada High Table dan mereka yang meninggalkannya mati.",
      img: "https://www.thesouthafrican.com/wp-content/uploads/2020/11/a7645d89-john.jpg",
    },
    {
      title: "John Wick 3",
      id: 2,
      rate: 5,
      genre: "Action, Crime, Thriller",
      desc: "Seri ketiga John Wick ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). Diburu oleh berbagai pembunuh bayaran hebat, John akan dibantu oleh karakter baru yang misterius bernama Sofia (Halle Berry).",
      img: "https://web3.21cineplex.com/movie-images/18JWK3.jpg",
    },
    {
      title: "John Wick 2",
      id: 3,
      rate: 4,
      genre: "Action, Crime, Thriller",
      desc: "Setelah memutuskan kembali terjun ke dunia kejahatan bawah tanah, John Wick mendapati musuhnya telah menjanjikan sejumlah hadiah besar bagi yang bisa menghabisi nyawanya. Para pembunuh pun memburunya.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnLAhGAc6zZC3hPaeLjKmHvvdgCFFdEZWHu7lePW0&s",
    },
    {
      title: "John Wick 1",
      id: 3,
      rate: 5,
      genre: "Crime, Drama",
      desc: "John Wick, mantan pembunuh bayaran, berduka atas kematian istrinya. Tapi, ia terpaksa kembali ke dunia hitam setelah kelompok gangster Rusia mencuri mobil dan membunuh anak anjing warisan istrinya.",
      img: "https://upload.wikimedia.org/wikipedia/id/9/98/John_Wick_TeaserPoster.jpg",
    },
    {
      title: "Oppenheimer",
      id: 5,
      rate: 5,
      genre: "Biography, Drama, History",
      desc: "Oppenheimer Ini adalah film thriller biografi epik 2023 yang ditulis dan disutradarai oleh Christopher Nolan. Film ini dibintangi oleh Cillian Murphy sebagai J. Robert Oppenheimer, fisikawan teoretis Amerika yang dikreditkan sebagai “bapak bom atom” karena perannya dalam Proyek Manhattan — upaya Perang Dunia II yang mengembangkan senjata nuklir pertama. Berdasarkan biografi American Prometheus tahun 2005 oleh Kai Bird dan Martin J. Sherwin, film ini menceritakan karier Oppenheimer, dengan cerita terutama berfokus pada studinya, arahnya dalam Proyek Manhattan selama Perang Dunia II, dan jatuhnya dari anugerah karena sidang keamanannya pada tahun 1954.",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
  ];

  const navigateToDetail = (item) => {
    navigate(`/movie/detail/${item.id}`, { state: { movieData: item } });
  };

  return (
    <>
      <p id="movies">Top Movies</p>
      <div className="containerTop">
        {poster.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
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
          <p id="movies">All Movies</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
                onClick={() => navigateToDetail(item)}
              />
              {data.length === index + 1 && (
                <div style={{ marginBottom: 80 }} />
              )}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="movies">All Movies</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                size={STAR_SIZE}
                color={STAR_COLOR}
                onClick={() => navigateToDetail(item)}
              />
              {data.length === index + 1 && (
                <div style={{ marginBottom: 80 }} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
