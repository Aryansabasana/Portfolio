import Section from './Section';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'TechFlow Solutions',
    period: '2023 - Present',
    description: 'Leading the frontend team in rebuilding the core product dashboard. Improved performance by 40% and established a new design system.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Creative Agency',
    period: '2021 - 2023',
    description: 'Developed custom web applications for diverse clients. Managed end-to-end delivery from database design to frontend implementation.',
  },
  {
    role: 'Junior Developer',
    company: 'StartUp Inc',
    period: '2020 - 2021',
    description: 'Collaborated with senior developers to implement new features. Gained deep experience in React ecosystem and agile methodologies.',
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
        <p className="text-gray-600 max-w-2xl">
          My professional journey and the value I've delivered along the way.
        </p>
      </div>

      <div className="relative border-l border-gray-200 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-600 ring-4 ring-white" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
              <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                {exp.period}
              </span>
            </div>
            
            <div className="text-base font-medium text-gray-700 mb-2">{exp.company}</div>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
