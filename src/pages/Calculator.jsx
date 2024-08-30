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

  const [inputTheoryPercentage, setinputTheoryPercentage] = useState("");
  const [inputLabPercentage, setinputLabPercentage] = useState("");
  const [inputLabGrade, setinputLabGrade] = useState("");
  const [requiredTheoryGrade, setRequiredTheoryGrade] = useState(null);
  const [isInvalid, setIsInValid] = useState(false);

  const [percError, setPercError] = useState(false);
  const [grdError, setGrdError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleCalculateGrade = () => {
    setPercError(false);
    setGrdError(false);

    if (inputTheoryPercentage !== "" && inputLabPercentage !== "") {
      const theoryPercentage = parseFloat(
        inputTheoryPercentage.replace(/[^0-9.]/g, "")
      );
      const labPercentage = parseFloat(
        inputLabPercentage.replace(/[^0-9.]/g, "")
      );
      const labGrade = parseFloat(inputLabGrade.replace(/[^0-9.]/g, ""));

      if (labGrade < 0 || labGrade > 10) {
        setGrdError(true);
        return;
      }

      if (theoryPercentage + labPercentage !== 100) {
        setPercError(true);
        setIsInValid(true);
        return;
      }

      if (isNaN(theoryPercentage) || isNaN(labPercentage) || isNaN(labGrade)) {
        setIsInValid(true);
        return;
      }

      setIsInValid(false);
      setIsLoading(true);

      setTimeout(() => {
        const result = calculateGrade(
          theoryPercentage,
          labPercentage,
          labGrade
        );
        setRequiredTheoryGrade(result);
        setIsLoading(false);
      }, 1000);
    } else {
      setIsInValid(true);
    }
  };

  return (
    <>
      <LanguageSelector />
      <div className="w-full flex justify-center ps-5">
        <Image src={grade_calc_logo} width={350} className="my-10" />
      </div>
      <div className="flex justify-center ">
        <Card className="xsm:w-auto md:w-6/12 bg-[#f5f7fa] xsm:mx-5 md:mx-0 ">
          <CardHeader className="flex justify-center">
            <h1 className="text-2xl font-bold text-[#405e89] ">{t("title")}</h1>
          </CardHeader>
          <CardBody>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCalculateGrade();
              }}
            >
              <div className="grid grid-rows-2 xsm:m-5 md:m-5">
                <div className="flex xsm:flex-col md:flex-row gap-x-10">
                  <Input
                    value={inputTheoryPercentage}
                    onValueChange={setinputTheoryPercentage}
                    isClearable
                    isRequired
                    isInvalid={isInvalid}
                    errorMessage={setPercError ? "" : t("error")}
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
                    value={inputLabPercentage}
                    onValueChange={setinputLabPercentage}
                    isClearable
                    isRequired
                    isInvalid={isInvalid}
                    errorMessage={setPercError ? "" : t("error")}
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
                <div className="flex flex-row mt-5">
                  <Input
                    value={inputLabGrade}
                    onValueChange={setinputLabGrade}
                    isClearable
                    isRequired
                    isInvalid={grdError}
                    errorMessage={t("grderror")}
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
              {percError && (
                <div className="my-4 flex justify-center">
                  <h1 className="text-lg text-[#f31260] font-semibold">
                    {t("warning")}
                  </h1>
                </div>
              )}
              <div className="flex justify-center ">
                <Button
                  type="submit"
                  isLoading={isLoading}
                  size="lg"
                  radius="md"
                  className="bg-[#5377a4] text-white font-semibold"
                >
                  {isLoading ? "" : t("buttonCl")}
                </Button>
              </div>
            </form>
            {requiredTheoryGrade !== null && (
              <div className="my-10 flex flex-col items-center">
                <h1 className="font-semibold text-zinc-700">{t("result")} </h1>
                <h1 className="text-3xl font-bold text-[#405e89]">
                  {requiredTheoryGrade.toFixed(1)}
                </h1>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Calculator;
