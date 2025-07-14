import type { QuizData } from './types';

export const quizData: QuizData = {
  c: {
    beginner: [
      {
        questionText: 'Which keyword is used to define a variable in C?',
        options: ['var', 'let', 'int', 'variable'],
        correctAnswer: 'int',
      },
      {
        questionText: 'What is the format specifier for printing an integer in C?',
        options: ['%d', '%f', '%s', '%c'],
        correctAnswer: '%d',
      },
      {
        questionText: "Which header file is required for using `printf()` and `scanf()`?",
        options: ['<stdlib.h>', '<string.h>', '<stdio.h>', '<math.h>'],
        correctAnswer: '<stdio.h>',
      },
      {
        questionText: "How do you start a single-line comment in C?",
        options: ['//', '/*', '#', '<!--'],
        correctAnswer: '//',
      },
      {
        questionText: "What is the result of `5 % 2` in C?",
        options: ['2.5', '2', '1', '0'],
        correctAnswer: '1',
      },
      {
        questionText: "Which operator is used to get the memory address of a variable?",
        options: ['*', '&', '#', '@'],
        correctAnswer: '&',
      },
      {
        questionText: "What does `sizeof(int)` return?",
        options: ['The value of the integer', 'The size of an integer in bytes', 'Always 4', 'Always 2'],
        correctAnswer: 'The size of an integer in bytes',
      },
      {
        questionText: "How do you declare a pointer to an integer?",
        options: ['`int *p;`', '`int p;`', '`pointer p;`', '`*int p;`'],
        correctAnswer: '`int *p;`',
      },
      {
        questionText: "Which loop is guaranteed to execute at least once?",
        options: ['`for` loop', '`while` loop', '`do-while` loop', '`if` statement'],
        correctAnswer: '`do-while` loop',
      },
      {
        questionText: "What is the purpose of the `break` statement?",
        options: ['To end the program', 'To skip the current iteration', 'To exit a loop or switch statement', 'To return a value from a function'],
        correctAnswer: 'To exit a loop or switch statement',
      },
    ],
    intermediate: [
       {
        questionText: 'What is a `union` in C?',
        options: ['A structure where all members share the same memory location', 'A structure with only one member', 'Another name for an array', 'A type of function pointer'],
        correctAnswer: 'A structure where all members share the same memory location',
      },
      {
        questionText: 'What is the purpose of the `volatile` keyword?',
        options: ['To make a variable constant', 'To tell the compiler that a variable may change unexpectedly', 'To allocate memory dynamically', 'To create a static variable'],
        correctAnswer: 'To tell the compiler that a variable may change unexpectedly',
      },
      {
        questionText: "Which function is used to dynamically allocate memory in C?",
        options: ['`alloc()`', '`new()`', '`malloc()`', '`create()`'],
        correctAnswer: '`malloc()`',
      },
      {
        questionText: "What is a dangling pointer?",
        options: ['A pointer that points to a valid memory location', 'A pointer that points to a deallocated memory location', 'A pointer that is null', 'A pointer to a pointer'],
        correctAnswer: 'A pointer that points to a deallocated memory location',
      },
      {
        questionText: 'What is the difference between `++i` and `i++`?',
        options: ['No difference', '`++i` increments then returns, `i++` returns then increments', '`i++` increments then returns, `++i` returns then increments', '`i++` is faster'],
        correctAnswer: '`++i` increments then returns, `i++` returns then increments',
      },
      {
        questionText: 'What does the `typedef` keyword do?',
        options: ['Creates a new data type', 'Defines a macro', 'Creates an alias for an existing data type', 'Declares a typed function'],
        correctAnswer: 'Creates an alias for an existing data type',
      },
      {
        questionText: "What is the output of `printf(\"%d\", (1, 2, 3));`?",
        options: ['1', '2', '3', 'Error'],
        correctAnswer: '3',
      },
      {
        questionText: "Which standard library function can be used to compare two strings?",
        options: ['`compare()`', '`strcompare()`', '`memcmp()`', '`strcmp()`'],
        correctAnswer: '`strcmp()`',
      },
      {
        questionText: 'What is a bitfield?',
        options: ['A structure member that uses a specified number of bits', 'An array of bits', 'A pointer to a bit', 'A function that manipulates bits'],
        correctAnswer: 'A structure member that uses a specified number of bits',
      },
      {
        questionText: 'How can you pass an array to a function by value?',
        options: ['It is passed by value by default', 'By using the `&` operator', 'Wrap it in a struct', 'It is not possible'],
        correctAnswer: 'Wrap it in a struct',
      },
    ],
  },
  cpp: {
    beginner: [
      {
        questionText: 'Which keyword is used for object-oriented programming in C++?',
        options: ['`struct`', '`class`', '`object`', '`type`'],
        correctAnswer: '`class`',
      },
      {
        questionText: 'What is the stream insertion operator in C++?',
        options: ['`>>`', '`<<`', '`<-`', '`->`'],
        correctAnswer: '`<<`',
      },
      {
        questionText: "Which header is used for input/output streams like `cout` and `cin`?",
        options: ['<stdio>', '<iostream>', '<conio.h>', '<stream>'],
        correctAnswer: '<iostream>',
      },
      {
        questionText: 'What is a constructor?',
        options: ['A function to destroy an object', 'A function that is automatically called when an object is created', 'A function to copy an object', 'A normal member function'],
        correctAnswer: 'A function that is automatically called when an object is created',
      },
      {
        questionText: 'How do you declare a reference to an integer `x`?',
        options: ['`int &ref = x;`', '`int *ref = x;`', '`ref int = x;`', '`int ref = &x;`'],
        correctAnswer: '`int &ref = x;`',
      },
      {
        questionText: "Which access specifier makes members accessible only within the class?",
        options: ['`public`', '`protected`', '`private`', '`internal`'],
        correctAnswer: '`private`',
      },
      {
        questionText: "What is the purpose of the `new` operator?",
        options: ['Create a new file', 'Start a new thread', 'Allocate memory on the heap', 'Allocate memory on the stack'],
        correctAnswer: 'Allocate memory on the heap',
      },
      {
        questionText: 'What is function overloading?',
        options: ['Defining multiple functions with the same name but different parameters', 'Overriding a function in a derived class', 'Making a function too complex', 'A function that calls itself'],
        correctAnswer: 'Defining multiple functions with the same name but different parameters',
      },
      {
        questionText: 'Which keyword is used to inherit from a class?',
        options: ['`inherits`', '`extends`', '`:` (colon)', '`derives`'],
        correctAnswer: '`:` (colon)',
      },
      {
        questionText: 'What is the C++ Standard Library container for a dynamic array?',
        options: ['`array`', '`list`', '`vector`', '`map`'],
        correctAnswer: '`vector`',
      },
    ],
    intermediate: [
      {
        questionText: 'What is RAII (Resource Acquisition Is Initialization)?',
        options: ['A design pattern for exception handling', 'A way to manage resources like memory or file handles in an object\'s lifetime', 'A memory allocation technique', 'A type of template metaprogramming'],
        correctAnswer: 'A way to manage resources like memory or file handles in an object\'s lifetime',
      },
      {
        questionText: 'What is the purpose of a virtual destructor?',
        options: ['To prevent a class from being destroyed', 'To ensure that the derived class destructor is called when deleting a base class pointer', 'To create a destructor that cannot be overridden', 'To speed up object destruction'],
        correctAnswer: 'To ensure that the derived class destructor is called when deleting a base class pointer',
      },
      {
        questionText: "What does `std::move` do?",
        options: ['It moves the object to a different memory location', 'It copies the object', 'It casts an lvalue to an rvalue reference', 'It deallocates the object'],
        correctAnswer: 'It casts an lvalue to an rvalue reference',
      },
      {
        questionText: 'What is a lambda expression in C++?',
        options: ['A type of macro', 'A pointer to a function', 'An anonymous function object', 'A compiler directive'],
        correctAnswer: 'An anonymous function object',
      },
      {
        questionText: 'What is the difference between `std::vector` and `std::list`?',
        options: ['`vector` is a linked list, `list` is an array', '`vector` has fast random access, `list` has fast insertion/deletion', '`vector` can only store integers', 'They are the same'],
        correctAnswer: '`vector` has fast random access, `list` has fast insertion/deletion',
      },
      {
        questionText: 'What are smart pointers?',
        options: ['Pointers that are faster than regular pointers', 'Pointers that manage the memory they point to automatically', 'Pointers that can point to multiple objects', 'Pointers that can only be used in smart devices'],
        correctAnswer: 'Pointers that manage the memory they point to automatically',
      },
      {
        questionText: "What is template metaprogramming?",
        options: ['A way to write programs that are executed by the compiler', 'A way to create GUIs', 'A way to debug templates', 'A way to handle runtime polymorphism'],
        correctAnswer: 'A way to write programs that are executed by the compiler',
      },
      {
        questionText: 'What is the "Rule of Three/Five/Zero"?',
        options: ['A guideline about the number of arguments a function should have', 'A guideline for when you need to explicitly define special member functions', 'A rule for operator overloading', 'A naming convention for classes'],
        correctAnswer: 'A guideline for when you need to explicitly define special member functions',
      },
      {
        questionText: 'What does the `explicit` keyword prevent?',
        options: ['Inheritance', 'Implicit type conversions via constructors', 'Function overloading', 'Creating objects of a class'],
        correctAnswer: 'Implicit type conversions via constructors',
      },
      {
        questionText: 'What is SFINAE (Substitution Failure Is Not An Error)?',
        options: ['A type of runtime error', 'A C++ principle that allows a compiler to choose between overloaded functions', 'A way to handle file I/O errors', 'A memory leak detection tool'],
        correctAnswer: 'A C++ principle that allows a compiler to choose between overloaded functions',
      },
    ],
  },
  python: {
    beginner: [
      {
        questionText: 'How do you create a single-line comment in Python?',
        options: ['//', '/*', '#', '<!--'],
        correctAnswer: '#',
      },
      {
        questionText: 'Which of the following data types is immutable?',
        options: ['List', 'Dictionary', 'Set', 'Tuple'],
        correctAnswer: 'Tuple',
      },
      {
        questionText: 'What does the `len()` function do?',
        options: ['Returns the length of an object', 'Converts an object to a list', 'Increments a number', 'Returns the largest item'],
        correctAnswer: 'Returns the length of an object',
      },
      {
        questionText: "How do you get user input from the console?",
        options: ['`get_input()`', '`console.read()`', '`read()`', '`input()`'],
        correctAnswer: '`input()`',
      },
      {
        questionText: 'Which keyword is used to define a function in Python?',
        options: ['`function`', '`def`', '`func`', '`define`'],
        correctAnswer: '`def`',
      },
      {
        questionText: 'What is the correct way to create a list in Python?',
        options: ['`list = (1, 2, 3)`', '`list = {1, 2, 3}`', '`list = [1, 2, 3]`', '`list = <1, 2, 3>`'],
        correctAnswer: '`list = [1, 2, 3]`',
      },
      {
        questionText: 'Which operator is used for exponentiation?',
        options: ['`^`', '`**`', '`%`', '`//`'],
        correctAnswer: '`**`',
      },
      {
        questionText: 'What is the purpose of the `if __name__ == "__main__"` block?',
        options: ['It is required to start any Python script', 'It defines the main function', 'It ensures the code inside only runs when the script is executed directly', 'It is a comment'],
        correctAnswer: 'It ensures the code inside only runs when the script is executed directly',
      },
      {
        questionText: 'How do you add an item to the end of a list `my_list`?',
        options: ['`my_list.add("item")`', '`my_list.push("item")`', '`my_list.append("item")`', '`my_list.insert_end("item")`'],
        correctAnswer: '`my_list.append("item")`',
      },
      {
        questionText: 'What will `bool("False")` evaluate to?',
        options: ['`True`', '`False`', '`None`', 'Error'],
        correctAnswer: '`True`',
      },
    ],
    intermediate: [
      {
        questionText: 'What is a list comprehension?',
        options: ['A way to understand lists better', 'A compact way to create lists', 'A function that returns a list', 'A class for lists'],
        correctAnswer: 'A compact way to create lists',
      },
      {
        questionText: 'What is the difference between a list and a tuple?',
        options: ['Lists are mutable, tuples are immutable', 'Tuples are mutable, lists are immutable', 'They are identical', 'Lists can only hold numbers'],
        correctAnswer: 'Lists are mutable, tuples are immutable',
      },
      {
        questionText: "What does the `yield` keyword do?",
        options: ['It ends the function', 'It returns a value and pauses execution', 'It throws an exception', 'It prints to the console'],
        correctAnswer: 'It returns a value and pauses execution',
      },
      {
        questionText: 'What are decorators in Python?',
        options: ['A way to add styling to code', 'Functions that modify the functionality of other functions', 'A type of comment', 'Keywords for creating classes'],
        correctAnswer: 'Functions that modify the functionality of other functions',
      },
      {
        questionText: 'What is the Global Interpreter Lock (GIL)?',
        options: ['A security feature', 'A mutex that allows only one thread to execute Python bytecode at a time', 'A tool for internationalization', 'A way to lock global variables'],
        correctAnswer: 'A mutex that allows only one thread to execute Python bytecode at a time',
      },
      {
        questionText: "What is the difference between `==` and `is`?",
        options: ['`==` compares values, `is` compares memory locations (identity)', '`is` compares values, `==` compares memory locations', 'They are interchangeable', '`is` is used for inheritance checks'],
        correctAnswer: '`==` compares values, `is` compares memory locations (identity)',
      },
      {
        questionText: 'What is a lambda function?',
        options: ['A named function', 'A multi-line function', 'A small anonymous function', 'A recursive function'],
        correctAnswer: 'A small anonymous function',
      },
      {
        questionText: 'How does Python manage memory?',
        options: ['Manually with `malloc` and `free`', 'With private heap space and automatic garbage collection', 'It does not manage memory', 'By storing everything on the stack'],
        correctAnswer: 'With private heap space and automatic garbage collection',
      },
      {
        questionText: 'What are `*args` and `**kwargs` for?',
        options: ['They are required parameters for every function', 'For mathematical operations', 'To pass a variable number of arguments to a function', 'For string formatting'],
        correctAnswer: 'To pass a variable number of arguments to a function',
      },
      {
        questionText: "What is duck typing?",
        options: ['A specific data type in Python', 'A programming style that focuses on an object\'s methods and properties rather than its type', 'A way to test code', 'A method for naming variables'],
        correctAnswer: 'A programming style that focuses on an object\'s methods and properties rather than its type',
      },
    ],
  },
  java: {
    beginner: [
      {
        questionText: 'Which keyword is used to create an object in Java?',
        options: ['`create`', '`new`', '`object`', '`make`'],
        correctAnswer: '`new`',
      },
      {
        questionText: 'What is the entry point of a Java program?',
        options: ['`main()` method', '`start()` method', '`run()` method', 'The first line of code'],
        correctAnswer: '`main()` method',
      },
      {
        questionText: "Which of these is a primitive data type in Java?",
        options: ['`String`', '`Array`', '`int`', '`Object`'],
        correctAnswer: '`int`',
      },
      {
        questionText: 'How do you declare a variable that cannot be modified?',
        options: ['`static`', '`const`', '`final`', '`private`'],
        correctAnswer: '`final`',
      },
      {
        questionText: 'Which keyword is used to inherit a class in Java?',
        options: ['`inherits`', '`extends`', '`implements`', '`derives`'],
        correctAnswer: '`extends`',
      },
      {
        questionText: "What is the base class of all other classes in Java?",
        options: ['`Main`', '`System`', '`Object`', '`Class`'],
        correctAnswer: '`Object`',
      },
      {
        questionText: 'What is method overloading?',
        options: ['Defining multiple methods with the same name but different parameters', 'Overriding a method in a subclass', 'A method that is too complex', 'A method that calls itself'],
        correctAnswer: 'Defining multiple methods with the same name but different parameters',
      },
      {
        questionText: 'Which keyword is used to handle exceptions?',
        options: ['`catch`', '`throw`', '`exception`', '`try`'],
        correctAnswer: '`try`',
      },
      {
        questionText: 'How do you start a single-line comment?',
        options: ['`//`', '`/*`', '#', '`<!--`'],
        correctAnswer: '`//`',
      },
      {
        questionText: 'What is a constructor?',
        options: ['A method to destroy an object', 'A special method used to initialize objects', 'A regular static method', 'A method that returns a value'],
        correctAnswer: 'A special method used to initialize objects',
      },
    ],
    intermediate: [
       {
        questionText: 'What is the difference between an `interface` and an `abstract class`?',
        options: ['An interface can have method implementations, an abstract class cannot', 'A class can implement multiple interfaces but only extend one abstract class', 'Abstract classes cannot have constructors', 'They are the same'],
        correctAnswer: 'A class can implement multiple interfaces but only extend one abstract class',
      },
      {
        questionText: 'What is the purpose of the `static` keyword?',
        options: ['To make a variable constant', 'To create a member that belongs to the class itself, rather than to any specific instance', 'To prevent inheritance', 'To make a method final'],
        correctAnswer: 'To create a member that belongs to the class itself, rather than to any specific instance',
      },
      {
        questionText: 'What is the difference between `String`, `StringBuilder`, and `StringBuffer`?',
        options: ['No difference, they are all for strings', '`String` is immutable, `StringBuilder` and `StringBuffer` are mutable', '`StringBuilder` is synchronized, `StringBuffer` is not', '`String` is mutable, `StringBuilder` is immutable'],
        correctAnswer: '`String` is immutable, `StringBuilder` and `StringBuffer` are mutable',
      },
      {
        questionText: "What is Java's garbage collection?",
        options: ['A manual process to free memory', 'A way to collect user input', 'The automatic process of freeing memory for objects that are no longer referenced', 'A tool for cleaning up source code'],
        correctAnswer: 'The automatic process of freeing memory for objects that are no longer referenced',
      },
      {
        questionText: "What is the difference between `equals()` and `==` for objects?",
        options: ['`equals()` compares object content, `==` compares object references', '`==` compares content, `equals()` compares references', 'They are always the same', '`==` is for primitive types only'],
        correctAnswer: '`equals()` compares object content, `==` compares object references',
      },
      {
        questionText: 'What is a `try-with-resources` statement?',
        options: ['A way to try multiple resources at once', 'A statement that ensures each resource is closed at the end of the statement', 'A way to handle resource exceptions', 'A method for loading resources'],
        correctAnswer: 'A statement that ensures each resource is closed at the end of the statement',
      },
      {
        questionText: 'What is a lambda expression in Java?',
        options: ['A type of exception', 'A short block of code which takes in parameters and returns a value', 'A tool for managing threads', 'A way to define a class'],
        correctAnswer: 'A short block of code which takes in parameters and returns a value',
      },
      {
        questionText: 'What is the Java Stream API?',
        options: ['An API for file input/output', 'An API for processing sequences of elements', 'An API for network streaming', 'An API for GUI events'],
        correctAnswer: 'An API for processing sequences of elements',
      },
      {
        questionText: 'What is the `transient` keyword used for?',
        options: ['To mark a member variable not to be serialized', 'To create a temporary variable', 'To make a method thread-safe', 'To mark a class as final'],
        correctAnswer: 'To mark a member variable not to be serialized',
      },
      {
        questionText: "What is the difference between a `HashMap` and a `Hashtable`?",
        options: ['`HashMap` is synchronized, `Hashtable` is not', '`HashMap` allows null keys and values, `Hashtable` does not', '`Hashtable` is faster', 'They are identical'],
        correctAnswer: '`HashMap` allows null keys and values, `Hashtable` does not',
      },
    ],
  },
};
