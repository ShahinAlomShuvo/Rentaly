import { useGetCarsQuery } from "@/redux/api/car/carApi";
import SectionHeader from "../layouts/SectionHeader";
import Card from "../layouts/Card";
import { TCarCard } from "@/type";
import Container from "../container/Container";

const Features = () => {
  const { data, isLoading } = useGetCarsQuery(null);
  return (
    <Container>
      <SectionHeader
        title="Features"
        subtitle="Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions."
      />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
          {data?.map((car: TCarCard) => (
            <Card key={car.id} {...car} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Features;
