"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchMake } from "./";
import { SearchBarProps } from "@/types";


const SearchButton = ({ styling }: { styling: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${styling}`}>
        <Image src="/magnifying-glass.svg" alt="Magnifying glass" width={40} height={40} className="object-contain" />
    </button>
);

const SearchBar = ({ setMake, setModel }: SearchBarProps) => {
    const [searchMake, setSearchMake] = useState("");
    const [searchModel, setSearchModel] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchMake === "" && searchModel === "") {
            return alert("Please fill in the search bar")
        }
        setModel(searchModel);
        setMake(searchMake);
    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchMake selected={searchMake} setSelected={setSearchMake} />

                <SearchButton styling="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="car model"
                />
                <input
                    type="text"
                    name="model"
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder="Golf"
                    className="searchbar__input" />
                <SearchButton styling="sm:hidden" />
            </div>
            <SearchButton styling="max-sm:hidden" />
        </form>
    )
}

export default SearchBar