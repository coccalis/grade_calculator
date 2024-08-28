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

function Calculator() {
  const [theoryPercentage, setTheoryPercentage] = useState(null);
  const [labPercentage, setLabPercentage] = useState(null);
  const [labGrade, setLabGrade] = useState(null);
  const [requiredTheoryGrade, setRequiredTheoryGrade] = useState(null);
  const [isInvalid, setIsInValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculateGrade = () => {
    if (theoryPercentage === 0 && labPercentage === 0) {
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
        <div className="w-full flex justify-center ps-5">
          <Image src={grade_calc_logo} width={350} className="my-10" />
        </div>
        <div className="flex justify-center ">
          <Card className="xsm:w-auto md:w-6/12 bg-[#f5f7fa] xsm:mx-5 md:mx-0 ">
            <CardHeader className="flex justify-center">
              <h1 className="text-2xl font-bold text-[#405e89] ">
                Calculate your grade
              </h1>
            </CardHeader>
            <CardBody>
              <div className="grid grid-rows-2 xsm:m-5 md:m-10">
                <div className="flex xsm:flex-col md:flex-row gap-x-10">
                  <Input
                    value={theoryPercentage}
                    onValueChange={setTheoryPercentage}
                    isClearable
                    isRequired
                    isInvalid={isInvalid}
                    errorMessage="Please enter a  grade"
                    type="number"
                    label="Theory Percentage"
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
                    errorMessage="Please enter a grade"
                    type="number"
                    label="Lab Percentage"
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
                    label="Lab Grade"
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
                  {isLoading ? "" : "Calculate"}
                </Button>
              </div>

              {requiredTheoryGrade !== null && (
                <div className="my-10 flex flex-col items-center">
                  <h1>The minimum theory grade required to pass is: </h1>
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
