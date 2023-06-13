import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select, { components } from 'react-select';
import { UPDATE_FORM_DATA } from '../redux/types';

const { Option } = components;

const CustomOption = (props) => (
  <Option {...props}>
    {props.data.label}
    {!props.data.isFixed && <span> (custom)</span>}
  </Option>
);

const Skills = ({ onBack, onViewResume }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);

  const handleViewResume = () => {
    const updatedFormData = {
      ...formData,
      skills: selectedSkills.map((skill) => skill.value),
    };
    dispatch({ type: UPDATE_FORM_DATA, payload: updatedFormData });
    onViewResume();
  };

  const options = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'ember', label: 'Ember.js' },
    { value: 'backbone', label: 'Backbone.js' },
    { value: 'jquery', label: 'jQuery' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'gatsby', label: 'Gatsby' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'express', label: 'Express.js' },
    { value: 'koa', label: 'Koa' },
    { value: 'nestjs', label: 'NestJS' },
    { value: 'laravel', label: 'Laravel' },
    { value: 'django', label: 'Django' },
    { value: 'rubyonrails', label: 'Ruby on Rails' },
    { value: 'flask', label: 'Flask' },
    { value: 'spring', label: 'Spring' },
    { value: 'hibernate', label: 'Hibernate' },
    { value: 'struts', label: 'Struts' },
    { value: 'dotnet', label: '.NET' },
    { value: 'aspnet', label: 'ASP.NET' },
    { value: 'mssql', label: 'Microsoft SQL Server' },
    { value: 'mysql', label: 'MySQL' },
    { value: 'postgresql', label: 'PostgreSQL' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'redis', label: 'Redis' },
    { value: 'graphql', label: 'GraphQL' },
    { value: 'apollo', label: 'Apollo GraphQL' },
    { value: 'prisma', label: 'Prisma' },
    { value: 'typeorm', label: 'TypeORM' },
    { value: 'webpack', label: 'Webpack' },
    { value: 'babel', label: 'Babel' },
    { value: 'gulp', label: 'Gulp' },
    { value: 'grunt', label: 'Grunt' },
    { value: 'rollup', label: 'Rollup' },
    { value: 'jest', label: 'Jest' },
    { value: 'mocha', label: 'Mocha' },
    { value: 'cypress', label: 'Cypress' },
    { value: 'eslint', label: 'ESLint' },
    { value: 'prettier', label: 'Prettier' },
    { value: 'storybook', label: 'Storybook' },
    { value: 'redux', label: 'Redux' },
    { value: 'mobx', label: 'MobX' },
    { value: 'ngrx', label: 'NgRx' },
    { value: 'formik', label: 'Formik' },
    { value: 'yup', label: 'Yup' },
    { value: 'tailwindcss', label: 'Tailwind CSS' },
    { value: 'sass', label: 'Sass' },
    { value: 'less', label: 'Less' },
    { value: 'stylus', label: 'Stylus' },
    { value: 'bootstrap', label: 'Bootstrap' },
    { value: 'materialui', label: 'Material-UI' },
    { value: 'antdesign', label: 'Ant Design' },
    { value: 'semanticui', label: 'Semantic UI' },
    { value: 'bulma', label: 'Bulma' },
    { value: 'ionic', label: 'Ionic' },
    { value: 'cordova', label: 'Apache Cordova' },
    { value: 'electron', label: 'Electron' },
    { value: 'jest', label: 'Jest' },
    { value: 'enzyme', label: 'Enzyme' },
    { value: 'chai', label: 'Chai' },
    { value: 'sinon', label: 'Sinon.js' },
    { value: 'nyc', label: 'Istanbul (nyc)' },
    { value: 'reactnative', label: 'React Native' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'swift', label: 'Swift' },
    { value: 'kotlin', label: 'Kotlin' },
    { value: 'java', label: 'Java' },
    { value: 'python', label: 'Python' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'php', label: 'PHP' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'scss', label: 'SCSS' },
    { value: 'sass', label: 'Sass' },
    { value: 'less', label: 'Less' },
    { value: 'stylus', label: 'Stylus' },
    { value: 'webpack', label: 'Webpack' },
    { value: 'babel', label: 'Babel' },
    { value: 'gulp', label: 'Gulp' },
    { value: 'grunt', label: 'Grunt' },
    { value: 'rollup', label: 'Rollup' },
    { value: 'jest', label: 'Jest' },
  ];

  const handleSkillChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue) {
        const existingOption = options.find((option) => option.value === inputValue);
        if (!existingOption) {
          const newOption = { value: inputValue, label: inputValue, isFixed: false };
          setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, newOption]);
        }
        setInputValue('');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className='w-full max-w-4xl bg-white rounded-lg shadow-md'>
      <label className='text-2xl flex justify-center font-bold mb-2' htmlFor="skills">Skills</label>
      <Select
        id="skills"
        options={options}
        isMulti
        value={selectedSkills}
        inputValue={inputValue}
        onChange={handleSkillChange}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        components={{ Option: CustomOption }}
        formatCreateLabel={(inputValue) => `Add "${inputValue}" as a new skill`}
        isClearable
        isCreatable
      />
      <div className='w-full flex justify-center'>
      <div className="mt-4 w-2/4 flex justify-between px-10 mb-5">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-500 text-white px-10 py-2 rounded-md mr-2"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleViewResume}
          className="bg-blue-500 text-white px-10 py-2 rounded-md"
        >
          View Resume
        </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
