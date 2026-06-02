
# AWS 3-Tier Online Book Store

Architecture:
Route53 -> ALB -> React Frontend (Web Tier) -> Node.js API (App Tier) -> RDS MySQL

## AWS Setup
1. Create VPC
2. Create 2 Public Subnets (ALB)
3. Create 2 Private App Subnets (EC2 App)
4. Create 2 Private DB Subnets (RDS)
5. Create Security Groups:
   - ALB: 80/443
   - App: 3000 from ALB
   - RDS: 3306 from App
6. Launch EC2 for backend
7. Create RDS MySQL
8. Build React frontend and host on EC2/S3
9. Configure Route53 and ALB
10. Enable CloudWatch monitoring

## Backend
npm install
node server.js

## Frontend
npm install
npm start

Update:
frontend/src/config.js
backend/server.js
with your AWS values.
