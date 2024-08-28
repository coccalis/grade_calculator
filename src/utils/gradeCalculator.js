export function calculateGrade(
  theoryPercentage,
  labPercentage,
  labGrade,
  passingGrade = 5
) {
  const theoryWeight = theoryPercentage / 100;
  const labWeight = labPercentage / 100;
  const labContribution = labGrade * labWeight;
  const requiredTheoryContribution = passingGrade - labContribution;
  const requiredTheoryGrade = requiredTheoryContribution / theoryWeight;
  return requiredTheoryGrade;
}
