import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Input,
} from "@nextui-org/react";
import grade_calc_logo from "../assets/images/grade_calc_logo.png";
import { useState } from "react";
import { calculateGrade } from "../utils/gradeCalculator";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/languageSelector";

function Calculator() {
  const { t } = useTranslation();

  const [theoryPercentage, setTheoryPercentage] = useState("");
  const [labPercentage, setLabPercentage] = useState("");
  const [labGrade, setLabGrade] = useState("");
  const [requiredTheoryGrade, setRequiredTheoryGrade] = useState(null);
  const [isInvalid, setIsInValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculateGrade = () => {
    if (theoryPercentage === "" && labPercentage === "") {
      setIsInValid(true);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        const result = calculateGrade(
          theoryPercentage,
          labPercentage,
          labGrade
        );
        setRequiredTheoryGrade(result);
        setIsInValid(false);
        setIsLoading(false);
      }, 1000);
    }
  };
  return (
    <>
      <main className="w-screen h-screen bg-[#1B2332]">
        <LanguageSelector />
        <div className="w-full flex justify-center ps-5">
          <Image src={grade_calc_logo} width={350} className="my-10" />
        </div>
        <div className="flex justify-center ">
          <Card className="xsm:w-auto md:w-6/12 bg-[#f5f7fa] xsm:mx-5 md:mx-0 ">
            <CardHeader className="flex justify-center">
              <h1 className="text-2xl font-bold text-[#405e89] ">
                {t("title")}
              </h1>
            </CardHeader>
            <CardBody>
              <div className="grid grid-rows-2 xsm:m-5 md:m-5">
                <div className="flex xsm:flex-col md:flex-row gap-x-10">
                  <Input
                    value={theoryPercentage}
                    onValueChange={setTheoryPercentage}
                    isClearable
                    isRequired
                    isInvalid={isInvalid}
                    errorMessage={t("error")}
                    type="number"
                    label={t("inputTH")}
                    placeholder="0"
                    labelPlacement="outside"
                    variant="bordered"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">%</span>
                      </div>
                    }
                    classNames={{
                      label: "font-semibold",
                    }}
                  />
                  <Input
                    value={labPercentage}
                    onValueChange={setLabPercentage}
                    isClearable
                    isRequired
                    isInvalid={isInvalid}
                    errorMessage={t("error")}
                    type="number"
                    label={t("inputLB")}
                    placeholder="0"
                    labelPlacement="outside"
                    variant="bordered"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">%</span>
                      </div>
                    }
                    classNames={{
                      label: "font-semibold",
                    }}
                  />
                </div>
                <div className="flex flex-row ">
                  <Input
                    value={labGrade}
                    onValueChange={setLabGrade}
                    isClearable
                    type="number"
                    label={t("inputLBG")}
                    placeholder="0"
                    labelPlacement="outside"
                    variant="bordered"
                    classNames={{
                      label: "font-semibold",
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-center ">
                <Button
                  isLoading={isLoading}
                  size="lg"
                  radius="md"
                  className="bg-[#5377a4] text-white font-semibold"
                  onClick={handleCalculateGrade}
                >
                  {isLoading ? "" : t("buttonCl")}
                </Button>
              </div>

              {requiredTheoryGrade !== null && (
                <div className="my-10 flex flex-col items-center">
                  <h1 className="font-semibold text-zinc-700">
                    {t("result")}{" "}
                  </h1>
                  <h1 className="text-3xl font-bold text-[#405e89]">
                    {requiredTheoryGrade.toFixed(2)}
                  </h1>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </main>
    </>
  );
}

export default Calculator;
