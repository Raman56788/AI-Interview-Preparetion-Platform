const certificates = [
  "Java Programming",
  "Full Stack Web Development",
  "Data Structures & Algorithms",
];

const CertificateCard = () => {

  return (

    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Certificates
      </h2>

      <div className="space-y-4">

        {certificates.map((certificate) => (

          <div
            key={certificate}
            className="border rounded-xl p-4 hover:shadow-md transition"
          >

            <h3 className="font-semibold text-gray-800">
              {certificate}
            </h3>

          </div>

        ))}

      </div>

    </div>

  );

};

export default CertificateCard;