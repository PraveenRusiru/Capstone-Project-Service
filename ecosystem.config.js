module.exports = {
  apps : [
      {
          name : "cloud-sql-auth-proxy",
          script : "./cloud-sql-proxy project-82042230-95d0-47e0-a4f:asia-southeast1:mysql-vm project-82042230-95d0-47e0-a4f:asia-southeast1:postgres-vm  --private-ip",
          error_file: "./log/cloud-sql-auth-proxy-error.log",
          out_file: "./log/cloud-sql-auth-proxy-out.log",

      },
      {
    name   : "Student-service",
    script : "java -jar ./Student-service/target/Student-Service-1.0.0.jar",
    error_file: "./log/student-service-error.log",
    out_file: "./log/student-service-out.log",
          instances: 2,
  },
      {
          name   : "Programme-service",
          script : "java -jar ./Programme-service/target/Program-Service-1.0.0.jar",
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
