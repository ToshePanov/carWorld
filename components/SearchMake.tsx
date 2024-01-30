"use client";

import Image from "next/image";

import { useState, Fragment } from "react";

import { SearchMakeProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";

import { makes } from "@/constants";


const SearchMake = ({ selected, setSelected }: SearchMakeProps) => {
    const [query, setQuery] = useState("");

    const filteredMakes = query === ""
        ? makes
        : makes.filter((item) => (
            item.toLowerCase().replace(/\s+/g, "").includes(
                query.toLowerCase().replace(/\s+/g, "")
            )
        ))

    return (
        <div className="search-make">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]" >
                        <Image src="car-logo.svg" width={20} height={20} className="ml-4" alt="Car Logo" />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-make__input"
                        placeholder="Volkswagen"
                        displayValue={(make: string) => make}
                        onChange={(e) => setQuery(e.target.value)} />
                    <Transition as={Fragment} leave="transition ease-in duration-100"
                        leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery('')}>
                        <Combobox.Options>
                            {filteredMakes.length === 0 && query !== "" ? (
                                <Combobox.Option value={query} className="search-make__option">
                                    No results found for {query}
                                </Combobox.Option>
                            ) : (
                                filteredMakes.map((item) => (
                                    <Combobox.Option key={item} className={({ active }) => `
                                    relative search-make__option ${active ? 'bg-primary-orange text-white' : 'text-gray-900'}
                                    `}
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                    {item}
                                                </span>

                                                {/* Show an active orange background color if the option is selected */}
                                                {selected ? (
                                                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 
                                                    ${active ? "text-white" : "text-pribg-primary-orange"}`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchMake