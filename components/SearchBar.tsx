"use client";

import { useState } from "react";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { SearchMake } from "./";

const SearchButton = ({ styling }: { styling: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${styling}`}>
        <Image src="/magnifying-glass.svg" alt="Magnifying glass" width={40} height={40} className="object-contain" />
    </button>
);

const SearchBar = () => {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const Router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (make === "" && model === "") {
            return alert("Please fill in the search bar")
        } else {
            updateSearchParams(model.toLowerCase(), make.toLowerCase());
        }
    }

    const updateSearchParams = (model: string, make: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if (model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");

            if (make) {
                searchParams.set("make", make);
            } else {
                searchParams.delete("make");
            }

            const newPathname = `${window.location.pathname}?${searchParams.toString()}`
            Router.push(newPathname);
        }
    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchMake make={make} setMake={setMake} />

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
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Golf"
                    className="searchbar__input" />
                <SearchButton styling="sm:hidden" />
            </div>
            <SearchButton styling="max-sm:hidden" />
        </form>
    )
}

export default SearchBar