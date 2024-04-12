import TextMessage from "@/components/commonComponents/TextMessage";
import Feedback from "@/components/feedback/Feedback";
import SearchBox from "@/components/search/SearchBox";
import SearchResult from "@/components/search/SearchResult3";
import TopSearch from "@/components/search/TopSearch";
import { useState } from "react";


const mainContainer: any = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#F2F5F9"
  }
  
  const searchResultContainer = {
    padding: "20px",
    width: "85%"
  }
  
  const searchStyle = {
    height: "40px",
    padding: "10px 16px 20px",
    fontSize: "16px",
    background: "#CCD8E4",
    borderRadius: "12px"
  }

const page2 = () => {

    // const [searchResults, setSearchResults] = useState('');

    return (
        <div style={mainContainer}>
      
      {/* {searchResults && ( */}
        <div style={searchResultContainer}>
        <div style={searchStyle}>
          {/* <TextMessage text={searchResults} /> */}
        </div>
        <SearchResult />
        </div>
      {/* )} */}
      
      <Feedback />
      <TopSearch page={0} />
      <SearchBox />
    </div>
    )
};

export default page2;