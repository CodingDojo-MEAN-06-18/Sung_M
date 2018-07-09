// 1. Create a database called 'my_first_db'.
    use my_first_db

// 2.Create students collection.
	db.createCollection('students')

// 3. Each document you insert into this collection should have the following format: {name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}}
// 4. Create 5 students with the appropriate info.
	db.students.insert({name: 'Apple', home_state:'California', lucky_number:5, birthday: {month:1, day:2, year:1980}})
	db.students.insert({name: 'Bart', home_state:'Oregon', lucky_number:10, birthday: {month:3, day:3, year:2000}})
	db.students.insert({name: 'Cousin', home_state:'Nevada', lucky_number:15, birthday: {month:5, day:4, year:1956}})
	db.students.insert({name: 'Derek', home_state:'Colorado', lucky_number:20, birthday: {month:7, day:15, year:1943}})
	db.students.insert({name: 'Eric', home_state:'Texas', lucky_number:25, birthday: {month:9, day:26, year:2017}})

// 5. Get all students.
	db.students.find()

// 6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
	db.students.find({$or: [{home_state:'California'}, {home_state:'Washington'}]})

// 7. Get all students whose lucky number is:
// 7.1 Greater than 3
	db.students.find({lucky_number:{$gt:3}})

// 7.2 Less than or equal to 10
	db.students.find({lucky_number:{$lte:10}})

// 7.3 Between 1 and 9, inclusive
	db.students.find({$and:[{lucky_number:{$lte:9}}, {lucky_number:{$gte:1}}]})

// 8. Add a field in each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
	db.students.update({},{$set: {'interests':['coding', 'brunch', 'MongoDB']}}, {multi:true})

// 9. Add some unique interests for each particular students into each of their interest arrays.
	db.students.update({name: 'Apple'},{$push: {interests:{$each:['baking']}}})
	db.students.update({name: 'Bart'},{$push: {interests:{$each:['skateboarding']}}})
	db.students.update({name: 'Cousin'},{$push: {interests:{$each:['research']}}})
	db.students.update({name: 'Derek'},{$push: {interests:{$each:['flying']}}})
	db.students.update({name: 'Eric'},{$push: {interests:{$each:['soccer']}}})

// 10. Add the interest 'taxes' into someone's interest array.
	db.students.update({name: 'Apple'},{$push: {interests: 'taxes'}})

// 11. Remove the 'taxes' interest you just added.
	db.students.update({name: 'Apple'},{$pull: {interests: 'taxes'}})

// 12. Remove all students who are from California (or Washington).
	db.students.remove({$or: [{home_state:'California'}, {home_state:'Washington'}]})

// 13. Remove a user by name.
	db.students.remove({name:'Apple'})

// 14. Remove a student whose lucky number is greater than 5 (JUST ONE)
	db.students.remove({lucky_number: {$gt:5}}, true)

// 15. Add a field in each student collection called 'number_of_belts' and set it to 0.
	db.students.update({},{$set: {'number_of_belts':0}}, {multi:true})

// 16. Increment this field by 1 for all students in Washington (Seattle Dojo).
	db.students.update({home_state: 'Washington'},{$inc: {number_of_belts: 1}}, {multi:true})

// 17. Rename the 'number_of_belts' field to 'belts_earned'
	db.students.update({}, {$rename: {'number_of_belts':'belts_earned'}})

// 18. Remove the 'lucky_number' field.
	db.students.update({}, {$unset:{lucky_number:''}}, {multi:true})

// 19. Add a 'updated_on' field, and set the value as the current date.
	db.students.update({}, {$currentDate:{updated_on:true}}, {multi:true})