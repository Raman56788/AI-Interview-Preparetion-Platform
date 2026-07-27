import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";


const data = [
  {
    day: "Mon",
    practice: 3,
  },
  {
    day: "Tue",
    practice: 5,
  },
  {
    day: "Wed",
    practice: 4,
  },
  {
    day: "Thu",
    practice: 7,
  },
  {
    day: "Fri",
    practice: 6,
  },
  {
    day: "Sat",
    practice: 9,
  },
  {
    day: "Sun",
    practice: 8,
  },
];



const WeeklyProgress = () => {

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
        Weekly Progress
      </h2>


      <p className="
        text-sm
        text-gray-500
        mb-6
      ">
        Problems and interview practice completed
      </p>



      <div className="h-80">


        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart data={data}>


            <CartesianGrid 
              strokeDasharray="3 3"
            />


            <XAxis 
              dataKey="day"
            />


            <YAxis />


            <Tooltip />



            <Bar

              dataKey="practice"

              fill="#16a34a"

              radius={[8,8,0,0]}

            />


          </BarChart>


        </ResponsiveContainer>


      </div>


    </div>

  );

};


export default WeeklyProgress;