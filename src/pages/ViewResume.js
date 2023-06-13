import React from 'react';
import { useSelector } from 'react-redux';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 12,
  },
});

const ViewResume = () => {
  const formData = useSelector((state) => state.resume.formData);
  console.log(formData);

  const renderResumeContent = () => (
    <Document>
      <Page className="flex" size="A4" style={styles.page}>
        <View className="flex flex-col font-semibold" style={styles.section}>
          <Text className="flex" style={styles.title}>Personal Information:</Text>
          <Text style={styles.content}>
            Name: {formData.firstName} {formData.lastName}
          </Text>
          <Text style={styles.content}>Email: {formData.email}</Text>
          <Text style={styles.content}>Address: {formData.address}</Text>
          <Text style={styles.content}>Phone: {formData.phone}</Text>
        </View>

        <View className="flex flex-col font-semibold" style={styles.section}>
          <Text className="flex" style={styles.title}>Education:</Text>
          {formData.educationList.map((education, index) => (
            <View className="flex flex-col" key={index}>
              <Text style={styles.content}>Institute: {education.institute}</Text>
              <Text style={styles.content}>Year: {education.year}</Text>
              <Text style={styles.content}>Degree: {education.degree}</Text>
            </View>
          ))}
        </View>

        <View className="flex flex-col font-semibold" style={styles.section}>
          <Text className="flex" style={styles.title}>Experience</Text>
          {formData.experienceList.map((experience, index) => (
            <View className="flex flex-col" key={index}>
              <Text style={styles.content}>Company: {experience.company}</Text>
              <Text style={styles.content}>Year: {experience.year}</Text>
              <Text style={styles.content}>Designation: {experience.designation}</Text>
            </View>
          ))}
        </View>

        <View className="flex flex-col font-semibold" style={styles.section}>
          <Text className="flex" style={styles.title}>Skills</Text>
          <View className="flex gap-5">
          {formData.skills.map((skill, index) => (
              <Text key={index} style={styles.content}>
                {skill}
              </Text>
          ))}
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <div className='flex justify-center items-center text-2xl m-5 font-bold'>
      <h1>View Resume</h1>
      </div>
      {renderResumeContent()}

      <PDFDownloadLink className='flex m-5 w-48 justify-center items-center  bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600' document={renderResumeContent()} fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download as PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default ViewResume;
