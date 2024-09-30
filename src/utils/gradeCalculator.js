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

export function calculateAchievedTheoryGrade(
  totalGrade,
  labGrade,
  theoryPercentage,
  labPercentage
) {
  theoryPercentage = theoryPercentage / 100;
  labPercentage = labPercentage / 100;
  return (totalGrade - labGrade * labPercentage) / theoryPercentage;
}

export function calculateAchievedLabGrade(
  totalGrade,
  theoryGrade,
  theoryPercentage,
  labPercentage
) {
  theoryPercentage = theoryPercentage / 100;
  labPercentage = labPercentage / 100;
  return (totalGrade - theoryGrade * theoryPercentage) / labPercentage;
}
