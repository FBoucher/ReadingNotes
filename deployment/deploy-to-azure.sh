

az group create --name GitStreamDev -l eatus

az group deployment create -g GitStreamDev --template-file "deploy.json" -n testDeployGitHub
