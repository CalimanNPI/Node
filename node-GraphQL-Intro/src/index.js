const express = require("express");
const { graphql, buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const { courses } = require("./data.json");

//setting
app.set("port", process.env.PORT || 3000);

//hello world
var schema = buildSchema(`type Query{hello: String}`);
var root = { hello: () => "Hello world" };
graphql(schema, "{hello}", root).then((response) => {
  console.log(response);
});

/**
 * first query
 * {
 *  hello
 * }
 * con esto se hace la consuslta en el navegador web
 */
/*app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);*/

//second query

var schemaTwo = buildSchema(`
    type Query{
        course(id: Int!):Course
        courses(topic: String):[Course]
    }

    type Mutation{
        updateTopic(id:Int!, topic:String!):Course
    }

    type Course{
        id:Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

let getCourse = (args) => {
  let id = args.id;
  return courses.filter((course) => {
    return course.id == id;
  })[0];
};

let getCourses = (args) => {
  if (args.topic) {
    let topic = args.topic;
    return courses.filter((course) => course.topic === topic);
  } else {
    return courses;
  }
};

let updateTopic = ({ id, topic }) => {
  courses.map((course) => {
    if (course.id === id) {
      course.topic = topic;
      return course;
    }
  });

  return courses.filter((course) => course.id == id)[0];
};

const rootTwo = {
  course: getCourse,
  courses: getCourses,
  updateTopic: updateTopic,
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schemaTwo,
    rootValue: rootTwo,
    graphiql: true,
  })
);

//listen server
app.listen(app.get("port"), () => {
  console.log("localhost:3000/graphql");
});
