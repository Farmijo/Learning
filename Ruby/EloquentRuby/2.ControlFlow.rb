# movie = { title: '2001', genre: 'sci fi', rating: 10 }
# movie.each {|entry| pp entry}

# movie.each { |name, value| puts "#{name} => #{value}"}


# def index_for( word )
#     words.find_index { |this_word| word == this_word }
# end

words =  %w{hola que tal como estas}

def average_length (words)
    total = words.inject(0.0){ |result, word| word.size + result}
    total/words.size
end

puts average_length(words)