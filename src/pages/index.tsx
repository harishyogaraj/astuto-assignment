
import SearchBox from "@/components/search/SearchBox";
import TopSearch from "@/components/search/TopSearch";

const mainContainer: any = {
  display: "flex",
  height: "800px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: "#F2F5F9"
}

export default function Home() {

  return (
    <div style={mainContainer}>
      <SearchBox />
      <TopSearch page={1} />
    </div>
  );
}
