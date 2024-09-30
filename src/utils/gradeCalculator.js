export function calculateTheoryGrade(
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

export function calculateLabGrade(
  theoryPercentage,
  labPercentage,
  theoryGrade,
  passingGrade = 5
) {
  const theoryWeight = theoryPercentage / 100;
  const labWeight = labPercentage / 100;
  const theoryContribution = theoryGrade * theoryWeight;
  const requiredLabContribution = passingGrade - theoryContribution;
  const requiredLabGrade = requiredLabContribution / labWeight;

  return requiredLabGrade;
}
