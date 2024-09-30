import { Button, Input, Switch } from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  calculateAchievedLabGrade,
  calculateAchievedTheoryGrade,
} from "../utils/gradeCalculator";
import { ChevronLeftIcon, ChevronRightIcon } from "../assets/icons/Arrows";

function CalculateAchievedGrade() {
  const { t } = useTranslation();
  const [inputTheoryPercentage, setinputTheoryPercentage] = useState("");
  const [inputLabPercentage, setinputLabPercentage] = useState("");
  const [inputLabGrade, setInputLabGrade] = useState("");
  const [inputTheoryGrade, setInputTheoryGrade] = useState("");
  const [inputTotalGrade, setInputTotalGrade] = useState("");
  const [requestedGrade, setRequstedGrade] = useState(null);

  const [isInvalid, setIsInValid] = useState(false);
  const [percError, setPercError] = useState(false);
  const [grdError, setGrdError] = useState(false);
  const [resultInvalid, setResultInvalid] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleCalculateAchivedGrade = () => {
    setPercError(false);
    setGrdError(false);
    setIsInValid(false);
    setResultInvalid(false);

    if (inputTheoryPercentage !== "" && inputLabPercentage !== "") {
      const theoryPercentage = parseFloat(
        inputTheoryPercentage.replace(/[^0-9.]/g, "")
      );
      const labPercentage = parseFloat(
        inputLabPercentage.replace(/[^0-9.]/g, "")
      );
      const labGrade = parseFloat(inputLabGrade.replace(/[^0-9.]/g, ""));
      const theoryGrade = parseFloat(inputTheoryGrade.replace(/[^0-9.]/g, ""));
      const totalGrade = parseFloat(inputTotalGrade.replace(/[^0-9.]/g, ""));
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
        (isSelected && (theoryGrade < 0 || theoryGrade > 10)) ||
        (!isSelected && (labGrade < 0 || labGrade > 10)) ||
        totalGrade < 0 ||
        totalGrade > 10
      ) {
        setGrdError(true);
        return;
      }

      setIsLoading(true);
      setTimeout(() => {
        let result;
        if (isSelected) {
          result = calculateAchievedTheoryGrade(
            totalGrade,
            labGrade,
            theoryPercentage,
            labPercentage
          );
        } else {
          result = calculateAchievedLabGrade(
            totalGrade,
            theoryGrade,
            theoryPercentage,
            labPercentage
          );
        }

        if (isNaN(result)) {
          setResultInvalid(true);
          setIsLoading(false);
        }

        if (result > 10) {
          setResultInvalid(true);
          setIsLoading(false);
        }

        setRequstedGrade(result);
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
          handleCalculateAchivedGrade();
        }}
        className="w-full"
      >
        <div className="grid grid-rows-2 xsm:m-5 md:m-5">
          <div className="flex xsm:flex-col md:flex-row gap-x-10 ">
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
          <div>
            <Input
              value={inputTotalGrade}
              onValueChange={setInputTotalGrade}
              isClearable
              isRequired
              isInvalid={grdError}
              errorMessage={t("grderror")}
              label={t("inputTLG")}
              placeholder="0"
              labelPlacement="outside"
              variant="bordered"
              classNames={{
                label: "font-semibold",
              }}
            />
          </div>
          <div className="flex xsm:flex-row md:flex-row gap-x-10 ">
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
            <div className="xsm:flex xsm:flex-row xsm:justify-center">
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
                  setRequstedGrade(null);
                  setInputLabGrade("");
                  setInputTheoryGrade("");
                }}
                classNames={{ wrapper: "bg-[#2b394f]" }}
              ></Switch>
            </div>
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
      {requestedGrade !== null && (
        <div className="my-3 flex flex-col items-center">
          <h1 className="font-semibold text-zinc-700">
            {resultInvalid
              ? t("resultInvalid")
              : isSelected
              ? t("resultTLGLB")
              : t("resultTLGTH")}
          </h1>
          <h1 className="text-3xl font-bold text-[#405e89]">
            {resultInvalid ? "" : requestedGrade.toFixed(1)}
          </h1>
        </div>
      )}
    </>
  );
}

export default CalculateAchievedGrade;
