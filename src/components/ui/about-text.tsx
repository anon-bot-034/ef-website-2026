const stats = [
  { number: '250', label: 'Animals', placeholder: 'Goat photo' },
  { number: '30', label: 'Volunteers', placeholder: 'Volunteer photo' },
  { number: '200', label: 'Great Events', placeholder: 'Event photo' },
  { number: '20,000', label: 'Classrooms Educated', placeholder: 'Classroom photo' },
];

const AboutText: React.FC = () => {
  return (
    <>
      {/* About Copy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">About Erin&rsquo;s Farm</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Erin&rsquo;s Farm is a Nonprofit 501(c)(3) Animal Sanctuary &amp; Rescue located on a 33-acre farm in
            Hobart, Indiana. Erin&rsquo;s Farm is organized exclusively for charitable, educational, and scientific
            purposes. The purpose of the corporation is not only to provide a long-term sanctuary home for previously
            abused, neglected, or at-risk animals, but more importantly to provide educational programs for
            school-aged children and adults relating to the appropriate care and treatment of animals &ndash; stressing
            the inter-relatedness of human and animal activity, as well as the protection of the environment for
            future generations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Erin Yanz, the proprietor, has an extensive 20-year background in Veterinary Technology &amp;
            Parasitology, Special Education Teaching, Managing Farm Tours, Horsemanship, Zoo Keeping, Fresh &amp;
            Marine Aquatics, Organic Gardening, and the husbandry of many reptiles, arachnids, amphibians, birds
            &amp; mammals. Erin is frequently contacted by veterinarians, police, shelters, concerned citizens, and
            animal welfare agencies to assist in the rescue or placement of abused, neglected, abandoned, and
            at-risk animals.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-gray-500 text-xs">{stat.placeholder}</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
                <p className="text-base font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutText;
