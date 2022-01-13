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
            >
                <Step title="Sign in"/>
                <Step title="Personal Data" />
                <Step title="Department Data" />
                <Step title="Done" />
            </Steps>
        </div>
    )
}
