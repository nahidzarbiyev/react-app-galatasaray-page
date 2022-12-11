import React from "react";
import teams from "../img/teams.jpg";
import womenteams from "../img/gskadin.jpeg";
import erkekbasket from "../img/gserbasket.jpeg";
import kadinbasket from "../img/gskadinbasket.jpg"

const branches = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center pt-[200px] flex-col">
      <h3 className=" text-gs-yellow  md:text-4xl text-3xl font-extrabold italic text-center   pb-10">
        Galatasaray Teams
      </h3>
      <img src={teams} alt="" className="rounded-2xl w-[70%] h-[70%] m-auto " />
      <figcaption>
        <h4 className="text-gs-yellow text-xl font-bold text-center p-5">
          Men's Football
        </h4>

        <span className="text-white p-10 w-[70%] text-center flex m-auto ">
          Due to these achievements in 2000, Galatasaray was shown as the best
          team of August 2000 in the statistical study of "The best football
          clubs in the world" conducted by the International Federation of
          Football History and Statistics, and at the end of that year, it
          became the best team of the year in the world. Galatasaray is the only
          team to win the UEFA Cup without losing and finishing third in the
          UEFA Champions League groups. In 1999-2000, it defeated England's
          Arsenal club on penalties in the UEFA Cup final, becoming the first
          and only Turkish football club to win a European Cup. Galatasaray in
          the same year; He also won the Super Cup by beating Real Madrid 2-1.
          The UEFA Cup and Super Cup won by Galatasaray, the Turkish team that
          has achieved the most success in Europe, with its staff seen as modest
          compared to its European rivals, was seen as a great success in the
          world, thus the name Galatasaray became a brand recognized by the
          whole world and the club became a worldwide success. It has gained a
          huge fan base around the world. The club still maintains its
          popularity in Europe.
        </span>
      </figcaption>
      <img
        src={womenteams}
        alt=""
        className="rounded-2xl w-[70%] h-[70%] m-auto "
      />
      <figcaption>
        <h4 className="text-gs-yellow text-xl font-bold text-center p-5">
          Women's Football
        </h4>

        <span className="text-white p-10 w-[70%] text-center flex m-auto ">
          Galatasaray (women's football team) is the women's football team of
          Galatasaray Sports Club that competes in the Women's Super League. The
          team plays its games at the Florya Metin Oktay Facilities with a
          capacity of 3,500 people.
        </span>
      </figcaption>
      <img
        src={erkekbasket}
        alt=""
        className="rounded-2xl w-[70%] h-[70%] m-auto "
      />
      <figcaption>
        <h4 className="text-gs-yellow text-xl font-bold text-center p-5">
          Men's basketball
        </h4>

        <span className="text-white p-10 w-[70%] text-center flex m-auto ">
          Galatasaray (basketball team) is the men's basketball team of
          Galatasaray Sports Club competing in the Basketball Super League. The
          team plays its matches at the 16,500-person Sinan Erdem Sports Hall.
          In 2015-2016, Galatasaray became the European Champion by beating
          Strasbourg IG of France 78-67 in the EuroCup final.
        </span>
      </figcaption>
      <img
        src={kadinbasket}
        alt=""
        className="rounded-2xl w-[70%] h-[70%] m-auto "
      />
      <figcaption>
        <h4 className="text-gs-yellow text-xl font-bold text-center p-5">
          Women's basketball
        </h4>

        <span className="text-white p-10 w-[70%] text-center flex m-auto ">
        Galatasaray (women's basketball team) is the women's basketball team of
      Galatasaray Sports Club that competes in the Women's Basketball Super
      League. The team plays its matches at the Başakşehir Sports Complex with a
      capacity of 3.012 people. In 2009, Galatasaray defeated Italy's Cras
      Basket Taranto team 82-61 and became the EuroCup Women's Champion.
      Finishing in the 2nd place in the tournament in Ekaterinburg, Russia for
      the EuroLeague Women's 8 finals of the 2013-2014 season, Galatasaray
      Odeabank defeated the host UGMK Yekaterinburg 77-70 in the semi-finals and
      made it to the finals for the first time in its history and beat its
      arch-rival Fenerbahçe 69-69. She took the EuroLeague Women, Europe's No. 1
      Cup, to her museum by beating 58. In 2018, she beat another Italian
      representative, Reyer Venezia, in the final, and won the EuroCup Women,
      Europe's 2nd biggest cup, for the second time.
        </span>
      </figcaption>
     
    </div>
  );
};

export default branches;
