import React from 'react';

const Skills = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <img src="/path/to/python-logo.png" alt="Python" className="w-20 mx-auto"/>
            <p className="mt-2 text-lg font-semibold">Python</p>
          </div>
          <div>
            <img src="/path/to/svm-logo.png" alt="AWS" className="w-20 mx-auto"/>
            <p className="mt-2 text-lg font-semibold">AWS</p>
          </div>
          <div>
            <img src="/path/to/cyber-logo.png" alt="GCP" className="w-20 mx-auto"/>
            <p className="mt-2 text-lg font-semibold">GCP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
