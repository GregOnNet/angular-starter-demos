var Person = function(firstName, surname) {
  this.firstName = firstName;
  this.surname   = surname;

  this.fullname  = function() {

    return this.firstName + ' ' + this.surname;

  }
}

var controller = function(person){
  this.person = person;

  console.log(this.person.fullname());

}

var me = new Person('Gregor', 'Woiwode');

controller(me);
console.log(controller.toString());
console.info(angular.injector().annotate(controller));
