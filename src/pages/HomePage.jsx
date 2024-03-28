import Hero from "../components/Hero";
import Homecard from "../components/Homecard";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Homecard />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
