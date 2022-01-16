import { Steps } from "antd"
const {Step} = Steps;
import { useContext } from "react";
import AppContext from "../context/state";
export default function FormSteps() {
    const value = useContext(AppContext);
    return (
        <div>
            <Steps
                current={value.state.formState}
                size="small"
                style={{
                    marginTop: "4rem",
                    paddingTop : "7rem",
                    paddingTop : "2rem",
                    marginLeft : "2rem",
                    marginBottom : "2rem",
                    width : "50%",
                    
                }}
            >
                <Step title="Sign in"/>
                <Step title="Personal Data" />
                <Step title="Department Data" />
                <Step title="Done" />
            </Steps>
        </div>
    )
}
