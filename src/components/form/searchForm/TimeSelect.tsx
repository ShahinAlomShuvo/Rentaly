import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TimeSelectProps {
  defaultTime: string;
  onTimeChange: (time: string) => void;
}

const TimeSelect: React.FC<TimeSelectProps> = ({
  defaultTime,
  onTimeChange,
}) => {
  return (
    <Select onValueChange={onTimeChange}>
      <SelectTrigger className="w-[120px] bg-[#F0F0F0] text-gray-500">
        <SelectValue placeholder={defaultTime} />
      </SelectTrigger>
      <SelectContent>
        {/* AM Times */}
        <SelectItem value="1:00 AM">1:00 AM</SelectItem>
        <SelectItem value="2:00 AM">2:00 AM</SelectItem>
        <SelectItem value="3:00 AM">3:00 AM</SelectItem>
        <SelectItem value="4:00 AM">4:00 AM</SelectItem>
        <SelectItem value="5:00 AM">5:00 AM</SelectItem>
        <SelectItem value="6:00 AM">6:00 AM</SelectItem>
        <SelectItem value="7:00 AM">7:00 AM</SelectItem>
        <SelectItem value="8:00 AM">8:00 AM</SelectItem>
        <SelectItem value="9:00 AM">9:00 AM</SelectItem>
        <SelectItem value="10:00 AM">10:00 AM</SelectItem>
        <SelectItem value="11:00 AM">11:00 AM</SelectItem>
        <SelectItem value="12:00 PM">12:00 PM</SelectItem>

        {/* PM Times */}
        <SelectItem value="1:00 PM">1:00 PM</SelectItem>
        <SelectItem value="2:00 PM">2:00 PM</SelectItem>
        <SelectItem value="3:00 PM">3:00 PM</SelectItem>
        <SelectItem value="4:00 PM">4:00 PM</SelectItem>
        <SelectItem value="5:00 PM">5:00 PM</SelectItem>
        <SelectItem value="6:00 PM">6:00 PM</SelectItem>
        <SelectItem value="7:00 PM">7:00 PM</SelectItem>
        <SelectItem value="8:00 PM">8:00 PM</SelectItem>
        <SelectItem value="9:00 PM">9:00 PM</SelectItem>
        <SelectItem value="10:00 PM">10:00 PM</SelectItem>
        <SelectItem value="11:00 PM">11:00 PM</SelectItem>
        <SelectItem value="12:00 AM">12:00 AM</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TimeSelect;
