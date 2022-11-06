//all about the node1.js file
//node1.js contains the code looking for word inside file (just one file)

if you want to use the code in node1.js you need to follow this syntax
node node1.js <file path> <word>
file path : example  ./find/f1.txt
word : the word you`re looking for

execute this node command :
>> node node1.js ./look/f1.txt hello 

output :

./look/f1.txt true // its means we found the word hello in f1.txt


//all about the node.js file 
//node.js contains the code looking for word inside folder and sub-folders (all files inside folder and sub-folders)


if you want to use the code in node.js you need to follow this syntax
node node.js <folder_name> <word>
folder_name : example  find
word : the word you`re looking for

execute this node command :

>> node node.js find hello 

output :


find/find1/f3.txt
find/find1/find3/f4.txt
find/find1/find3/find4/f7.txt

-so it will search all folders and sub-folders  and returns the file.txt path
that contain the word "hello" 

if it's not finding any file that not containing  the word "hello"
it will returns NONE in the console
