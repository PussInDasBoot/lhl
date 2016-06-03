numbers = (1..100).to_a
numbers.each {|num|
  if (num % 3 ==0) && (num % 5 ==0)
    puts "FizzBuzz"
    elsif (num % 5 == 0) && (num % 3 != 0)
    puts "Buzz"
    elsif (num % 3 ==0) && (num % 5 != 0)
    puts "Fizz"
  else
    puts num
  end
  }