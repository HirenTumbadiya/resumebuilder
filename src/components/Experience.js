import React, { useState } from 'react';

const Experience = ({formData, onNext, onBack, updateFormData }) => {
  const [experienceList, setExperienceList] = useState(formData.experienceList || [{ company: '', year: '', designation: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...experienceList];
    list[index][name] = value;
    setExperienceList(list);
  };

  const handleNext = (e) => {
    e.preventDefault();
    updateFormData({ experienceList });
    onNext();
  };

  const handleBack = (e) => {
    e.preventDefault();
    updateFormData({ experienceList });
    onBack();
  };

  const handleAddExperience = () => {
    setExperienceList([...experienceList, { company: '', year: '', designation: '' }]);
  };

  const handleRemoveExperience = (index) => {
    const list = [...experienceList];
    list.splice(index, 1);
    setExperienceList(list);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className='w-full max-w-4xl bg-white rounded-lg shadow-md'>
      <h2 className="text-2xl flex justify-center font-bold mb-2">Experience</h2>
      {experienceList.map((experience, index) => (
        <div key={index} className="mb-2 flex ml-10">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={experience.company}
            onChange={(event) => handleInputChange(index, event)}
            className="border rounded-md p-2 mr-2 w-64"
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={experience.year}
            onChange={(event) => handleInputChange(index, event)}
            className="border rounded-md p-2 mr-2 w-24"
          />
          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={experience.designation}
            onChange={(event) => handleInputChange(index, event)}
            className="border rounded-md p-2 mr-2 w-64"
          />
          {index === experienceList.length - 1 && (
            <button
              type="button"
              onClick={handleAddExperience}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Add More
            </button>
          )}
          {index !== 0 && (
            <button
              type="button"
              onClick={() => handleRemoveExperience(index)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Remove
            </button>
          )}
        </div>
      ))}
<div className='w-full flex justify-center'>
      <div className="mt-4 w-2/4 flex justify-between px-10 mb-5">
        <button type="button" onClick={handleBack} className="bg-gray-500 text-white px-10 py-2 rounded-md mr-2">
          Back
        </button>
        <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-10 py-2 rounded-md">
          Next
        </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Experience;
