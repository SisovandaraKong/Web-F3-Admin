import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTranslation } from "react-i18next";  
import "./i18n"; 

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-black text-4xl font-bold">{t("dashboard")}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
        {/* Total Users Card */}
        <div className="px-5 py-7 border flex justify-between items-center rounded-lg">
          <div>
            <h2 className="text-md">{t("totalUsers")}</h2> {/* Translate "Total Users" */}
            <p className="text-4xl font-bold mt-5">40 545</p>
          </div>
          <FaUsers className="text-[45px] text-secondary" />
        </div>
        {/* Total Business Owners Card */}
        <div className="px-5 py-7 border flex justify-between items-center rounded-lg">
          <div>
            <h2 className="text-md">{t("totalBusinessOwners")}</h2> {/* Translate "Total Business Owners" */}
            <p className="text-4xl font-bold mt-5">23 439</p>
          </div>
          <FaUser className="text-[45px] text-secondary" />
        </div>
        {/* Total Job Seekers Card */}
        <div className="px-5 py-7 border flex justify-between items-center rounded-lg">
          <div>
            <h2 className="text-md">{t("totalJobSeekers")}</h2> {/* Translate "Total Job Seekers" */}
            <p className="text-4xl font-bold mt-5">12 378</p>
          </div>
          <FaUserTie className="text-[45px] text-secondary" />
        </div>
        {/* Total Freelancers Card */}
        <div className="px-5 py-7 border flex justify-between items-center rounded-lg">
          <div>
            <h2 className="text-md">{t("totalFreelancers")}</h2> {/* Translate "Total Freelancers" */}
            <p className="text-4xl font-bold mt-5">4035</p>
          </div>
          <FaUserGroup className="text-[45px] text-secondary" />
        </div>
      </div>
      <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />

<BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />

<BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </>
  );
}

export default App;
