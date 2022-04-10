import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loader from "../../components/atomic-ui/atoms/loader/loader";
import MissionPage from "../../components/pages/mission/missionpage";
import { GET_PAST_LAUNCH } from "../../services/graphql/queries/pastLaunch";
import { getMission } from "../../utilities";

const Mission = () => {
    const { launchID } = useParams();
    const { loading, error, data } = useQuery(GET_PAST_LAUNCH,
        {
            variables: {launchID}
        });

    if (loading) return <Loader />;
    if (error) return <p>Error :(</p>;

    const mission = getMission(data.launch);

    return (
        <MissionPage mission={mission}/>
    );
}

export default Mission;