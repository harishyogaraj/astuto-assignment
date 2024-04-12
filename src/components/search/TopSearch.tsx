import Button from "../commonComponents/Button";
import { useRouter } from 'next/navigation'

const topSearchData = ["Top Cloud cost by services",
    "which application cost are increasing the fastest",
    "How much money are we",
    "which are the largest s3"];

const buttonStyle = {
    height: "58px",
    flexBasis: "calc(50% - 5px)",
    padding: "10px 20px",
    fontSize: "14px",
    border: "grey 1px solid",
    borderRadius: "12px",
    cursor: "pointer"
};

const buttonContainer: any = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px"
}

const TopSearch = ({ page }: any) => {
    const router = useRouter();

    const searchBtnHandler = (e: any, item: any) => {
        router.push(page !== 0 ? `/page${page + 1}` : '/', { scroll: false });
    }

    return (
        <div>
            {
                topSearchData ? (
                    <div style={buttonContainer}>
                        {topSearchData.map((item: any) => {
                            return (
                                <Button key={item} text={item} btnStyles={buttonStyle} btnHandler={(e: any) => searchBtnHandler(e, item)} />
                            )
                        })}
                    </div>
                ) : null
            }
        </div>
    )
};

export default TopSearch;