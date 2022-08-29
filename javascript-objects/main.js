var student = {
  firstName: 'Kevin',
  lastName: 'Karneboge',
  age: 28
};
student.fullName = student.firstName + ' ' + student.lastName;

console.log(student);

console.log('the full name of the student is', student.fullName);

student.livesInIrvine = false;

student.previousOccupation = 'tax verifier';

console.log(student.livesInIrvine);
console.log(student.previousOccupation);

var vehicle = {
  make: 'DeLorean',
  year: '1981',
  model: 'DMC-12'
};
vehicle['color'] = 'silver';

console.log(vehicle);

vehicle['isConvertible'] = false;

console.log(vehicle);

var pet = {
  name: '湯圓',
  type: 'cat'
};
console.log(pet);
delete (pet.name);
console.log(pet);
delete (pet.type);
console.log(pet);
