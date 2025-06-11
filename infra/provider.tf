provider "aws" {
  region                      = "us-east-1"
  access_key                  = "mock_access_key"
  secret_key                  = "mock_secret_key"
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  s3_force_path_style         = true
  endpoints {
    ecs            = "http://localhost:4566"
    iam            = "http://localhost:4566"
    ecr            = "http://localhost:4566"
  }
}
