import Link from "next/link";
import TextMessage from "../commonComponents/TextMessage";

const linkStyle = {
    color: "green"
};

const textStyle = {
    fontFamily: "sans-serif",
    lineHeight: "30px"
};

const columnContainer: any = {
    display: "flex",
    alignItems: "center"
};

const line = {
    flex: 1,
    borderBottom: "1px solid black"
};

const boldStyle = {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    lineHeight: "30px"
};

const areasContainer = {
    border: "green 2px solid",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "15px"
};

const searchResultContainer = {
    background: 'white',
    padding: "20px",
    borderRadius: "15px",
    margin: "20px 20"
}

const SearchResult = () => {
    return (
        <div style={searchResultContainer}>
            <div style={textStyle}>
                You can save $2500 per month overall in EC2 costs. <Link style={linkStyle} href='/'> Click here </Link> to access a detailed report.
            </div>
            <TextMessage text={"Here are your top 2 saving areas:"} />
            <div style={columnContainer}>
                <TextMessage text={"Top 2 saving areas"} />
                <span style={line}></span>
            </div>
            <div style={areasContainer}>
                <TextMessage text={"Bucket xyz-logs-1 (production account #12345)"} textStyles={boldStyle} />
                <TextMessage text={"This bucket has 1 TB of data, and it does not use any storage tiers. There is more than 500 GB of data that has not been accessed. You can save $1000 by deleting that data or $700 by moving them to lower tier"} />
            </div>
            <div style={areasContainer}>
                <TextMessage text={"Bucket abc-user-1 (production account #12345)"} textStyles={boldStyle} />
                <TextMessage text={"This bucket has abnormally high reads and writes cost of $5000 per month, increasing by the day. Consider reading smaller chunks of data or changing your storage that is more cost effective for reads and writes"} />
            </div>
            <div style={columnContainer}>
                <TextMessage text={"You might also want to know"} />
                <span style={line}></span>
            </div>
        </div>
    )
};

export default SearchResult;