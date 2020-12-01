require 'faker'

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

puts "3 teachers have been created"


10.times do
    TrainingSession.create(
        teacher: User.last,
        students: User.first(3)
        )
end

puts "10 trainingsessions have been created"
