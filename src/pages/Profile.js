import { Fragment } from "react";

import CardProfile from "../component/CardProfile";
import "./Profile.css";
export default function Movie() {
  const data = [
    {
      nama: "ABIDA AMALIA SYIFA",
      id: 1,
      rate: 4,
      nim: "21120121140142",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wJeh7DS6YMM60DyW1XXdKb1-pMt06hmekffVtzbTE7IvE7k0JO4gpRumqZSTgnLc3tE&usqp=CAU",
    },
    {
      nama: "RAOUL HABONARAN",
      id: 2,
      rate: 4,
      nim: "21120121130053",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-QSPJen5gjzZtIBnhbF5ABwMlX879bgY6a2RiB8iVfqBB22pfqRwr7wO6Tz_93ceID4&usqp=CAU",
    },
    {
      nama: "FARREL BELVA RAFI IRWANSYAH",
      id: 3,
      rate: 4,
      nim: "21120121140147",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-QSPJen5gjzZtIBnhbF5ABwMlX879bgY6a2RiB8iVfqBB22pfqRwr7wO6Tz_93ceID4&usqp=CAU",
    },
    {
      nama: "BAGAS SATRIO UNGGUL YUDHO",
      id: 4,
      rate: 4,
      nim: "21120120140163",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-QSPJen5gjzZtIBnhbF5ABwMlX879bgY6a2RiB8iVfqBB22pfqRwr7wO6Tz_93ceID4&usqp=CAU",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p id="movies">Profile Kelompok 02</p>
        </div>
        {data.map((item, index) => (
          <Fragment key={item.id}>
            <CardProfile
              nama={item.nama}
              image={item.image}
              nim={item.nim}
              onClick={() => alert("item id = " + item.id)}
            />
            {data.length === index + 1 && (
              <div
                style={{
                  marginBottom: 80,
                }}
              />
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
}
