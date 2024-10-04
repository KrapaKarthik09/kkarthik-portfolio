import React from 'react';

const Projects = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects/POCs</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Notepad with Speech Recognition Assistant</h3>
            <p className="mt-4">A simple notepad with Python TK GUI interface toolkit but with Microsoft's Speech Recognition and Speech Synthesis Engine - Sapi 5 based assistant features.</p>
            <a href="https://github.com/KrapaKarthik09/notepad-with-assistant/blob/master/README.md" className="block mt-4 text-blue-500">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
