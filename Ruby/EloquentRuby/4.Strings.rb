string_with_quote = 'Say it ain\'t so'
string_with_backslash = 'This is a backslash: \\\ '

puts string_with_quote
puts string_with_backslash

string_concat = "#{string_with_quote} can be embedded with #{string_with_backslash}"
puts string_concat

backslash_dropout = ' "Now I can use double quotes inside a string" '
puts backslash_dropout

# Insert backslashes outside
str_without_backslashes = %q{"Stop", I don't need this "specific method"}
puts str_without_backslashes

multiline_string = "This is a \
string that is built
aroung several lines"

puts multiline_string

document = <<EOF
This is the beginning of the doc.
And this is the end
EOF

puts document

#Remove jumplines
puts " This is a string with spaces".chomp
#Removes last character
puts "this will lack an e at the end of the file".chop
#Substitutes words just once 
puts "It's warm outside, but now is warm".sub('warm', 'cold')
#Substitutes words globally
puts "It's warm outside, but now is warm".gsub('warm', 'cold')
#Returns an array of strings
puts "it was dark and stormy night".split.each{ |word| word.upcase}