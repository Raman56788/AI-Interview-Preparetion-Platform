import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";


const data = [
  {
    skill: "React",
    score: 85,
  },
  {
    skill: "Java",
    score: 75,
  },
  {
    skill: "DSA",
    score: 70,
  },
  {
    skill: "AI Interview",
    score: 90,
  },
  {
    skill: "Resume",
    score: 80,
  },
  {
    skill: "Communication",
    score: 65,
  },
];



const SkillRadar = () => {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-sm
      p-6
    ">


      <h2 className="
        text-xl
        font-semibold
        text-gray-800
        mb-1
      ">
        Skill Performance
      </h2>


      <p className="
        text-sm
        text-gray-500
        mb-6
      ">
        AI based skill evaluation
      </p>



      <div className="h-80">


        <ResponsiveContainer
          width="100%"
          height="100%"
        >


          <RadarChart data={data}>


            <PolarGrid />


            <PolarAngleAxis
              dataKey="skill"
            />


            <PolarRadiusAxis
              domain={[0,100]}
            />


            <Radar

              dataKey="score"

              stroke="#16a34a"

              fill="#16a34a"

              fillOpacity={0.4}

            />


            <Tooltip />


          </RadarChart>


        </ResponsiveContainer>


      </div>


    </div>

  );

};


export default SkillRadar;