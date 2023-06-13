import React, { useState } from 'react';

const Education = ({formData, onNext, onBack, updateFormData }) => {
  const [educationList, setEducationList] = useState(formData.educationList || [{ institute: '', year: '', degree: '' }]);

  const handleNext = (e) => {
    e.preventDefault();
    updateFormData({ educationList });
    onNext();
  };

  const handleBack = (e) => {
    e.preventDefault();
    updateFormData({ educationList });
    onBack();
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...educationList];
    list[index][name] = value;
    setEducationList(list);
  };

  const handleAddEducation = () => {
    setEducationList([...educationList, { institute: '', year: '', degree: '' }]);
  };

  const handleRemoveEducation = (index) => {
    const list = [...educationList];
    list.splice(index, 1);
    setEducationList(list);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className='w-full max-w-4xl bg-white rounded-lg shadow-md'>
      <h2 className="text-2xl flex justify-center font-bold mb-2">Education</h2>
      {educationList.map((education, index) => (
        <div key={index} className="mb-2 flex ml-10">
          <input
            type="text"
            name="institute"
            placeholder="Institute"
            value={education.institute}
            onChange={(event) => handleInputChange(index, event)}
            className="border rounded-md p-2 mr-2 w-64"
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={education.year}
            onChange={(event) => handleInputChange(index, event)}
            className="border rounded-md p-2 mr-2 w-24"
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={(event) => handleInputChange(index, event)}
            className="border rounded-md p-2 mr-2 w-64"
          />
          {index === educationList.length - 1 && (
            <button
              type="button"
              onClick={handleAddEducation}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Add More
            </button>
          )}
          {index !== 0 && (
            <button
              type="button"
              onClick={() => handleRemoveEducation(index)}
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

export default Education;
