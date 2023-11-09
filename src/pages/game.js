import { Fragment } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./game.css";

const Game = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Free Fire",
      id: 1,
      rate: 4,
      genre: "Action, Open World",
      desc: "Garena Free Fire atau biasa disebut Free Fire adalah permainan battle royale yang dikembangkan oleh 111 Dots Studio dan diterbitkan oleh Garena untuk Android dan iOS. Permainan ini merupakan permainan piranti genggam yang paling banyak diunduh secara global pada tahun 2019.",
      img: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/09/game-free-fire.jpg",
    },
    {
      title: "Mobile Legends",
      id: 2,
      rate: 4,
      genre: "MOBA 5vs5",
      desc: "Mobile Legends: Bang Bang adalah permainan video seluler ber-genre multiplayer online battle arena yang dikembangkan dan diterbitkan oleh Moonton, anak perusahaan dari ByteDance",
      img: "https://www.ligagame.tv/images/mobile-legends-game-moba-mobile-paling-populer_49ad1.jpg",
    },
    {
      title: "Valorant",
      id: 3,
      rate: 3,
      genre: "Action,Shooting",
      desc: "Valorant Ini adalah game penembak taktis hero orang pertama yang dikembangkan dan diterbitkan oleh Riot Games. Pemain bermain sebagai salah satu dari sekumpulan Agen, karakter berdasarkan beberapa negara dan budaya di seluruh dunia. Dalam mode game utama, pemain ditugaskan untuk tim penyerang atau pembela dengan masing-masing tim memiliki lima pemain di dalamnya.",
      img: "https://www.acerid.com/wp-content/uploads/2021/05/thumbnail-1.jpg",
    },
    {
      title: "Apex Legends",
      id: 4,
      rate: 4,
      genre: "First Person Shooter",
      desc: "Apex Legends Ini adalah game penembak hero taktis orang pertama gratis yang dikembangkan dan diterbitkan oleh Respawn Entertainment dan Electronic Arts. Game ini menempatkan dua tim, Counter-Terrorists dan Terrorists, satu sama lain dalam berbagai mode game berbasis tujuan.",
      img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
    },
    {
      title: "PUBG",
      id: 5,
      rate: 4,
      genre: "First Person Shooter",
      desc: "PUBG Mobile adalah sebuah permainan video battle royale gratis dimainkan yang dikembangkan oleh LightSpeed dan Quantum Studio, sebuah divisi dari Tencent Games. Ini merupakan adaptasi permainan piranti genggam dari PlayerUnknown's Battlegrounds yang dirilis untuk Android dan iOS pada tanggal 19 Maret 2018.",
      img: "https://play-lh.googleusercontent.com/3ohs9NzwVBY1Gvzo9xxayHenfpOkLWZ78DAfTu1YZNq1t1QCszDjy6OxjaUW-VRIUoE",
    },
  ];

  const navigateToDetail = (item) => {
    navigate(`/game/detail/${item.id}`, { state: { movieData: item } });
  };

  return (
    <>
      <p id="games">Top Games</p>
      <div className="containerTop">
        {data.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              key={item.id}
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
          <p id="games">All Games</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
                onClick={() => navigateToDetail(item)}
              />
              {data.length === index + 1 && (
                <div style={{ marginBottom: 80 }} />
              )}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="games">All Games</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <CardSmall
                title={item.title}
                img={item.img}
                genre={item.genre}
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
};

export default Game;
