const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  index = employee.findIndex(emp => emp.id == req.params.id)
  employee.splice(index , 1)
  res.status(200).json()
};

// TODO
exports.createEmployee = async (req, res, next) => {
  if(employee.find(emp => emp.id == req.query.id))
    console.log("ERROR : id already exists")
  else {
    employee.push(req.query)
    res.status(200).json()
  }

};
