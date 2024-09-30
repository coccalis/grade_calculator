import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Tab,
  Tabs,
  Tooltip,
} from "@nextui-org/react";
import grade_calc_logo from "../assets/images/grade_calc_logo.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/languageSelector";
import CalculateGradeToPass from "../components/CalculateGradeToPass";
import CalculateAchievedGrade from "../components/CalculateAchievedGrade";
import QuestionMark from "../assets/icons/QuestionMark";
import { useState } from "react";

function Calculator() {
  const { t } = useTranslation();

  const [selectedTab, setSelectedTab] = useState("calc_grade");

  const tooltipContent =
    selectedTab === "calc_grade" ? t("toolTip1") : t("toolTip2");
  return (
    <>
      <main className="h-lvh">
        <div className="w-full flex justify-center ps-5">
          <Image src={grade_calc_logo} width={350} className="my-10" />
        </div>
        <div className="flex justify-center ">
          <Card className="xsm:w-auto md:w-6/12 bg-[#f5f7fa] xsm:mx-5 md:mx-0 ">
            <CardBody>
              <Tabs
                aria-label="Options"
                size="lg"
                color="primary"
                isVertical={false}
                className="flex flex-col space-x-10"
                classNames={{
                  base: " bg-[#f5f7fa] border-e-1 border-zinc-200",
                  tab: "font-semibold",
                  tabList: "bg-[#f5f7fa]",
                  tabContent:
                    "group-data-[selected=true]:text-[#FFFF] group-data-[selected=true]:font-semibold ",
                }}
                onSelectionChange={(key) => setSelectedTab(key)}
              >
                <Tab key="calc_grade" title={t("tab1")} className="w-full">
                  <CalculateGradeToPass />
                </Tab>
                <Tab key="find-my-grade" title={t("tab2")}>
                  <CalculateAchievedGrade />
                </Tab>
              </Tabs>
            </CardBody>
            <CardHeader>
              <div className="flex flex-row w-full">
                <LanguageSelector />
                <div>
                  <Tooltip
                    showArrow={true}
                    content={tooltipContent}
                    placement="left-start"
                  >
                    <Button
                      className="bg-transparent font-semibold"
                      disableRipple
                      isIconOnly
                    >
                      <QuestionMark />
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </main>
    </>
  );
}

export default Calculator;
