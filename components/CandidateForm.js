import { Descriptions } from 'antd';
import departmentQuestions from './DepartmentForm';

export default function CandidateForm({ data }) {
  return (
    <div style={{ width: '95%', margin: '0 auto' }}>
      <Descriptions title='Personal Data' bordered>
        <Descriptions.Item label='Name'>
          {data.personalData.name}
        </Descriptions.Item>
        <Descriptions.Item label='Personal Email'>
          {data.personalData.personalEmail}
        </Descriptions.Item>
        <Descriptions.Item label='VIT Email'>
          {data.personalData.vitEmail}
        </Descriptions.Item>
        <Descriptions.Item label='Phone Number'>
          {data.personalData.phoneNumber}
        </Descriptions.Item>
        <Descriptions.Item label='College Year'>
          {data.personalData.collegeYear}
        </Descriptions.Item>
        <Descriptions.Item label='Course'>
          {data.personalData.course}
        </Descriptions.Item>
        <Descriptions.Item label='Registeration Number'>
          {data.personalData.registerationNumber}
        </Descriptions.Item>
        <Descriptions.Item label='Date Preference'>
          {data.personalData.datePreference} August, 2023
        </Descriptions.Item>
        <Descriptions.Item label='Time Preference'>
          {data.personalData.timePreference}
        </Descriptions.Item>
      </Descriptions>
      <br />
      {data.interview && data.interview.status != 'not_assigned' && (
        <Descriptions title='Interview' bordered>
          <Descriptions.Item label='Date Assign'>
            {data.interview.date}
          </Descriptions.Item>
          <Descriptions.Item label='Time Assign'>
            {data.interview.time}
          </Descriptions.Item>
        </Descriptions>
      )}
      <br></br>
      <Descriptions title='Department(s) applied for' bordered>
        {Object.entries(data.departmentData).map(
          ([department, questions], index) => (
            <Descriptions.Item label={department} key={index}>
              {Object.entries(questions).map(([questionKey, answer], idx) => (
                <div key={idx}>
                  {answer}
                  <p></p>
                </div>
              ))}
            </Descriptions.Item>
          )
        )}
      </Descriptions>
    </div>
  );
}
