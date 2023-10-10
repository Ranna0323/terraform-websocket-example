# Terraform이 설치하고 관리할 리소스를 제공하는 프로바이더를 정의
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.62.0"
    }
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 3.0"
    }
  }
}

# json credentials 불러오기
locals {
  json = jsondecode(file("${path.root}/jsons/credentials.json"))
}

# AWS Provider 설정
provider "aws" {
  access_key = "${local.json.AWS_ACCESS_KEY_ID}"
  secret_key = "${local.json.AWS_SECRET_ACCESS_KEY}"
  region  = "${local.json.AWS_REGION}"
}
