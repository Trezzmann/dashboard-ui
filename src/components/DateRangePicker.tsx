import { ChangeEventHandler, useState } from "react";
import {
  Flex,
  Input,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Button,
} from "@chakra-ui/react";
import { BsCalendar4Event } from "react-icons/bs";
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler,
} from "react-day-picker";
import { format, isAfter, isBefore, isValid, parse } from "date-fns";
import "react-day-picker/dist/style.css";

export const DateRangePicker = () => {
  const [selectedRange, setSelectedRange] = useState<typeof DateRange>();
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");

  const handleFromChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, "dd-MM-y", new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };

  const handleToChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, "dd-MM-y", new Date());

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };

  const handleRangeSelect: typeof SelectRangeEventHandler = (
    range: typeof DateRange | undefined
  ) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, "dd-MM-y"));
    } else {
      setFromValue("");
    }
    if (range?.to) {
      setToValue(format(range.to, "dd-MM-y"));
    } else {
      setToValue("");
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"ghost"} px={0} role="group">
          <Flex
            maxW={"fit-content"}
            align="center"
            border="1px solid #dfdfdf"
            borderRadius="lg"
            pl="3"
            py={"2.5"}
            bg="#fff"
            _groupHover={{ border: `1px solid #4D0B84` }}
            transition="all ease 300ms"
          >
            <Box color="gray.30" pr={2} fontSize="xl">
              <BsCalendar4Event />
            </Box>
            <Input
              placeholder="Start date"
              htmlSize={11}
              w="auto"
              variant="unstyled"
              value={fromValue}
              onChange={handleFromChange}
              readOnly
            />
            <Text mr={5}>To</Text>
            <Input
              placeholder="End date"
              variant="unstyled"
              htmlSize={12}
              w="auto"
              value={toValue}
              onChange={handleToChange}
              readOnly
            />
          </Flex>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <DayPicker
          mode="range"
          selected={selectedRange}
          onSelect={handleRangeSelect}
        />
      </PopoverContent>
    </Popover>
  );
};
