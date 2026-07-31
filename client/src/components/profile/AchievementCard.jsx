const achievements = [

  "Completed 250+ DSA Problems",

  "Built 2 Full Stack MERN Projects",

  "Active GitHub Contributor",

];

const AchievementCard = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Achievements
      </h2>

      <ul className="space-y-4 list-disc list-inside text-gray-700">

        {achievements.map((achievement) => (

          <li key={achievement}>
            {achievement}
          </li>

        ))}

      </ul>

    </div>

  );

};

export default AchievementCard;