import { useState } from "react";
import {
  calculateLabGrade,
  calculateTheoryGrade,
} from "../utils/gradeCalculator";
import { useTranslation } from "react-i18next";
import { Button, Input, Switch } from "@nextui-org/react";
import { ChevronLeftIcon, ChevronRightIcon } from "../assets/icons/Arrows";

function CalculateGradeToPass() {
  const { t } = useTranslation();

  const [inputTheoryPercentage, setinputTheoryPercentage] = useState("");
  const [inputLabPercentage, setinputLabPercentage] = useState("");
  const [inputLabGrade, setInputLabGrade] = useState("");
  const [inputTheoryGrade, setInputTheoryGrade] = useState("");
  const [requiredGrade, setRequiredGrade] = useState(null);
  const [isInvalid, setIsInValid] = useState(false);

  const [percError, setPercError] = useState(false);
  const [grdError, setGrdError] = useState(false);
  const [resultInvalid, setResultInvalid] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleCalculateGrade = () => {
    setPercError(false);
    setGrdError(false);
    setIsInValid(false);
    setResultInvalid(false);
    setRequiredGrade(null);

    if (inputTheoryPercentage !== "" && inputLabPercentage !== "") {
      const theoryPercentage = parseFloat(
        inputTheoryPercentage.replace(/[^0-9.]/g, "")
      );
      const labPercentage = parseFloat(
        inputLabPercentage.replace(/[^0-9.]/g, "")
      );
      const labGrade = parseFloat(inputLabGrade.replace(/[^0-9.]/g, ""));
      const theoryGrade = parseFloat(inputTheoryGrade.replace(/[^0-9.]/g, ""));

      if (
        isNaN(theoryPercentage) ||
        isNaN(labPercentage) ||
        theoryPercentage + labPercentage !== 100
      ) {
        setPercError(true);
        setIsInValid(true);
        return;
      }

      if (
        labGrade < 0 ||
        labGrade > 10 ||
        theoryGrade < 0 ||
        theoryGrade > 10
      ) {
        setGrdError(true);
        setResultInvalid(true);
        return;
      }

      setIsLoading(true);

      setTimeout(() => {
        let result;
        if (!isSelected) {
          result = calculateLabGrade(
            theoryPercentage,
            labPercentage,
            theoryGrade
          );
        } else {
          result = calculateTheoryGrade(
            theoryPercentage,
            labPercentage,
            labGrade
          );
        }

        if (isNaN(result)) {
          setResultInvalid(true);
          setIsLoading(false);
          return;
        }

        if (result > 10) {
          setResultInvalid(true);
          setIsLoading(false);
          return;
        }

        setRequiredGrade(result);
        setIsLoading(false);
      }, 1000);
    } else {
      setIsInValid(true);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCalculateGrade();
        }}
        className="w-full"
      >
        <div className="grid grid-rows-2 xsm:m-5 md:m-5">
          <div className="flex xsm:flex-col md:flex-row gap-x-10">
            <Input
              value={inputTheoryPercentage}
              onValueChange={setinputTheoryPercentage}
              isClearable
              isRequired
              isInvalid={isInvalid}
              errorMessage={setPercError ? t("error") : ""}
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
              errorMessage={setPercError ? t("error") : ""}
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
          <div className="flex xsm:flex-col md:flex-row gap-x-10 my-3">
            <Input
              value={inputTheoryGrade}
              onValueChange={setInputTheoryGrade}
              isClearable
              isRequired
              isDisabled={isSelected}
              isInvalid={grdError}
              errorMessage={t("grderror")}
              label={t("inputTHG")}
              placeholder="0"
              labelPlacement="outside"
              variant="bordered"
              classNames={{
                label: "font-semibold",
              }}
            />
            <Switch
              isSelected={isSelected}
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <ChevronRightIcon className={className} />
                ) : (
                  <ChevronLeftIcon className={className} />
                )
              }
              onValueChange={(value) => {
                setIsSelected(value);
                setRequiredGrade(null);
                setInputLabGrade("");
                setInputTheoryGrade("");
                setResultInvalid(false);
              }}
              classNames={{ wrapper: "bg-[#2b394f]" }}
            ></Switch>
            <Input
              value={inputLabGrade}
              onValueChange={setInputLabGrade}
              isClearable
              isRequired
              isDisabled={!isSelected}
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
      <h1 className="font-semibold text-zinc-700 text-center my-2">
        {resultInvalid ? t("resultInvalid") : ""}
      </h1>
      {requiredGrade !== null && (
        <div className="my-10 flex flex-col items-center">
          <h1 className="font-semibold text-zinc-700">
            {grdError ? "" : isSelected ? t("resultTH") : t("resultLB")}
          </h1>
          <h1 className="text-3xl font-bold text-[#405e89]">
            {grdError ? " " : requiredGrade.toFixed(1)}
          </h1>
        </div>
      )}
    </>
  );
}

export default CalculateGradeToPass;
