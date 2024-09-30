import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import LocationSelect from "./LocationSelect";
import DatePicker from "./DatePicker";
import TimeSelect from "./TimeSelect";

const SearchForm = () => {
  const { handleSubmit } = useForm();

  const [pickUpDate, setPickUpDate] = useState<Date>();
  const [dropOffDate, setDropOffDate] = useState<Date>();
  const [pickUpTime, setPickUpTime] = useState<string>("10:00 AM");
  const [dropOffTime, setDropOffTime] = useState<string>("10:00 AM");

  const onSubmit = (data) => {
    console.log({
      ...data,
      pickUpDate,
      dropOffDate,
      pickUpTime,
      dropOffTime,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" p-4 rounded-lg shadow-lg mx-auto space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LocationSelect
          placeholder="Pick-up location"
          onLocationChange={(location) =>
            console.log("Pick-up location:", location)
          }
        />
        <LocationSelect
          placeholder="Drop-off location"
          onLocationChange={(location) =>
            console.log("Drop-off location:", location)
          }
        />
        <div className="flex space-x-2">
          <DatePicker
            label="Pick-up date"
            selectedDate={pickUpDate}
            onSelectDate={setPickUpDate}
          />
          <TimeSelect defaultTime={pickUpTime} onTimeChange={setPickUpTime} />
        </div>
        <div className="flex space-x-2">
          <DatePicker
            label="Drop-off date"
            selectedDate={dropOffDate}
            onSelectDate={setDropOffDate}
          />
          <TimeSelect defaultTime={dropOffTime} onTimeChange={setDropOffTime} />
        </div>
      </div>
      <Button
        type="submit"
        className="border-2 border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white hover:shadow-primary font-semibold w-full"
      >
        Find my car
      </Button>
    </form>
  );
};

export default SearchForm;
