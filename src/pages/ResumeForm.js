import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateFormData } from '../redux/actions/resumeActions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Education from '../components/Education';
import Experience from '../components/Experience';
import PersonalInfo from '../components/PersonalInfo';
import Skills from '../components/Skills';
import './ResumeForm.css';
import ViewResume from './ViewResume';

const ResumeForm = ({ formData, updateFormData }) => {
  console.log('Resume Data:', formData);
  const [step, setStep] = useState(1);

  const handleNext = (newData) => {
    updateFormData(newData);
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleViewResume = (resumeData) => {
    console.log('Resume data:', resumeData);
    setStep(5); // Set step to 5 to show the ViewResume component
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfo
          formData={formData}
          onNext={handleNext}
          updateFormData={updateFormData}
          onBack={handleBack}
          />
        );
      case 2:
        return (
          <Education
          formData={formData}
          onNext={handleNext}
          updateFormData={updateFormData}
          onBack={handleBack}
          />
        );
      case 3:
        return (
          <Experience
          formData={formData}
          onNext={handleNext}
          updateFormData={updateFormData}
          onBack={handleBack}
          />
        );
      case 4:
        return (
          <Skills
            formData={formData}
            onBack={handleBack}
            onViewResume={handleViewResume}
          />
        );
      case 5:
        return (
          <ViewResume formData={formData} onBack={handleBack} />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <TransitionGroup>
        <CSSTransition key={step} classNames="fade" timeout={300}>
          {renderStep()}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('Resume Form State:', state.resume.formData);
  return {
    formData: state.resume.formData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFormData: (data) => dispatch(updateFormData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResumeForm);
