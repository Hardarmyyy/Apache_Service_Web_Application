pipeline {

    agent { label "agent-node-1" }

    stages {

        stage('Checkout') {

            steps {
            
                git branch: 'main', url: 'https://github.com/Hardarmyyy/apache_backend_server_01_06.git'

                echo 'Source code from github repository'
            }

        }

        stage('Install dependencies') {

            steps {
            
                sh 'npm install'

                echo 'Installing dependencies'

                archiveArtifacts artifacts: '**/*', excludes: 'temp/**, *.log', allowEmptyArchive: true
            }

        }

        stage('Build docker image') {

            steps {

                // Build Docker image with build-time arguments
                script {

                    def dockerBuildArgs = "--build-arg PORT=${PORT}"
        
                    sh "docker build -t apache-middleware-server-01-06:latest ${dockerBuildArgs} ."

                    sh "docker tag apache-middleware-server-01-06:latest ${USERNAME}/apache-middleware-server-01-06:latest"

                }
            }

        }

        stage('Deploy docker image') {

            steps {
                // Deploy image to dockerhub registery
                withCredentials([usernamePassword(credentialsId: "${DOCKER_REGISTRY_CREDS}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {

                    sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin docker.io"

                    sh "docker push ${USERNAME}/apache-middleware-server-01-06:latest"

                }
            }

        }

    }

    post {

        always {
            //clean workspace after every build
            cleanWs()

            sh 'docker logout'
        }

    }

}
