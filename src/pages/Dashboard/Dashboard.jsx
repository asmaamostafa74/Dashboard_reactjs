import Numbers from "../../components/Dashboard/Numbers"
import Step2 from "../../components/Dashboard/Step2"
import Step3 from "../../components/Dashboard/step3"
import Step4 from "../../components/Dashboard/Step4"

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <Numbers />
            <Step2 />
            <Step3 />
            <Step4 />
        </div>
    )
}

export default Dashboard
