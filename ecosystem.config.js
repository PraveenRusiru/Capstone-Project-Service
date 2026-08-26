module.exports = {
  apps : [
      {
    name   : "Student-service",
    script : "java -jar ./Student-service/target/Student-Service-1.0.0.jar",
    error_file: "./log/student-service-error.log",
    out_file: "./log/student-service-out.log",
          instances: 2,
  },
      {
          name   : "Programme-service",
          script : "java -jar ./Programme-service/target/Programme-Service-1.0.0.jar",
          error_file: "./log/programme-service-error.log",
          out_file: "./log/programme-service-out.log",
          instances: 2,
      }
      ,
      {
          name   : "Enrollment-service",
          script : "java -jar ./Enrollment-service/target/Enrollment-Service-1.0.0.jar",
          error_file: "./log/enrollment-service-error.log",
          out_file: "./log/enrollment-service-out.log",
          instances: 2,
      }
  ]
}
