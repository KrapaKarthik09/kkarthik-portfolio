import React from 'react';

const Certifications = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Certifications</h2>
        <div className="flex justify-center gap-8">
          <div>
            <img src="/path/to/cert1-logo.png" alt="AWS" className="w-20 mx-auto"/>
            <p className="mt-2 text-lg font-semibold">AWS Solutions Architect Professional (SAP)</p>
          </div>
          <div>
            <img src="/path/to/cert2-logo.png" alt="GCP" className="w-20 mx-auto"/>
            <p className="mt-2 text-lg font-semibold">GCP Associate Cloud Engineer (ACE)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
