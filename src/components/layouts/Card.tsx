import { TCarCard } from "@/type";
import { Button } from "../ui/button";

const Card = ({ img, title, desc, price }: TCarCard) => {
  return (
    <div className="p-2 border border-gray-600 rounded-md text-white space-y-4">
      <div className="overflow-hidden rounded-lg">
        {" "}
        {/* Container for image */}
        <img
          src={img}
          alt="car-img"
          className="rounded-lg transform transition duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-400">{desc}</p>
      <hr />
      <div className="flex justify-between">
        <div>
          <p>Daily rate from</p>
          <strong>${price}</strong>
        </div>
        <Button className="bg-primaryColor hover:bg-primaryColor/80 font-bold">
          Rent now
        </Button>
      </div>
    </div>
  );
};

export default Card;
