require 'faker'
require 'date'

User.destroy_all
TrainingSession.destroy_all

10.times do
    User.create(
      first_name:Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.email,
      role: "student",
      password: "123123")
end

puts "10 students have been created"

3.times do
    User.create(
      first_name:Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.email,
      role: "teacher",
      password: "123123")
end

User.create(
  first_name: "Me",
  last_name: "Lon",
  email: "melon@yopmail.com",
  role: "admin",
  password: "123123")

puts "3 teachers have been created"

10.times do
  Category.create(name: Faker::Hacker.adjective )
end

5.times do 
  Course.create(
    name: Faker::Hacker.verb + Faker::Hipster.word,
    teacher_id: User.last.id,
    categories: Category.all.sample(rand(3))
  )
end

5.times do
  Room.create(number: rand(10))
end

10.times do
    TrainingSession.create(
        course_id: Course.all.sample.id,
        room_id: Room.all.sample.id,
        teacher_id: User.last.id,
        students: User.first(3),
        date: DateTime.new(2001,2,3,4,5,6)
        )
end

puts "10 trainingsessions have been created"
