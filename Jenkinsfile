pipeline {
    agent { dockerfile true }
    environment {
        BRANCH_NAME = 'add-jenkins-to-project'
        HOME="."
    }
    stages {
        stage('Test') {
            steps {
                echo "Branch is ${env.BRANCH_NAME}..."
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run-script build'
            }
        }
    }
}
