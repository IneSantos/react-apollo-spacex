import { useQuery } from "@apollo/client";
import { GET_PAST_LAUNCHES } from "../../services/graphql/queries/pastLaunches";
import { getPastMissions } from "../../utilities";
import Homepage from "../../components/pages/homepage/homepage";
import Loader from "../../components/atomic-ui/atoms/loader/loader";

const Home = () => {
  const { loading, error, data } = useQuery(GET_PAST_LAUNCHES);

  if (loading) return <Loader />
  if (error) return <p>Error :(</p>;

  const missions = getPastMissions(data.launchesPast);

  return (
    <Homepage missions={missions}/>
  );
}

export default Home;