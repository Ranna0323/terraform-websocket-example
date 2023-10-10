# 현재 AWS 계정 정보 가져오기
data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

module "dummy_module" {
    source = "./modules/dummy_module"
    tenant_name = var.tenant_name
}