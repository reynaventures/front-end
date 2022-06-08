import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { AboutReyna } from "./AboutReynaPage/AboutReyna"
import { AllProducts } from "./AllProductsPage/AllProducts"
import { BuildingBlocks } from "./BuildingBlocksPage/BuildingBlocks"
import { Contact } from "./ContactPage/Contact"
import { Ecosystem } from "./EcosystemPage.js/Ecosystem"
import { FAQs } from "./FAQsPage/FAQs"
import { Home } from "./Home"
import { Press } from "./PressPage/Press"
import { ReportsAndInsight } from "./ReportsAndInsightsPage/ReportsAndInsights"
import { Toolkit } from "./ToolkitPage/Toolkit"
import { Wayc } from "./WaycPage/Wayc"
import { Wmyc } from "./WmycPage/Wmyc"

export const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/ecosystem" element={<Ecosystem />} />
                <Route path="/toolkit" element={<Toolkit />} />
                <Route path="/building-blocks" element={<BuildingBlocks />} />
                <Route path="/reports-and-insights" element={<ReportsAndInsight />} />
                <Route path="/about-reyna" element={<AboutReyna />} />
                <Route path="/press" element={<Press />} />
                <Route path="/FAQs" element={<FAQs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/wayc" element={<Wayc />} />
                <Route path="/wmyc" element={<Wmyc />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </HashRouter>
    )
}