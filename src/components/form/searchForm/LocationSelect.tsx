import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TLocationSelectProps = {
  placeholder: string;
  onLocationChange: (location: string) => void;
};

const LocationSelect = ({
  placeholder,
  onLocationChange,
}: TLocationSelectProps) => {
  return (
    <Select onValueChange={onLocationChange}>
      <SelectTrigger className="w-full bg-[#F0F0F0] text-gray-500">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Dhaka">Dhaka</SelectItem>
        <SelectItem value="Chittagong">Chittagong</SelectItem>
        <SelectItem value="Rajshahi">Rajshahi</SelectItem>
        <SelectItem value="Khulna">Khulna</SelectItem>
        <SelectItem value="Barisal">Barisal</SelectItem>
        <SelectItem value="Sylhet">Sylhet</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LocationSelect;
