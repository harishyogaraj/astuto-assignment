import TextMessage from "@/components/commonComponents/TextMessage";
import Feedback from "@/components/feedback/Feedback";
import SearchBox from "@/components/search/SearchBox";
import SearchResult from "@/components/search/SearchResult2";
import TopSearch from "@/components/search/TopSearch";
import Image from "next/image";
import user from '../../public/images/user.png';

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
  borderRadius: "12px",
  display: "flex",
  columnGap: "20px",
  alignItems: "center"
}

const page2 = () => {

  const searchResults = "Top Cloud cost by services"

  return (
    <div style={mainContainer}>

      <div style={searchResultContainer}>
        <div style={searchStyle}>
          <Image src={user} alt="userIcon" width={20} height={20} />
          <TextMessage text={searchResults} />
        </div>
      </div>
      <SearchResult />
      <Feedback />
      <TopSearch page={0} />
      <SearchBox />
    </div>
  )
};

export default page2;