import { Link } from "react-router-dom";

export const Dashboard = () => {

    return <div>
        <h2>Welcome to Dashboard</h2>
        <Link to="/dashboard/settings"  style={{margin: '10px', textDecoration: "none", color: "ButtonText"}}>Settings</Link>
    </div>
}