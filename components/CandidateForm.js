import { Descriptions } from "antd"

export default function CandidateForm({data}) {

    console.log("data",data);
    return (
        <div>
            <Descriptions title="Personal Data" bordered>
                <Descriptions.Item label="Name">{data.personalData.name}</Descriptions.Item>
                <Descriptions.Item label="Personal Email">{data.personalData.personalEmail}</Descriptions.Item>
                <Descriptions.Item label="Personal Email">{data.personalData.personalEmail}</Descriptions.Item>
                <Descriptions.Item label="VIT Email">{data.personalData.vitEmail}</Descriptions.Item>
                <Descriptions.Item label="College Year">{data.personalData.collegeYear}</Descriptions.Item>
                <Descriptions.Item label="Course">{data.personalData.course}</Descriptions.Item>
                <Descriptions.Item label="Registeration Number">{data.personalData.registerationNumber}</Descriptions.Item>
                <Descriptions.Item label="Date Preference">{data.personalData.datePreference}</Descriptions.Item>
                <Descriptions.Item label="Time Preference">{data.personalData.timePreference}</Descriptions.Item>
            </Descriptions>
            <br/>
            <Descriptions title="Department applied for" bordered>
                {
                    data && Object.entries(data.departmentData).map((entry, index) => {
                        return (
                            <Descriptions.Item label={entry[0]} key={index}>{entry[1].reason}</Descriptions.Item>
                        )
                    }
                    )
                }
            </Descriptions>

        </div>
    )
}
