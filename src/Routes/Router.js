import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import Markets from "../Scenes/Markets";
import { HomeContent } from "../Scenes/HomeContent"
import { EcosystemContent } from '../Scenes/EcosystemCommunity/EcosystemContent';
import { ToolkitContent } from '../Scenes/ToolkitContent';
import { BuildingBlocksContent } from '../Scenes/BuildingBlocksContent';
import { ReportsAndInsightContent } from '../Scenes/ReportsAndInsightsContent';
import { AboutReynaContent } from '../Scenes/AboutReynaContent';
import { PressContent } from '../Scenes/PressContent';
import { FAQsContent } from '../Scenes/FAQsContent';
import { ContactContent } from '../Scenes/ContactContent';
import MainLayout from "../Layouts/MainLayout"
import { ROUTES } from "../constans/routes"

export const RootRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={ROUTES.home} element={<MainLayout/>}>
                    <Route path={ROUTES.home} element={<HomeContent />} />
                </Route>
                <Route path={ROUTES.ecosystem} element={<MainLayout/>}>
                    <Route path={ROUTES.ecosystem} element={<EcosystemContent />} />
                </Route>
                <Route path={ROUTES.toolkit} element={<MainLayout/>}>
                    <Route path={ROUTES.toolkit} element={<ToolkitContent />} />
                </Route>
                <Route path={ROUTES.buildingBlocks} element={<MainLayout/>}>
                    <Route path={ROUTES.buildingBlocks} element={<BuildingBlocksContent />} />
                </Route>
                <Route path={ROUTES.reports} element={<MainLayout/>}>
                    <Route path={ROUTES.reports} element={<ReportsAndInsightContent />} />
                </Route>
                <Route path={ROUTES.about} element={<MainLayout/>}>
                    <Route path={ROUTES.about} element={<AboutReynaContent />} />
                </Route>
                <Route path={ROUTES.press} element={<MainLayout/>}>
                    <Route path={ROUTES.press} element={<PressContent />} />
                </Route>
                <Route path={ROUTES.FAQ} element={<MainLayout/>}>
                    <Route path={ROUTES.FAQ} element={<FAQsContent />} />
                </Route>
                <Route path={ROUTES.contact} element={<MainLayout/>}>
                    <Route path={ROUTES.contact} element={<ContactContent />} />
                </Route>
                <Route path={ROUTES.markets} element={<MainLayout/>}>
                    <Route path={ROUTES.markets} element={<Markets />} />
                </Route>
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </HashRouter>
    )
}