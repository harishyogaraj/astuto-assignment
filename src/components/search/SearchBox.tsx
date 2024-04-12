import React, { useState } from 'react';
import Image from 'next/image';
import ArrowImage from './../../../public/images/rightArrow.png';
import codeIcon from './../../../public/images/code.png';

const searchBoxContainer = {
    width: "60%",
};

const searchWrapper = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const searchBoxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
    width: "100%"
};

const inputStyle = {
    border: "none",
    width: "90%",
    height: "90%",
    marginLeft: "15px",
    outline: "none",
    borderColor: "transparent",
    background: "#F2F5F9"
}

const searchStyle = {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
    height: "52px",
    width: "100%",
    border: "grey 1px solid",
    borderRadius: "15px"
}

const SearchBox = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: any) => {
        setQuery(event.target.value);
    };

    return (
        <div style={searchWrapper}>
            <div style={searchBoxContainer}>
                <div style={searchBoxStyle}>
                    <div style={searchStyle}>
                        <input
                            type="text"
                            style={inputStyle}
                            placeholder="Search..."
                            value={query}
                            onChange={handleInputChange}
                        />
                        <Image src={codeIcon} alt="codeIcon" width={20} height={20} />
                        <Image src={ArrowImage} alt="arrow" width={15} height={15} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
