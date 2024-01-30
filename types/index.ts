import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: string;
}

export interface SearchMakeProps {
    selected: string;
    setSelected: (make: string) => void;
}

export interface CarProps {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

export interface FilterProps {
    make: string;
    model: string;
    year: number;
    fuel: string;
    limit: number;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
    setFilter: (value: any) => void;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (value: number) => void;
}

export interface SearchBarProps {
    setMake: (value: string) => void;
    setModel: (value: string) => void;
}