
import fs from 'fs';
import Category from "../models/CategoryModel.js";
import Course from "../models/courseModel.js"
import User from "../models/UserModel.js";


const importData = async () => {
// clean the database
try{
    
await Course.deleteMany();
await Category.deleteMany();
await User.deleteMany();

// insert the  data
// insert user data
const usersData = json.parse(fs.readFileSync(path.join(__dirname,'/data/users/json','utf-8')));

const UsersWithHashedPassword = usersData.map((user) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password,salt);
    return {...user , password:hashedPassword};

});

const createdUsers = await User.insertMany(UsersWithHashedPassword);

const instructorUser  = await createdUsers.find((user)=>user.role==='instructor'); // to be used in course as ref

// insert category data
const categoryData = json.parse(fs.readFileSync(path.join(__dirname,'/data/category/json','utf-8')));

const createdCategory = await Category.insertMany(categoryData);

const webDevCategory = createdCategory.find((category)=> category.name==='Web Dev') ;

//insert Course

const Courses = [{
    title:'Complete Web Development',
    description:'Random Description about the Course is this',
    price:99,
    instructor:instructorUser.id,
    category:webDevCategory.id
}]

await Category.insertMany(Courses);

console.log("Data is successfully added in to the database!")


} catch(error){
    console.log("error while adding the data:", error);
}





}

const destroydata = () =>{
    // deleteMany queries will go here!
    console.log("Data destroyed");
    process.exit();
}

// logic to add scripts to run seed file for different methods
if(process.argv[2]==='-d'){
    destroydata();
}else{
    importData("import data");
    console.log("import data")
}