import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../components/DashboardLayout";
import PortfolioSection from "../components/PortfolioSection";
import PriceSection from "../components/PriceSection";
import Transaction from "../components/Transaction";

const Dashboard = () => {
    return (
        <div>
            <DashboardLayout title="Dashboard">
                <Grid
                    gridTemplateColumns={{
                        base: "repeat(1,1fr)",
                        md: "repeat(2,1fr)",
                    }}
                    gap={6}
                >
                    <GridItem colSpan={2}>
                        <PortfolioSection />
                    </GridItem>
                    <GridItem >
                        <PriceSection />
                    </GridItem>
                    <GridItem >
                        <Transaction />
                    </GridItem>
                </Grid>
            </DashboardLayout>
        </div>
    );
};

export default Dashboard;
