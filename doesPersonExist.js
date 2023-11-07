const officeNames = ["Jim", "Sheldon", "Barney", "Goku", "Chandler"];

const doesPersonExist = (officeNames, name) => {
  for (let i = 0; i < officeNames.length; i++) {
    if (officeNames[i] === name) {
      return 1;
    }
  }
  return -1;
};

console.log(doesPersonExist(officeNames, "Goku"));
