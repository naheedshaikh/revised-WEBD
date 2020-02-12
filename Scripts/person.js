class Person
{
    //constructor
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    saysHello()
    {
        console.log(`${this.name} says Hello!`);
    }
}