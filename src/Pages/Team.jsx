import { IconPhone } from "@tabler/icons";
import Person1 from "../assets/team/1.png";
import Person2 from "../assets/team/2.png";
import Person3 from "../assets/team/3.png";
import Person4 from "../assets/team/4.png";
import Person5 from "../assets/team/5.png";
import Person6 from "../assets/team/6.png";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "Briana Ross", job: "Photographer" },
    { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
  ];
  return (
    <>
      <section className="team-page">
        <div className="cotnainer mx-[11rem]">
          <div className="grid grid-cols-3 gap-10">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="bg-[#f6f6f6]">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="bg-white text-pmBlack p-8 text-center shadow-boxShadowTeam ">
                  <h3 className="text-2xl font-bold font-poppins">
                    {ppl.name}
                  </h3>
                  <p className="text-md text-pmGray font-poppins ">{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
