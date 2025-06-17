resource "aws_s3_bucket" "strapi_bucket" {
  bucket = "strapi-local-bucket"
  force_destroy = true
}
