//first
query getCourse($courseID: Int!){
    course(id: $courseID){
      title
      author
      description
      topic
      url
    }
  }
  {
    "courseID": 1,
  }
  
  //second
  query getCourses($coursesT: String!){
    courses(topic: $coursesT){
          title
    }
  }
  
  {
    "coursesT": "Rust"
  }

  //third

  
query getCoursesWhithFragments($courseID_1: Int!,$courseID_2: Int!,){
    course1: course(id: $courseID_1){
      ...courseFields
    }
     course2: course(id: $courseID_2){
      ...courseFields
    }
  }
  
  fragment courseFields on Course{
    title
    author
    description
    topic
    url
  }

  {
    "courseID_1": 2,
    "courseID_2": 3
  }
  

  //mutation
  mutation updateCourse($courseID: Int!, $courseTopic: String!) {
    updateTopic(id: $courseID, topic: $courseTopic) {
      ... on Course {
        title
        author
        description
        topic
        url
      }// el lo mismo de  ...courseFields
    }
  }
  
  {
    "courseID": 2,
    "courseTopic": "rust"
  }