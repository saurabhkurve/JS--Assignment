class User {
    constructor(name,age,email) {
        this.name=name;
        this.age = age;
        this.email = email;
        this.luCoins=0;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

let user1=new User("Surabh",22,"s@gmail.com");
console.log(user1);
let user2=new User("Harsh",20,"h@gmail.com");
console.log(user2);
let user3 =new User("Rakesh",25,"r@gmail.com");
console.log(user3);

user1.login().logout();
 users=[user1,user2,user3];

class Moderator extends User {
    addCoins(user){
        users=users.filter(el=>{
         return el.email==user.email; 
         })
         user.luCoins++;
}
        
    removeCoins(user){
        users=users.filter(el=>{
            return el.email == user.email
        })
        user.luCoins--;
     }
}


let mod1=new Moderator("Bharat",27,"B@gmail.com");

mod1.addCoins(user1);   //Adding coins
console.log(user1) 

mod1.removeCoins(user1);  //Removing coins
console.log(user1);



class Admin extends Moderator {
    addCourse(user,course){
        user.courses.push(course);  //Adding Course
        console.log(user);
    }

    //  removeCourse(user, course){
    //     user.courses.pop(course);
    //    console.log(user);
    // }
    remoCourse(user,course){
         user.courses.foreach(el=>{
          if (el==course){
              delete courses[indexOf(el)];
           }
           else{
               console.log(`${this.user}not enrolled for ${this.course} course.`);
            }
        })   
       console.log(user);
     }
}


let admin=new Admin("Ritik",30,"RS@gmail.com");
console.log(admin);


admin.addCourse(user1,"Python");  //Adding course
console.log(user1);
admin.addCourse(user1,"C++");


admin.remoCourse(user1,0
                "Python");
console.log(user1);

// admin.removeCourse(user1,"C++");
// console.log(user1);
