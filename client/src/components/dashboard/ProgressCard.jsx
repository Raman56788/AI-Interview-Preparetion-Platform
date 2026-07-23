import {
  FaChartLine,
} from "react-icons/fa";


const progressData = [
  {
    name: "React Development",
    value: 80,
  },
  {
    name: "Java & DSA",
    value: 60,
  },
  {
    name: "AI Interview",
    value: 70,
  },
  {
    name: "Resume Score",
    value: 85,
  },
];


const ProgressCard = () => {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-md
      border
      p-6
    ">


      {/* Header */}

      <div className="
        flex
        items-center
        gap-3
        mb-6
      ">

        <div className="
          w-12
          h-12
          rounded-xl
          bg-blue-100
          flex
          items-center
          justify-center
          text-blue-600
        ">

          <FaChartLine className="text-xl"/>

        </div>


        <div>

          <h2 className="
            text-xl
            font-bold
            text-gray-800
          ">
            Learning Progress
          </h2>


          <p className="
            text-sm
            text-gray-500
          ">
            Track your preparation journey
          </p>

        </div>


      </div>




      {/* Progress Bars */}

      <div className="space-y-5">


        {
          progressData.map((item)=>(

            <div key={item.name}>


              <div className="
                flex
                justify-between
                mb-2
                text-sm
              ">

                <span className="
                  font-medium
                  text-gray-700
                ">
                  {item.name}
                </span>


                <span className="
                  text-gray-500
                ">
                  {item.value}%
                </span>


              </div>



              <div className="
                w-full
                bg-gray-200
                rounded-full
                h-3
              ">


                <div

                  className="
                    bg-green-600
                    h-3
                    rounded-full
                    transition-all
                  "

                  style={{
                    width:`${item.value}%`
                  }}

                />

              </div>


            </div>

          ))
        }


      </div>


    </div>

  );

};


export default ProgressCard;